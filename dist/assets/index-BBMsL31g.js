var j=Object.defineProperty;var C=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function N(e){return e()}function O(){return Object.create(null)}function m(e){e.forEach(N)}function A(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function q(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function F(e){return document.createElement(e)}function H(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}let b;function h(e){b=e}const u=[],E=[];let d=[];const L=[],R=Promise.resolve();let y=!1;function T(){y||(y=!0,R.then(S))}function $(e){d.push(e)}const g=new Set;let l=0;function S(){if(l!==0)return;const e=b;do{try{for(;l<u.length;){const t=u[l];l++,h(t),U(t.$$)}}catch(t){throw u.length=0,l=0,t}for(h(null),u.length=0,l=0;E.length;)E.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];g.has(n)||(g.add(n),n())}d.length=0}while(u.length);for(;L.length;)L.pop()();y=!1,g.clear(),h(e)}function U(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function V(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const z=new Set;function D(e,t){e&&e.i&&(z.delete(e),e.i(t))}function G(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),$(()=>{const s=e.$$.on_mount.map(N).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...s):m(s),e.$$.on_mount=[]}),r.forEach($)}function J(e,t){const n=e.$$;n.fragment!==null&&(V(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(u.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,o,r,s,f=null,I=[-1]){const _=b;h(e);const i=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:O(),dirty:I,skip_bound:!1,root:t.target||_.$$.root};f&&f(i.root);let w=!1;if(i.ctx=n?n(e,t.props||{},(c,x,...v)=>{const k=v.length?v[0]:x;return i.ctx&&r(i.ctx[c],i.ctx[c]=k)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](k),w&&Q(e,c)),x}):[],i.update(),w=!0,m(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const c=K(t.target);i.fragment&&i.fragment.l(c),c.forEach(P)}else i.fragment&&i.fragment.c();t.intro&&D(e.$$.fragment),G(e,t.target,t.anchor),S()}h(_)}class X{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){J(this,1),this.$destroy=a}$on(t,n){if(!A(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);function Z(e){let t;return{c(){t=F("main"),t.innerHTML='<div id="centerContainer" class="svelte-1gtxmwk"><a href="https://www.instagram.com//" target="_blank" class="svelte-1gtxmwk"><p class="svelte-1gtxmwk">Instragram</p></a></div>',H(t,"class","svelte-1gtxmwk")},m(n,o){q(n,t,o)},p:a,i:a,o:a,d(n){n&&P(t)}}}class ee extends X{constructor(t){super(),W(this,t,null,Z,B,{})}}new ee({target:document.getElementById("app")});