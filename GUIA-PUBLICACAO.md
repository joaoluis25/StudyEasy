# Central de Estudos — guia de publicação e operação

## Arquivos do site

- `index.html`: aplicação e interface.
- `style.css`: folha de estilos.
- `favicon.ico`, `favicon-32.png`, `favicon-64.png`, `apple-touch-icon.png`: ícones.
- `SUPABASE-SEGURANCA.sql`: script de referência para RLS/índice da tabela usada pelo app.
- `CHECKLIST-LANCAMENTO.md`: checklist de produção.
- `POLITICA-PRIVACIDADE-MINUTA.md` e `TERMOS-DE-USO-MINUTA.md`: rascunhos para revisão, não documentos jurídicos prontos.
- `AUDITORIA-COMPETIDORES.md`: síntese do benchmark público e prioridades.

## Publicar o front-end estático

O front-end pode ser hospedado em serviço de páginas estáticas. Faça upload de todos os arquivos de interface na mesma pasta, preservando os nomes, e habilite HTTPS. `index.html` referencia `style.css` e os ícones por caminhos relativos.

Antes da publicação, confirme se o domínio/path definitivo corresponde à URL de retorno usada pela autenticação no Supabase. Para GitHub Pages, o endereço normalmente inclui usuário e repositório; para domínio próprio, prefira uma URL raiz consistente.

## Supabase — configuração de produção

1. Separe projetos de staging e produção sempre que possível.
2. Confirme que a tabela `public.study_data` existe, que `user_id` é UUID e que o `upsert(..., { onConflict: 'user_id' })` possui um índice/constraint único correspondente.
3. Revise e aplique as políticas de RLS em `SUPABASE-SEGURANCA.sql` **somente depois de executar o diagnóstico de duplicatas e fazer backup**.
4. Verifique as permissões no Security Advisor e teste isolamento com duas contas reais.
5. Configure Site URL e Redirect URLs no Supabase Auth, incluindo as URLs de cadastro e recuperação de senha.
6. Habilite confirmação de e-mail e use SMTP transacional próprio para e-mails confiáveis.
7. Nunca publique a `service_role` key. A chave anon/publishable é pública por design, portanto a segurança depende das políticas de banco, não do segredo do navegador.
8. Configure backup, retenção e restauração comprovada.

## Dependências front-end

O HTML usa Supabase JS v2, DOMPurify fixado por versão e fontes externas. A versão atual permite deploy simples; para maturidade maior, prefira um processo de build que fixe/atualize dependências de forma revisada, aplique uma Content Security Policy testada e monitore falhas de terceiros.

## Pagamentos e planos

A aplicação ainda não possui checkout, webhooks nem autorização de recursos por assinatura. Não anuncie nem cobre planos pagos até integrar um provedor, validar eventos de pagamento no servidor e proteger o acesso aos recursos pagos fora do JavaScript do cliente.

## Verificação antes de cada publicação

- Teste login, cadastro, confirmação de e-mail, recuperação e troca de senha no domínio real.
- Teste leitura/gravação com rede instável e confirme que uma falha de leitura não apaga nem sobrescreve dados.
- Teste dois usuários, duas abas e dois dispositivos.
- Teste importação/exportação com backup antigo e novo.
- Teste o site em navegadores móveis e desktop.
- Teste fluxos de timer, ciclos maiores que 60 minutos, flashcards devidos e editor de questões com imagens.
- Revise logs, erros de console, políticas RLS e o checklist legal a cada release.
