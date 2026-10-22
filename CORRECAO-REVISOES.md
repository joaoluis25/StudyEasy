# Correção V3.1 — revisões

## Por que ainda aparecia 22 de outubro?
A V3 só usava o campo **intervalo mínimo** nas próximas avaliações. Alterar esse número não mexia nas datas já salvas das anotações. Em 21/10/2026, selecionar cinco dias equivale a 26/10/2026 **quando for aplicado um novo agendamento a partir dessa data**.

## O que mudou
- Texto de ajuda explica claramente que preferências não reagendam datas antigas.
- Intervalos mínimo/máximo aparecem em destaque; controles de multiplicadores ficaram em «Ajustes avançados».
- Botão **Reagendar revisões existentes** abre uma confirmação própria, indica o número de anotações afetadas e mostra a nova data antes de aplicar.
- Somente anotações com revisão ligada e **data futura** são alteradas. Revisões vencidas/pendentes e histórico de avaliações não são alterados.
- Os valores dos multiplicadores aceitam vírgula ou ponto ao salvar.

### Como usar
1. Acesse **Revisões**. Defina `Intervalo mínimo` de `5` dias e clique **Salvar preferências**.
2. Para modificar as revisões que já apareciam em 22 de outubro, clique **Reagendar revisões existentes**, digite **5** dias e confirme.
3. Se o dia atual for **21/10/2026**, elas serão mostradas para **26/10/2026**.

**Atenção:** a operação reagenda as revisões futuras **todas para a mesma data**; não muda o progresso nem reconta avaliações. Teste primeiro no ambiente de desenvolvimento e faça um backup JSON antes de atualizar um banco com dados importantes.
