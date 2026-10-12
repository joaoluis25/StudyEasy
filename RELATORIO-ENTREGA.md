# Relatório de entrega — Central de Estudos

Data da revisão: 11/10/2026

## O que foi alterado

- Proteção contra edição/salvamento após erro ao carregar dados remotos.
- Fila de persistência com snapshots, serialização de gravações, indicador visual de sincronização, retry e aviso de alterações pendentes ao sair.
- Normalização compatível de status/prioridade das metas e versionamento básico do estado.
- Uso de data local para calendário e indicadores que dependem do dia.
- Fluxo de redefinição de senha e melhoria de redirects de autenticação.
- Importação de backup com limite de tamanho e validação/normalização antes de salvar.
- Timer com deadline e recuperação do runtime no mesmo navegador.
- Flashcards com fila diária, histórico de revisões e agendamento adaptativo por avaliação.
- Histórico real de revisões de anotações para os indicadores.
- Sanitização de HTML com DOMPurify quando disponível, allowlist de fallback, e ajustes básicos de acessibilidade.
- Página pública de apresentação, metadados e favicon; reformulação responsiva da área de revisão de flashcards.
- Documentação de benchmark, publicação, checklist comercial e minutas legais; SQL sugerido para endurecimento das políticas de acesso.

## Verificações executadas

- `node --check` nos scripts inline do HTML standalone e do pacote: aprovado.
- Parsing de CSS por `tinycss2`: 596 regras de topo, sem erros de parsing.
- `node tests/regression.test.js`: aprovado. Coberturas principais: status/prioridade de metas, ciclos de 70/75/90 minutos, pausa zero, fila e agendamento de flashcards, formato do timer e comportamento fail-closed quando a leitura remota falha.
- Checagem estática de handlers inline: 259 funções encontradas e zero chamadas de handler não resolvidas.
- Integridade do arquivo ZIP: aprovado.

## Não verificado / pendente antes de cobrar

- Não houve conexão ao projeto Supabase nem execução real do SQL. As políticas RLS, URLs de Auth, SMTP, configurações de armazenamento e backups precisam ser auditadas no painel e testadas em ambiente de staging.
- Testes ponta a ponta visuais no navegador real/dispositivos, teste de isolamento entre duas contas e teste de restauração de backup ainda precisam ser executados em ambiente de produção/staging.
- O código cliente não implementa cobrança recorrente, controle de assinatura no backend, exclusão completa e verificada de conta, PWA/offline com resolução de conflitos nem armazenamento de imagens de questões em bucket privado.
- Política de Privacidade e Termos de Uso são minutas, não aconselhamento jurídico; devem ser adequados ao funcionamento e à operação reais, com revisão profissional.
- A estrutura atual ainda guarda grande parte dos dados de cada usuário em um JSON por usuário. Isso deve ser reavaliado conforme volume, concorrência e necessidade de consultas analíticas.

## Referências de benchmark e segurança

- MyStudyLife: https://mystudylife.com/tour/ e https://mystudylife.com/
- Quizlet: https://quizlet.com/features/ai-study-tools e https://quizlet.com/features/ai-flashcard-generator/
- Forest: https://play.google.com/store/apps/details?id=cc.forestapp&hl=pt-BR
- Notion Projects & Tasks: https://notion.notion.site/Projects-Tasks-917351934a38469cad1921b33d88bc32
- Todoist filters: https://www.todoist.com/help/todoist/features/introduction-to-filters-V98wIH
- Supabase production checklist: https://supabase.com/docs/guides/deployment/going-into-prod
- Supabase Storage access control: https://supabase.com/docs/guides/storage/security/access-control
- OWASP XSS prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- ANPD security guide: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte
