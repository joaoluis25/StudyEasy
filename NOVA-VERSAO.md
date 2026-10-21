# Central de Estudos — atualização V2

## Implementado
- Metas agrupadas por área/tópico e por prioridade, com ordenação manual por setas dentro de cada faixa.
- Preferência local de tema claro/escuro **somente** nos campos de edição dos modais.
- Rascunhos automáticos locais para modais de escrita, com recuperação opcional. Rascunhos NÃO são sincronizados com Supabase e não substituem o botão Salvar.
- Página `auth-callback.html` para confirmação de e-mail e retorno de recuperação de senha, incluindo links com `code` e `token_hash`.
- Preservação dos recursos existentes, incluindo revisões de flashcards, timer e salvamento do estado.

## Configuração obrigatória no Supabase
Em Authentication > URL Configuration, cadastrar a URL pública EXATA de `auth-callback.html` em Redirect URLs. Configurar Site URL para o domínio publicado. Revisar templates de e-mail para que o link chegue ao callback. Para links com `token_hash`, usar template que inclua `token_hash` e `type`; para links PKCE, garantir o parâmetro `code`. Verificar o provedor SMTP e testar cadastro, confirmação e recuperação com contas reais.

## Limitações importantes
- Rascunhos são por navegador e podem não identificar perfeitamente versões diferentes do mesmo tipo de formulário; o salvamento definitivo continua exigindo confirmação.
- A política RLS, concorrência entre dispositivos, exclusão completa da conta, pagamento e infraestrutura de produção não podem ser validados apenas pelo HTML.
- Não houve teste de ponta a ponta com Supabase real nem auditoria de segurança independente.
- Para publicar, subir todos os arquivos juntos preservando os nomes.
