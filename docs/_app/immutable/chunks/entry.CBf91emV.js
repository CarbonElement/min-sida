import{t as me}from"./scheduler.DydP1Fc2.js";import{w as be}from"./index.CWWyGEbl.js";import{a as ht,b as L}from"./paths.VoAnL_XI.js";import{H as ae,S as Ae,R as Be}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function pt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function gt(e){return e.split("%25").map(decodeURI).join("%25")}function mt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function de({href:e}){return e.split("#")[0]}const yt=["href","pathname","search","toString","toJSON"];function _t(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of yt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const wt="/__data.json",vt=".html__data.json";function bt(e){return e.endsWith(".html")?e.replace(/\.html$/,vt):e.replace(/\/$/,"")+wt}function At(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function kt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Ge=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(ke(e)),Ge(e,n));const q=new Map;function St(e,n){const t=ke(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&q.set(t,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=kt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function Et(e,n,t){if(q.size>0){const a=ke(e,t),r=q.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);q.delete(a)}}return window.fetch(n,t)}function ke(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${At(...r)}"]`}return a}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function It(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Lt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Rt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&s[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:n}}function Ut(e){return!/^\([^)]+\)$/.test(e)}function Lt(e){return e.slice(1).split("/").filter(Ut)}function Pt(e,n,t){const a={},r=e.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=r[i-s];if(c.chained&&c.rest&&s&&(f=r.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[i+1],h=r[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:y}=It(i),u={id:i,exec:g=>{const l=h.exec(g);if(l)return Pt(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[r.has(i),e[i]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function xe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}const xt="1744204113162",He="sveltekit:snapshot",Me="sveltekit:scroll",Ke="sveltekit:states",Ct="sveltekit:pageurl",$="sveltekit:history",M="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function We(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Se(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ce={...X,"":X.hover};function Ye(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Je(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ye(e)}}function ye(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===J&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function Z(e){let n=null,t=null,a=null,r=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)a===null&&(a=O(i,"preload-code")),r===null&&(r=O(i,"preload-data")),n===null&&(n=O(i,"keepfocus")),t===null&&(t=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=Ye(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[a??"off"],preload_data:Ce[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Ne(e){const n=be(e);let t=!0;function a(){t=!0,n.update(s=>s)}function r(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Nt(){const{set:e,subscribe:n}=be(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${ht}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==xt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:a}}function re(e,n){return e.origin!==J||!e.pathname.startsWith(n)}function Oe(e){const n=jt(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function jt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=Ot.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const $t=-1,Dt=-2,Ft=-3,Vt=-4,Bt=-5,Gt=-6;function cn(e,n){return ze(JSON.parse(e),n)}function ze(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,s=!1){if(o===$t)return;if(o===Ft)return NaN;if(o===Vt)return 1/0;if(o===Bt)return-1/0;if(o===Gt)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=t[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<i.length;u+=1)d.add(r(i[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<i.length;u+=2)h.set(r(i[u]),r(i[u+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<i.length;u+=2)y[i[u]]=r(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=i[1],l=Oe(g),m=new u(l);a[o]=m;break}case"ArrayBuffer":{const u=i[1],g=Oe(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==Dt&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in i){const d=i[f];c[f]=r(d)}}return a[o]}return r(0)}const Xe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Xe];const qt=new Set([...Xe]);[...qt];function Ht(e){return e.filter(n=>n!=null)}const Mt="x-sveltekit-invalidated",Kt="x-sveltekit-trailing-slash";function Q(e){return e instanceof ae||e instanceof Ae?e.status:500}function Wt(e){return e instanceof Ae?e.text:"Internal Error"}const N=qe(Me)??{},K=qe(He)??{},T={url:Ne({}),page:Ne({}),navigating:be(null),updated:Nt()};function Ee(e){N[e]=Se()}function Yt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function Ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function je(){}let oe,_e,ee,P,we,B;const Qe=[],te=[];let I=null;const et=[],Jt=[];let j=[],_={branch:[],error:null,url:null},Re=!1,ne=!1,$e=!0,W=!1,G=!1,tt=!1,ie=!1,C,S,U,E,V;const H=new Set;let pe;async function ln(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),B=e,oe=Tt(e),P=document.documentElement,we=n,_e=e.nodes[0],ee=e.nodes[1],_e(),ee(),S=(r=history.state)==null?void 0:r[$],U=(o=history.state)==null?void 0:o[M],S||(S=U=Date.now(),history.replaceState({...history.state,[$]:S,[M]:U},""));const a=N[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await nn(we,t):en(location.href,{replaceState:!0}),tn()}async function zt(){if(await(pe||(pe=Promise.resolve())),!pe)return;pe=null;const e=le(_.url,!0);I=null;const n=V={},t=e&&await Le(e);if(!(!t||n!==V)){if(t.type==="redirect")return se(new URL(t.location,_.url).href,{},1,n);t.props.page&&(E=t.props.page),_=t.state,nt(),C.$set(t.props)}}function nt(){Qe.length=0,ie=!1}function at(e){te.some(n=>n==null?void 0:n.snapshot)&&(K[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function rt(e){var n;(n=K[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=te[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function De(){Ee(S),xe(Me,N),at(U),xe(He,K)}async function se(e,n,t,a){return z({type:"goto",url:We(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(ie=!0)}})}async function Xt(e){if(e.id!==(I==null?void 0:I.id)){const n={};H.add(n),I={id:e.id,token:n,promise:Le({...e,preload:n}).then(t=>(H.delete(n),t.type==="loaded"&&t.state.error&&(I=null),t))}}return I.promise}async function ge(e){const n=oe.find(t=>t.exec(st(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ot(e,n,t){var o;_=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),E=e.props.page,C=new B.root({target:n,props:{...e.props,stores:T,components:te},hydrate:t,sync:!1}),rt(U);const r={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(s=>s(r)),ne=!0}function Y({url:e,params:n,branch:t,status:a,error:r,route:o,form:s}){let i="never";if(L&&(e.pathname===L||e.pathname===L+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=pt(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Ht(t).map(u=>u.node.component),page:E}};s!==void 0&&(c.props.form=s);let f={},d=!E,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==r||s!==void 0&&s!==E.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:s??null,data:d?f:E.data}),c}async function Ie({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const g={route:new Proxy(r,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(a,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:_t(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const R=new URL(b,t);return i&&u(R.href),R.origin===t.origin&&(b=R.href.slice(t.origin.length)),ne?Et(b,R.href,m):St(b,m)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Fe(e,n,t,a,r,o){if(ie)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==_.params[s])return!0;for(const s of r.dependencies)if(Qe.some(i=>i(new URL(s))))return!0;return!1}function Ue(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Zt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&t.delete(a)}return t}function Ve({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:E,constructors:[]}}}async function Le({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((I==null?void 0:I.id)===e)return H.delete(I.token),I.promise;const{errors:s,layouts:i,leaf:c}=r,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?r.id!==_.route.id:!1,u=Zt(_.url,t);let g=!1;const l=f.map((p,v)=>{var x;const A=_.branch[v],k=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Fe(g,y,h,u,(x=A.server)==null?void 0:x.uses,a));return k&&(g=!0),k});if(l.some(Boolean)){try{d=await ft(t,l)}catch(p){const v=await D(p,{url:t,params:a,route:{id:e}});return H.has(o)?Ve({error:v,url:t,params:a,route:r}):ce({status:Q(p),error:v,url:t,route:r})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const R=f.map(async(p,v)=>{var fe;if(!p)return;const A=_.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Fe(b,y,h,u,(fe=A.universal)==null?void 0:fe.uses,a))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ie({loader:p[1],url:t,params:a,route:r,parent:async()=>{var Te;const Pe={};for(let ue=0;ue<v;ue+=1)Object.assign(Pe,(Te=await R[ue])==null?void 0:Te.data);return Pe},server_data_node:Ue(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await R[p])}catch(v){if(v instanceof Be)return{type:"redirect",location:v.location};if(H.has(o))return Ve({error:await D(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let A=Q(v),k;if(m!=null&&m.includes(v))A=v.status??A,k=v.error;else if(v instanceof ae)k=v.body;else{if(await T.updated.check())return await Ze(),await F(t);k=await D(v,{params:a,url:t,route:{id:r.id}})}const x=await it(p,w,s);return x?Y({url:t,params:a,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:r}):await lt(t,{id:r.id},k,A)}else w.push(void 0);return Y({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function it(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:a}){const r={};let o=null;if(B.server_loads[0]===0)try{const f=await ft(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Re)&&await F(t)}const i=await Ie({loader:_e,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ue(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return Y({url:t,params:r,branch:[i,c],status:e,error:n,route:null})}function le(e,n){if(!e||re(e,L))return;let t;try{t=B.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=st(t);for(const r of oe){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:mt(o),url:e}}}function st(e){return gt(e.slice(L.length)||"/")}function ct({url:e,type:n,intent:t,delta:a}){let r=!1;const o=dt(_,t,e,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return W||et.forEach(i=>i(s)),r?null:o}async function z({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=je,block:d=je}){const h=le(n,!1),y=ct({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=S,g=U;f(),W=!0,ne&&T.navigating.set(y.navigation),V=c;let l=h&&await Le(h);if(!l){if(re(n,L))return await F(n);l=await lt(n,{id:null},await D(new Ae(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await ce({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return se(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&(await Ze(),await F(n));if(nt(),Ee(u),at(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,p={[$]:S+=w,[M]:U+=w,[Ke]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Yt(S,U)}if(I=null,l.props.page.state=s,ne){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Jt.map(p=>p(y.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){j=j.filter(v=>!w.includes(v))};w.push(p),j.push(...w)}C.$set(l.props),tt=!0}else ot(l,we,!1);const{activeElement:m}=document;await me();const b=t?t.scroll:r?Se():null;if($e){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!a&&!R&&ve(),$e=!0,l.props.page&&(E=l.props.page),W=!1,e==="popstate"&&rt(U),y.fulfil(void 0),j.forEach(w=>w(y.navigation)),T.navigating.set(null)}async function lt(e,n,t,a){return e.origin===J&&e.pathname===location.pathname&&!Re?await ce({status:a,error:t,url:e,route:n}):await F(e)}function Qt(){let e;P.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{a(s,2)},20)});function n(o){a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(ge(s.target.href),t.unobserve(s.target))},{threshold:0});function a(o,s){const i=Je(o,P);if(!i)return;const{url:c,external:f,download:d}=ye(i,L);if(f||d)return;const h=Z(i),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(s<=h.preload_data){const u=le(c,!1);u&&Xt(u)}else s<=h.preload_code&&ge(c.pathname)}function r(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:s,external:i,download:c}=ye(o,L);if(i||c)continue;const f=Z(o);f.reload||(f.preload_code===X.viewport&&t.observe(o),f.preload_code===X.eager&&ge(s.pathname))}}j.push(r),r()}function D(e,n){if(e instanceof ae)return e.body;const t=Q(e),a=Wt(e);return B.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function en(e,n={}){return e=We(e),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):se(e,n,0)}function fn(){return ie=!0,zt()}async function un(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:a}=_;if(!a)return;const r=await it(_.branch.length,t,a.errors);if(r){const o=Y({url:n,params:_.params,branch:t.slice(0,r.idx).concat(r.node),status:e.status??500,error:e.error,route:a});_=o.state,C.$set(o.props),me().then(ve)}}else e.type==="redirect"?se(e.location,{invalidateAll:!0},0):(C.$set({form:null,page:{...E,form:e.data,status:e.status}}),await me(),C.$set({form:e.data}),e.type==="success"&&ve())}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(De(),!W){const r=dt(_,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};et.forEach(s=>s(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||Qt(),P.addEventListener("click",async t=>{var y;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Je(t.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:s,download:i}=ye(a,L);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=Z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(o||c.reload){ct({url:r,type:"link"})?W=!0:t.preventDefault();return}const[d,h]=r.href.split("#");if(h!==void 0&&d===de(location)){const[,u]=_.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(y=a.ownerDocument.getElementById(decodeURIComponent(h)))==null||y.scrollIntoView();return}if(G=!0,Ee(S),e(r),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(re(i,L))return;const c=t.target,f=Z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(d).toString(),z({type:"form",url:i,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[$]){const r=t.state[$];if(V={},r===S)return;const o=N[r],s=t.state[Ke]??{},i=new URL(t.state[Ct]??location.href),c=t.state[M],f=de(location)===de(_.url);if(c===U&&(tt||f)){e(i),N[S]=Se(),o&&scrollTo(o.x,o.y),s!==E.state&&(E={...E,state:s},C.$set({page:E})),S=r;return}const h=r-S;await z({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,U=c},block:()=>{history.go(-h)},nav_token:V})}else if(!G){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[$]:++S,[M]:U},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){_.url=t,T.page.set({...E,url:t}),T.page.notify()}}async function nn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:s,form:i}){Re=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=le(c,!1)||{});let f;try{const d=a.map(async(u,g)=>{const l=s[g];return l!=null&&l.uses&&(l.uses=ut(l.uses)),Ie({loader:B.nodes[u],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<g;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:Ue(l)})}),h=await Promise.all(d),y=oe.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let g=0;g<u.length;g++)u[g]||h.splice(g,0,void 0)}f=Y({url:c,params:r,branch:h,status:n,error:t,form:i,route:y??null})}catch(d){if(d instanceof Be){await F(new URL(d.location,location.href));return}f=await ce({status:Q(d),error:await D(d,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),ot(f,e,!0)}async function ft(e,n){var r;const t=new URL(e);t.pathname=bt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Kt,"1"),t.searchParams.append(Mt,n.map(o=>o?"1":"0").join(""));const a=await Ge(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ae(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function f(y){return ze(y,{Promise:u=>new Promise((g,l)=>{s.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await i.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=ut(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:R}=l,w=s.get(m);s.delete(m),R?w.reject(f(R)):w.fulfil(f(b))}}}})}function ut(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function ve(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function dt(e,n,t,a){var c,f;let r,o;const s=new Promise((d,h)=>{r=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{un as a,ln as b,en as g,fn as i,cn as p,T as s};
