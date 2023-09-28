import{n as ve,s as it,o as Ee,t as ke}from"../chunks/index.5a544235.js";function st(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ct(e){return e.split("%25").map(decodeURI).join("%25")}function lt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(e,n){const i=new URL(e);for(const o of ft)Object.defineProperty(i,o,{get(){return n(),e[o]},enumerable:!0,configurable:!0});return dt(i),i}function dt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const pt="/__data.json";function ht(e){return e.replace(/\/$/,"")+pt}function gt(...e){let n=5381;for(const i of e)if(typeof i=="string"){let o=i.length;for(;o;)n=n*33^i.charCodeAt(--o)}else if(ArrayBuffer.isView(i)){const o=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let f=o.length;for(;f;)n=n*33^o[--f]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const he=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&re.delete(Le(e)),he(e,n));const re=new Map;function mt(e,n){const i=Le(e,n),o=document.querySelector(i);if(o!=null&&o.textContent){const{body:f,...u}=JSON.parse(o.textContent),m=o.getAttribute("data-ttl");return m&&re.set(i,{body:f,init:u,ttl:1e3*Number(m)}),Promise.resolve(new Response(f,u))}return he(e,n)}function _t(e,n,i){if(re.size>0){const o=Le(e,i),f=re.get(o);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(f.body,f.init);re.delete(o)}}return he(n,i)}function Le(e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const f=[];n.headers&&f.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&f.push(n.body),o+=`[data-hash="${gt(...f)}"]`}return o}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${vt(e).map(o=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(f)return n.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return n.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const m=o.split(/\[(.+?)\](?!\])/);return"/"+m.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return Se(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Se(String.fromCharCode(...h.slice(2).split("-").map(P=>parseInt(P,16))));const g=wt.exec(h);if(!g)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,N,S,T]=g;return n.push({name:S,matcher:T,optional:!!x,rest:!!N,chained:N?p===1&&m[0]==="":!1}),N?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return Se(h)}).join("")}).join("")}/?$`),params:n}}function bt(e){return!/^\([^)]+\)$/.test(e)}function vt(e){return e.slice(1).split("/").filter(bt)}function Et(e,n,i){const o={},f=e.slice(1),u=f.filter(s=>s!==void 0);let m=0;for(let s=0;s<n.length;s+=1){const h=n[s];let p=f[s-m];if(h.chained&&h.rest&&m&&(p=f.slice(s-m,s+1).filter(g=>g).join("/"),m=0),p===void 0){h.rest&&(o[h.name]="");continue}if(!h.matcher||i[h.matcher](p)){o[h.name]=p;const g=n[s+1],x=f[s+1];g&&!g.rest&&g.optional&&x&&h.chained&&(m=0),!g&&!x&&Object.keys(o).length===u.length&&(m=0);continue}if(h.optional&&h.chained){m++;continue}return}if(!m)return o}function Se(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function kt({nodes:e,server_loads:n,dictionary:i,matchers:o}){const f=new Set(n);return Object.entries(i).map(([s,[h,p,g]])=>{const{pattern:x,params:N}=yt(s),S={id:s,exec:T=>{const P=x.exec(T);if(P)return Et(P,N,o)},errors:[1,...g||[]].map(T=>e[T]),layouts:[0,...p||[]].map(m),leaf:u(h)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function u(s){const h=s<0;return h&&(s=~s),[h,e[s]]}function m(s){return s===void 0?s:[f.has(s),e[s]]}}function Qe(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Fe(e,n){const i=JSON.stringify(n);try{sessionStorage[e]=i}catch{}}const W=[];function Oe(e,n=ve){let i;const o=new Set;function f(s){if(it(e,s)&&(e=s,i)){const h=!W.length;for(const p of o)p[1](),W.push(p,e);if(h){for(let p=0;p<W.length;p+=2)W[p][0](W[p+1]);W.length=0}}}function u(s){f(s(e))}function m(s,h=ve){const p=[s,h];return o.add(p),o.size===1&&(i=n(f)||ve),s(e),()=>{o.delete(p),o.size===0&&i&&(i(),i=null)}}return{set:f,update:u,subscribe:m}}var Xe;const F=((Xe=globalThis.__sveltekit_1euhzfc)==null?void 0:Xe.base)??"";var Ze;const St=((Ze=globalThis.__sveltekit_1euhzfc)==null?void 0:Ze.assets)??F,Rt="1695914946634",et="sveltekit:snapshot",tt="sveltekit:scroll",V="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1};function Ge(e){let n=e.baseURI;if(!n){const i=e.getElementsByTagName("base");n=i.length?i[0].href:e.URL}return n}function ne(){return{x:pageXOffset,y:pageYOffset}}function Y(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Be={...pe,"":pe.hover};function nt(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function He(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=nt(e)}}function Re(e,n){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,f=!i||!!o||de(i,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),u=(i==null?void 0:i.origin)===location.origin&&e.hasAttribute("download");return{url:i,external:f,target:o,download:u}}function ue(e){let n=null,i=null,o=null,f=null,u=null,m=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=Y(s,"preload-code")),f===null&&(f=Y(s,"preload-data")),n===null&&(n=Y(s,"keepfocus")),i===null&&(i=Y(s,"noscroll")),u===null&&(u=Y(s,"reload")),m===null&&(m=Y(s,"replacestate")),s=nt(s);function h(p){switch(p){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Be[o??"off"],preload_data:Be[f??"off"],keep_focus:h(n),noscroll:h(i),reload:h(u),replace_state:h(m)}}function Je(e){const n=Oe(e);let i=!0;function o(){i=!0,n.update(m=>m)}function f(m){i=!1,n.set(m)}function u(m){let s;return n.subscribe(h=>{(s===void 0||i&&h!==s)&&m(s=h)})}return{notify:o,set:f,subscribe:u}}function At(){const{set:e,subscribe:n}=Oe(!1);let i;async function o(){clearTimeout(i);try{const f=await fetch(`${St}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!f.ok)return!1;const m=(await f.json()).version!==Rt;return m&&(e(!0),clearTimeout(i)),m}catch{return!1}}return{subscribe:n,check:o}}function de(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}const It=-1,Lt=-2,Ot=-3,Ut=-4,Pt=-5,xt=-6;function Nt(e,n){if(typeof e=="number")return f(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,o=Array(i.length);function f(u,m=!1){if(u===It)return;if(u===Ot)return NaN;if(u===Ut)return 1/0;if(u===Pt)return-1/0;if(u===xt)return-0;if(m)throw new Error("Invalid input");if(u in o)return o[u];const s=i[u];if(!s||typeof s!="object")o[u]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const h=s[0],p=n==null?void 0:n[h];if(p)return o[u]=p(f(s[1]));switch(h){case"Date":o[u]=new Date(s[1]);break;case"Set":const g=new Set;o[u]=g;for(let S=1;S<s.length;S+=1)g.add(f(s[S]));break;case"Map":const x=new Map;o[u]=x;for(let S=1;S<s.length;S+=2)x.set(f(s[S]),f(s[S+1]));break;case"RegExp":o[u]=new RegExp(s[1],s[2]);break;case"Object":o[u]=Object(s[1]);break;case"BigInt":o[u]=BigInt(s[1]);break;case"null":const N=Object.create(null);o[u]=N;for(let S=1;S<s.length;S+=2)N[s[S]]=f(s[S+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(s.length);o[u]=h;for(let p=0;p<s.length;p+=1){const g=s[p];g!==Lt&&(h[p]=f(g))}}else{const h={};o[u]=h;for(const p in s){const g=s[p];h[p]=f(g)}}return o[u]}return f(0)}function Tt(e){return e.filter(n=>n!=null)}const at=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...at];const jt=new Set([...at]);[...jt];async function $t(e){var n;for(const i in e)if(typeof((n=e[i])==null?void 0:n.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([o,f])=>[o,await f])));return e}class ae{constructor(n,i){this.status=n,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(n,i){this.status=n,this.location=i}}const Ct="x-sveltekit-invalidated",Dt="x-sveltekit-trailing-slash";function Vt(e){e.client}const z={url:Je({}),page:Je({}),navigating:Oe(null),updated:At()},J=Qe(tt)??{},te=Qe(et)??{};function Ae(e){J[e]=ne()}function qt(e,n){var qe;const i=kt(e),o=e.nodes[0],f=e.nodes[1];o(),f();const u=document.documentElement,m=[],s=[];let h=null;const p={before_navigate:[],on_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},x=!1,N=!1,S=!0,T=!1,P=!1,G=!1,B=!1,q,C=(qe=history.state)==null?void 0:qe[V];C||(C=Date.now(),history.replaceState({...history.state,[V]:C},"",location.href));const ge=J[C];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let M,oe,X;async function Ue(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),l=Q(t,!0);h=null;const a=oe={},c=l&&await we(l);if(a===oe&&c){if(c.type==="redirect")return ie(new URL(c.location,t).href,{},[t.pathname],a);c.props.page!==void 0&&(M=c.props.page),q.$set(c.props)}}function Pe(t){s.some(l=>l==null?void 0:l.snapshot)&&(te[t]=s.map(l=>{var a;return(a=l==null?void 0:l.snapshot)==null?void 0:a.capture()}))}function xe(t){var l;(l=te[t])==null||l.forEach((a,c)=>{var r,d;(d=(r=s[c])==null?void 0:r.snapshot)==null||d.restore(a)})}function Ne(){Ae(C),Fe(tt,J),Pe(C),Fe(et,te)}async function ie(t,{noScroll:l=!1,replaceState:a=!1,keepFocus:c=!1,state:r={},invalidateAll:d=!1},_,v){return typeof t=="string"&&(t=new URL(t,Ge(document))),fe({url:t,scroll:l?ne():null,keepfocus:c,redirect_chain:_,details:{state:r,replaceState:a},nav_token:v,accepted:()=>{d&&(B=!0)},blocked:()=>{},type:"goto"})}async function Te(t){return h={id:t.id,promise:we(t).then(l=>(l.type==="loaded"&&l.state.error&&(h=null),l))},h.promise}async function se(...t){const a=i.filter(c=>t.some(r=>c.exec(r))).map(c=>Promise.all([...c.layouts,c.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(a)}function je(t){var c;g=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),M=t.props.page,q=new e.root({target:n,props:{...t.props,stores:z,components:s},hydrate:!0}),xe(C);const a={from:null,to:{params:g.params,route:{id:((c=g.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};p.after_navigate.forEach(r=>r(a)),N=!0}async function Z({url:t,params:l,branch:a,status:c,error:r,route:d,form:_}){let v="never";for(const y of a)(y==null?void 0:y.slash)!==void 0&&(v=y.slash);t.pathname=st(t.pathname,v),t.search=t.search;const E={type:"loaded",state:{url:t,params:l,branch:a,error:r,route:d},props:{constructors:Tt(a).map(y=>y.node.component)}};_!==void 0&&(E.props.form=_);let b={},L=!M,A=0;for(let y=0;y<Math.max(a.length,g.branch.length);y+=1){const w=a[y],U=g.branch[y];(w==null?void 0:w.data)!==(U==null?void 0:U.data)&&(L=!0),w&&(b={...b,...w.data},L&&(E.props[`data_${A}`]=b),A+=1)}return(!g.url||t.href!==g.url.href||g.error!==r||_!==void 0&&_!==M.form||L)&&(E.props.page={error:r,params:l,route:{id:(d==null?void 0:d.id)??null},status:c,url:new URL(t),form:_??null,data:L?b:M.data}),E}async function me({loader:t,parent:l,url:a,params:c,route:r,server_data_node:d}){var b,L,A;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((b=E.universal)!=null&&b.load){let O=function(...w){for(const U of w){const{href:j}=new URL(U,a);v.dependencies.add(j)}};const y={route:new Proxy(r,{get:(w,U)=>(v.route=!0,w[U])}),params:new Proxy(c,{get:(w,U)=>(v.params.add(U),w[U])}),data:(d==null?void 0:d.data)??null,url:ut(a,()=>{v.url=!0}),async fetch(w,U){let j;w instanceof Request?(j=w.url,U={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...U}):j=w;const D=new URL(j,a);return O(D.href),D.origin===a.origin&&(j=D.href.slice(a.origin.length)),N?_t(j,D.href,U):mt(j,U)},setHeaders:()=>{},depends:O,parent(){return v.parent=!0,l()}};_=await E.universal.load.call(null,y)??null,_=_?await $t(_):null}return{node:E,loader:t,server:d,universal:(L=E.universal)!=null&&L.load?{type:"data",data:_,uses:v}:null,data:_??(d==null?void 0:d.data)??null,slash:((A=E.universal)==null?void 0:A.trailingSlash)??(d==null?void 0:d.slash)}}function $e(t,l,a,c,r){if(B)return!0;if(!c)return!1;if(c.parent&&t||c.route&&l||c.url&&a)return!0;for(const d of c.params)if(r[d]!==g.params[d])return!0;for(const d of c.dependencies)if(m.some(_=>_(new URL(d))))return!0;return!1}function _e(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function we({id:t,invalidating:l,url:a,params:c,route:r}){if((h==null?void 0:h.id)===t)return h.promise;const{errors:d,layouts:_,leaf:v}=r,E=[..._,v];d.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const L=g.url?t!==g.url.pathname+g.url.search:!1,A=g.route?r.id!==g.route.id:!1;let O=!1;const y=E.map((k,I)=>{var H;const R=g.branch[I],$=!!(k!=null&&k[0])&&((R==null?void 0:R.loader)!==k[1]||$e(O,A,L,(H=R.server)==null?void 0:H.uses,c));return $&&(O=!0),$});if(y.some(Boolean)){try{b=await We(a,y)}catch(k){return ce({status:k instanceof ae?k.status:500,error:await ee(k,{url:a,params:c,route:{id:r.id}}),url:a,route:r})}if(b.type==="redirect")return b}const w=b==null?void 0:b.nodes;let U=!1;const j=E.map(async(k,I)=>{var ye;if(!k)return;const R=g.branch[I],$=w==null?void 0:w[I];if((!$||$.type==="skip")&&k[1]===(R==null?void 0:R.loader)&&!$e(U,A,L,(ye=R.universal)==null?void 0:ye.uses,c))return R;if(U=!0,($==null?void 0:$.type)==="error")throw $;return me({loader:k[1],url:a,params:c,route:r,parent:async()=>{var ze;const Me={};for(let be=0;be<I;be+=1)Object.assign(Me,(ze=await j[be])==null?void 0:ze.data);return Me},server_data_node:_e($===void 0&&k[0]?{type:"skip"}:$??null,k[0]?R==null?void 0:R.server:void 0)})});for(const k of j)k.catch(()=>{});const D=[];for(let k=0;k<E.length;k+=1)if(E[k])try{D.push(await j[k])}catch(I){if(I instanceof Ke)return{type:"redirect",location:I.location};let R=500,$;if(w!=null&&w.includes(I))R=I.status??R,$=I.error;else if(I instanceof ae)R=I.status,$=I.body;else{if(await z.updated.check())return await K(a);$=await ee(I,{params:c,url:a,route:{id:r.id}})}const H=await Ce(k,D,d);return H?await Z({url:a,params:c,branch:D.slice(0,H.idx).concat(H.node),status:R,error:$,route:r}):await Ve(a,{id:r.id},$,R)}else D.push(void 0);return await Z({url:a,params:c,branch:D,status:200,error:null,route:r,form:l?void 0:null})}async function Ce(t,l,a){for(;t--;)if(a[t]){let c=t;for(;!l[c];)c-=1;try{return{idx:c+1,node:{node:await a[t](),loader:a[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:l,url:a,route:c}){const r={};let d=null;if(e.server_loads[0]===0)try{const b=await We(a,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;d=b.nodes[0]??null}catch{(a.origin!==location.origin||a.pathname!==location.pathname||x)&&await K(a)}const v=await me({loader:o,url:a,params:r,route:c,parent:()=>Promise.resolve({}),server_data_node:_e(d)}),E={node:await f(),loader:f,universal:null,server:null,data:null};return await Z({url:a,params:r,branch:[v,E],status:t,error:l,route:null})}function Q(t,l){if(de(t,F))return;const a=le(t);for(const c of i){const r=c.exec(a);if(r)return{id:t.pathname+t.search,invalidating:l,route:c,params:lt(r),url:t}}}function le(t){return ct(t.pathname.slice(F.length)||"/")}function De({url:t,type:l,intent:a,delta:c}){let r=!1;const d=Ye(g,a,t,l);c!==void 0&&(d.navigation.delta=c);const _={...d.navigation,cancel:()=>{r=!0,d.reject(new Error("navigation was cancelled"))}};return P||p.before_navigate.forEach(v=>v(_)),r?null:d}async function fe({url:t,scroll:l,keepfocus:a,redirect_chain:c,details:r,type:d,delta:_,nav_token:v={},accepted:E,blocked:b}){var j,D,k;const L=Q(t,!1),A=De({url:t,type:d,delta:_,intent:L});if(!A){b();return}const O=C;E(),P=!0,N&&z.navigating.set(A.navigation),oe=v;let y=L&&await we(L);if(!y){if(de(t,F))return await K(t);y=await Ve(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(L==null?void 0:L.url)||t,oe!==v)return A.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(c.length>10||c.includes(t.pathname))y=await ce({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(y.location,t).href,{},[...c,t.pathname],v),!1;else((j=y.props.page)==null?void 0:j.status)>=400&&await z.updated.check()&&await K(t);if(m.length=0,B=!1,T=!0,Ae(O),Pe(O),(D=y.props.page)!=null&&D.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),r){const I=r.replaceState?0:1;if(r.state[V]=C+=I,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let R=C+1;for(;te[R]||J[R];)delete te[R],delete J[R],R+=1}}if(h=null,N){g=y.state,y.props.page&&(y.props.page.url=t);const I=(await Promise.all(p.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){p.after_navigate=p.after_navigate.filter($=>!I.includes($))};I.push(R),p.after_navigate.push(...I)}q.$set(y.props)}else je(y);const{activeElement:w}=document;if(await ke(),S){const I=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):I?I.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==w&&document.activeElement!==document.body;!a&&!U&&Ie(),S=!0,y.props.page&&(M=y.props.page),P=!1,d==="popstate"&&xe(C),A.fulfil(void 0),p.after_navigate.forEach(I=>I(A.navigation)),z.navigating.set(null),T=!1}async function Ve(t,l,a,c){return t.origin===location.origin&&t.pathname===location.pathname&&!x?await ce({status:c,error:a,url:t,route:l}):await K(t)}function K(t){return location.href=t.href,new Promise(()=>{})}function ot(){let t;u.addEventListener("mousemove",d=>{const _=d.target;clearTimeout(t),t=setTimeout(()=>{c(_,2)},20)});function l(d){c(d.composedPath()[0],1)}u.addEventListener("mousedown",l),u.addEventListener("touchstart",l,{passive:!0});const a=new IntersectionObserver(d=>{for(const _ of d)_.isIntersecting&&(se(le(new URL(_.target.href))),a.unobserve(_.target))},{threshold:0});function c(d,_){const v=He(d,u);if(!v)return;const{url:E,external:b,download:L}=Re(v,F);if(b||L)return;const A=ue(v);if(!A.reload)if(_<=A.preload_data){const O=Q(E,!1);O&&Te(O)}else _<=A.preload_code&&se(le(E))}function r(){a.disconnect();for(const d of u.querySelectorAll("a")){const{url:_,external:v,download:E}=Re(d,F);if(v||E)continue;const b=ue(d);b.reload||(b.preload_code===pe.viewport&&a.observe(d),b.preload_code===pe.eager&&se(le(_)))}}p.after_navigate.push(r),r()}function ee(t,l){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Ee(()=>(p.after_navigate.push(t),()=>{const l=p.after_navigate.indexOf(t);p.after_navigate.splice(l,1)}))},before_navigate:t=>{Ee(()=>(p.before_navigate.push(t),()=>{const l=p.before_navigate.indexOf(t);p.before_navigate.splice(l,1)}))},on_navigate:t=>{Ee(()=>(p.on_navigate.push(t),()=>{const l=p.on_navigate.indexOf(t);p.on_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(T||!N)&&(S=!1)},goto:(t,l={})=>ie(t,l,[]),invalidate:t=>{if(typeof t=="function")m.push(t);else{const{href:l}=new URL(t,location.href);m.push(a=>a.href===l)}return Ue()},invalidate_all:()=>(B=!0,Ue()),preload_data:async t=>{const l=new URL(t,Ge(document)),a=Q(l,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await Te(a)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:a,route:c}=g;if(!c)return;const r=await Ce(g.branch.length,a,c.errors);if(r){const d=await Z({url:l,params:g.params,branch:a.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:c});g=d.state,q.$set(d.props),ke().then(Ie)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...M,form:t.data,status:t.status}}),await ke(),q.$set({form:t.data}),t.type==="success"&&Ie())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let c=!1;if(Ne(),!P){const r=Ye(g,void 0,null,"leave"),d={...r.navigation,cancel:()=>{c=!0,r.reject(new Error("navigation was cancelled"))}};p.before_navigate.forEach(_=>_(d))}c?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne()}),(l=navigator.connection)!=null&&l.saveData||ot(),u.addEventListener("click",a=>{var O;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const c=He(a.composedPath()[0],u);if(!c)return;const{url:r,external:d,target:_,download:v}=Re(c,F);if(!r)return;if(_==="_parent"||_==="_top"){if(window.parent!==window)return}else if(_&&_!=="_self")return;const E=ue(c);if(!(c instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||v)return;if(d||E.reload){De({url:r,type:"link"})?P=!0:a.preventDefault();return}const[L,A]=r.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(g.url.hash===r.hash){a.preventDefault(),(O=c.ownerDocument.getElementById(A))==null||O.scrollIntoView();return}if(G=!0,Ae(C),t(r),!E.replace_state)return;G=!1,a.preventDefault()}fe({url:r,scroll:E.noscroll?ne():null,keepfocus:E.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:E.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),u.addEventListener("submit",a=>{if(a.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||c.method)!=="get")return;const _=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||c.action);if(de(_,F))return;const v=a.target,{keep_focus:E,noscroll:b,reload:L,replace_state:A}=ue(v);if(L)return;a.preventDefault(),a.stopPropagation();const O=new FormData(v),y=r==null?void 0:r.getAttribute("name");y&&O.append(y,(r==null?void 0:r.getAttribute("value"))??""),_.search=new URLSearchParams(O).toString(),fe({url:_,scroll:b?ne():null,keepfocus:E??!1,redirect_chain:[],details:{state:{},replaceState:A??_.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var c;if((c=a.state)!=null&&c[V]){if(a.state[V]===C)return;const r=J[a.state[V]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){J[C]=ne(),C=a.state[V],scrollTo(r.x,r.y);return}const d=a.state[V]-C;await fe({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{C=a.state[V]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}else if(!G){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++C},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&z.navigating.set(null)});function t(a){g.url=a,z.page.set({...M,url:a}),z.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:a,params:c,route:r,data:d,form:_})=>{x=!0;const v=new URL(location.href);({params:c={},route:r={id:null}}=Q(v,!1)||{});let E;try{const b=a.map(async(O,y)=>{const w=d[y];return w!=null&&w.uses&&(w.uses=rt(w.uses)),me({loader:e.nodes[O],url:v,params:c,route:r,parent:async()=>{const U={};for(let j=0;j<y;j+=1)Object.assign(U,(await b[j]).data);return U},server_data_node:_e(w)})}),L=await Promise.all(b),A=i.find(({id:O})=>O===r.id);if(A){const O=A.layouts;for(let y=0;y<O.length;y++)O[y]||L.splice(y,0,void 0)}E=await Z({url:v,params:c,branch:L,status:t,error:l,form:_,route:A??null})}catch(b){if(b instanceof Ke){await K(new URL(b.location,location.href));return}E=await ce({status:b instanceof ae?b.status:500,error:await ee(b,{url:v,params:c,route:r}),url:v,route:r})}je(E)}}}async function We(e,n){const i=new URL(e);i.pathname=ht(e.pathname),e.pathname.endsWith("/")&&i.searchParams.append(Dt,"1"),i.searchParams.append(Ct,n.map(f=>f?"1":"0").join(""));const o=await he(i.href);if(!o.ok)throw new ae(o.status,await o.json());return new Promise(async f=>{var g;const u=new Map,m=o.body.getReader(),s=new TextDecoder;function h(x){return Nt(x,{Promise:N=>new Promise((S,T)=>{u.set(N,{fulfil:S,reject:T})})})}let p="";for(;;){const{done:x,value:N}=await m.read();if(x&&!p)break;for(p+=!N&&p?`
`:s.decode(N);;){const S=p.indexOf(`
`);if(S===-1)break;const T=JSON.parse(p.slice(0,S));if(p=p.slice(S+1),T.type==="redirect")return f(T);if(T.type==="data")(g=T.nodes)==null||g.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=rt(P.uses),P.data=h(P.data))}),f(T);else if(T.type==="chunk"){const{id:P,data:G,error:B}=T,q=u.get(P);u.delete(P),B?q.reject(h(B)):q.fulfil(h(G))}}}})}function rt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ie(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,i=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),i!==null?n.setAttribute("tabindex",i):n.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const f=[];for(let u=0;u<o.rangeCount;u+=1)f.push(o.getRangeAt(u));setTimeout(()=>{if(o.rangeCount===f.length){for(let u=0;u<o.rangeCount;u+=1){const m=f[u],s=o.getRangeAt(u);if(m.commonAncestorContainer!==s.commonAncestorContainer||m.startContainer!==s.startContainer||m.endContainer!==s.endContainer||m.startOffset!==s.startOffset||m.endOffset!==s.endOffset)return}o.removeAllRanges()}})}}}function Ye(e,n,i,o){var h,p;let f,u;const m=new Promise((g,x)=>{f=g,u=x});return m.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((h=e.route)==null?void 0:h.id)??null},url:e.url},to:i&&{params:(n==null?void 0:n.params)??null,route:{id:((p=n==null?void 0:n.route)==null?void 0:p.id)??null},url:i},willUnload:!n,type:o,complete:m},fulfil:f,reject:u}}async function zt(e,n,i){const o=qt(e,n);Vt({client:o}),i?await o._hydrate(i):o.goto(location.href,{replaceState:!0}),o._start_router()}export{zt as start};
