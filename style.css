@charset "utf-8";

:root{
  --bg:#0D1117;
  --surface:#141A22;
  --surface-2:#1A222C;
  --surface-3:#212B37;
  --border:#262E3A;
  --border-soft:#1D242F;
  --text:#E8EBF0;
  --text-dim:#9BA3B0;
  --text-faint:#5D6675;
  --amber:#E8A33D;
  --amber-soft:rgba(232,163,61,0.14);
  --amber-dim:rgba(232,163,61,0.35);
  --teal:#4FB6A6;
  --teal-soft:rgba(79,182,166,0.14);
  --red:#E2685A;
  --red-soft:rgba(226,104,90,0.14);
  --violet:#9C8CE0;
  --radius-s:6px;
  --radius-m:10px;
  --radius-l:16px;
}
*{box-sizing:border-box; margin:0; padding:0;}
body{
  background:var(--bg); color:var(--text);
  font-family:'Inter',sans-serif;
  font-size:14px; line-height:1.5;
  overflow:hidden;
  height:100vh;
}
h1,h2,h3,.serif{font-family:'Source Serif 4',serif;}
::-webkit-scrollbar{width:8px; height:8px;}
::-webkit-scrollbar-thumb{background:var(--surface-3); border-radius:4px;}
::-webkit-scrollbar-track{background:transparent;}
a{color:inherit;}
button{font-family:inherit; cursor:pointer;}
input,textarea,select{font-family:inherit; color:var(--text); background:var(--surface-2); border:1px solid var(--border); border-radius:var(--radius-s); padding:8px 10px; font-size:13.5px; outline:none;}
input:focus,textarea:focus,select:focus{border-color:var(--amber-dim);}
button:focus-visible, a:focus-visible, [tabindex]:focus-visible{outline:2px solid var(--amber); outline-offset:2px;}

/*ESQUECI MINHA SENHA*/
.es_key{
  font-size:13px;color:var(--text-faint);cursor:pointer;
}

.es_key:hover{
  text-decoration: underline;
  color: var(--text);
}

/* ---------- App shell ---------- */
#app{display:flex; height:100vh; width:100vw;}
 
.sidebar{
  width:230px; flex-shrink:0; background:var(--surface); border-right:1px solid var(--border-soft);
  display:flex; flex-direction:column; padding:20px 12px;
}
.brand{display:flex; align-items:center; gap:9px; padding:4px 8px 22px 8px;}
.brand .dot{width:11px; height:11px; border-radius:50%; background:var(--amber); box-shadow:0 0 10px var(--amber);}
.brand span{font-family:'Source Serif 4',serif; font-size:19px; font-weight:600; letter-spacing:0.2px;}
.nav{display:flex; flex-direction:column; gap:1px; flex:1; overflow-y:auto;}
.nav-item{
  display:flex; align-items:center; gap:11px; padding:8px 10px; border-radius:var(--radius-s);
  color:var(--text-dim); font-size:13.5px; font-weight:500; background:none; border:none; width:100%; text-align:left;
  transition:background .12s, color .12s;
}
.nav-item .ic{width:17px; text-align:center; font-size:15px; opacity:.85;}
.nav-item:hover{background:var(--surface-2); color:var(--text);}
.nav-item.active{background:var(--amber-soft); color:var(--amber);}
.nav-sep{height:1px; background:var(--border-soft); margin:10px 4px;}
.sidebar-foot{padding-top:10px;}
.streak-pill{display:flex; align-items:center; gap:8px; padding:9px 11px; border-radius:var(--radius-m); background:var(--surface-2); border:1px solid var(--border-soft);}
.streak-pill .n{font-family:'Source Serif 4',serif; font-size:19px; color:var(--amber); font-weight:600;}
.streak-pill .l{font-size:11px; color:var(--text-faint);color: lightblue;}
 
.main{flex:1; overflow-y:auto; position:relative;}
.topbar{
  position:sticky; top:0; z-index:5; display:flex; align-items:center; justify-content:space-between;
  padding:16px 28px; background:rgba(13,17,23,0.85); backdrop-filter:blur(8px); border-bottom:1px solid var(--border-soft);
}
.topbar h1{font-size:25px; font-weight:600;}
.topbar .sub{color:lightgray; font-size:14px; margin-top:2px; font-family:'Inter',sans-serif;}
.mobile-toggle,.mobile-menu-btn{display:none;}
.search-btn{
  display:flex; align-items:center; gap:8px; background:var(--surface-2); border:1px solid var(--border);
  padding:8px 12px; border-radius:20px; color:var(--text-faint); font-size:12.5px; min-width:220px;
}
.search-btn kbd{background:var(--surface-3); padding:1px 6px; border-radius:4px; font-size:10.5px; margin-left:auto; color:var(--text-dim);}
.content{padding:24px 28px 80px 28px;}
 
.btn{
  display:inline-flex; align-items:center; gap:7px; padding:8px 14px; border-radius:var(--radius-s);
  border:1px solid var(--border); background:var(--surface-2); color:var(--text); font-size:13px; font-weight:500;
  transition:.12s;
}
.btn:hover{border-color:var(--text-faint);}
.btn-primary{background:var(--amber); color:#1B1204; border-color:var(--amber); font-weight:600;}
.btn-primary:hover{background:#f0b054;}
.btn-ghost{background:none; border-color:transparent; color:var(--text-dim);}
.btn-ghost:hover{color:var(--text); background:var(--surface-2);}
.btn-danger{color:var(--red);}
.btn-danger:hover{color:#FF6A5C;border-color:rgba(226,104,90,.38);background:var(--red-soft);}
.btn-sm{padding:5px 10px; font-size:12px;}
.icon-btn{width:30px; height:30px; display:flex; align-items:center; justify-content:center; border-radius:var(--radius-s); background:none; border:1px solid transparent; color:var(--text-dim);}
.icon-btn:hover{background:var(--surface-2); color:var(--text);}
.btn-trash{color:rgba(226,104,90,.76); border-color:transparent;}
.btn-trash:hover{background:var(--red-soft); color:#FF6A5C; border-color:rgba(226,104,90,.36);}
.btn-trash:active{transform:scale(.96);}
.trash-icon{color:currentColor; line-height:1;}
.delete-action:hover{background:var(--red-soft); color:#FF6A5C; border-color:rgba(226,104,90,.38);}
 
/* ---------- generic pieces ---------- */
.card{background:var(--surface); border:1px solid var(--border-soft); border-radius:var(--radius-m); padding:18px;}
.grid{display:grid; gap:14px;}
.stat-row{display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:12px; margin-bottom:20px;}
.stat-card{background:var(--surface); border:1px solid var(--border-soft); border-radius:var(--radius-m); padding:15px 16px;}
.stat-card .top{display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;}
.stat-card .ic{font-size:15px; opacity:.75;}
.stat-card .num{font-family:'Source Serif 4',serif; font-size:26px; font-weight:600; line-height:1;}
.stat-card .lbl{color:var(--text-faint); font-size:12px; margin-top:4px;}
 
.hero-stat{background:linear-gradient(160deg, var(--surface-2), var(--surface)); border:1px solid var(--border-soft); border-radius:var(--radius-l); padding:24px 26px; position:relative; overflow:hidden;}
.hero-stat::before{content:''; position:absolute; top:-40px; right:-40px; width:160px; height:160px; background:radial-gradient(circle, var(--amber-soft), transparent 70%);}
.hero-stat .n{font-family:'Source Serif 4',serif; font-size:44px; font-weight:600; color:var(--amber); position:relative;}
.hero-stat .l{color:var(--text-dim); font-size:13px; margin-top:4px; position:relative;}
 
.section-title{font-size:14.5px; font-weight:600; margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;}
.section-title .see-all{font-size:12px; color:var(--text-faint); font-weight:500;}
.section-title .see-all:hover{color:var(--amber);}
 
.pill{display:inline-flex; align-items:center; padding:2px 9px; border-radius:20px; font-size:12px; font-weight:500; gap:4px;}
.pill-amber{background:rgba(232, 164, 61, 0.432); color:white; border-color: #d1d5db;text-align: center;}
.pill-teal{background:rgba(92, 221, 202, 0.616); color:white; border-color: #d1d5db;}
.pill-paused{background: #e5e7; color: white; border-color: #d1d5db;}
.pill-red{background:var(--red-soft); color:var(--red);}
.pill-muted{background:var(--surface-3); color:var(--text-dim);}
.tag-chip{display:inline-flex; align-items:center; padding:2px 8px; border-radius:5px; font-size:11px; background:var(--surface-3); color:var(--text-dim); border:1px solid var(--border);}
 
.empty-state{text-align:center; padding:50px 20px; color:var(--text-faint);}
.empty-state .ic{font-size:30px; margin-bottom:10px; opacity:.6;}
.empty-state .t{font-size:13.5px; color:var(--text-dim); margin-bottom:4px;}
.empty-state .d{font-size:12.5px; max-width:320px; margin:0 auto;}
 
.list-row{display:flex; align-items:center; gap:12px; padding:11px 4px; border-bottom:1px solid var(--border-soft);}
.list-row:last-child{border-bottom:none;}
 
.progress-bar{height:6px; background:var(--surface-3); border-radius:4px; overflow:hidden;}
.progress-bar > div{height:100%; background:var(--amber); border-radius:4px;}
 
/* Modal */
.modal-overlay{position:fixed; inset:0; background:rgba(6,8,11,0.72); backdrop-filter:blur(2px); z-index:50; display:flex; align-items:flex-start; justify-content:center; padding:5vh 16px; overflow-y:auto;}
.modal{background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-l); width:100%; max-width:560px; padding:22px; margin-bottom:5vh;}
.modal.wide{max-width:760px;}
.modal-head{display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;}
.modal-head h2{font-size:17px; font-weight:600;}
.field{margin-bottom:13px;}
.field label{display:block; font-size:12px; color:var(--text-dim); margin-bottom:5px; font-weight:500;}
.field input,.field select,.field textarea{width:100%;}
.field-row{display:flex; gap:10px;}
.field-row > .field{flex:1;}
.modal-actions{display:flex; justify-content:flex-end; gap:8px; margin-top:18px; padding-top:14px; border-top:1px solid var(--border-soft);}
 
/* Editor */
.editor-toolbar{display:flex; gap:3px; flex-wrap:wrap; padding:8px; background:var(--surface-2); border:1px solid var(--border); border-radius:var(--radius-s) var(--radius-s) 0 0; border-bottom:none;}
.editor-toolbar button{width:29px; height:29px; border-radius:5px; background:none; border:none; color:var(--text-dim); font-size:13px;}
.editor-toolbar button:hover{background:var(--surface-3); color:var(--text);}
.editor-toolbar .sep{width:1px; background:var(--border); margin:4px 3px;}
.editor-body{min-height:200px; max-height:50vh; overflow-y:auto; padding:14px; background:var(--surface-2); border:1px solid var(--border); border-radius:0 0 var(--radius-s) var(--radius-s); font-size:13.5px; line-height:1.7;}
.editor-body:focus{outline:none;}
.editor-body ul,.editor-body ol{padding-left:22px; margin:6px 0;}
.editor-body blockquote{border-left:3px solid var(--amber); padding-left:12px; color:var(--text-dim); margin:8px 0;}
.editor-body pre{background:var(--surface-3); padding:10px; border-radius:6px; font-family:'JetBrains Mono',monospace; font-size:12.5px; overflow-x:auto; margin:8px 0;}
.editor-body h1,.editor-body h2,.editor-body h3{font-family:'Source Serif 4',serif; margin:10px 0 6px;}
.editor-body hr{border:none; border-top:1px solid var(--border); margin:12px 0;}
.editor-body img{max-width:100%; border-radius:8px; margin:8px 0;}
.editor-body:empty:before{content:attr(data-placeholder); color:var(--text-faint);}
 
/* Calendar */
.cal-grid{display:grid; grid-template-columns:repeat(7,1fr); gap:6px;}
.cal-dow{text-align:center; font-size:11px; color:var(--text-faint); padding-bottom:4px; font-weight:500;}
.cal-day{aspect-ratio:1; border-radius:8px; border:1px solid var(--border-soft); display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:12px; color:var(--text-dim); background:var(--surface); position:relative; cursor:pointer; transition:.1s;}
.cal-day:hover{border-color:var(--amber-dim);}
.cal-day.empty{visibility:hidden;}
.cal-day.today{border-color:var(--amber);}
.cal-day .n{font-weight:600;}
.cal-day .dot{position:absolute; bottom:5px; width:5px; height:5px; border-radius:50%; background:var(--amber);}
.cal-day.act-1{background:rgba(232,163,61,0.09);}
.cal-day.act-2{background:rgba(232,163,61,0.20);}
.cal-day.act-3{background:rgba(232,163,61,0.36);}
.cal-day.act-4{background:rgba(232,163,61,0.55); color:var(--text);}
 
/* Tree */
.topic-tree{display:flex; flex-direction:column; gap:2px;}
.topic-node{display:flex; align-items:center; gap:7px; padding:8px 8px; border-radius:var(--radius-s); border-left:2px solid transparent;}
.topic-node:hover{background:var(--surface-2);}
.topic-node .name{flex:1; font-size:13.5px;}
.topic-node .count{font-size:11px; color:var(--text-faint);}
.topic-node .actions{display:none; gap:2px;}
.topic-node:hover .actions{display:flex;}
.topic-node.color-1{border-left-color:var(--amber);}
.topic-node.color-2{border-left-color:var(--teal);}
.topic-node.color-3{border-left-color:var(--violet);}
.topic-node.color-4{border-left-color:var(--red);}
/* Novas cores personalizadas */
.topic-node.color-amber{border-left-color:#E8A33D;}
.topic-node.color-teal{border-left-color:#3CC7A4;}
.topic-node.color-violet{border-left-color:#9B7FEA;}
.topic-node.color-red{border-left-color:#E85D6A;}
.topic-node.color-blue{border-left-color:#5B9FF5;}
.topic-node.color-pink{border-left-color:#E879B8;}
.topic-node.color-cyan{border-left-color:#35C6D4;}
.topic-node.color-green{border-left-color:#67C76F;}
.topic-node.color-orange{border-left-color:#F07C45;}
.topic-node.color-white{border-left-color:#F2F4F7;}
 
/* Notes list / cards */
.note-card{background:var(--surface); border:1px solid var(--border-soft); border-radius:var(--radius-m); padding:14px 15px; cursor:pointer; transition:.12s;}
.note-card:hover{border-color:var(--amber-dim); transform:translateY(-1px);}
.note-card .head{display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:6px;}
.note-card .title{font-weight:600; font-size:14px;}
.note-card .snippet{color:var(--text-dim); font-size:12.5px; line-height:1.5; max-height:38px; overflow:hidden; margin-bottom:8px;}
.note-card .meta{display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size:11px; color:var(--text-faint);}
.notes-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:12px;}
 
.toggle{position:relative; width:36px; height:20px; background:var(--surface-3); border-radius:20px; border:1px solid var(--border); flex-shrink:0;}
.toggle.on{background:var(--amber-soft); border-color:var(--amber-dim);}
.toggle .knob{position:absolute; top:1px; left:1px; width:16px; height:16px; background:var(--text-faint); border-radius:50%; transition:.15s;}
.toggle.on .knob{background:var(--amber); left:17px;}
 
.filter-bar{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px; align-items:center;}
.filter-chip{padding:5px 11px; border-radius:20px; font-size:12px; background:var(--surface-2); border:1px solid var(--border); color:var(--text-dim);}
.filter-chip.active{background:var(--amber-soft); border-color:var(--amber-dim); color:var(--amber);}
 
.flashcard{width:100%; max-width:420px; height:230px; margin:0 auto; perspective:1200px; cursor:pointer;}
.flashcard-inner{position:relative; width:100%; height:100%; transition:transform .5s; transform-style:preserve-3d;}
.flashcard.flipped .flashcard-inner{transform:rotateY(180deg);}
.flashcard-face{position:absolute; inset:0; backface-visibility:hidden; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-l); display:flex; align-items:center; justify-content:center; text-align:center; padding:24px; font-size:16px;}
.flashcard-face.back{transform:rotateY(180deg); background:var(--surface-2); border-color:var(--amber-dim);}
 
.timer-ring{width:180px; height:180px; margin:0 auto;}
.pomodoro-time{font-family:'Source Serif 4',serif; font-size:40px; font-weight:600;}
 
.search-modal .results{max-height:60vh; overflow-y:auto; margin-top:4px;}
.search-result{display:flex; align-items:center; gap:10px; padding:10px 8px; border-radius:var(--radius-s);}
.search-result:hover{background:var(--surface-2);}
.search-result .ic{width:26px; height:26px; border-radius:6px; background:var(--surface-3); display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0;}
.search-result .t{font-size:13px; font-weight:500;}
.search-result .s{font-size:11px; color:var(--text-faint);}
 
.checklist-row{display:flex; align-items:center; gap:8px; padding:5px 0;}
.checklist-row input[type=checkbox]{width:15px; height:15px; accent-color:var(--amber); background:none; padding:0;}
.checklist-row.done span{text-decoration:line-through; color:var(--text-faint);}
.checklist-row span{flex:1; font-size:13px;}
 
.day-strip{display:flex; align-items:center; gap:10px; margin-bottom:18px;}
.day-strip .date-label{font-family:'Source Serif 4',serif; font-size:19px; font-weight:600;}
 
.toast{position:fixed; bottom:22px; left:50%; transform:translateX(-50%); background:var(--surface-3); border:1px solid var(--border); padding:10px 18px; border-radius:20px; font-size:12.5px; z-index:100; opacity:0; pointer-events:none; transition:.2s;}
.toast.show{opacity:1; transform:translate(-50%,-4px);}
 
/* mobile */
@media (max-width: 860px){
  .sidebar{position:fixed; left:0; top:0; bottom:0; z-index:40; transform:translateX(-100%); transition:.2s; box-shadow:0 0 30px rgba(0,0,0,.5);}
  .sidebar.open{transform:translateX(0);}
  .mobile-toggle{display:flex; position:fixed; bottom:16px; right:16px; z-index:41; width:52px; height:52px; border-radius:50%; background:var(--amber); color:#1B1204; align-items:center; justify-content:center; font-size:20px; border:none; box-shadow:0 4px 16px rgba(0,0,0,.4);}
  .mobile-menu-btn{display:flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:8px; background:var(--surface-2); border:1px solid var(--border); margin-right:10px;color: var(--amber);}
  .topbar{padding:12px 14px;}
  .topbar h1{font-size:17px;}
  .content{padding:16px 14px 90px;}
  .search-btn{min-width:0; flex:1;}
  .notes-grid{grid-template-columns:1fr;}
  .modal{padding:16px;}
  .backdrop-close{position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:39;}
}
@media (min-width:861px){ .backdrop-close{display:none;} }
 
/* Auth screen */
.auth-wrap{min-height:100vh; width: 100%; display:flex; align-items:center; justify-content:center; padding:20px;}
.auth-card{width:100%; max-width:380px; background:var(--surface); border:1px solid var(--border-soft); border-radius:var(--radius-l); padding:30px 28px;}
.auth-brand{display:flex; align-items:center; gap:9px; justify-content:center; margin-bottom:22px;}
.auth-brand .dot{width:9px; height:9px; border-radius:50%; background:var(--amber); box-shadow:0 0 10px var(--amber);}
.auth-brand span{font-family:'Source Serif 4',serif; font-size:19px; font-weight:600;}
.auth-tabs{display:flex; gap:4px; background:var(--surface-2); border-radius:var(--radius-s); padding:3px; margin-bottom:18px;}
.auth-tab{flex:1; text-align:center; padding:8px; border-radius:6px; font-size:13px; font-weight:500; color:var(--text-dim); background:none; border:none;}
.auth-tab.active{background:var(--amber-soft); color:var(--amber);}
.auth-msg{font-size:12.5px; padding:9px 11px; border-radius:var(--radius-s); margin-bottom:12px;}
.auth-msg.error{background:var(--red-soft); color:var(--red);}
.auth-msg.success{background:var(--teal-soft); color:var(--teal);}
.auth-foot{text-align:center; font-size:11.5px; color:var(--text-faint); margin-top:16px; line-height:1.6;}

/* =========================================================
   QUESTÕES
========================================================= */

.questions-page-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:16px;
    margin-bottom:18px;
}

.questions-subtitle{
    color:var(--text-faint);
    font-size:12.5px;
    margin-top:2px;
}

.question-breadcrumb{
    font-family:'Source Serif 4',serif;
    font-size:18px;
    font-weight:600;
    margin-top:6px;
}


/* =========================================================
   BOTÕES DE NAVEGAÇÃO
========================================================= */

.question-arrow{
    width:42px;
    min-width:42px;
    height:38px;
    padding:0;
    justify-content:center;
    font-size:17px;
}

.question-back{
    width:42px;
    min-width:42px;
    height:38px;
    padding:0;
    justify-content:center;
    font-size:17px;
    margin-bottom:5px;
}


/* =========================================================
   TELA 1 — MATÉRIAS
========================================================= */

.questions-subject-list{
    display:flex;
    flex-direction:column;
    gap:8px;
}

.question-subject{

    min-height:76px;

    display:flex;
    align-items:center;

    justify-content:space-between;

    gap:16px;

    padding:14px 12px 14px 16px;

    background:var(--surface);

    border:1px solid var(--border-soft);

    border-left:3px solid var(--amber);

    border-radius:var(--radius-m);

    transition:
        background .12s,
        border-color .12s,
        transform .12s;
}

.question-subject:hover{
    background:var(--surface-2);
    transform:translateY(-1px);
}


/* Mesmas cores utilizadas em Conteúdos */

.question-subject.topic-color-1{
    border-left-color:var(--amber);
}

.question-subject.topic-color-2{
    border-left-color:var(--teal);
}

.question-subject.topic-color-3{
    border-left-color:var(--violet);
}

.question-subject.topic-color-4{
    border-left-color:var(--red);
}


.question-subject-info{
    flex:1;
    min-width:0;
}

.question-subject-name{
    font-size:14px;
    font-weight:600;
    margin-bottom:8px;
}


.question-difficulty-counts{
    display:flex;
    align-items:center;
    gap:14px;
}


.difficulty-count{
    display:flex;
    align-items:center;
    gap:6px;

    font-size:11.5px;

    color:var(--text-dim);
}


.difficulty-dot{
    width:7px;
    height:7px;

    border-radius:50%;

    display:inline-block;
}


.difficulty-count.easy .difficulty-dot{
    background:var(--teal);
}

.difficulty-count.medium .difficulty-dot{
    background:var(--amber);
}

.difficulty-count.hard .difficulty-dot{
    background:var(--red);
}


/* =========================================================
   TELA 2 — DIFICULDADES
========================================================= */

.question-difficulty-list{

    display:flex;
    flex-direction:column;

    gap:10px;

    max-width:900px;
}


.question-difficulty{

    min-height:100px;

    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:20px;

    padding:18px 16px;

    background:var(--surface);

    border:1px solid var(--border);

    border-radius:var(--radius-m);

    transition:
        background .12s,
        border-color .12s;
}


.question-difficulty:hover{
    background:var(--surface-2);
}


.easy-border{
    border-left:3px solid var(--teal);
}

.medium-border{
    border-left:3px solid var(--amber);
}

.hard-border{
    border-left:3px solid var(--red);
}


.question-difficulty-title{
    font-size:14px;
    font-weight:600;

    margin-bottom:3px;
}


.question-difficulty-description{
    color:var(--text-dim);

    font-size:12px;

    margin-bottom:8px;
}


.question-total{
    color:var(--text-faint);

    font-size:11.5px;
}


/* =========================================================
   TELA 3 — QUESTÕES
========================================================= */

.questions-list{

    display:flex;
    flex-direction:column;

    gap:10px;

    max-width:100%;
}


.question-card{

    position:relative;

    background:var(--surface);

    border:1px solid var(--border-soft);

    border-radius:var(--radius-m);

    padding:16px 16px 54px 16px;

    min-height:130px;

    transition:
        background .12s,
        border-color .12s;
}


.question-card:hover{
    background:var(--surface-2);

    border-color:var(--border);
}


.question-card-top{

    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:10px;

    margin-bottom:10px;
}


.question-tags{

    display:flex;

    gap:5px;

    flex-wrap:wrap;

    justify-content:flex-end;
}


.question-card-text{

    font-size:13.5px;

    line-height:1.65;

    color:var(--text);

    padding-right:10px;
}


.question-answer-preview{

    margin-top:10px;

    font-size:11px;

    color:var(--teal);

}


.question-card-topic{

    margin-top:10px;

    font-size:11px;

    color:var(--text-faint);
}


/* Seta no canto inferior esquerdo */

.question-card-arrow{

    position:absolute;

    left:14px;

    bottom:12px;

    width:42px;

    min-width:42px;

    height:34px;

    padding:0;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:16px;
}


/* =========================================================
   RESPONSIVIDADE
========================================================= */

@media(max-width:700px){

    .questions-page-header{
        align-items:flex-start;
    }

    .question-subject{
        padding:13px;
    }

    .question-difficulty{
        padding:15px;
    }

    .question-difficulty-description{
        max-width:240px;
    }

    .question-difficulty-counts{
        gap:9px;
    }

}


@media(max-width:500px){

    .questions-page-header{
        flex-direction:column;
    }

    .questions-page-header > .btn{
        align-self:flex-end;
    }

    .question-difficulty-counts{
        flex-wrap:wrap;
    }

}

/* =========================================================
   SELETOR DE CORES DOS TÓPICOS
========================================================= */

.topic-color-picker{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    gap:9px;

    padding:2px 0;
}


/* Botão de cada cor */

.topic-color-option{

    width:30px;
    height:30px;

    padding:0;

    border-radius:7px;

    border:1px solid var(--border);

    background:var(--surface-2);

    display:flex;

    align-items:center;
    justify-content:center;

    cursor:pointer;

    transition:
        transform .12s ease,
        border-color .12s ease,
        background .12s ease;
}


.topic-color-option:hover{

    transform:translateY(-1px);

    border-color:var(--text-faint);

}


/* Bolinha */

.topic-color-option span{

    width:13px;
    height:13px;

    display:block;

    border-radius:50%;

    box-shadow:
        0 0 0 1px rgba(255,255,255,.08);

}


/* Cor selecionada */

.topic-color-option.selected{

    border-color:var(--text);

    box-shadow:
        0 0 0 2px var(--surface),
        0 0 0 3px var(--amber);

}


/* =========================================================
   CORES
========================================================= */

.topic-color-option.color-amber span{
    background:#E8A33D;
}

.topic-color-option.color-teal span{
    background:#3CC7A4;
}

.topic-color-option.color-violet span{
    background:#9B7FEA;
}

.topic-color-option.color-red span{
    background:#E85D6A;
}

.topic-color-option.color-blue span{
    background:#5B9FF5;
}

.topic-color-option.color-pink span{
    background:#E879B8;
}

.topic-color-option.color-cyan span{
    background:#35C6D4;
}

.topic-color-option.color-green span{
    background:#67C76F;
}

.topic-color-option.color-orange span{
    background:#F07C45;
}

.topic-color-option.color-white span{

    background:#F2F4F7;

    border:1px solid #8A93A0;

}


/* =========================================================
   SELETOR DE COR PERSONALIZADA
========================================================= */

.topic-custom-color{

    width:30px !important;
    height:30px !important;

    padding:2px !important;

    border-radius:7px !important;

    cursor:pointer;

    background:var(--surface-2) !important;

    border:1px solid var(--border) !important;
}


.topic-custom-color:hover{

    border-color:var(--text-faint) !important;

}

/* =========================================================
   CONFIRMAÇÃO DE EXCLUSÃO
========================================================= */
.delete-confirm-overlay{position:fixed;inset:0;z-index:140;background:rgba(5,8,12,.64);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:18px;opacity:0;transition:opacity .14s ease;}
.delete-confirm-overlay.show{opacity:1;}
.delete-confirm-card{width:min(430px,100%);background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:24px;box-shadow:0 25px 70px rgba(0,0,0,.42);transform:translateY(8px) scale(.985);transition:transform .16s ease;}
.delete-confirm-overlay.show .delete-confirm-card{transform:none;}
.delete-confirm-icon{width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:13px;background:var(--red-soft);border:1px solid rgba(226,104,90,.26);color:var(--red);font-size:21px;margin-bottom:12px;}
.delete-confirm-kicker{font-size:9.5px;letter-spacing:.14em;color:var(--red);font-weight:700;margin-bottom:3px;}
.delete-confirm-card h3{font-size:20px;font-weight:600;margin:0 0 7px;}
.delete-confirm-card p{font-size:13px;color:var(--text-dim);line-height:1.55;margin:0 0 9px;}
.delete-confirm-detail{font-size:11.5px;color:var(--text-faint);line-height:1.5;padding:10px 11px;border:1px solid var(--border-soft);background:var(--surface-2);border-radius:9px;margin-bottom:18px;}
.delete-confirm-actions{display:flex;justify-content:flex-end;gap:8px;}
.delete-confirm-submit{border-color:rgba(226,104,90,.34);background:var(--red-soft);}
.delete-confirm-submit:hover{background:rgba(226,104,90,.22);color:#FF6A5C;border-color:rgba(226,104,90,.52);}

/* =========================================================
   TIMER GLOBAL + CICLOS
========================================================= */
.sidebar-timer{padding:11px 12px;margin-bottom:8px;border-radius:var(--radius-m);background:linear-gradient(145deg,var(--surface-3),var(--surface-2));border:1px solid var(--border);cursor:pointer;transition:.15s;position:relative;overflow:hidden}
.sidebar-timer::after{content:'';position:absolute;width:70px;height:70px;right:-25px;top:-30px;border-radius:50%;background:radial-gradient(circle,var(--amber-soft),transparent 70%);pointer-events:none}
.sidebar-timer:hover{border-color:var(--amber-dim);transform:translateY(-1px)}
.sidebar-timer-top{display:flex;justify-content:space-between;align-items:center;font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.06em;position:relative;z-index:1}
.sidebar-timer-top span:first-child{color:var(--amber)}
.sidebar-timer-main{display:flex;align-items:center;justify-content:space-between;gap:8px;position:relative;z-index:1}
.sidebar-timer-time{font-family:'JetBrains Mono',monospace;font-size:25px;font-weight:500;letter-spacing:-1px;margin-top:5px}
.sidebar-timer-toggle{width:32px;height:32px;border:1px solid var(--border-strong,var(--border));border-radius:10px;background:var(--surface-2);color:var(--text);display:inline-flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;flex:0 0 auto;transition:.15s;box-shadow:0 2px 7px rgba(0,0,0,.08);position:relative;z-index:2}
.sidebar-timer-toggle:hover{border-color:var(--amber-dim);background:var(--surface-3);transform:scale(1.04)}
.sidebar-timer-toggle:active{transform:scale(.97)}
.sidebar-timer-mode{font-size:10.5px;color:var(--text-dim);margin-top:2px;position:relative;z-index:1}
.timer-card{overflow:hidden}
.timer-status-label{font-size:12px;color:var(--text-faint);margin-bottom:8px;text-transform:none}
.timer-plan-label{font-size:11px;color:var(--text-faint);margin-top:3px;min-height:17px}
.timer-progress{height:4px;background:var(--surface-3);border-radius:4px;overflow:hidden;margin:13px 18px 0}
.timer-progress>div{height:100%;width:100%;background:linear-gradient(90deg,var(--amber),var(--teal));border-radius:4px;transition:width .4s linear}
.timer-quick-title{font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.08em;margin:18px 0 7px}
.timer-presets{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
.timer-presets .btn{flex:1 1 auto;min-width:100px;justify-content:center}
.timer-presets .btn span{opacity:.55;font-size:10px}
.timer-presets .active-timer{border-color:var(--amber-dim);background:var(--amber-soft);color:var(--amber)}
.timer-cycle-btn{border-style:dashed}
.timer-manager-list,.cycle-manager-row{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}
.timer-manager-row,.cycle-manager-row{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;background:var(--surface-2);border:1px solid var(--border-soft);border-radius:var(--radius-s)}
.timer-manager-row>div:first-child,.cycle-manager-row>div:first-child{min-width:0;display:flex;flex-direction:column}
.timer-manager-row strong,.cycle-manager-row strong{font-size:13px}
.timer-manager-row span,.cycle-manager-row span{font-size:11px;color:var(--text-faint);margin-top:2px}
.timer-add-box,.timer-cycle-builder{margin-top:12px;padding:14px;border:1px dashed var(--border);border-radius:var(--radius-m);background:rgba(255,255,255,.015)}
.cycle-builder-head{display:flex;align-items:center;justify-content:space-between;margin:4px 0 8px;font-size:12px;color:var(--text-dim)}
.cycle-step-row{display:flex;align-items:center;gap:6px;margin-bottom:7px}
.cycle-step-row input{width:74px;text-align:center}
.cycle-step-number{width:23px;height:23px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--amber-soft);color:var(--amber);font-size:10px;font-weight:600}
.cycle-arrow{color:var(--text-faint)}

/* Transição visual do timer */
.timer-transition-overlay{position:fixed;inset:0;z-index:120;background:rgba(5,8,12,.78);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:22px;opacity:0;transition:opacity .18s}
.timer-transition-overlay.show{opacity:1}
.timer-transition-card{width:min(470px,100%);padding:34px 30px 28px;border:1px solid var(--border);border-radius:22px;background:linear-gradient(160deg,var(--surface-2),var(--surface));box-shadow:0 25px 80px rgba(0,0,0,.5);text-align:center;transform:translateY(12px) scale(.98);transition:.22s;position:relative;overflow:hidden}
.timer-transition-overlay.show .timer-transition-card{transform:none}
.timer-transition-card::before{content:'';position:absolute;inset:-80px auto auto 50%;width:220px;height:220px;transform:translateX(-50%);background:radial-gradient(circle,var(--amber-soft),transparent 70%);pointer-events:none}
.timer-transition-kicker{position:relative;font-size:10px;letter-spacing:.16em;color:var(--amber);font-weight:700;margin-top:14px}
.timer-transition-card h2{position:relative;font-size:28px;margin:6px 0 8px}
.timer-transition-card p{position:relative;color:var(--text-dim);font-size:13px;line-height:1.7;max-width:370px;margin:0 auto 20px}
.timer-transition-card p strong{color:var(--text)}
.timer-transition-orbit{width:94px;height:94px;margin:0 auto;position:relative;display:flex;align-items:center;justify-content:center}
.timer-transition-icon{width:62px;height:62px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--teal-soft);border:1px solid rgba(79,182,166,.4);color:var(--teal);font-size:27px;font-weight:700;box-shadow:0 0 30px rgba(79,182,166,.12)}
.timer-transition-orbit span{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--amber);animation:timerOrbit 2.4s linear infinite}
.timer-transition-orbit span:nth-child(2){animation-delay:-.6s}.timer-transition-orbit span:nth-child(3){animation-delay:-1.2s}.timer-transition-orbit span:nth-child(4){animation-delay:-1.8s}
@keyframes timerOrbit{from{transform:rotate(0deg) translateX(45px) rotate(0deg)}to{transform:rotate(360deg) translateX(45px) rotate(-360deg)}}
.timer-break-box{position:relative;display:flex;align-items:center;gap:11px;text-align:left;padding:12px 13px;margin:0 0 18px;border:1px solid rgba(79,182,166,.28);background:var(--teal-soft);border-radius:12px}
.timer-break-icon{font-size:22px}.timer-break-box div{display:flex;flex-direction:column;flex:1}.timer-break-box small{font-size:9px;letter-spacing:.1em;color:var(--teal);font-weight:700}.timer-break-box strong{font-size:12px;margin-top:2px}.timer-break-box>b{font-family:'JetBrains Mono',monospace;font-size:16px;color:var(--teal)}
.timer-complete-mark{position:relative;width:78px;height:78px;margin:0 auto 2px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--amber-soft);border:1px solid var(--amber-dim);color:var(--amber);font-size:30px;box-shadow:0 0 45px rgba(232,163,61,.13)}
@media(max-width:860px){.sidebar-timer{display:none}.timer-transition-card{padding:28px 20px 22px}.timer-transition-card h2{font-size:24px}.cycle-step-row{flex-wrap:wrap}}

/* =========================================================
   RESPONSIVIDADE — SESSÕES / TIMER
========================================================= */
.sessions-page-grid{
  grid-template-columns:minmax(0,320px) minmax(0,1fr);
  align-items:start;
}
.sessions-timer-card{min-width:0;}
.timer-main-actions{
  display:flex;
  gap:8px;
  justify-content:center;
  align-items:center;
  margin-top:16px;
  flex-wrap:wrap;
}
.sessions-list-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  margin-bottom:12px;
}
.session-list-card{
  padding:6px 16px;
  min-width:0;
  overflow:hidden;
}
.session-list-row{min-width:0;}
.session-date{
  width:64px;
  flex:0 0 64px;
  font-size:11.5px;
  color:var(--text-faint);
}
.session-topic{
  flex:1;
  min-width:0;
  font-size:13px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

@media (max-width: 860px){
  .sessions-page-grid{
    grid-template-columns:minmax(0,1fr) !important;
    width:100%;
  }
  .sessions-timer-card,
  .session-list-card{
    width:100%;
    max-width:100%;
  }
  .sessions-timer-card{padding:16px 14px;}
  .timer-plan-label{
    max-width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .timer-presets{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    width:100%;
  }
  .timer-presets .btn{
    width:100%;
    min-width:0;
    flex:none;
    white-space:normal;
    line-height:1.25;
  }
  .timer-main-actions .btn{
    flex:1 1 0;
    min-width:0;
  }
  .sessions-list-head{
    align-items:flex-start;
    flex-wrap:wrap;
  }
  .sessions-list-head .section-title{
    flex:1 1 180px;
    min-width:0;
  }
  .sessions-list-head > .btn{
    flex:0 1 auto;
    max-width:100%;
  }
  .session-list-card{padding:4px 10px;}
  .session-list-row{
    display:grid;
    grid-template-columns:56px minmax(0,1fr) auto 30px;
    align-items:center;
    gap:8px;
  }
  .session-date{
    width:auto;
    min-width:0;
    flex:none;
  }
  .session-topic{
    width:auto;
    min-width:0;
    flex:none;
  }
  .session-list-row .pill{
    justify-self:end;
    white-space:nowrap;
  }
  .session-list-row .btn-trash{justify-self:end;}
}

@media (max-width: 560px){
  .content{overflow-x:hidden;}
  .sessions-timer-card .pomodoro-time{font-size:36px;}
  .timer-presets{grid-template-columns:1fr 1fr;}
  .timer-presets .btn{min-height:36px;}
  .sessions-list-head{
    flex-direction:column;
    align-items:stretch;
  }
  .sessions-list-head .section-title{
    flex:auto;
    margin-bottom:0;
  }
  .sessions-list-head > .btn{
    width:100%;
    justify-content:center;
  }
}

@media (max-width: 420px){
  .sessions-timer-card{padding:14px 11px;}
  .sessions-timer-card .pomodoro-time{font-size:33px;}
  .timer-main-actions{gap:6px;}
  .timer-main-actions .btn{
    padding-left:10px;
    padding-right:10px;
  }
  .timer-presets{grid-template-columns:1fr;}
  .timer-presets .btn{min-height:34px;}
  .session-list-row{
    grid-template-columns:46px minmax(0,1fr) 30px;
    grid-template-areas:
      "date topic trash"
      "date duration trash";
    row-gap:3px;
    padding:10px 2px;
  }
  .session-list-row .session-date{grid-area:date;}
  .session-list-row .session-topic{grid-area:topic;}
  .session-list-row .pill{grid-area:duration;justify-self:start;}
  .session-list-row .btn-trash{grid-area:trash;}
}


/* =========================================================
   EDITOR RICO DE QUESTÕES
========================================================= */
.question-editor-wrap{border-radius:var(--radius-s);}
.question-editor-toolbar{background:var(--surface-2);}
.question-editor-toolbar button{font-size:12px;}
.question-editor-image-input{display:none;}
.question-editor-body{min-height:230px;max-height:46vh;overflow-y:auto;}
.question-editor-body.drag-over{border-color:var(--teal);box-shadow:0 0 0 2px var(--teal-soft);background:var(--surface-3);}
.question-editor-body img{display:block;max-width:100%;height:auto;border-radius:9px;margin:10px auto;box-shadow:0 1px 8px rgba(0,0,0,.10);}
.question-editor-body p{margin:7px 0;}
.question-editor-body table{max-width:100%;border-collapse:collapse;overflow:auto;display:block;}
.question-editor-body td,.question-editor-body th{border:1px solid var(--border);padding:5px 7px;}
.question-card-text img{display:block;max-width:100%;max-height:220px;height:auto;object-fit:contain;border-radius:8px;margin:8px 0;}
.question-card-text p{margin:5px 0;}
.question-card-text ul,.question-card-text ol{padding-left:20px;margin:5px 0;}
.question-card-text blockquote{border-left:3px solid var(--amber);padding-left:10px;color:var(--text-dim);margin:6px 0;}

@media(max-width:700px){
  .question-editor-toolbar{padding:7px;}
  .question-editor-toolbar button{width:31px;height:31px;}
  .question-editor-body{min-height:200px;max-height:42vh;font-size:14px;}
}

@media(max-width:430px){
  .question-editor-toolbar .sep{display:none;}
  .question-editor-body{min-height:180px;}
}

/* =========================================================
   NOVO LAYOUT DO EDITOR DE QUESTÕES
========================================================= */
.field-especial{height:auto;}

.question-modal{
  max-width:860px;
  padding:24px;
}
.question-modal-overlay{}
.question-modal-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:18px;
  margin-bottom:18px;
  padding-bottom:16px;
  border-bottom:1px solid var(--border-soft);
}
.question-modal-kicker{
  color:var(--teal);
  font-size:10.5px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  margin-bottom:5px;
}
.question-modal-head h2{
  margin:0;
  font-size:20px;
  letter-spacing:-.01em;
}
.question-modal-head p{
  margin:5px 0 0;
  font-size:12px;
  color:var(--text-faint);
  line-height:1.5;
}
.question-modal-close{flex:0 0 auto;}

.question-form-section{
  background:linear-gradient(180deg,var(--surface-2),rgba(255,255,255,.01));
  border:1px solid var(--border);
  border-radius:12px;
  padding:16px;
  margin-bottom:14px;
  box-shadow:0 6px 18px rgba(0,0,0,.05);
  transition:border-color .16s ease,box-shadow .16s ease,transform .16s ease;
}
.question-form-section:focus-within{
  border-color:var(--border);
  box-shadow:0 10px 26px rgba(0,0,0,.08);
}
.question-section-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin-bottom:12px;
}
.question-section-head > div:first-child{
  min-width:0;
  display:flex;
  align-items:center;
  gap:10px;
}
.question-section-head.compact{margin-bottom:14px;}
.question-section-icon{
  width:32px;
  height:32px;
  flex:0 0 32px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:9px;
  background:var(--teal-soft);
  color:var(--teal);
  font-size:15px;
  border:1px solid rgba(79,176,161,.18);
}
.question-section-icon.answer{
  background:rgba(96,165,250,.10);
  color:#60a5fa;
  border-color:rgba(96,165,250,.18);
}
.question-section-icon.meta{
  background:rgba(232,163,61,.10);
  color:var(--amber);
  border-color:rgba(232,163,61,.18);
}
.question-section-head h3{
  margin:0;
  font-size:13.5px;
  font-weight:650;
  color:var(--text);
}
.question-section-head p{
  margin:2px 0 0;
  color:var(--text-faint);
  font-size:11px;
  line-height:1.45;
}
.question-section-tag{
  flex:0 0 auto;
  padding:5px 8px;
  border-radius:999px;
  background:var(--teal-soft);
  color:var(--teal);
  font-size:10px;
  font-weight:600;
}
.question-section-tag.answer{
  background:rgba(96,165,250,.10);
  color:#60a5fa;
}

.question-editor-wrap{
  min-width:0;
}
.question-editor-toolbar{
  background:var(--surface-3);
  border-color:var(--border);
  border-radius:9px 9px 0 0;
  padding:8px 9px;
  gap:4px;
}
.question-editor-toolbar button{
  width:30px;
  height:30px;
  border:1px solid transparent;
  transition:background .14s ease,color .14s ease,border-color .14s ease,transform .08s ease;
}
.question-editor-toolbar button:hover{
  background:var(--surface-2);
  border-color:var(--border);
  color:var(--text);
}
.question-editor-toolbar button:active{transform:translateY(1px);}
.question-editor-toolbar .sep{margin:4px 4px;}

.question-editor-body{
  min-height:240px;
  max-height:54vh;
  background:var(--surface);
  border-color:var(--border);
  border-radius:0 0 9px 9px;
  padding:16px 17px;
  font-size:14px;
  line-height:1.75;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.02);
  transition:border-color .15s ease,box-shadow .15s ease,background .15s ease;
}
.question-editor-body:focus{
  border-color:rgba(79,176,161,.58);
  box-shadow:inset 0 0 0 1px rgba(79,176,161,.17);
}
.question-editor-body.drag-over{
  border-color:var(--teal);
  box-shadow:inset 0 0 0 2px rgba(79,176,161,.16),0 0 0 3px var(--teal-soft);
  background:var(--surface-2);
}
.question-editor-body:empty:before{
  content:attr(data-placeholder);
  color:var(--text-faint);
}
.question-editor-body img{
  display:block;
  width:auto;
  max-width:100%;
  max-height:420px;
  height:auto;
  object-fit:contain;
  border-radius:10px;
  margin:12px auto;
  box-shadow:0 6px 18px rgba(0,0,0,.16);
}
.question-editor-body p{margin:7px 0;}
.question-editor-body ul,.question-editor-body ol{padding-left:24px;margin:8px 0;}
.question-editor-body blockquote{
  margin:10px 0;
  padding:9px 12px;
  border-left:3px solid var(--teal);
  border-radius:0 7px 7px 0;
  background:rgba(79,176,161,.05);
}
.question-editor-body pre{
  max-width:100%;
  overflow:auto;
  background:var(--surface-3);
  border:1px solid var(--border-soft);
  padding:11px;
  border-radius:8px;
}

.question-meta-section{
  padding-bottom:8px;
}
.question-meta-grid{
  display:grid;
  grid-template-columns:minmax(0,1.4fr) minmax(180px,.8fr);
  gap:12px;
}
.question-meta-field,
.question-tags-field{margin-bottom:8px;}
.question-meta-field label,
.question-tags-field label{font-size:11px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.04em;}
.question-meta-field select,
.question-tags-field input{
  min-height:42px;
  border-radius:9px;
  background:var(--surface);
}
.question-modal-actions{
  margin-top:4px;
}

@media (min-width:769px){
  .question-modal{padding:26px;}
  .question-editor-body{
    min-height:360px;
    max-height:520px;
  }
  .question-form-section{padding:18px;}
}

@media (max-width:768px){
  .question-modal{padding:17px;}
  .question-modal-head h2{font-size:18px;}
  .question-modal-head p{max-width:520px;}
  .question-section-head{align-items:flex-start;}
  .question-section-head p{font-size:10.5px;}
  .question-editor-body{
    min-height:230px;
    max-height:48vh;
  }
}

@media (max-width:560px){
  .question-modal{padding:14px;border-radius:16px;}
  .question-modal-head{gap:10px;margin-bottom:14px;padding-bottom:13px;}
  .question-modal-head h2{font-size:17px;}
  .question-modal-head p{display:none;}
  .question-form-section{padding:12px;margin-bottom:11px;border-radius:10px;}
  .question-section-tag{display:none;}
  .question-meta-grid{grid-template-columns:1fr;gap:0;}
  .question-editor-toolbar{padding:7px;}
  .question-editor-toolbar button{width:31px;height:31px;}
  .question-editor-body{min-height:205px;padding:13px 14px;font-size:14px;}
  .question-modal-actions{flex-wrap:wrap;}
  .question-modal-actions .btn{min-height:38px;}
  .question-modal-actions .btn-primary{flex:1;}
}

@media (max-width:430px){
  .question-editor-toolbar .sep{display:none;}
  .question-editor-body{min-height:185px;}
  .question-section-head h3{font-size:13px;}
  .question-section-head p{font-size:10px;}
}
