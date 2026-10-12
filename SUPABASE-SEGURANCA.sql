/*
  Central de Estudos — hardening mínimo do banco de produção

  IMPORTANTE:
  1. Confirme que public.study_data existe e tem uma coluna user_id do tipo uuid.
  2. Execute primeiro o diagnóstico abaixo separadamente. Ele deve retornar ZERO linhas.
  3. Se houver duplicatas, resolva-as com backup antes de criar o índice único.
  4. Execute o bloco de migração somente após revisar o ambiente correto (produção/staging).
  5. Nunca coloque a service_role key no HTML/JavaScript do navegador.
*/

-- PASSO 1 — diagnóstico: precisa retornar zero resultados.
select user_id, count(*) as registros
from public.study_data
group by user_id
having count(*) > 1;

-- PASSO 2 — execute este bloco após confirmar o diagnóstico acima.
begin;

alter table public.study_data enable row level security;

-- O app usa upsert com onConflict: 'user_id'; portanto precisa haver unicidade.
create unique index if not exists study_data_user_id_unique
  on public.study_data (user_id);

-- Remove somente políticas com estes nomes exatos; políticas com outros nomes devem ser auditadas separadamente.
drop policy if exists "study_data_select_own" on public.study_data;
drop policy if exists "study_data_insert_own" on public.study_data;
drop policy if exists "study_data_update_own" on public.study_data;
drop policy if exists "study_data_delete_own" on public.study_data;

create policy "study_data_select_own"
on public.study_data
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "study_data_insert_own"
on public.study_data
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "study_data_update_own"
on public.study_data
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "study_data_delete_own"
on public.study_data
for delete
to authenticated
using ((select auth.uid()) = user_id);

-- Dados acadêmicos são exclusivos de usuários autenticados.
revoke all on table public.study_data from anon;
grant select, insert, update, delete on table public.study_data to authenticated;

commit;

/*
  PASSOS MANUAIS OBRIGATÓRIOS APÓS A MIGRAÇÃO
  - No Supabase Dashboard, verifique Table Editor > study_data > RLS.
  - Execute o Security Advisor e resolva findings relevantes.
  - Teste com duas contas distintas: A não pode ler, alterar nem excluir dados de B.
  - Confirme que nenhuma policy ampla (ex.: USING (true)) dá acesso ao conteúdo privado.
  - Configure Auth > URL Configuration: Site URL e Redirect URLs para os endereços reais
    de produção/staging (incluindo o caminho de hospedagem, se houver).
  - Configure SMTP transacional próprio, modelos de e-mail, confirmação de conta e limites de taxa.
  - Habilite MFA para administradores da organização e proteja as contas proprietárias.
  - Planeje backups e teste a restauração em ambiente controlado.

  As políticas acima se aplicam somente a public.study_data. Se forem criadas outras tabelas,
  buckets Storage, funções ou recursos administrativos, cada um exige sua própria revisão de permissões.
*/
