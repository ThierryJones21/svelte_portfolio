import{S as oe,i as ne,s as ae,l as $,a as V,u as U,m as j,p as w,h as p,c as C,v as q,q as _,b as N,G as m,f as I,g as O,d as Q,w as Y,t as S,M as ce,x as z,y as G,z as M,C as F,n as K,e as Z}from"../../chunks/index-b122bb94.js";import{H as fe}from"../../chunks/Head-ea4d2f9e.js";import{I as ie}from"../../chunks/Icon-3cb08b1b.js";function ee(i,e,r){const s=i.slice();return s[1]=e[r],s}function te(i){let e,r,s,l,a,t;return s=new ie({props:{name:le(i[1]),width:"20px",height:"20px"}}),{c(){e=$("li"),r=$("a"),z(s.$$.fragment),a=V(),this.h()},l(o){e=j(o,"LI",{title:!0,class:!0});var c=w(e);r=j(c,"A",{href:!0,target:!0,rel:!0,class:!0});var d=w(r);G(s.$$.fragment,d),d.forEach(p),a=C(c),c.forEach(p),this.h()},h(){_(r,"href",l=i[1]),_(r,"target","_blank"),_(r,"rel","noopener noreferrer"),_(r,"class","icon svelte-113i5ko"),_(e,"title","open link to project"),_(e,"class","svelte-113i5ko")},m(o,c){N(o,e,c),m(e,r),M(s,r,null),m(e,a),t=!0},p(o,c){const d={};c&1&&(d.name=le(o[1])),s.$set(d),(!t||c&1&&l!==(l=o[1]))&&_(r,"href",l)},i(o){t||(I(s.$$.fragment,o),t=!0)},o(o){S(s.$$.fragment,o),t=!1},d(o){o&&p(e),F(s)}}}function he(i){let e,r,s,l,a,t,o,c,d,B,H,E=i[0].title+"",k,b,P,x=i[0].description+"",L,D,n,g,y,R=i[0].links,u=[];for(let f=0;f<R.length;f+=1)u[f]=te(ee(i,R,f));const ue=f=>S(u[f],1,1,()=>{u[f]=null});return{c(){e=$("div"),r=$("div"),l=V(),a=$("div"),t=$("ul"),o=$("li"),c=U("</>"),d=V();for(let f=0;f<u.length;f+=1)u[f].c();B=V(),H=$("h1"),k=U(E),b=V(),P=$("p"),L=U(x),D=V(),n=$("br"),g=$("br"),this.h()},l(f){e=j(f,"DIV",{class:!0});var v=w(e);r=j(v,"DIV",{class:!0,style:!0}),w(r).forEach(p),l=C(v),a=j(v,"DIV",{class:!0});var h=w(a);t=j(h,"UL",{class:!0});var A=w(t);o=j(A,"LI",{title:!0,class:!0});var W=w(o);c=q(W,"</>"),W.forEach(p),d=C(A);for(let J=0;J<u.length;J+=1)u[J].l(A);A.forEach(p),B=C(h),H=j(h,"H1",{});var X=w(H);k=q(X,E),X.forEach(p),b=C(h),P=j(h,"P",{class:!0});var T=w(P);L=q(T,x),D=C(T),n=j(T,"BR",{}),g=j(T,"BR",{}),T.forEach(p),h.forEach(p),v.forEach(p),this.h()},h(){_(r,"class","preview-image svelte-113i5ko"),_(r,"style",s=`background-image: url(${i[0].image})`),_(o,"title","links"),_(o,"class","svelte-113i5ko"),_(t,"class","links svelte-113i5ko"),_(P,"class","svelte-113i5ko"),_(a,"class","info svelte-113i5ko"),_(e,"class","wrapper svelte-113i5ko")},m(f,v){N(f,e,v),m(e,r),m(e,l),m(e,a),m(a,t),m(t,o),m(o,c),m(t,d);for(let h=0;h<u.length;h+=1)u[h].m(t,null);m(a,B),m(a,H),m(H,k),m(a,b),m(a,P),m(P,L),m(P,D),m(P,n),m(P,g),y=!0},p(f,[v]){if((!y||v&1&&s!==(s=`background-image: url(${f[0].image})`))&&_(r,"style",s),v&1){R=f[0].links;let h;for(h=0;h<R.length;h+=1){const A=ee(f,R,h);u[h]?(u[h].p(A,v),I(u[h],1)):(u[h]=te(A),u[h].c(),I(u[h],1),u[h].m(t,null))}for(O(),h=R.length;h<u.length;h+=1)ue(h);Q()}(!y||v&1)&&E!==(E=f[0].title+"")&&Y(k,E),(!y||v&1)&&x!==(x=f[0].description+"")&&Y(L,x)},i(f){if(!y){for(let v=0;v<R.length;v+=1)I(u[v]);y=!0}},o(f){u=u.filter(Boolean);for(let v=0;v<u.length;v+=1)S(u[v]);y=!1},d(f){f&&p(e),ce(u,f)}}}function le(i){return i.toLowerCase().includes("github")?"github":i.toLowerCase().includes("you")?"youtube":"globe"}function pe(i,e,r){let{project:s}=e;return i.$$set=l=>{"project"in l&&r(0,s=l.project)},[s]}class _e extends oe{constructor(e){super(),ne(this,e,pe,he,ae,{project:0})}}function re(i,e,r){const s=i.slice();return s[2]=e[r],s}function me(i){let e,r;return{c(){e=$("p"),r=U("No projects here...")},l(s){e=j(s,"P",{});var l=w(e);r=q(l,"No projects here..."),l.forEach(p)},m(s,l){N(s,e,l),m(e,r)},p:K,i:K,o:K,d(s){s&&p(e)}}}function ve(i){let e,r,s=i[0],l=[];for(let t=0;t<s.length;t+=1)l[t]=se(re(i,s,t));const a=t=>S(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=Z()},l(t){for(let o=0;o<l.length;o+=1)l[o].l(t);e=Z()},m(t,o){for(let c=0;c<l.length;c+=1)l[c].m(t,o);N(t,e,o),r=!0},p(t,o){if(o&1){s=t[0];let c;for(c=0;c<s.length;c+=1){const d=re(t,s,c);l[c]?(l[c].p(d,o),I(l[c],1)):(l[c]=se(d),l[c].c(),I(l[c],1),l[c].m(e.parentNode,e))}for(O(),c=s.length;c<l.length;c+=1)a(c);Q()}},i(t){if(!r){for(let o=0;o<s.length;o+=1)I(l[o]);r=!0}},o(t){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)S(l[o]);r=!1},d(t){ce(l,t),t&&p(e)}}}function se(i){let e,r,s,l;return r=new _e({props:{project:i[2]}}),{c(){e=$("li"),z(r.$$.fragment),s=V(),this.h()},l(a){e=j(a,"LI",{class:!0});var t=w(e);G(r.$$.fragment,t),s=C(t),t.forEach(p),this.h()},h(){_(e,"class","svelte-y6u67h")},m(a,t){N(a,e,t),M(r,e,null),m(e,s),l=!0},p(a,t){const o={};t&1&&(o.project=a[2]),r.$set(o)},i(a){l||(I(r.$$.fragment,a),l=!0)},o(a){S(r.$$.fragment,a),l=!1},d(a){a&&p(e),F(r)}}}function de(i){let e,r,s,l,a,t,o,c,d,B,H,E,k,b,P;e=new fe({props:{title:"Projects"}}),B=new ie({props:{name:"search"}});const x=[ve,me],L=[];function D(n,g){return n[0].length?0:1}return k=D(i),b=L[k]=x[k](i),{c(){z(e.$$.fragment),r=V(),s=$("h1"),l=U("Projects"),a=V(),t=$("label"),o=$("input"),c=V(),d=$("span"),z(B.$$.fragment),H=V(),E=$("ul"),b.c(),this.h()},l(n){G(e.$$.fragment,n),r=C(n),s=j(n,"H1",{class:!0});var g=w(s);l=q(g,"Projects"),g.forEach(p),a=C(n),t=j(n,"LABEL",{for:!0});var y=w(t);o=j(y,"INPUT",{id:!0,placeholder:!0,type:!0,class:!0}),c=C(y),d=j(y,"SPAN",{class:!0});var R=w(d);G(B.$$.fragment,R),R.forEach(p),y.forEach(p),H=C(n),E=j(n,"UL",{class:!0});var u=w(E);b.l(u),u.forEach(p),this.h()},h(){_(s,"class","svelte-y6u67h"),_(o,"id","search"),_(o,"placeholder","Search by Title"),_(o,"type","text"),_(o,"class","svelte-y6u67h"),_(d,"class","search-icon svelte-y6u67h"),_(t,"for","search"),_(E,"class","svelte-y6u67h")},m(n,g){M(e,n,g),N(n,r,g),N(n,s,g),m(s,l),N(n,a,g),N(n,t,g),m(t,o),m(t,c),m(t,d),M(B,d,null),N(n,H,g),N(n,E,g),L[k].m(E,null),P=!0},p(n,[g]){let y=k;k=D(n),k===y?L[k].p(n,g):(O(),S(L[y],1,1,()=>{L[y]=null}),Q(),b=L[k],b?b.p(n,g):(b=L[k]=x[k](n),b.c()),I(b,1),b.m(E,null))},i(n){P||(I(e.$$.fragment,n),I(B.$$.fragment,n),I(b),P=!0)},o(n){S(e.$$.fragment,n),S(B.$$.fragment,n),S(b),P=!1},d(n){F(e,n),n&&p(r),n&&p(s),n&&p(a),n&&p(t),F(B),n&&p(H),n&&p(E),L[k].d()}}}const be=!0,ye=async({fetch:i})=>({props:{projects:await(await i("/api/projects.json")).json()}});function ge(i,e,r){let s,{projects:l}=e;return i.$$set=a=>{"projects"in a&&r(1,l=a.projects)},i.$$.update=()=>{i.$$.dirty&2&&r(0,s=l)},[s,l]}class we extends oe{constructor(e){super(),ne(this,e,ge,de,ae,{projects:1})}}export{we as default,ye as load,be as prerender};