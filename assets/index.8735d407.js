import{d as p,o as V,r as v,c as y,w as M,a as f,K as q,b as I,h as e,R as b,e as J,f as A,g as j,i as U,j as W,P as K,N as z,k as P,l as G,m as h,n as k,u as F,p as x,Q,q as Y,s as X,t as Z}from"./vendor.35bcd889.js";const ee=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};ee();var L,N;const i={title:"\u68EE",subtitle:"\u8BB0\u5F55 \u751F\u6D3B\u4E2D\u7684\u60F3\u6CD5",website:"https://innei.in",previewHost:"https://innei.in",footer:{info:['\u539F\u7AD9\u5DF2\u8FC1\u79FB\u5230 <a href="innei.in">innei.in</a>','<a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">\u6D59 ICP \u5907 20028356 \u53F7</a>']},apiBase:(N=(L={}.VITE_APP_APIBASE)==null?void 0:L.toString())!=null?N:"https://api.innei.ren/v2"};var B=(u,n)=>{const o=u.__vccOpts||u;for(const[s,t]of n)o[s]=t;return o};const te=p({setup(){V(()=>{document.title=`${i.title} | ${i.subtitle}`})}});function ne(u,n,o,s,t,r){const a=v("router-view");return f(),y(a,null,{default:M(({Component:c})=>[(f(),y(q,{exclude:["note-view"]},[(f(),y(I(c)))],1024))]),_:1})}var D=B(te,[["render",ne]]),re=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const oe="modulepreload",C={},se="",ue=function(n,o){return!o||o.length===0?n():Promise.all(o.map(s=>{if(s=`${se}${s}`,s in C)return;C[s]=!0;const t=s.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":oe,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise((c,g)=>{a.addEventListener("load",c),a.addEventListener("error",g)})})).then(()=>n())};const ae=p({setup(){return()=>e("header",{class:"header-wrapper"},e(b,{to:"/"},e("h1",null,i.title,e("small",null,i.subtitle))),e("div",{class:"links"},e(b,{to:"/about"},"About"),e("a",{href:i.website,target:"_blank"},"Website")))}}),ie=p({setup(){return()=>{const u=new Date().getFullYear();return e("footer",{class:"text-text-gray font-serif text-xs pb-6 block text-center space-y-3"},e("p",null,"Copyright \xA9 ",u," ",e("a",{href:i.website},"Innei"),". Powered by Vue 3."),i.footer.info.map(n=>e("p",{key:n,innerHTML:n})))}}});const le=p({components:{Header:ae,Footer:ie}}),ce={class:"wrap"};function pe(u,n,o,s,t,r){const a=v("Header"),c=v("Footer");return f(),J("div",ce,[A(a),j("main",null,[U(u.$slots,"default")]),A(c)])}var _=B(le,[["render",pe]]);const S={default:fetch};["GET","POST","PUT","DELETE","PATCH"].forEach(u=>{S[u.toLowerCase()]=(n,o)=>new Promise((s,t)=>{fetch(n,{method:u,body:(o==null?void 0:o.data)?JSON.stringify(o.data):void 0}).then(r=>r.json()).catch(r=>{t(r)}).then(r=>{s({data:r})}).catch(r=>{t(r)})})});const E=W(S)(i.apiBase,{controllers:[K,z]});customElements.define("markdown-render",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get observedAttributes(){return["props"]}render(){const n=this.shadowRoot;n.innerHTML="";const o=this.getAttribute("props");if(!o)return;const s=JSON.parse(o),{style:t,body:r,script:a,link:c,extraScripts:g}=s,H=t.map(d=>{const l=document.createElement("style");return l.innerHTML=d||"",l}),T=a.map(d=>{const l=document.createElement("script");return l.innerHTML=d||"",l}),O=c.map(d=>{const l=document.createElement("link");return l.setAttribute("rel","stylesheet"),l.setAttribute("href",d||""),l}),R=g.map(d=>{const l=document.createElement("script");return l.setAttribute("src",d||""),l}),$=document.createElement("div");$.innerHTML=r[0]||"",n.append(...H,...T,...O,$,...R)}attributeChangedCallback(){this.render()}});const de=p({name:"note-view",setup(){const u=F(),n=parseInt(u.params.id),o=P({note:{}});G(()=>{document.title=`${i.title} | ${i.subtitle}`});const s=h(!1),t=h();return k(async()=>{s.value=!0;try{o.note=(await E.note.getNoteById(n)).data,document.title=o.note.title+" | "+i.title;const r=await E.proxy.markdown.render.structure(o.note.id).get({params:{theme:"github"}});t.value=r}catch(r){console.error(r)}finally{s.value=!1}}),()=>e(_,null,o.note.id&&s.value?e("div",{id:"html",class:"content-wrapper"},"Loading..."):e("markdown-render",{props:t.value?JSON.stringify(t.value):""}),e("p",{class:"text-right mt-12 text-sm"},"\u53BB\u539F\u6587\u5730\u5740\u83B7\u5F97\u66F4\u597D\u9605\u8BFB\u4F53\u9A8C\uFF1A"," ",e("a",{href:i.previewHost+"/notes/"+o.note.nid},i.previewHost+"/notes/"+o.note.nid)))}});const me=p({props:{notes:{type:Array,required:!0,default:()=>[]}},setup(u){return()=>e("ul",{class:"list-root"},u.notes.map(n=>{const o=new Date(n.created),s=o.getDate(),t=o.getMonth()+1;return e("li",{key:n.nid},e(b,{to:`/notes/${n.nid}`},e("span",{class:"title"},n.title),e("span",{class:"created"},`${t}/${s}`)))}))}});const fe=p({setup(){const u=h(!0),n=P({notes:[],pager:{hasNextPage:!1,hasPrevPage:!1,totalPage:1}}),o=F(),s=h(parseInt(o.query.page)||1);k(async()=>{await t(s.value)});const t=async(r=1,a=15)=>{const c=await E.note.getList(r,a);n.notes=c.data,n.pager=c.pagination,u.value=!1,s.value=r};return()=>e(_,null,e(me,{notes:n.notes}),!u.value&&e("div",{class:"pager"},e("div",{class:x("prev",!n.pager.hasPrevPage&&"disable"),onClick:()=>{if(!n.pager.hasPrevPage)return;const r=s.value-1;t(r),m.push({path:"/",query:{page:r}})}},"\u4E0A\u4E00\u9875"),e("div",{class:x("next",!n.pager.hasNextPage&&"disable"),onClick:()=>{if(!n.pager.hasNextPage)return;const r=s.value+1;t(r),m.push({path:"/",query:{page:r}})}},"\u4E0B\u4E00\u9875")))}});const he=p({setup(){return()=>e(_,null,e("article",{class:"page-wrapper"},e("h2",null,"This Site"),e("p",null,"Powered by Vue 3 &"),e("p",null,"Build with Vite"),e("h2",null,"And me"),e("p",null,"Undergraduate 2022"),e("p",null,"Wenzhou University of Technology(aka. \u6E29\u5DDE\u7406\u5DE5\u5B66\u9662)"),e("p",null,"TypeScript, NodeJS"),e("p",null,"NestJS, NextJS, NuxtJS, React, Vue, and more."),e("p",null,"Coding with love, to make something possible."),e("p",null,e("a",{href:"http://innei.ren",target:"_blank"},"Home Page"),e("a",{href:"http://github.com/innei",target:"_blank"},"GitHub"),e("a",{href:"http://innei.ren/feed",target:"_blank"},"RSS")),e("blockquote",{class:"mt-12"},e("p",null,"\u5E7B\u306A\u3093\u304B\u3058\u3083\u306A\u3044"),e("p",null,"\u4EBA\u751F\u306F\u5922\u3058\u3083\u306A\u3044"),e("p",null,"\u50D5\u9054\u306F\u306F\u3063\u304D\u308A\u3068\u751F\u304D\u3066\u308B\u3093\u3060"),e("p",null,"\u5915\u713C\u3051\u7A7A\u306F\u8D64\u3044 \u708E\u306E\u3088\u3046\u306B\u8D64\u3044 "),e("p",null,"\u3053\u306E\u661F\u306E\u534A\u5206\u3092\u771F\u3063\u8D64\u306B\u67D3\u3081\u305F"),e("p",null,"\u305D\u308C\u3088\u308A\u3082\u3082\u3063\u3068\u8D64\u3044\u8840\u304C"),e("p",null,"\u4F53\u4E2D\u3092\u6D41\u308C\u3066\u308B\u3093\u3060\u305C"))))}}),w=new Q,ge=[{name:"root",path:"/",component:()=>ue(()=>Promise.resolve().then(function(){return re}),void 0),children:[{path:"/",component:fe,meta:{title:i.title+" | "+i.subtitle,fulltitle:!0},name:"home"},{path:"/notes/:id",props:!0,component:de,meta:{title:""},name:"note"},{path:"/about",component:he,meta:{title:"\u5173\u4E8E"}}]}],m=Y({history:X(),routes:ge});m.beforeEach((u,n,o)=>{var s;w.start(),n.meta.title&&(document.title=(s=n.meta.fulltitle?n.meta.title:n.meta.title+" | "+i.title)!=null?s:""),o()});m.afterEach(()=>{w.finish()});m.onError(()=>{w.finish()});Z(D).use(m).mount("#app");
