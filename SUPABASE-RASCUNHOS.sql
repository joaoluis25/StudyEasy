-- Executar no SQL Editor do Supabase. Confira a segurança antes de produção.
create table if not exists public.study_drafts (
 user_id uuid not null references auth.users(id) on delete cascade,
 draft_key text not null check (char_length(draft_key) between 1 and 240),
 data jsonb not null check (pg_column_size(data) < 1048576),
 updated_at timestamptz not null default now(),
 primary key(user_id,draft_key)
);
alter table public.study_drafts enable row level security;
revoke all on public.study_drafts from anon;
grant select,insert,update,delete on public.study_drafts to authenticated;
drop policy if exists drafts_select_owner on public.study_drafts;
drop policy if exists drafts_insert_owner on public.study_drafts;
drop policy if exists drafts_update_owner on public.study_drafts;
drop policy if exists drafts_delete_owner on public.study_drafts;
create policy drafts_select_owner on public.study_drafts for select to authenticated using ((select auth.uid())=user_id);
create policy drafts_insert_owner on public.study_drafts for insert to authenticated with check ((select auth.uid())=user_id);
create policy drafts_update_owner on public.study_drafts for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy drafts_delete_owner on public.study_drafts for delete to authenticated using ((select auth.uid())=user_id);
