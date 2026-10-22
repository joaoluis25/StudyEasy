# Central de Estudos V3 — instalação e pendências

## O que foi implementado
- Sessões registradas podem ser editadas após a conclusão, inclusive área, data, duração e observações.
- Revisão ativa das anotações: recordar antes de mostrar resposta; avaliar Não lembrei, Difícil, Bom e Fácil. Personalizar intervalo mínimo/máximo e multiplicadores no painel de Revisões.
- Rascunhos automáticos preservados localmente e sincronizados com tabela `study_drafts` quando configurada. Recuperação feita por painel dentro do modal, não pelo `confirm` nativo. O registro definitivo ainda utiliza Salvar.
- Tela Assistente IA: resumo, explicação e perguntas, chamando a Edge Function `study-ai` depois de autenticar. Sem chave de IA no browser.
- Página dedicada `auth-callback.html` para confirmação; fluxo de redefinição de senha será tratado nela após verificar o link.

## Implantação
1. Faça backup do banco e publique index.html, style.css e auth-callback.html no mesmo diretório em HTTPS.
2. Execute `SUPABASE-RASCUNHOS.sql` no SQL Editor e teste RLS com contas diferentes. **Sem essa tabela o salvamento de rascunhos fica apenas no dispositivo**.
3. No Supabase Auth → URL Configuration, defina Site URL e adicione `https://SEU-DOMINIO/auth-callback.html` em Redirect URLs. Configure templates de e-mail, SMTP e confirmação de conta e teste com e-mails reais.
4. Para IA, configure `OPENAI_API_KEY` como segredo do projeto Supabase, instale a CLI e publique a função `supabase functions deploy study-ai`. Configure `OPENAI_MODEL` se necessário. Antes de uso comercial acrescente limites por usuário, controle de custo, consentimento e observabilidade. Esta função envia o conteúdo fornecido a um provedor externo para processamento.
5. Nunca adicione a chave da IA ao HTML. Verifique faturamento/limites do provedor e política de privacidade.
6. Teste criação/edição de sessões, revisão, rascunhos, reset e confirmação, desktop/mobile e falhas de rede num ambiente de homologação.

## Limitações e próximas etapas
- O agendamento de revisões é um modelo de intervalos configuráveis, **não** FSRS otimizado matematicamente.
- A V3 mantém o estado geral JSON em `study_data`; edição simultânea em aparelhos diferentes ainda exige resolver conflitos/versionamento.
- Os rascunhos são limitados a 1 MB por entrada na tabela. Conteúdos grandes com imagens devem migrar para Storage.
- Não foram incluídos faturamento, assinaturas, simulado completo, sistema de turmas, monitoramento e testes reais de backend; não classifique como SaaS pronto para venda sem essas etapas.
- A Edge Function exige deploy e segredo no seu próprio projeto, não faz chamadas de IA sem essas configurações.
