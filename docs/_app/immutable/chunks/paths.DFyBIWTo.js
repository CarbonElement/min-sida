import{n as u,s as p}from"./scheduler.BzhZGcQd.js";const n=[];function w(t,o){return{subscribe:g(t,o).subscribe}}function g(t,o=u){let i;const r=new Set;function b(e){if(p(t,e)&&(t=e,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return r.add(s),r.size===1&&(i=o(b,a)||u),e(t),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_ptw8jg)==null?void 0:f.base)??"";var l;const q=((l=globalThis.__sveltekit_ptw8jg)==null?void 0:l.assets)??h;export{q as a,h as b,w as r,g as w};
