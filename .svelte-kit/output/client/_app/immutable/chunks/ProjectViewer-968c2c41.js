import{S as N,i as O,s as Q,l as m,a as P,u as y,m as g,p as q,h as d,c as D,v as L,q as n,b as K,G as r,w as C,n as B,M as R}from"./index-b814adb8.js";import"./Icon-a454bbac.js";function F(c,e,t){const a=c.slice();return a[1]=e[t][0],a[2]=e[t][1],a[4]=t,a}function J(c){let e,t,a=c[1]+"",_,o,v;return{c(){e=m("li"),t=m("a"),_=y(a),v=P(),this.h()},l(h){e=g(h,"LI",{title:!0,class:!0});var u=q(e);t=g(u,"A",{href:!0,target:!0,rel:!0,class:!0});var E=q(t);_=L(E,a),E.forEach(d),v=D(u),u.forEach(d),this.h()},h(){n(t,"href",o=c[2]),n(t,"target","_blank"),n(t,"rel","noopener noreferrer"),n(t,"class","icon svelte-1h0eq2q"),n(e,"title","open link to project"),n(e,"class","svelte-1h0eq2q")},m(h,u){K(h,e,u),r(e,t),r(t,_),r(e,v)},p(h,u){u&1&&a!==(a=h[1]+"")&&C(_,a),u&1&&o!==(o=h[2])&&n(t,"href",o)},d(h){h&&d(e)}}}function T(c){let e,t,a,_,o,v,h=c[0].title+"",u,E,I=c[0].date+"",S,G,j,V=c[0].description+"",$,H,p,b,M,w=c[0].links,i=[];for(let s=0;s<w.length;s+=1)i[s]=J(F(c,w,s));return{c(){e=m("div"),t=m("div"),_=P(),o=m("div"),v=m("h1"),u=y(h),E=y(" - "),S=y(I),G=P(),j=m("p"),$=y(V),H=P(),p=m("ul"),b=m("li"),M=P();for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var f=q(e);t=g(f,"DIV",{class:!0,style:!0}),q(t).forEach(d),_=D(f),o=g(f,"DIV",{class:!0});var l=q(o);v=g(l,"H1",{});var k=q(v);u=L(k,h),E=L(k," - "),S=L(k,I),k.forEach(d),G=D(l),j=g(l,"P",{class:!0});var z=q(j);$=L(z,V),z.forEach(d),H=D(l),p=g(l,"UL",{class:!0});var A=q(p);b=g(A,"LI",{title:!0,class:!0}),q(b).forEach(d),M=D(A);for(let U=0;U<i.length;U+=1)i[U].l(A);A.forEach(d),l.forEach(d),f.forEach(d),this.h()},h(){n(t,"class","preview-image svelte-1h0eq2q"),n(t,"style",a=`background-image: url(${c[0].image})`),n(j,"class","svelte-1h0eq2q"),n(b,"title","links"),n(b,"class","svelte-1h0eq2q"),n(p,"class","links svelte-1h0eq2q"),n(o,"class","info svelte-1h0eq2q"),n(e,"class","wrapper svelte-1h0eq2q")},m(s,f){K(s,e,f),r(e,t),r(e,_),r(e,o),r(o,v),r(v,u),r(v,E),r(v,S),r(o,G),r(o,j),r(j,$),r(o,H),r(o,p),r(p,b),r(p,M);for(let l=0;l<i.length;l+=1)i[l].m(p,null)},p(s,[f]){if(f&1&&a!==(a=`background-image: url(${s[0].image})`)&&n(t,"style",a),f&1&&h!==(h=s[0].title+"")&&C(u,h),f&1&&I!==(I=s[0].date+"")&&C(S,I),f&1&&V!==(V=s[0].description+"")&&C($,V),f&1){w=s[0].links;let l;for(l=0;l<w.length;l+=1){const k=F(s,w,l);i[l]?i[l].p(k,f):(i[l]=J(k),i[l].c(),i[l].m(p,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=w.length}},i:B,o:B,d(s){s&&d(e),R(i,s)}}}function W(c,e,t){let{project:a}=e;return c.$$set=_=>{"project"in _&&t(0,a=_.project)},[a]}class Z extends N{constructor(e){super(),O(this,e,W,T,Q,{project:0})}}export{Z as P};