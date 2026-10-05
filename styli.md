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
.btn-sm{padding:5px 10px; font-size:12px;}
.icon-btn{width:30px; height:30px; display:flex; align-items:center; justify-content:center; border-radius:var(--radius-s); background:none; border:1px solid transparent; color:var(--text-dim);}
.icon-btn:hover{background:var(--surface-2); color:var(--text);}
 
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
.field-especial{height: 200px;}
 
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