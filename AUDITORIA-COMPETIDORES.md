# Benchmark de produto — ferramentas de estudo e produtividade

Pesquisa em páginas oficiais consultadas em 11/10/2026. O escopo é entender padrões de produto e oportunidades, não copiar identidade visual ou código proprietário.

## MyStudyLife — planejamento acadêmico

Referências: [tour oficial](https://mystudylife.com/tour/) e [site oficial](https://mystudylife.com/).

A proposta pública combina calendário acadêmico, horários, atividades, tarefas, provas, lembretes, contagem para exames e planejamento de revisão. Também destaca sincronização entre dispositivos, importação/sincronização de calendários, uso offline e um assistente de planejamento.

**Aprendizado para a Central:** conectar metas, eventos, revisão e sessões em um plano diário executável; futuramente incluir recorrência e lembretes confiáveis. Evitar prometer sincronização offline ou integração de calendário antes de implementar e testar.

## Quizlet — prática, flashcards e material assistido por IA

Referências: [ferramentas de estudo com IA](https://quizlet.com/features/ai-study-tools), [gerador de flashcards](https://quizlet.com/features/ai-flashcard-generator/) e [gerador de testes](https://quizlet.com/features/ai-test-generator/).

O produto promove criação de flashcards a partir de notas/documentos, guias de estudo, resumos de PDFs e testes práticos personalizados. A estratégia conecta material de origem, prática e avaliação.

**Aprendizado para a Central:** o editor de questões e as notas já oferecem uma base para um modo simulado; a revisão espaçada dos flashcards foi aprimorada nesta entrega. Conversão automática de arquivos em flashcards/simulados é uma evolução útil, mas exige integração de IA, análise de custos, limites de uso, controle de abuso e revisão de privacidade.

## Forest — foco e gamificação

Referência: [página do app na Google Play](https://play.google.com/store/apps/details?id=cc.forestapp&hl=pt-BR).

A proposta combina sessões de foco com um elemento de progresso visual e recursos de redução de distração em plataformas móveis.

**Aprendizado para a Central:** os ciclos customizados e o timer são uma base. Uma recompensa visual leve, conquistas opcionais e estatísticas de consistência poderiam elevar engajamento. Bloqueio de aplicativos depende de capacidades nativas e não deve ser prometido pelo site estático atual.

## Notion e Todoist — organização flexível

Referências: [Notion Projects & Tasks](https://notion.notion.site/Projects-Tasks-917351934a38469cad1921b33d88bc32) e [filtros do Todoist](https://www.todoist.com/help/todoist/features/introduction-to-filters-V98wIH).

Essas ferramentas destacam bases de dados conectadas, diferentes formas de visualizar tarefas e filtros para encontrar exatamente o que importa.

**Aprendizado para a Central:** busca global, filtros por área e estados salvos são boas evoluções. O foco da Central deve permanecer no contexto acadêmico em vez de se tornar um organizador genérico com dezenas de menus.

## Posicionamento recomendado

A oportunidade mais coerente é: **uma central acadêmica pessoal que conecta organização do conteúdo, banco de questões, revisão espaçada e tempo de foco**. Isso reúne quatro jornadas que normalmente podem exigir ferramentas distintas.

A diferenciação não deve ser “ter mais recursos que todos”. Deve ser tornar o caminho de intenção → plano → prática → revisão → progresso simples e confiável.

## Roadmap orientado pelo benchmark

1. **Confiabilidade (P0):** integridade dos dados, isolamento entre usuários, sincronização e recuperação.
2. **Aprendizagem (P1):** revisão espaçada de flashcards, prática/simulado de questões, histórico de erros e revisão planejada.
3. **Planejamento (P1/P2):** tarefas recorrentes, lembretes e calendário integrado após validar demanda.
4. **Aceleração (P2):** IA para transformar material próprio em resumos/flashcards/testes, com controles de custo e revisão humana.
5. **Engajamento (P2):** progressão e conquistas opcionais; sem punições ou manipulação de hábito.

## Fontes de segurança e operação

- [Supabase Production Checklist](https://supabase.com/docs/guides/deployment/going-into-prod): RLS, autenticação, políticas, monitoramento, performance, backup e preparação de produção.
- [Supabase Storage Access Control](https://supabase.com/docs/guides/storage/security/access-control): políticas específicas são necessárias para upload/download de arquivos privados.
- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet): recomenda encoding/sanitização apropriados para HTML não confiável e aponta DOMPurify como opção de sanitização.
- [ANPD — Guia de segurança para agentes de tratamento de pequeno porte](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte): referência para controles de segurança e governança de dados pessoais.

## Limites deste benchmark

As conclusões vêm de material público dos fornecedores. Não constituem auditoria técnica interna dos produtos, teste independente de desempenho, validação de resultados de aprendizagem ou análise de seus dados financeiros.
