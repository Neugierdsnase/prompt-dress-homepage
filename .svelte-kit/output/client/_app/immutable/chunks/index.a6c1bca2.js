function M(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(tt)}function G(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Qt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function pt(t){return Object.keys(t).length===0}function Ut(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,c){if(s){const r=et(e,n,i,c);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function te(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ee(t){const e={};for(const n in t)e[n]=!0;return e}function ne(t){return t??""}function ie(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let yt=nt?()=>window.performance.now():()=>Date.now(),I=nt?t=>requestAnimationFrame(t):M;const v=new Set;function it(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&I(it)}function gt(t){let e;return v.size===0&&I(it),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let B=!1;function wt(){B=!0}function xt(){B=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:$t(1,s,_=>e[n[_]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function Et(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=ot("style");return vt(st(t),e),e.sheet}function vt(t,e){return Et(t.head||t,e),e.sheet}function Nt(t,e){if(B){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function se(t,e,n){B&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function oe(){return J(" ")}function ce(){return J("")}function le(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ct(t,i,e[i])}function jt(t,e){Object.keys(e).forEach(n=>{Ct(t,n,e[n])})}function Ct(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:ct(t,e,n)}function ue(t){return/-/.test(t)?jt:St}function ae(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Dt(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){Mt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ut(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function fe(t,e,n){return ut(t,e,n,ot)}function _e(t,e,n){return ut(t,e,n,At)}function Ot(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function de(t){return Ot(t," ")}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function ge(t,e){return new t(e)}const q=new Map;let L=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:kt(e),rules:{}};return q.set(t,n),n}function qt(t,e,n,i,s,c,r,l=0){const o=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);u+=p*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Pt(f)}_${l}`,_=st(t),{stylesheet:h,rules:m}=q.get(_)||Rt(_,t);m[a]||(m[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${s}ms 1 both`,L+=1,a}function V(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||Lt())}function Lt(){I(()=>{L||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),q.clear())})}let O;function D(t){O=t}function K(){if(!O)throw new Error("Function called outside component initialization");return O}function we(t){K().$$.on_mount.push(t)}function xe(t){K().$$.after_update.push(t)}function $e(t){K().$$.on_destroy.push(t)}function be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],X=[];let N=[];const Y=[],at=Promise.resolve();let W=!1;function ft(){W||(W=!0,at.then(_t))}function Ee(){return ft(),at}function z(t){N.push(t)}const H=new Set;let E=0;function _t(){if(E!==0)return;const t=O;do{try{for(;E<k.length;){const e=k[E];E++,D(e),zt(e.$$)}}catch(e){throw k.length=0,E=0,e}for(D(null),k.length=0,E=0;X.length;)X.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];H.has(n)||(H.add(n),n())}N.length=0}while(k.length);for(;Y.length;)Y.pop()();W=!1,H.clear(),D(t)}function zt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function Bt(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}let C;function Ft(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function Z(t,e,n){t.dispatchEvent(Tt(`${e?"intro":"outro"}${n}`))}const R=new Set;let $;function ke(){$={r:0,c:[],p:$}}function ve(){$.r||A($.c),$=$.p}function dt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Ht(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),$.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Wt={duration:0};function Ne(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,l,o=0;function u(){r&&V(t,r)}function f(){const{delay:_=0,duration:h=300,easing:m=ht,tick:y=M,css:p}=s||Wt;p&&(r=qt(t,0,1,h,_,m,p,o++)),y(0,1);const g=yt()+_,S=g+h;l&&l.abort(),c=!0,z(()=>Z(t,!0,"start")),l=gt(b=>{if(c){if(b>=S)return y(1,0),Z(t,!0,"end"),u(),c=!1;if(b>=g){const j=m((b-g)/h);y(j,1-j)}}return c})}let a=!1;return{start(){a||(a=!0,V(t),G(s)?(s=s(i),Ft().then(f)):f())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function Ae(t,e){Ht(t,1,1,()=>{e.delete(t.key)})}function Se(t,e,n,i,s,c,r,l,o,u,f,a){let _=t.length,h=c.length,m=_;const y={};for(;m--;)y[t[m].key]=m;const p=[],g=new Map,S=new Map,b=[];for(m=h;m--;){const d=a(s,c,m),w=n(d);let x=r.get(w);x?i&&b.push(()=>x.p(d,e)):(x=u(w,d),x.c()),g.set(w,p[m]=x),w in y&&S.set(w,Math.abs(m-y[w]))}const j=new Set,Q=new Set;function F(d){dt(d,1),d.m(l,f),r.set(d.key,d),f=d.first,h--}for(;_&&h;){const d=p[h-1],w=t[_-1],x=d.key,T=w.key;d===w?(f=d.first,_--,h--):g.has(T)?!r.has(x)||j.has(x)?F(d):Q.has(T)?_--:S.get(x)>S.get(T)?(Q.add(x),F(d)):(j.add(T),_--):(o(w,r),_--)}for(;_--;){const d=t[_];g.has(d.key)||o(d,r)}for(;h;)F(p[h-1]);return A(b),p}function je(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ce(t){return typeof t=="object"&&t!==null?t:{}}function De(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function Gt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(tt).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),c.forEach(z)}function It(t,e){const n=t.$$;n.fragment!==null&&(Bt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,s,c,r,l=[-1]){const o=O;D(t);const u=t.$$={fragment:null,ctx:[],props:c,update:M,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:U(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...h)=>{const m=h.length?h[0]:_;return u.ctx&&s(u.ctx[a],u.ctx[a]=m)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](m),f&&Jt(t,a)),_}):[],u.update(),f=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){wt();const a=Dt(e.target);u.fragment&&u.fragment.l(a),a.forEach(rt)}else u.fragment&&u.fragment.c();e.intro&&dt(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),xt(),_t()}D(o)}class Te{$destroy(){It(this,1),this.$destroy=M}$on(e,n){if(!G(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ee as $,Gt as A,It as B,Ut as C,Xt as D,Yt as E,Vt as F,Nt as G,re as H,ye as I,At as J,_e as K,ae as L,M,pe as N,ie as O,z as P,Ne as Q,Se as R,Te as S,$e as T,Ae as U,ne as V,ue as W,mt as X,je as Y,Ce as Z,te as _,oe as a,Zt as a0,le as a1,be as a2,Qt as a3,se as b,de as c,Ht as d,ce as e,ve as f,dt as g,rt as h,Oe as i,xe as j,ot as k,fe as l,Dt as m,ct as n,we as o,me as p,J as q,Ot as r,Kt as s,Ee as t,he as u,ke as v,X as w,ge as x,De as y,Me as z};
