import{S as W,i as X,s as Y,l as v,u as M,a as N,x as O,m as k,p as y,v as Q,h as u,c as C,y as V,q as m,b as w,G as d,_ as R,z as D,H as Z,t as E,d as F,f as $,C as J,g as K,n as x,e as U,M as ee}from"../../chunks/index-b814adb8.js";import{I as te}from"../../chunks/Icon-a454bbac.js";import{P as se}from"../../chunks/ProjectViewer-968c2c41.js";function z(i,s,l){const o=i.slice();return o[4]=s[l],o}function re(i){let s,l;return{c(){s=v("p"),l=M("No projects here...")},l(o){s=k(o,"P",{});var e=y(s);l=Q(e,"No projects here..."),e.forEach(u)},m(o,e){w(o,s,e),d(s,l)},p:x,i:x,o:x,d(o){o&&u(s)}}}function le(i){let s,l,o=i[1],e=[];for(let t=0;t<o.length;t+=1)e[t]=G(z(i,o,t));const n=t=>E(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=U()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);s=U()},m(t,r){for(let a=0;a<e.length;a+=1)e[a].m(t,r);w(t,s,r),l=!0},p(t,r){if(r&2){o=t[1];let a;for(a=0;a<o.length;a+=1){const h=z(t,o,a);e[a]?(e[a].p(h,r),$(e[a],1)):(e[a]=G(h),e[a].c(),$(e[a],1),e[a].m(s.parentNode,s))}for(K(),a=o.length;a<e.length;a+=1)n(a);F()}},i(t){if(!l){for(let r=0;r<o.length;r+=1)$(e[r]);l=!0}},o(t){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)E(e[r]);l=!1},d(t){ee(e,t),t&&u(s)}}}function G(i){let s,l,o,e;return l=new se({props:{project:i[4]}}),{c(){s=v("li"),O(l.$$.fragment),o=N(),this.h()},l(n){s=k(n,"LI",{class:!0});var t=y(s);V(l.$$.fragment,t),o=C(t),t.forEach(u),this.h()},h(){m(s,"class","svelte-1tgeks9")},m(n,t){w(n,s,t),D(l,s,null),d(s,o),e=!0},p(n,t){const r={};t&2&&(r.project=n[4]),l.$set(r)},i(n){e||($(l.$$.fragment,n),e=!0)},o(n){E(l.$$.fragment,n),e=!1},d(n){n&&u(s),J(l)}}}function oe(i){let s,l,o,e,n,t,r,a,h,I,b,p,f,P,S,T;h=new te({props:{name:"search"}});const q=[le,re],g=[];function A(c,_){return c[1].length?0:1}return p=A(i),f=g[p]=q[p](i),{c(){s=v("h1"),l=M("Projects"),o=N(),e=v("section"),n=v("label"),t=v("input"),r=N(),a=v("span"),O(h.$$.fragment),I=N(),b=v("ul"),f.c(),this.h()},l(c){s=k(c,"H1",{class:!0});var _=y(s);l=Q(_,"Projects"),_.forEach(u),o=C(c),e=k(c,"SECTION",{class:!0});var j=y(e);n=k(j,"LABEL",{for:!0});var L=y(n);t=k(L,"INPUT",{id:!0,placeholder:!0,type:!0,class:!0}),r=C(L),a=k(L,"SPAN",{class:!0});var B=y(a);V(h.$$.fragment,B),B.forEach(u),L.forEach(u),I=C(j),b=k(j,"UL",{class:!0});var H=y(b);f.l(H),H.forEach(u),j.forEach(u),this.h()},h(){m(s,"class","svelte-1tgeks9"),m(t,"id","search"),m(t,"placeholder","Search by Title"),m(t,"type","text"),m(t,"class","svelte-1tgeks9"),m(a,"class","search-icon svelte-1tgeks9"),m(n,"for","search"),m(b,"class","svelte-1tgeks9"),m(e,"class","section")},m(c,_){w(c,s,_),d(s,l),w(c,o,_),w(c,e,_),d(e,n),d(n,t),R(t,i[0]),d(n,r),d(n,a),D(h,a,null),d(e,I),d(e,b),g[p].m(b,null),P=!0,S||(T=Z(t,"input",i[3]),S=!0)},p(c,[_]){_&1&&t.value!==c[0]&&R(t,c[0]);let j=p;p=A(c),p===j?g[p].p(c,_):(K(),E(g[j],1,1,()=>{g[j]=null}),F(),f=g[p],f?f.p(c,_):(f=g[p]=q[p](c),f.c()),$(f,1),f.m(b,null))},i(c){P||($(h.$$.fragment,c),$(f),P=!0)},o(c){E(h.$$.fragment,c),E(f),P=!1},d(c){c&&u(s),c&&u(o),c&&u(e),J(h),g[p].d(),S=!1,T()}}}const ue=!0,pe=async({fetch:i})=>({props:{projects:await(await i("/api/projects.json")).json()}});function ne(i,s,l){let o,{projects:e}=s,n="";function t(){n=this.value,l(0,n)}return i.$$set=r=>{"projects"in r&&l(2,e=r.projects)},i.$$.update=()=>{i.$$.dirty&5&&l(1,o=n===""?e:e.filter(r=>r.title.toLowerCase().includes(n.toLowerCase())))},[n,o,e,t]}class fe extends W{constructor(s){super(),X(this,s,ne,oe,Y,{projects:2})}}export{fe as default,pe as load,ue as prerender};