# Checklist de lançamento comercial — Central de Estudos

Legenda: `[x]` implementado/verificado no código nesta entrega; `[ ]` depende de configuração, teste de ambiente real ou decisão do produto.

## Implementado nesta versão

- [x] Estado de erro separado: se a leitura do Supabase falhar, a aplicação bloqueia a edição para evitar salvar um estado vazio por cima dos dados remotos.
- [x] Fila de salvamento com snapshots, tentativa explícita de sincronização e status visível: pendente, salvando, salvo ou erro.
- [x] Normalização compatível dos status e prioridades de metas, preservando os valores utilizados pelo formulário.
- [x] Datas de calendário calculadas em data local para reduzir erros no fim do dia em fusos como UTC−3.
- [x] Tela de recuperação de senha com validação e atualização da senha pelo Supabase Auth.
- [x] Importação de backup com limite de tamanho, validação de coleções e normalização antes de persistir.
- [x] Versionamento básico do esquema de dados em backups/estado.
- [x] Timer baseado em prazo (`endAt`) e persistência do runtime do timer por usuário neste navegador.
- [x] Ciclos e pausas personalizados com validação de valores entre 0–180 minutos para pausa e 1–180 para foco.
- [x] Histórico de revisão de anotações e estatística baseada em eventos registrados, não em um valor inferido.
- [x] Flashcards com fila de revisão, intervalos adaptativos por avaliação e histórico de avaliações.
- [x] Sanitização de HTML via DOMPurify quando carregado, com fallback de allowlist; dependência fixada por versão.
- [x] Status e prioridade de metas normalizados para o mesmo vocabulário da interface.
- [x] Acessibilidade básica aprimorada: status de sincronização, região de toast, foco visível, meta de descrição e preferência por movimento reduzido.
- [x] Landing page pública inicial sem depoimentos, números de usuários ou resultados não verificados.
- [x] Reorganização visual da revisão de flashcards e layout para telas pequenas.
- [x] Verificação de sintaxe JavaScript (`node --check`), parsing CSS e testes de regressão unitários descritos no relatório de entrega.

## Bloqueadores antes de receber usuários pagantes

- [ ] Executar/auditar o script SQL de RLS em staging e produção. Não é possível confirmar políticas existentes apenas pelo HTML.
- [ ] Provar isolamento: usuário A não consegue ler, alterar nem excluir dados do usuário B.
- [ ] Testar todos os fluxos de Auth no domínio publicado (confirmação, recuperação, redirects e SMTP).
- [ ] Executar testes manuais de browser em Chrome/Edge, Firefox, Safari/iOS e Android real; validar responsividade, modais, rich editor e navegação por teclado.
- [ ] Testar restauração de backup real e recuperação de dados após falha; definir política de backup/retenção.
- [ ] Fazer teste de carga adequado ao número esperado de usuários e revisar Supabase Security/Performance Advisor.
- [ ] Implementar procedimento confiável de exclusão de conta e dados, não apenas limpar as coleções da aplicação.
- [ ] Mover imagens de questão para Supabase Storage privado com RLS antes de permitir grandes bibliotecas de imagens.
- [ ] Finalizar e publicar Termos de Uso e Política de Privacidade revisados juridicamente e alinhados ao comportamento real do produto.
- [ ] Definir operador, canal de suporte, e-mail de privacidade e processo de atendimento a solicitações LGPD.
- [ ] Configurar domínio próprio, HTTPS, metadados sociais, monitoramento de erros e processo de deploy/rollback.
- [ ] Definir planos/limites e realizar pesquisa de preço/disposição a pagar com usuários reais.
- [ ] Integrar checkout, webhooks de pagamento e controle de acesso no servidor antes de cobrar assinatura.
- [ ] Validar obrigações fiscais, consumidor, reembolso e cancelamento para o modelo comercial escolhido.

## Itens para beta e evolução

- [ ] Simulados e modo de prática do banco de questões com registro de desempenho.
- [ ] Lembretes confiáveis para tarefas, revisões e provas.
- [ ] Importação de documentos e conversão assistida em notas/flashcards, após estimar custos e políticas de uso de IA.
- [ ] PWA/offline com estratégia explícita de conflitos e sincronização; não prometer edição offline até passar por testes de conflito.
- [ ] Sincronização/integração de calendário.
- [ ] Separar gradualmente módulos e entidades em tabelas específicas quando o volume justificar; o armazenamento atual em um JSON por usuário é simples, mas pode limitar concorrência e consultas.
- [ ] Testes E2E automatizados e integração contínua para evitar regressões.

## Portão de lançamento

Considere “pode cobrar” somente quando todos os bloqueadores aplicáveis tiverem evidência de conclusão. Os arquivos desta entrega melhoram o código, mas não configuram automaticamente seu projeto Supabase, provedor de pagamento, domínio, SMTP, restauração ou documentos jurídicos.
