function x(){}const K=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function W(){return Object.create(null)}function b(t){t.forEach(Q)}function L(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Ot(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function zt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let c=0;c<o;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,u){if(r){const o=U(e,n,i,u);t.p(o,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){return t==null?"":t}const V=typeof window<"u";let X=V?()=>window.performance.now():()=>Date.now(),F=V?t=>requestAnimationFrame(t):x;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(Y)}function Z(t){let e;return g.size===0&&F(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let D=!1;function dt(){D=!0}function ht(){D=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:mt(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],o=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);c>=s;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);u.reverse(),o.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<o.length;s++){for(;l<u.length&&o[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(o[s],f)}}function yt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=et("style");return xt(tt(t),e),e.sheet}function xt(t,e){yt(t.head||t,e)}function bt(t,e){if(D){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){D&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Gt(){return H(" ")}function Jt(){return H("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||u.push(c.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Ut(t,e,n){return it(t,e,n,et)}function Vt(t,e,n){return it(t,e,n,wt)}function kt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Xt(t){return kt(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e==null?"":e}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e=document.body){return Array.from(e.querySelectorAll(t))}const M=new Map;let R=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function rt(t,e,n,i,r,u,o,c=0){const s=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=s){const N=e+(n-e)*u(m);l+=m*100+`%{${o(N,1-N)}}
`}const f=l+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${c}`,_=tt(t),{stylesheet:d,rules:h}=M.get(_)||Ct(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,R+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||St())}function St(){F(()=>{R||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let E;function v(t){E=t}function A(){if(!E)throw new Error("Function called outside component initialization");return E}function ne(t){A().$$.on_mount.push(t)}function ie(t){A().$$.after_update.push(t)}function re(t){A().$$.on_destroy.push(t)}function se(t,e){return A().$$.context.set(t,e),e}function oe(t){return A().$$.context.get(t)}const w=[],G=[],j=[],J=[],st=Promise.resolve();let B=!1;function ot(){B||(B=!0,st.then(ct))}function ce(){return ot(),st}function k(t){j.push(t)}const P=new Set;let S=0;function ct(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),jt(e.$$)}for(v(null),w.length=0,S=0;G.length;)G.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];P.has(n)||(P.add(n),n())}j.length=0}while(w.length);for(;J.length;)J.pop()();B=!1,P.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function lt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function T(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const q=new Set;let y;function le(){y={r:0,c:[],p:y}}function ue(){y.r||b(y.c),y=y.p}function qt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),y.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function fe(t,e,n){let i=e(t,n),r=!1,u,o,c=0;function s(){u&&z(t,u)}function l(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=x,css:p}=i||ut;p&&(u=rt(t,0,1,_,a,d,p,c++)),h(0,1);const m=X()+a,N=m+_;o&&o.abort(),r=!0,k(()=>T(t,!0,"start")),o=Z(O=>{if(r){if(O>=N)return h(1,0),T(t,!0,"end"),s(),r=!1;if(O>=m){const I=d((O-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),L(i)?(i=i(),lt().then(l)):l())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function _e(t,e,n){let i=e(t,n),r=!0,u;const o=y;o.r+=1;function c(){const{delay:s=0,duration:l=300,easing:f=K,tick:a=x,css:_}=i||ut;_&&(u=rt(t,1,0,l,s,f,_));const d=X()+s,h=d+l;k(()=>T(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),T(t,!1,"end"),--o.r||b(o.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return L(i)?lt().then(()=>{i=i(),c()}):c(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&z(t,u),r=!1)}}}const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function he(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],c=e[u];if(c){for(const s in o)s in c||(i[s]=1);for(const s in c)r[s]||(n[s]=c[s],r[s]=1);t[u]=c}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:c}=t.$$;r&&r.m(e,n),i||k(()=>{const s=u.map(Q).filter(L);o?o.push(...s):b(s),t.$$.on_mount=[]}),c.forEach(k)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,u,o,c=[-1]){const s=E;v(t);const l=t.$$={fragment:null,ctx:null,props:u,update:x,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:W(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Tt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){dt();const a=vt(e.target);l.fragment&&l.fragment.l(a),a.forEach($t)}else l.fragment&&l.fragment.c();e.intro&&qt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ht(),ct()}v(s)}class xe{$destroy(){Rt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as A,me as B,Rt as C,at as D,ce as E,ee as F,bt as G,Kt as H,b as I,de as J,k as K,Ht as L,Wt as M,zt as N,Lt as O,Ft as P,Bt as Q,oe as R,xe as S,Pt as T,wt as U,Vt as V,re as W,fe as X,_e as Y,Ot as Z,Zt as _,Gt as a,It as b,Xt as c,ue as d,Jt as e,qt as f,le as g,$t as h,ge as i,se as j,ie as k,et as l,Ut as m,x as n,ne as o,vt as p,Qt as q,te as r,Dt as s,ae as t,H as u,kt as v,Yt as w,pe as x,ye as y,Mt as z};