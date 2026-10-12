# Central de Estudos — versão aprimorada

Este pacote contém o front-end estático atualizado e os materiais para preparar uma versão beta comercial.

## Conteúdo

- `index.html` — aplicação (HTML e JavaScript).
- `style.css` — estilos, identidade visual, landing page pública e revisão de flashcards.
- `favicon.*`, `apple-touch-icon.png` — ícones do navegador e de dispositivos.
- `SUPABASE-SEGURANCA.sql` — exemplo de hardening da tabela `public.study_data`; execute em staging após o diagnóstico descrito no arquivo.
- `CHECKLIST-LANCAMENTO.md` — bloqueadores e roteiro de preparação.
- `RELATORIO-ENTREGA.md` — alterações realizadas, testes executados e limitações ainda pendentes.
- `AUDITORIA-COMPETIDORES.md` — benchmark com links oficiais.
- `POLITICA-PRIVACIDADE-MINUTA.md`, `TERMOS-DE-USO-MINUTA.md` — rascunhos que exigem preenchimento e revisão profissional antes de publicar.
- `tests/regression.test.js` — testes de regressão sem dependências npm.

## Como executar os testes

Requer Node.js 18 ou superior:

```bash
node tests/regression.test.js
```

## Publicação do site

Faça deploy de `index.html`, `style.css` e todos os ícones na mesma pasta, com HTTPS. Veja `GUIA-PUBLICACAO.md` para as configurações do Supabase e a sequência de publicação.

## Atenção antes de produção

O pacote aprimora o código do front-end, mas não altera as configurações do painel Supabase. Aplique e teste RLS, configure URLs de autenticação/SMTP, confirme isolamento entre contas, defina backups/recuperação, complete os documentos legais e implemente cobrança no servidor antes de vender assinaturas. Não exponha qualquer `service_role` key no navegador.
