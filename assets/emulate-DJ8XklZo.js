import{P as dx,g as px,S as mx,c as gx,R as St,a as Rm,r as Be,j as _,V as se,M as pr,Q as xt,E as Et,b as Ih,d as xx,O as Pm,C as vx,L as Cm,B as Lm,e as Im,F as Nm,G as mi,f as _x,h as mn,i as Bt,k as to,l as no,m as Ml,T as Nh,n as yx,o as Kr,p as Cf,_ as ba}from"./index-BpWPNmVw.js";function Sx(n,e,t){if(!(e instanceof globalThis.MouseEvent))return t.set(0,0);const{width:i,height:r,top:s,left:a}=n.getBoundingClientRect(),o=e.clientX-a,l=e.clientY-s;return t.set(o/i*2-1,-(l/r)*2+1)}function Mx(n,e,t,i){return Ex(n,typeof e=="function"?e:()=>e,t,Sx.bind(null,n),n.setPointerCapture.bind(n),r=>{n.hasPointerCapture(r)&&n.releasePointerCapture(r)},{pointerTypePrefix:"screen-",...i})}function Ex(n,e,t,i,r,s,a={}){const o=a?.forwardPointerCapture??!0,l=new Map,c=a.pointerTypePrefix??"forward-",u=(A,D)=>{let E=l.get(A.pointerId);return E!=null||(E=new dx(px(),`${c}${A.pointerType}`,A.pointerState,new mx((y,C)=>(i(y,C),e()),a),e,void 0,o?r.bind(null,A.pointerId):void 0,o?s.bind(null,A.pointerId):void 0,a),D!="move"&&D!="wheel"&&(E.setIntersection(E.computeIntersection("pointer",t,A)),E.commit(A,!1)),l.set(A.pointerId,E)),E},h=new Map,f=new Map,m=[],g=[],x=(A,D,E)=>{switch(A){case"move":E.move(t,D);return;case"wheel":E.wheel(t,D);return;case"cancel":E.cancel(D);return;case"down":if(!Lf(D))return;E.down(D);return;case"up":if(!Lf(D))return;E.up(D);return;case"exit":f.delete(E),h.delete(E),E.exit(D);return}},d=(A,D)=>{const E=u(D,A);A==="move"&&f.set(E,D),A==="wheel"&&h.set(E,D),a.batchEvents??!0?g.push({type:A,event:D}):x(A,D,E)},p=d.bind(null,"move"),b=d.bind(null,"cancel"),v=d.bind(null,"down"),M=d.bind(null,"up"),R=d.bind(null,"wheel"),T=d.bind(null,"exit");return n.addEventListener("pointermove",p),n.addEventListener("pointercancel",b),n.addEventListener("pointerdown",v),n.addEventListener("pointerup",M),n.addEventListener("wheel",R),n.addEventListener("pointerleave",T),{destroy(){n.removeEventListener("pointermove",p),n.removeEventListener("pointercancel",b),n.removeEventListener("pointerdown",v),n.removeEventListener("pointerup",M),n.removeEventListener("wheel",R),n.removeEventListener("pointerleave",T),f.clear(),h.clear()},update(){const A=g.length;for(let D=0;D<A;D++){const{type:E,event:y}=g[D],C=u(y,E);if(E==="move"&&(m.push(C),f.get(C)!=y)){C.emitMove(y);continue}if(E==="wheel"&&h.get(C)!=y){C.emitWheel(y);continue}x(E,y,C)}if(g.length=0,a.intersectEveryFrame??!1)for(const[D,E]of f.entries())m.includes(D)||D.move(t,E);m.length=0}}}function Lf(n){return n.button!=null}const wx=n=>n;function bx(n,e=wx){const t=St.useSyncExternalStore(n.subscribe,St.useCallback(()=>e(n.getState()),[n,e]),St.useCallback(()=>e(n.getInitialState()),[n,e]));return St.useDebugValue(t),t}const If=n=>{const e=gx(n),t=i=>bx(e,i);return Object.assign(t,e),t},Dh=(n=>n?If(n):If),Nf=()=>{};let Oh={},Dm={},Om=null,Um={mark:Nf,measure:Nf};try{typeof window<"u"&&(Oh=window),typeof document<"u"&&(Dm=document),typeof MutationObserver<"u"&&(Om=MutationObserver),typeof performance<"u"&&(Um=performance)}catch{}const{userAgent:Df=""}=Oh.navigator||{},lr=Oh,Mt=Dm,Of=Om,Ao=Um;lr.document;const Di=!!Mt.documentElement&&!!Mt.head&&typeof Mt.addEventListener=="function"&&typeof Mt.createElement=="function",Fm=~Df.indexOf("MSIE")||~Df.indexOf("Trident/");var wt="classic",km="duotone",An="sharp",Rn="sharp-duotone",Tx=[wt,km,An,Rn],Ax={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Uf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Rx=["kit"],Px=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Cx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Lx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ix={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Nx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Dx={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ox={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Ux={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Bm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Fx=["solid","regular","light","thin","duotone","brands"],zm=[1,2,3,4,5,6,7,8,9,10],kx=zm.concat([11,12,13,14,15,16,17,18,19,20]),Wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bx=[...Object.keys(Dx),...Fx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wa.GROUP,Wa.SWAP_OPACITY,Wa.PRIMARY,Wa.SECONDARY].concat(zm.map(n=>"".concat(n,"x"))).concat(kx.map(n=>"w-".concat(n))),zx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Hx={kit:{"fa-kit":"fak"}},Vx={kit:{fak:"fa-kit"}},Ff={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ci="___FONT_AWESOME___",Fu=16,Hm="fa",Vm="svg-inline--fa",jr="data-fa-i2svg",ku="data-fa-pseudo-element",Gx="data-fa-pseudo-element-pending",Uh="data-prefix",Fh="data-icon",kf="fontawesome-i2svg",Wx="async",Xx=["HTML","HEAD","STYLE","SCRIPT"],Gm=(()=>{try{return!0}catch{return!1}})(),Wm=[wt,An,Rn];function mo(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[wt]}})}const Xm={...Bm};Xm[wt]={...Bm[wt],...Uf.kit,...Uf["kit-duotone"]};const Br=mo(Xm),Bu={...Ux};Bu[wt]={...Bu[wt],...Ff.kit,...Ff["kit-duotone"]};const io=mo(Bu),zu={...Ox};zu[wt]={...zu[wt],...Vx.kit};const zr=mo(zu),Hu={...Nx};Hu[wt]={...Hu[wt],...Hx.kit};const jx=mo(Hu),qx=Px,jm="fa-layers-text",$x=Cx,Yx={...Ax};mo(Yx);const Zx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yc=Wa,Qs=new Set;Object.keys(io[wt]).map(Qs.add.bind(Qs));Object.keys(io[An]).map(Qs.add.bind(Qs));Object.keys(io[Rn]).map(Qs.add.bind(Qs));const Kx=[...Rx,...Bx],Za=lr.FontAwesomeConfig||{};function Qx(n){var e=Mt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function Jx(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Mt&&typeof Mt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const r=Jx(Qx(t));r!=null&&(Za[i]=r)});const qm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hm,replacementClass:Vm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Za.familyPrefix&&(Za.cssPrefix=Za.familyPrefix);const Js={...qm,...Za};Js.autoReplaceSvg||(Js.observeMutations=!1);const Se={};Object.keys(qm).forEach(n=>{Object.defineProperty(Se,n,{enumerable:!0,set:function(e){Js[n]=e,Ka.forEach(t=>t(Se))},get:function(){return Js[n]}})});Object.defineProperty(Se,"familyPrefix",{enumerable:!0,set:function(n){Js.cssPrefix=n,Ka.forEach(e=>e(Se))},get:function(){return Js.cssPrefix}});lr.FontAwesomeConfig=Se;const Ka=[];function e2(n){return Ka.push(n),()=>{Ka.splice(Ka.indexOf(n),1)}}const ki=Fu,hi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function t2(n){if(!n||!Di)return;const e=Mt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=Mt.head.childNodes;let i=null;for(let r=t.length-1;r>-1;r--){const s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return Mt.head.insertBefore(e,i),n}const n2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ro(){let n=12,e="";for(;n-- >0;)e+=n2[Math.random()*62|0];return e}function xa(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function kh(n){return n.classList?xa(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function $m(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i2(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat($m(n[t]),'" '),"").trim()}function jl(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Bh(n){return n.size!==hi.size||n.x!==hi.x||n.y!==hi.y||n.rotate!==hi.rotate||n.flipX||n.flipY}function r2(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function s2(n){let{transform:e,width:t=Fu,height:i=Fu,startCentered:r=!1}=n,s="";return r&&Fm?s+="translate(".concat(e.x/ki-t/2,"em, ").concat(e.y/ki-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/ki,"em), calc(-50% + ").concat(e.y/ki,"em)) "):s+="translate(".concat(e.x/ki,"em, ").concat(e.y/ki,"em) "),s+="scale(".concat(e.size/ki*(e.flipX?-1:1),", ").concat(e.size/ki*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var a2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ym(){const n=Hm,e=Vm,t=Se.cssPrefix,i=Se.replacementClass;let r=a2;if(t!==n||i!==e){const s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}let Bf=!1;function Sc(){Se.autoAddCss&&!Bf&&(t2(Ym()),Bf=!0)}var o2={mixout(){return{dom:{css:Ym,insertCss:Sc}}},hooks(){return{beforeDOMElementCreation(){Sc()},beforeI2svg(){Sc()}}}};const Li=lr||{};Li[Ci]||(Li[Ci]={});Li[Ci].styles||(Li[Ci].styles={});Li[Ci].hooks||(Li[Ci].hooks={});Li[Ci].shims||(Li[Ci].shims=[]);var fi=Li[Ci];const Zm=[],Km=function(){Mt.removeEventListener("DOMContentLoaded",Km),El=1,Zm.map(n=>n())};let El=!1;Di&&(El=(Mt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Mt.readyState),El||Mt.addEventListener("DOMContentLoaded",Km));function l2(n){Di&&(El?setTimeout(n,0):Zm.push(n))}function go(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?$m(n):"<".concat(e," ").concat(i2(t),">").concat(i.map(go).join(""),"</").concat(e,">")}function zf(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Mc=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function c2(n){const e=[];let t=0;const i=n.length;for(;t<i;){const r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){const s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Vu(n){const e=c2(n);return e.length===1?e[0].toString(16):null}function u2(n,e){const t=n.length;let i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Hf(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function Gu(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,r=Hf(e);typeof fi.hooks.addPack=="function"&&!i?fi.hooks.addPack(n,Hf(e)):fi.styles[n]={...fi.styles[n]||{},...r},n==="fas"&&Gu("fa",e)}const{styles:Nr,shims:h2}=fi,f2={[wt]:Object.values(zr[wt]),[An]:Object.values(zr[An]),[Rn]:Object.values(zr[Rn])};let zh=null,Qm={},Jm={},e1={},t1={},n1={};const d2={[wt]:Object.keys(Br[wt]),[An]:Object.keys(Br[An]),[Rn]:Object.keys(Br[Rn])};function p2(n){return~Kx.indexOf(n)}function m2(n,e){const t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!p2(r)?r:null}const i1=()=>{const n=i=>Mc(Nr,(r,s,a)=>(r[a]=Mc(s,i,{}),r),{});Qm=n((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),Jm=n((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),n1=n((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in Nr||Se.autoFetchSvg,t=Mc(h2,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});e1=t.names,t1=t.unicodes,zh=ql(Se.styleDefault,{family:Se.familyDefault})};e2(n=>{zh=ql(n.styleDefault,{family:Se.familyDefault})});i1();function Hh(n,e){return(Qm[n]||{})[e]}function g2(n,e){return(Jm[n]||{})[e]}function nr(n,e){return(n1[n]||{})[e]}function r1(n){return e1[n]||{prefix:null,iconName:null}}function x2(n){const e=t1[n],t=Hh("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function cr(){return zh}const Vh=()=>({prefix:null,iconName:null,rest:[]});function ql(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=wt}=e,i=Br[t][n],r=io[t][n]||io[t][i],s=n in fi.styles?n:null;return r||s||null}const v2={[wt]:Object.keys(zr[wt]),[An]:Object.keys(zr[An]),[Rn]:Object.keys(zr[Rn])};function $l(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,i={[wt]:"".concat(Se.cssPrefix,"-").concat(wt),[An]:"".concat(Se.cssPrefix,"-").concat(An),[Rn]:"".concat(Se.cssPrefix,"-").concat(Rn)};let r=null,s=wt;const a=Tx.filter(l=>l!==km);a.forEach(l=>{(n.includes(i[l])||n.some(c=>v2[l].includes(c)))&&(s=l)});const o=n.reduce((l,c)=>{const u=m2(Se.cssPrefix,c);if(Nr[c]?(c=f2[s].includes(c)?jx[s][c]:c,r=c,l.prefix=c):d2[s].indexOf(c)>-1?(r=c,l.prefix=ql(c,{family:s})):u?l.iconName=u:c!==Se.replacementClass&&!a.some(h=>c===i[h])&&l.rest.push(c),!t&&l.prefix&&l.iconName){const h=r==="fa"?r1(l.iconName):{},f=nr(l.prefix,l.iconName);h.prefix&&(r=null),l.iconName=h.iconName||f||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Nr.far&&Nr.fas&&!Se.autoFetchSvg&&(l.prefix="fas")}return l},Vh());return(n.includes("fa-brands")||n.includes("fab"))&&(o.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===An&&(Nr.fass||Se.autoFetchSvg)&&(o.prefix="fass",o.iconName=nr(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===Rn&&(Nr.fasds||Se.autoFetchSvg)&&(o.prefix="fasds",o.iconName=nr(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=cr()||"fas"),o}class _2{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},Gu(s,r[s]);const a=zr[wt][s];a&&Gu(a,r[s]),i1()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let Vf=[],Vs={};const js={},y2=Object.keys(js);function S2(n,e){let{mixoutsTo:t}=e;return Vf=n,Vs={},Object.keys(js).forEach(i=>{y2.indexOf(i)===-1&&delete js[i]}),Vf.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(t[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{t[s]||(t[s]={}),t[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{Vs[a]||(Vs[a]=[]),Vs[a].push(s[a])})}i.provides&&i.provides(js)}),t}function Wu(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];return(Vs[n]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function qr(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Vs[n]||[]).forEach(s=>{s.apply(null,t)})}function ur(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return js[n]?js[n].apply(null,e):void 0}function Xu(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||cr();if(e)return e=nr(t,e)||e,zf(s1.definitions,t,e)||zf(fi.styles,t,e)}const s1=new _2,M2=()=>{Se.autoReplaceSvg=!1,Se.observeMutations=!1,qr("noAuto")},E2={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Di?(qr("beforeI2svg",n),ur("pseudoElements2svg",n),ur("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;Se.autoReplaceSvg===!1&&(Se.autoReplaceSvg=!0),Se.observeMutations=!0,l2(()=>{b2({autoReplaceSvgRoot:e}),qr("watch",n)})}},w2={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:nr(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=ql(n[0]);return{prefix:t,iconName:nr(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(Se.cssPrefix,"-"))>-1||n.match(qx))){const e=$l(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||cr(),iconName:nr(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=cr();return{prefix:e,iconName:nr(e,n)||n}}}},Pn={noAuto:M2,config:Se,dom:E2,parse:w2,library:s1,findIconDefinition:Xu,toHtml:go},b2=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Mt}=n;(Object.keys(fi.styles).length>0||Se.autoFetchSvg)&&Di&&Se.autoReplaceSvg&&Pn.dom.i2svg({node:e})};function Yl(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>go(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Di)return;const t=Mt.createElement("div");return t.innerHTML=n.html,t.children}}),n}function T2(n){let{children:e,main:t,mask:i,attributes:r,styles:s,transform:a}=n;if(Bh(a)&&t.found&&!i.found){const{width:o,height:l}=t,c={x:o/l/2,y:.5};r.style=jl({...s,"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function A2(n){let{prefix:e,iconName:t,children:i,attributes:r,symbol:s}=n;const a=s===!0?"".concat(e,"-").concat(Se.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:a},children:i}]}]}function Gh(n){const{icons:{main:e,mask:t},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:h=!1}=n,{width:f,height:m}=t.found?t:e,g=i==="fak",x=[Se.replacementClass,r?"".concat(Se.cssPrefix,"-").concat(r):""].filter(R=>u.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(u.classes).join(" ");let d={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(m)}};const p=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/m*16*.0625,"em")}:{};h&&(d.attributes[jr]=""),o&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(c||ro())},children:[o]}),delete d.attributes.title);const b={...d,prefix:i,iconName:r,main:e,mask:t,maskId:l,transform:s,symbol:a,styles:{...p,...u.styles}},{children:v,attributes:M}=t.found&&e.found?ur("generateAbstractMask",b)||{children:[],attributes:{}}:ur("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=v,b.attributes=M,a?A2(b):T2(b)}function Gf(n){const{content:e,width:t,height:i,transform:r,title:s,extra:a,watchable:o=!1}=n,l={...a.attributes,...s?{title:s}:{},class:a.classes.join(" ")};o&&(l[jr]="");const c={...a.styles};Bh(r)&&(c.transform=s2({transform:r,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);const u=jl(c);u.length>0&&(l.style=u);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function R2(n){const{content:e,title:t,extra:i}=n,r={...i.attributes,...t?{title:t}:{},class:i.classes.join(" ")},s=jl(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}const{styles:Ec}=fi;function ju(n){const e=n[0],t=n[1],[i]=n.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(Se.cssPrefix,"-").concat(yc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Se.cssPrefix,"-").concat(yc.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Se.cssPrefix,"-").concat(yc.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:r}}const P2={found:!1,width:512,height:512};function C2(n,e){!Gm&&!Se.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function qu(n,e){let t=e;return e==="fa"&&Se.styleDefault!==null&&(e=cr()),new Promise((i,r)=>{if(t==="fa"){const s=r1(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&Ec[e]&&Ec[e][n]){const s=Ec[e][n];return i(ju(s))}C2(n,e),i({...P2,icon:Se.showMissingIcons&&n?ur("missingIconAbstract")||{}:{}})})}const Wf=()=>{},$u=Se.measurePerformance&&Ao&&Ao.mark&&Ao.measure?Ao:{mark:Wf,measure:Wf},Xa='FA "6.6.0"',L2=n=>($u.mark("".concat(Xa," ").concat(n," begins")),()=>a1(n)),a1=n=>{$u.mark("".concat(Xa," ").concat(n," ends")),$u.measure("".concat(Xa," ").concat(n),"".concat(Xa," ").concat(n," begins"),"".concat(Xa," ").concat(n," ends"))};var Wh={begin:L2,end:a1};const cl=()=>{};function Xf(n){return typeof(n.getAttribute?n.getAttribute(jr):null)=="string"}function I2(n){const e=n.getAttribute?n.getAttribute(Uh):null,t=n.getAttribute?n.getAttribute(Fh):null;return e&&t}function N2(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Se.replacementClass)}function D2(){return Se.autoReplaceSvg===!0?ul.replace:ul[Se.autoReplaceSvg]||ul.replace}function O2(n){return Mt.createElementNS("http://www.w3.org/2000/svg",n)}function U2(n){return Mt.createElement(n)}function o1(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?O2:U2}=e;if(typeof n=="string")return Mt.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(s){i.setAttribute(s,n.attributes[s])}),(n.children||[]).forEach(function(s){i.appendChild(o1(s,{ceFn:t}))}),i}function F2(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ul={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(o1(t),e)}),e.getAttribute(jr)===null&&Se.keepOriginalSource){let t=Mt.createComment(F2(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~kh(e).indexOf(Se.replacementClass))return ul.replace(n);const i=new RegExp("".concat(Se.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const s=t[0].attributes.class.split(" ").reduce((a,o)=>(o===Se.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});t[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=t.map(s=>go(s)).join(`
`);e.setAttribute(jr,""),e.innerHTML=r}};function jf(n){n()}function l1(n,e){const t=typeof e=="function"?e:cl;if(n.length===0)t();else{let i=jf;Se.mutateApproach===Wx&&(i=lr.requestAnimationFrame||jf),i(()=>{const r=D2(),s=Wh.begin("mutate");n.map(r),s(),t()})}}let Xh=!1;function c1(){Xh=!0}function Yu(){Xh=!1}let wl=null;function qf(n){if(!Of||!Se.observeMutations)return;const{treeCallback:e=cl,nodeCallback:t=cl,pseudoElementsCallback:i=cl,observeMutationsRoot:r=Mt}=n;wl=new Of(s=>{if(Xh)return;const a=cr();xa(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Xf(o.addedNodes[0])&&(Se.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&Se.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&Xf(o.target)&&~Zx.indexOf(o.attributeName))if(o.attributeName==="class"&&I2(o.target)){const{prefix:l,iconName:c}=$l(kh(o.target));o.target.setAttribute(Uh,l||a),c&&o.target.setAttribute(Fh,c)}else N2(o.target)&&t(o.target)})}),Di&&wl.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function k2(){wl&&wl.disconnect()}function B2(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function z2(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let r=$l(kh(n));return r.prefix||(r.prefix=cr()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=g2(r.prefix,n.innerText)||Hh(r.prefix,Vu(n.innerText))),!r.iconName&&Se.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function H2(n){const e=xa(n.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return Se.autoA11y&&(t?e["aria-labelledby"]="".concat(Se.replacementClass,"-title-").concat(i||ro()):(e["aria-hidden"]="true",e.focusable="false")),e}function V2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $f(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:r}=z2(n),s=H2(n),a=Wu("parseNodeAttributes",{},n);let o=e.styleParser?B2(n):[];return{iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:hi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...a}}const{styles:G2}=fi;function u1(n){const e=Se.autoReplaceSvg==="nest"?$f(n,{styleParser:!1}):$f(n);return~e.extra.classes.indexOf(jm)?ur("generateLayersText",n,e):ur("generateSvgReplacementMutation",n,e)}let gi=new Set;Wm.map(n=>{gi.add("fa-".concat(n))});Object.keys(Br[wt]).map(gi.add.bind(gi));Object.keys(Br[An]).map(gi.add.bind(gi));Object.keys(Br[Rn]).map(gi.add.bind(gi));gi=[...gi];function Yf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Di)return Promise.resolve();const t=Mt.documentElement.classList,i=u=>t.add("".concat(kf,"-").concat(u)),r=u=>t.remove("".concat(kf,"-").concat(u)),s=Se.autoFetchSvg?gi:Wm.map(u=>"fa-".concat(u)).concat(Object.keys(G2));s.includes("fa")||s.push("fa");const a=[".".concat(jm,":not([").concat(jr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(jr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=xa(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=Wh.begin("onTree"),c=o.reduce((u,h)=>{try{const f=u1(h);f&&u.push(f)}catch(f){Gm||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,h)=>{Promise.all(c).then(f=>{l1(f,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),h(f)})})}function W2(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;u1(n).then(t=>{t&&l1([t],e)})}function X2(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Xu(e||{});let{mask:r}=t;return r&&(r=(r||{}).icon?r:Xu(r||{})),n(i,{...t,mask:r})}}const j2=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=hi,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!n)return;const{prefix:h,iconName:f,icon:m}=n;return Yl({type:"icon",...n},()=>(qr("beforeDOMElementCreation",{iconDefinition:n,params:e}),Se.autoA11y&&(a?c["aria-labelledby"]="".concat(Se.replacementClass,"-title-").concat(o||ro()):(c["aria-hidden"]="true",c.focusable="false")),Gh({icons:{main:ju(m),mask:r?ju(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:f,transform:{...hi,...t},symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var q2={mixout(){return{icon:X2(j2)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Yf,n.nodeCallback=W2,n}}},provides(n){n.i2svg=function(e){const{node:t=Mt,callback:i=()=>{}}=e;return Yf(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:h}=t;return new Promise((f,m)=>{Promise.all([qu(i,a),c.iconName?qu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[x,d]=g;f([e,Gh({icons:{main:x,mask:d},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:h,watchable:!0})])}).catch(m)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:r,transform:s,styles:a}=e;const o=jl(a);o.length>0&&(i.style=o);let l;return Bh(s)&&(l=ur("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),t.push(l||r.icon),{children:t,attributes:i}}}},$2={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Yl({type:"layer"},()=>{qr("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Se.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},Y2={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:r={},styles:s={}}=e;return Yl({type:"counter",content:n},()=>(qr("beforeDOMElementCreation",{content:n,params:e}),R2({content:n.toString(),title:t,extra:{attributes:r,styles:s,classes:["".concat(Se.cssPrefix,"-layers-counter"),...i]}})))}}}},Z2={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=hi,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return Yl({type:"text",content:n},()=>(qr("beforeDOMElementCreation",{content:n,params:e}),Gf({content:n,transform:{...hi,...t},title:i,extra:{attributes:s,styles:a,classes:["".concat(Se.cssPrefix,"-layers-text"),...r]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:r,extra:s}=t;let a=null,o=null;if(Fm){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return Se.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Gf({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const K2=new RegExp('"',"ug"),Zf=[1105920,1112319],Kf={FontAwesome:{normal:"fas",400:"fas"},...Ix,...Lx,...zx},Zu=Object.keys(Kf).reduce((n,e)=>(n[e.toLowerCase()]=Kf[e],n),{}),Q2=Object.keys(Zu).reduce((n,e)=>{const t=Zu[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function J2(n){const e=n.replace(K2,""),t=u2(e,0),i=t>=Zf[0]&&t<=Zf[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vu(r?e[0]:e),isSecondary:i||r}}function ev(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Zu[t]||{})[r]||Q2[t]}function Qf(n,e){const t="".concat(Gx).concat(e.replace(":","-"));return new Promise((i,r)=>{if(n.getAttribute(t)!==null)return i();const a=xa(n.children).filter(f=>f.getAttribute(ku)===e)[0],o=lr.getComputedStyle(n,e),l=o.getPropertyValue("font-family"),c=l.match($x),u=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(a&&!c)return n.removeChild(a),i();if(c&&h!=="none"&&h!==""){const f=o.getPropertyValue("content");let m=ev(l,u);const{value:g,isSecondary:x}=J2(f),d=c[0].startsWith("FontAwesome");let p=Hh(m,g),b=p;if(d){const v=x2(g);v.iconName&&v.prefix&&(p=v.iconName,m=v.prefix)}if(p&&!x&&(!a||a.getAttribute(Uh)!==m||a.getAttribute(Fh)!==b)){n.setAttribute(t,b),a&&n.removeChild(a);const v=V2(),{extra:M}=v;M.attributes[ku]=e,qu(p,m).then(R=>{const T=Gh({...v,icons:{main:R,mask:Vh()},prefix:m,iconName:b,extra:M,watchable:!0}),A=Mt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(A,n.firstChild):n.appendChild(A),A.outerHTML=T.map(D=>go(D)).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function tv(n){return Promise.all([Qf(n,"::before"),Qf(n,"::after")])}function nv(n){return n.parentNode!==document.head&&!~Xx.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(ku)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Jf(n){if(Di)return new Promise((e,t)=>{const i=xa(n.querySelectorAll("*")).filter(nv).map(tv),r=Wh.begin("searchPseudoElements");c1(),Promise.all(i).then(()=>{r(),Yu(),e()}).catch(()=>{r(),Yu(),t()})})}var iv={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=Jf,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=Mt}=e;Se.searchPseudoElements&&Jf(t)}}};let ed=!1;var rv={mixout(){return{dom:{unwatch(){c1(),ed=!0}}}},hooks(){return{bootstrap(){qf(Wu("mutationObserverCallbacks",{}))},noAuto(){k2()},watch(n){const{observeMutationsRoot:e}=n;ed?Yu():qf(Wu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const td=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return t.flipX=!0,t;if(s&&a==="v")return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(s){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a;break}return t},e)};var sv={mixout(){return{parse:{transform:n=>td(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=td(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},f={outer:a,inner:u,path:h};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...f.path}}]}]}}}};const wc={x:0,y:0,width:"100%",height:"100%"};function nd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function av(n){return n.tag==="g"?n.children:[n]}var ov={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?$l(t.split(" ").map(r=>r.trim())):Vh();return i.prefix||(i.prefix=cr()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:h}=s,f=r2({transform:o,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:{...wc,fill:"white"}},g=c.children?{children:c.children.map(nd)}:{},x={tag:"g",attributes:{...f.inner},children:[nd({tag:c.tag,attributes:{...c.attributes,...f.path},...g})]},d={tag:"g",attributes:{...f.outer},children:[x]},p="mask-".concat(a||ro()),b="clip-".concat(a||ro()),v={tag:"mask",attributes:{...wc,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,d]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:av(h)},v]};return t.push(M,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(p,")"),...wc}}),{children:t,attributes:i}}}},lv={provides(n){let e=!1;lr.matchMedia&&(e=lr.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},a={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||a.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),t.push(a),t.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},cv={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},uv=[o2,q2,$2,Y2,Z2,iv,rv,sv,ov,lv,cv];S2(uv,{mixoutsTo:Pn});Pn.noAuto;Pn.config;Pn.library;Pn.dom;const Ku=Pn.parse;Pn.findIconDefinition;Pn.toHtml;const hv=Pn.icon;Pn.layer;Pn.text;Pn.counter;var bc={exports:{}},Tc,id;function fv(){if(id)return Tc;id=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Tc=n,Tc}var Ac,rd;function dv(){if(rd)return Ac;rd=1;var n=fv();function e(){}function t(){}return t.resetWarningCache=e,Ac=function(){function i(a,o,l,c,u,h){if(h!==n){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}i.isRequired=i;function r(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},Ac}var sd;function pv(){return sd||(sd=1,bc.exports=dv()()),bc.exports}var mv=pv();const Ze=Rm(mv);function ad(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ai(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ad(Object(t),!0).forEach(function(i){Gs(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ad(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function bl(n){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(n)}function Gs(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gv(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function xv(n,e){if(n==null)return{};var t=gv(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Qu(n){return vv(n)||_v(n)||yv(n)||Sv()}function vv(n){if(Array.isArray(n))return Ju(n)}function _v(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yv(n,e){if(n){if(typeof n=="string")return Ju(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ju(n,e)}}function Ju(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Sv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mv(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,a=n.shake,o=n.flash,l=n.spin,c=n.spinPulse,u=n.spinReverse,h=n.pulse,f=n.fixedWidth,m=n.inverse,g=n.border,x=n.listItem,d=n.flip,p=n.size,b=n.rotation,v=n.pull,M=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":a,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":f,"fa-inverse":m,"fa-border":g,"fa-li":x,"fa-flip":d===!0,"fa-flip-horizontal":d==="horizontal"||d==="both","fa-flip-vertical":d==="vertical"||d==="both"},Gs(e,"fa-".concat(p),typeof p<"u"&&p!==null),Gs(e,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),Gs(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Gs(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(M).map(function(R){return M[R]?R:null}).filter(function(R){return R})}function Ev(n){return n=n-0,n===n}function h1(n){return Ev(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var wv=["style"];function bv(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Tv(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=h1(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[bv(r)]=s:e[r]=s,e},{})}function f1(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return f1(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=Tv(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[h1(c)]=u}return l},{attrs:{}}),s=t.style,a=s===void 0?{}:s,o=xv(t,wv);return r.attrs.style=ai(ai({},r.attrs.style),a),n.apply(void 0,[e.tag,ai(ai({},r.attrs),o)].concat(Qu(i)))}var d1=!1;try{d1=!0}catch{}function Av(){if(!d1&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function od(n){if(n&&bl(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Ku.icon)return Ku.icon(n);if(n===null)return null;if(n&&bl(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Rc(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Gs({},n,e):{}}var ld={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},xo=St.forwardRef(function(n,e){var t=ai(ai({},ld),n),i=t.icon,r=t.mask,s=t.symbol,a=t.className,o=t.title,l=t.titleId,c=t.maskId,u=od(i),h=Rc("classes",[].concat(Qu(Mv(t)),Qu((a||"").split(" ")))),f=Rc("transform",typeof t.transform=="string"?Ku.transform(t.transform):t.transform),m=Rc("mask",od(r)),g=hv(u,ai(ai(ai(ai({},h),f),m),{},{symbol:s,title:o,titleId:l,maskId:c}));if(!g)return Av("Could not find icon",u),null;var x=g.abstract,d={ref:e};return Object.keys(t).forEach(function(p){ld.hasOwnProperty(p)||(d[p]=t[p])}),Rv(x[0],d)});xo.displayName="FontAwesomeIcon";xo.propTypes={beat:Ze.bool,border:Ze.bool,beatFade:Ze.bool,bounce:Ze.bool,className:Ze.string,fade:Ze.bool,flash:Ze.bool,mask:Ze.oneOfType([Ze.object,Ze.array,Ze.string]),maskId:Ze.string,fixedWidth:Ze.bool,inverse:Ze.bool,flip:Ze.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ze.oneOfType([Ze.object,Ze.array,Ze.string]),listItem:Ze.bool,pull:Ze.oneOf(["right","left"]),pulse:Ze.bool,rotation:Ze.oneOf([0,90,180,270]),shake:Ze.bool,size:Ze.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ze.bool,spinPulse:Ze.bool,spinReverse:Ze.bool,symbol:Ze.oneOfType([Ze.bool,Ze.string]),title:Ze.string,titleId:Ze.string,transform:Ze.oneOfType([Ze.string,Ze.object]),swapOpacity:Ze.bool};var Rv=f1.bind(null,St.createElement),hn=function(){return hn=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},hn.apply(this,arguments)};function Tl(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}var Pc,cd;function Pv(){return cd||(cd=1,Pc=function(e,t,i,r){var s=i?i.call(r,e,t):void 0;if(s!==void 0)return!!s;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var h=e[u],f=t[u];if(s=i?i.call(r,h,f,u):void 0,s===!1||s===void 0&&h!==f)return!1}return!0}),Pc}var Cv=Pv();const Lv=Rm(Cv);var vt="-ms-",Qa="-moz-",ct="-webkit-",p1="comm",Zl="rule",jh="decl",Iv="@import",m1="@keyframes",Nv="@layer",g1=Math.abs,qh=String.fromCharCode,eh=Object.assign;function Dv(n,e){return qt(n,0)^45?(((e<<2^qt(n,0))<<2^qt(n,1))<<2^qt(n,2))<<2^qt(n,3):0}function x1(n){return n.trim()}function bi(n,e){return(n=e.exec(n))?n[0]:n}function Ve(n,e,t){return n.replace(e,t)}function hl(n,e,t){return n.indexOf(e,t)}function qt(n,e){return n.charCodeAt(e)|0}function ea(n,e,t){return n.slice(e,t)}function oi(n){return n.length}function v1(n){return n.length}function ja(n,e){return e.push(n),n}function Ov(n,e){return n.map(e).join("")}function ud(n,e){return n.filter(function(t){return!bi(t,e)})}var Kl=1,ta=1,_1=0,Bn=0,Ut=0,va="";function Ql(n,e,t,i,r,s,a,o){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:Kl,column:ta,length:a,return:"",siblings:o}}function Yi(n,e){return eh(Ql("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Jr(n){for(;n.root;)n=Yi(n.root,{children:[n]});ja(n,n.siblings)}function Uv(){return Ut}function Fv(){return Ut=Bn>0?qt(va,--Bn):0,ta--,Ut===10&&(ta=1,Kl--),Ut}function Kn(){return Ut=Bn<_1?qt(va,Bn++):0,ta++,Ut===10&&(ta=1,Kl++),Ut}function Hr(){return qt(va,Bn)}function fl(){return Bn}function Jl(n,e){return ea(va,n,e)}function th(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kv(n){return Kl=ta=1,_1=oi(va=n),Bn=0,[]}function Bv(n){return va="",n}function Cc(n){return x1(Jl(Bn-1,nh(n===91?n+2:n===40?n+1:n)))}function zv(n){for(;(Ut=Hr())&&Ut<33;)Kn();return th(n)>2||th(Ut)>3?"":" "}function Hv(n,e){for(;--e&&Kn()&&!(Ut<48||Ut>102||Ut>57&&Ut<65||Ut>70&&Ut<97););return Jl(n,fl()+(e<6&&Hr()==32&&Kn()==32))}function nh(n){for(;Kn();)switch(Ut){case n:return Bn;case 34:case 39:n!==34&&n!==39&&nh(Ut);break;case 40:n===41&&nh(n);break;case 92:Kn();break}return Bn}function Vv(n,e){for(;Kn()&&n+Ut!==57;)if(n+Ut===84&&Hr()===47)break;return"/*"+Jl(e,Bn-1)+"*"+qh(n===47?n:Kn())}function Gv(n){for(;!th(Hr());)Kn();return Jl(n,Bn)}function Wv(n){return Bv(dl("",null,null,null,[""],n=kv(n),0,[0],n))}function dl(n,e,t,i,r,s,a,o,l){for(var c=0,u=0,h=a,f=0,m=0,g=0,x=1,d=1,p=1,b=0,v="",M=r,R=s,T=i,A=v;d;)switch(g=b,b=Kn()){case 40:if(g!=108&&qt(A,h-1)==58){hl(A+=Ve(Cc(b),"&","&\f"),"&\f",g1(c?o[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:A+=Cc(b);break;case 9:case 10:case 13:case 32:A+=zv(g);break;case 92:A+=Hv(fl()-1,7);continue;case 47:switch(Hr()){case 42:case 47:ja(Xv(Vv(Kn(),fl()),e,t,l),l);break;default:A+="/"}break;case 123*x:o[c++]=oi(A)*p;case 125*x:case 59:case 0:switch(b){case 0:case 125:d=0;case 59+u:p==-1&&(A=Ve(A,/\f/g,"")),m>0&&oi(A)-h&&ja(m>32?fd(A+";",i,t,h-1,l):fd(Ve(A," ","")+";",i,t,h-2,l),l);break;case 59:A+=";";default:if(ja(T=hd(A,e,t,c,u,r,o,v,M=[],R=[],h,s),s),b===123)if(u===0)dl(A,e,T,T,M,s,h,o,R);else switch(f===99&&qt(A,3)===110?100:f){case 100:case 108:case 109:case 115:dl(n,T,T,i&&ja(hd(n,T,T,0,0,r,o,v,r,M=[],h,R),R),r,R,h,o,i?M:R);break;default:dl(A,T,T,T,[""],R,0,o,R)}}c=u=m=0,x=p=1,v=A="",h=a;break;case 58:h=1+oi(A),m=g;default:if(x<1){if(b==123)--x;else if(b==125&&x++==0&&Fv()==125)continue}switch(A+=qh(b),b*x){case 38:p=u>0?1:(A+="\f",-1);break;case 44:o[c++]=(oi(A)-1)*p,p=1;break;case 64:Hr()===45&&(A+=Cc(Kn())),f=Hr(),u=h=oi(v=A+=Gv(fl())),b++;break;case 45:g===45&&oi(A)==2&&(x=0)}}return s}function hd(n,e,t,i,r,s,a,o,l,c,u,h){for(var f=r-1,m=r===0?s:[""],g=v1(m),x=0,d=0,p=0;x<i;++x)for(var b=0,v=ea(n,f+1,f=g1(d=a[x])),M=n;b<g;++b)(M=x1(d>0?m[b]+" "+v:Ve(v,/&\f/g,m[b])))&&(l[p++]=M);return Ql(n,e,t,r===0?Zl:o,l,c,u,h)}function Xv(n,e,t,i){return Ql(n,e,t,p1,qh(Uv()),ea(n,2,-2),0,i)}function fd(n,e,t,i,r){return Ql(n,e,t,jh,ea(n,0,i),ea(n,i+1,-1),i,r)}function y1(n,e,t){switch(Dv(n,e)){case 5103:return ct+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+n+n;case 4789:return Qa+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+n+Qa+n+vt+n+n;case 5936:switch(qt(n,e+11)){case 114:return ct+n+vt+Ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ct+n+vt+Ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ct+n+vt+Ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ct+n+vt+n+n;case 6165:return ct+n+vt+"flex-"+n+n;case 5187:return ct+n+Ve(n,/(\w+).+(:[^]+)/,ct+"box-$1$2"+vt+"flex-$1$2")+n;case 5443:return ct+n+vt+"flex-item-"+Ve(n,/flex-|-self/g,"")+(bi(n,/flex-|baseline/)?"":vt+"grid-row-"+Ve(n,/flex-|-self/g,""))+n;case 4675:return ct+n+vt+"flex-line-pack"+Ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return ct+n+vt+Ve(n,"shrink","negative")+n;case 5292:return ct+n+vt+Ve(n,"basis","preferred-size")+n;case 6060:return ct+"box-"+Ve(n,"-grow","")+ct+n+vt+Ve(n,"grow","positive")+n;case 4554:return ct+Ve(n,/([^-])(transform)/g,"$1"+ct+"$2")+n;case 6187:return Ve(Ve(Ve(n,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),n,"")+n;case 5495:case 3959:return Ve(n,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return Ve(Ve(n,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+n+n;case 4200:if(!bi(n,/flex-|baseline/))return vt+"grid-column-align"+ea(n,e)+n;break;case 2592:case 3360:return vt+Ve(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,r){return e=r,bi(i.props,/grid-\w+-end/)})?~hl(n+(t=t[e].value),"span",0)?n:vt+Ve(n,"-start","")+n+vt+"grid-row-span:"+(~hl(t,"span",0)?bi(t,/\d+/):+bi(t,/\d+/)-+bi(n,/\d+/))+";":vt+Ve(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return bi(i.props,/grid-\w+-start/)})?n:vt+Ve(Ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ve(n,/(.+)-inline(.+)/,ct+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oi(n)-1-e>6)switch(qt(n,e+1)){case 109:if(qt(n,e+4)!==45)break;case 102:return Ve(n,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+Qa+(qt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~hl(n,"stretch",0)?y1(Ve(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,a,o,l,c){return vt+r+":"+s+c+(a?vt+r+"-span:"+(o?l:+l-+s)+c:"")+n});case 4949:if(qt(n,e+6)===121)return Ve(n,":",":"+ct)+n;break;case 6444:switch(qt(n,qt(n,14)===45?18:11)){case 120:return Ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ct+(qt(n,14)===45?"inline-":"")+"box$3$1"+ct+"$2$3$1"+vt+"$2box$3")+n;case 100:return Ve(n,":",":"+vt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(n,"scroll-","scroll-snap-")+n}return n}function Al(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function jv(n,e,t,i){switch(n.type){case Nv:if(n.children.length)break;case Iv:case jh:return n.return=n.return||n.value;case p1:return"";case m1:return n.return=n.value+"{"+Al(n.children,i)+"}";case Zl:if(!oi(n.value=n.props.join(",")))return""}return oi(t=Al(n.children,i))?n.return=n.value+"{"+t+"}":""}function qv(n){var e=v1(n);return function(t,i,r,s){for(var a="",o=0;o<e;o++)a+=n[o](t,i,r,s)||"";return a}}function $v(n){return function(e){e.root||(e=e.return)&&n(e)}}function Yv(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case jh:n.return=y1(n.value,n.length,t);return;case m1:return Al([Yi(n,{value:Ve(n.value,"@","@"+ct)})],i);case Zl:if(n.length)return Ov(t=n.props,function(r){switch(bi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(Yi(n,{props:[Ve(r,/:(read-\w+)/,":"+Qa+"$1")]})),Jr(Yi(n,{props:[r]})),eh(n,{props:ud(t,i)});break;case"::placeholder":Jr(Yi(n,{props:[Ve(r,/:(plac\w+)/,":"+ct+"input-$1")]})),Jr(Yi(n,{props:[Ve(r,/:(plac\w+)/,":"+Qa+"$1")]})),Jr(Yi(n,{props:[Ve(r,/:(plac\w+)/,vt+"input-$1")]})),Jr(Yi(n,{props:[r]})),eh(n,{props:ud(t,i)});break}return""})}}var Zv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wn={},na=typeof process<"u"&&wn!==void 0&&(wn.REACT_APP_SC_ATTR||wn.SC_ATTR)||"data-styled",S1="active",M1="data-styled-version",ec="6.1.19",$h=`/*!sc*/
`,Rl=typeof window<"u"&&typeof document<"u",Kv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wn!==void 0&&wn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wn.REACT_APP_SC_DISABLE_SPEEDY!==""?wn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wn!==void 0&&wn.SC_DISABLE_SPEEDY!==void 0&&wn.SC_DISABLE_SPEEDY!==""&&wn.SC_DISABLE_SPEEDY!=="false"&&wn.SC_DISABLE_SPEEDY),tc=Object.freeze([]),ia=Object.freeze({});function Qv(n,e,t){return t===void 0&&(t=ia),n.theme!==t.theme&&n.theme||e||t.theme}var E1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e_=/(^-|-$)/g;function dd(n){return n.replace(Jv,"-").replace(e_,"")}var t_=/(a)(d)/gi,Ro=52,pd=function(n){return String.fromCharCode(n+(n>25?39:97))};function ih(n){var e,t="";for(e=Math.abs(n);e>Ro;e=e/Ro|0)t=pd(e%Ro)+t;return(pd(e%Ro)+t).replace(t_,"$1-$2")}var Lc,w1=5381,Ws=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},b1=function(n){return Ws(w1,n)};function n_(n){return ih(b1(n)>>>0)}function i_(n){return n.displayName||n.name||"Component"}function Ic(n){return typeof n=="string"&&!0}var T1=typeof Symbol=="function"&&Symbol.for,A1=T1?Symbol.for("react.memo"):60115,r_=T1?Symbol.for("react.forward_ref"):60112,s_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o_=((Lc={})[r_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[A1]=R1,Lc);function md(n){return("type"in(e=n)&&e.type.$$typeof)===A1?R1:"$$typeof"in n?o_[n.$$typeof]:s_;var e}var l_=Object.defineProperty,c_=Object.getOwnPropertyNames,gd=Object.getOwnPropertySymbols,u_=Object.getOwnPropertyDescriptor,h_=Object.getPrototypeOf,xd=Object.prototype;function P1(n,e,t){if(typeof e!="string"){if(xd){var i=h_(e);i&&i!==xd&&P1(n,i,t)}var r=c_(e);gd&&(r=r.concat(gd(e)));for(var s=md(n),a=md(e),o=0;o<r.length;++o){var l=r[o];if(!(l in a_||t&&t[l]||a&&l in a||s&&l in s)){var c=u_(e,l);try{l_(n,l,c)}catch{}}}}return n}function ra(n){return typeof n=="function"}function Yh(n){return typeof n=="object"&&"styledComponentId"in n}function Ur(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function vd(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function so(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function rh(n,e,t){if(t===void 0&&(t=!1),!t&&!so(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=rh(n[i],e[i]);else if(so(e))for(var i in e)n[i]=rh(n[i],e[i]);return n}function Zh(n,e){Object.defineProperty(n,"toString",{value:e})}function vo(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var f_=(function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw vo(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=r;a<s;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),r=i+t;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,a=r;a<s;a++)t+="".concat(this.tag.getRule(a)).concat($h);return t},n})(),pl=new Map,Pl=new Map,ml=1,Po=function(n){if(pl.has(n))return pl.get(n);for(;Pl.has(ml);)ml++;var e=ml++;return pl.set(n,e),Pl.set(e,n),e},d_=function(n,e){ml=e+1,pl.set(n,e),Pl.set(e,n)},p_="style[".concat(na,"][").concat(M1,'="').concat(ec,'"]'),m_=new RegExp("^".concat(na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),g_=function(n,e,t){for(var i,r=t.split(","),s=0,a=r.length;s<a;s++)(i=r[s])&&n.registerName(e,i)},x_=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split($h),r=[],s=0,a=i.length;s<a;s++){var o=i[s].trim();if(o){var l=o.match(m_);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(d_(u,c),g_(n,u,l[3]),n.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},_d=function(n){for(var e=document.querySelectorAll(p_),t=0,i=e.length;t<i;t++){var r=e[t];r&&r.getAttribute(na)!==S1&&(x_(n,r),r.parentNode&&r.parentNode.removeChild(r))}};function v_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var C1=function(n){var e=document.head,t=n||e,i=document.createElement("style"),r=(function(o){var l=Array.from(o.querySelectorAll("style[".concat(na,"]")));return l[l.length-1]})(t),s=r!==void 0?r.nextSibling:null;i.setAttribute(na,S1),i.setAttribute(M1,ec);var a=v_();return a&&i.setAttribute("nonce",a),t.insertBefore(i,s),i},__=(function(){function n(e){this.element=C1(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var a=i[r];if(a.ownerNode===t)return a}throw vo(17)})(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n})(),y_=(function(){function n(e){this.element=C1(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n})(),S_=(function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n})(),yd=Rl,M_={isServer:!Rl,useCSSOMInjection:!Kv},L1=(function(){function n(e,t,i){e===void 0&&(e=ia),t===void 0&&(t={});var r=this;this.options=hn(hn({},M_),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Rl&&yd&&(yd=!1,_d(this)),Zh(this,function(){return(function(s){for(var a=s.getTag(),o=a.length,l="",c=function(h){var f=(function(p){return Pl.get(p)})(h);if(f===void 0)return"continue";var m=s.names.get(f),g=a.getGroup(h);if(m===void 0||!m.size||g.length===0)return"continue";var x="".concat(na,".g").concat(h,'[id="').concat(f,'"]'),d="";m!==void 0&&m.forEach(function(p){p.length>0&&(d+="".concat(p,","))}),l+="".concat(g).concat(x,'{content:"').concat(d,'"}').concat($h)},u=0;u<o;u++)c(u);return l})(r)})}return n.registerId=function(e){return Po(e)},n.prototype.rehydrate=function(){!this.server&&Rl&&_d(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(hn(hn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(t){var i=t.useCSSOMInjection,r=t.target;return t.isServer?new S_(r):i?new __(r):new y_(r)})(this.options),new f_(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Po(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Po(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Po(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n})(),E_=/&/g,w_=/^\s*\/\/.*$/gm;function I1(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=I1(t.children,e)),t})}function N1(n){var e,t,i,r=n===void 0?ia:n,s=r.options,a=s===void 0?ia:s,o=r.plugins,l=o===void 0?tc:o,c=function(f,m,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(e):f},u=l.slice();u.push(function(f){f.type===Zl&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(E_,t).replace(i,c))}),a.prefix&&u.push(Yv),u.push(jv);var h=function(f,m,g,x){m===void 0&&(m=""),g===void 0&&(g=""),x===void 0&&(x="&"),e=x,t=m,i=new RegExp("\\".concat(t,"\\b"),"g");var d=f.replace(w_,""),p=Wv(g||m?"".concat(g," ").concat(m," { ").concat(d," }"):d);a.namespace&&(p=I1(p,a.namespace));var b=[];return Al(p,qv(u.concat($v(function(v){return b.push(v)})))),b};return h.hash=l.length?l.reduce(function(f,m){return m.name||vo(15),Ws(f,m.name)},w1).toString():"",h}var b_=new L1,sh=N1(),Kh=St.createContext({shouldForwardProp:void 0,styleSheet:b_,stylis:sh});Kh.Consumer;var T_=St.createContext(void 0);function ah(){return Be.useContext(Kh)}function D1(n){var e=Be.useState(n.stylisPlugins),t=e[0],i=e[1],r=ah().styleSheet,s=Be.useMemo(function(){var l=r;return n.sheet?l=n.sheet:n.target&&(l=l.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[n.disableCSSOMInjection,n.sheet,n.target,r]),a=Be.useMemo(function(){return N1({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:t})},[n.enableVendorPrefixes,n.namespace,t]);Be.useEffect(function(){Lv(t,n.stylisPlugins)||i(n.stylisPlugins)},[n.stylisPlugins]);var o=Be.useMemo(function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:s,stylis:a}},[n.shouldForwardProp,s,a]);return St.createElement(Kh.Provider,{value:o},St.createElement(T_.Provider,{value:a},n.children))}var A_=(function(){function n(e,t){var i=this;this.inject=function(r,s){s===void 0&&(s=sh);var a=i.name+s.hash;r.hasNameForId(i.id,a)||r.insertRules(i.id,a,s(i.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Zh(this,function(){throw vo(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=sh),this.name+e.hash},n})(),R_=function(n){return n>="A"&&n<="Z"};function Sd(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;R_(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var O1=function(n){return n==null||n===!1||n===""},U1=function(n){var e,t,i=[];for(var r in n){var s=n[r];n.hasOwnProperty(r)&&!O1(s)&&(Array.isArray(s)&&s.isCss||ra(s)?i.push("".concat(Sd(r),":"),s,";"):so(s)?i.push.apply(i,Tl(Tl(["".concat(r," {")],U1(s),!1),["}"],!1)):i.push("".concat(Sd(r),": ").concat((e=r,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Zv||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Vr(n,e,t,i){if(O1(n))return[];if(Yh(n))return[".".concat(n.styledComponentId)];if(ra(n)){if(!ra(s=n)||s.prototype&&s.prototype.isReactComponent||!e)return[n];var r=n(e);return Vr(r,e,t,i)}var s;return n instanceof A_?t?(n.inject(t,i),[n.getName(i)]):[n]:so(n)?U1(n):Array.isArray(n)?Array.prototype.concat.apply(tc,n.map(function(a){return Vr(a,e,t,i)})):[n.toString()]}function P_(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(ra(t)&&!Yh(t))return!1}return!0}var C_=b1(ec),L_=(function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&P_(e),this.componentId=t,this.baseHash=Ws(C_,t),this.baseStyle=i,L1.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ur(r,this.staticRulesId);else{var s=vd(Vr(this.rules,e,t,i)),a=ih(Ws(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=i(s,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Ur(r,a),this.staticRulesId=a}else{for(var l=Ws(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var h=this.rules[u];if(typeof h=="string")c+=h;else if(h){var f=vd(Vr(h,e,t,i));l=Ws(l,f+u),c+=f}}if(c){var m=ih(l>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,i(c,".".concat(m),void 0,this.componentId)),r=Ur(r,m)}}return r},n})(),F1=St.createContext(void 0);F1.Consumer;var Nc={};function I_(n,e,t){var i=Yh(n),r=n,s=!Ic(n),a=e.attrs,o=a===void 0?tc:a,l=e.componentId,c=l===void 0?(function(M,R){var T=typeof M!="string"?"sc":dd(M);Nc[T]=(Nc[T]||0)+1;var A="".concat(T,"-").concat(n_(ec+T+Nc[T]));return R?"".concat(R,"-").concat(A):A})(e.displayName,e.parentComponentId):l,u=e.displayName,h=u===void 0?(function(M){return Ic(M)?"styled.".concat(M):"Styled(".concat(i_(M),")")})(n):u,f=e.displayName&&e.componentId?"".concat(dd(e.displayName),"-").concat(e.componentId):e.componentId||c,m=i&&r.attrs?r.attrs.concat(o).filter(Boolean):o,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var x=r.shouldForwardProp;if(e.shouldForwardProp){var d=e.shouldForwardProp;g=function(M,R){return x(M,R)&&d(M,R)}}else g=x}var p=new L_(t,f,i?r.componentStyle:void 0);function b(M,R){return(function(T,A,D){var E=T.attrs,y=T.componentStyle,C=T.defaultProps,V=T.foldedComponentIds,U=T.styledComponentId,z=T.target,Y=St.useContext(F1),X=ah(),ee=T.shouldForwardProp||X.shouldForwardProp,W=Qv(A,Y,C)||ia,le=(function(te,me,ae){for(var Ue,Ce=hn(hn({},me),{className:void 0,theme:ae}),$e=0;$e<te.length;$e+=1){var L=ra(Ue=te[$e])?Ue(Ce):Ue;for(var Fe in L)Ce[Fe]=Fe==="className"?Ur(Ce[Fe],L[Fe]):Fe==="style"?hn(hn({},Ce[Fe]),L[Fe]):L[Fe]}return me.className&&(Ce.className=Ur(Ce.className,me.className)),Ce})(E,A,W),xe=le.as||z,_e={};for(var Oe in le)le[Oe]===void 0||Oe[0]==="$"||Oe==="as"||Oe==="theme"&&le.theme===W||(Oe==="forwardedAs"?_e.as=le.forwardedAs:ee&&!ee(Oe,xe)||(_e[Oe]=le[Oe]));var st=(function(te,me){var ae=ah(),Ue=te.generateAndInjectStyles(me,ae.styleSheet,ae.stylis);return Ue})(y,le),j=Ur(V,U);return st&&(j+=" "+st),le.className&&(j+=" "+le.className),_e[Ic(xe)&&!E1.has(xe)?"class":"className"]=j,D&&(_e.ref=D),Be.createElement(xe,_e)})(v,M,R)}b.displayName=h;var v=St.forwardRef(b);return v.attrs=m,v.componentStyle=p,v.displayName=h,v.shouldForwardProp=g,v.foldedComponentIds=i?Ur(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=f,v.target=i?r.target:n,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=i?(function(R){for(var T=[],A=1;A<arguments.length;A++)T[A-1]=arguments[A];for(var D=0,E=T;D<E.length;D++)rh(R,E[D],!0);return R})({},r.defaultProps,M):M}}),Zh(v,function(){return".".concat(v.styledComponentId)}),s&&P1(v,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Md(n,e){for(var t=[n[0]],i=0,r=e.length;i<r;i+=1)t.push(e[i],n[i+1]);return t}var Ed=function(n){return Object.assign(n,{isCss:!0})};function N_(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ra(n)||so(n))return Ed(Vr(Md(tc,Tl([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vr(i):Ed(Vr(Md(i,e)))}function oh(n,e,t){if(t===void 0&&(t=ia),!e)throw vo(1,e);var i=function(r){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return n(e,t,N_.apply(void 0,Tl([r],s,!1)))};return i.attrs=function(r){return oh(n,e,hn(hn({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return oh(n,e,hn(hn({},t),r))},i}var k1=function(n){return oh(I_,n)},ut=k1;E1.forEach(function(n){ut[n]=k1(n)});const ge={textWhite:"rgba(223, 223, 223, 1)",textGrey:"rgba(156, 156, 156, 1)",dangerRed:"rgba(243, 151, 143, 1)",dangerRedPressed:"rgba(240, 97, 84,1)",panelBackground:"rgba(38, 38, 38, 0.7)",panelBorder:"rgba(61, 61, 63, 0.7)",buttonBackground:"rgba(61, 61, 63, 0.6)",buttonPressed:"rgba(61, 61, 63, 1)",gradientGrey:"linear-gradient(to bottom, #343434, #393939)",gradientGreyTranslucent:"linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))",gradientLightGreyTranslucent:"linear-gradient(to bottom, rgba(75, 75, 75, 0.75), rgba(80, 80, 80, 0.75))"},Me={height:"30px",minWidth:"30px",fontSize:"14px",radiusMiddle:"3px",radiusSolo:"10px",radiusFirst:"10px 3px 3px 10px",radiusLast:"3px 10px 10px 3px",widthLong:"70px",widthShort:"30px",gap:"3px"},an=ut.button`
	background: ${ge.gradientGreyTranslucent};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${ge.textWhite};
	border: 1px solid transparent;
	border-radius: ${Me.radiusMiddle};
	font-size: ${Me.fontSize};
	height: ${Me.height};
	min-width: ${Me.minWidth};
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:first-child {
		border-radius: ${({$reverse:n})=>n?Me.radiusLast:Me.radiusFirst};
	}

	&:last-child {
		border-radius: ${({$reverse:n})=>n?Me.radiusFirst:Me.radiusLast};
	}

	&:first-child:last-child {
		border-radius: ${Me.radiusSolo};
	}
`,lh=ut.div`
	padding: 2px;
	display: flex;
	background-color: ${ge.panelBackground};
	border: 1px solid ${ge.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	justify-content: center;
	pointer-events: all;
	border-radius: 14px;
	align-items: center;
	height: 24px;
`,Dn=ut.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${ge.textWhite};
	border-radius: 4px;
	font-size: 16px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	padding: 1px 5px;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: ${ge.buttonPressed};
	}

	&:active {
		background-color: ${ge.buttonPressed};
	}

	&:focus {
		outline: none;
	}

	&:first-child {
		border-radius: 12px 4px 4px 12px;
	}

	&:last-child {
		border-radius: 4px 12px 12px 4px;
	}

	&:first-child:last-child {
		border-radius: 12px;
	}
`,Ti=ut.div`
	background-color: ${({$pressed:n})=>n?ge.buttonPressed:ge.buttonBackground};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${ge.textWhite};
	border-radius: 8px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 30px;
	width: 30px;
	transition: all 0.2s ease-in-out;
`,sa=ut.div`
	display: flex;
	align-items: center;
	height: 30px;
	margin-bottom: 3px;
	justify-content: flex-start;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};

	&:last-child {
		margin-bottom: 0;
	}
`,sr=ut.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	height: 100%;
	justify-content: space-between;
	align-items: center;
	margin: ${({$reverse:n})=>n?"0 5px 0 0":"0 0 0 5px"};
	gap: 3px;
`;ut.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`;ut.div`
	position: absolute;
	background-color: ${ge.textWhite};
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;const B1=ut.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background: ${ge.gradientGreyTranslucent};
	border: none;
	height: 100%;
	width: ${Me.widthLong};
	cursor: pointer;
	margin: 0;
	transition: all 0.2s ease-in-out;
	border-radius: ${({$reverse:n})=>n?Me.radiusFirst:Me.radiusLast};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 30px;
		background-color: ${ge.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 10px;
		height: 30px;
		background-color: ${ge.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: ${ge.textWhite};
		border-radius: ${Me.radiusMiddle};
	}
`;ut.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:n})=>n?"flex-start":"flex-end"};
	justify-content: center;
	margin: ${({$reverse:n})=>n?"2px -26px 0 0":"2px 0 0 -26px"};
`;ut.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	align-items: center;
	justify-content: center;
`;const tt=ut(xo)`
	height: ${({$size:n=14})=>`${n}px`};
	min-height: ${({$size:n=14})=>`${n}px`};
	max-height: ${({$size:n=14})=>`${n}px`};
	width: ${({$size:n=14})=>`${n}px`};
	min-width: ${({$size:n=14})=>`${n}px`};
	max-width: ${({$size:n=14})=>`${n}px`};
	transform: ${({$reverse:n})=>n?"scaleX(-1)":"unset"};
`,_a=ut(xo)`
	height: 18px;
	min-height: 18px;
	max-height: 18px;
	width: 18px;
	min-width: 18px;
	max-width: 18px;
	margin: 6px;
	transform: ${({$reverse:n})=>n?"scaleX(-1)":"unset"};
`,ao=ut.div`
	position: fixed;
	padding: 5px;
	font-family: Arial, sans-serif;
	color: ${ge.textWhite};
	pointer-events: all;
	background-color: ${ge.panelBackground};
	border: 1px solid ${ge.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	border-radius: 12px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`,$r=ut.hr`
	width: ${({$horizontal:n=!0})=>n?"unset":"1px"};
	height: ${({$horizontal:n=!0})=>n?"1px":"unset"};
	background-color: ${ge.panelBorder};
	margin: 5px 3px;
	border: none;
`,Gr=ut.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${({$isRed:n})=>n?ge.dangerRed:ge.textWhite};
	font-size: 12px;
	padding: 3px;
	text-transform: none;
	box-shadow: none;

	&:hover {
		color: ${({$isRed:n})=>n?ge.dangerRedPressed:"#ffffff"};
	}

	&:active {
		color: ${({$isRed:n})=>n?ge.dangerRedPressed:"#ffffff"};
	}

	&:focus {
		outline: none;
	}
`,z1=ut.div`
	display: flex;
	flex-direction: row;
	gap: ${Me.gap};
	height: 25px;
`,H1=ut.input.attrs({type:"text"})`
	width: 50px;
	outline: none;
	background: ${ge.gradientGrey};
	border: 1px solid transparent;
	border-radius: 5px;
	height: 25px;
	color: ${ge.textWhite};
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&:read-only {
		background: ${ge.gradientGreyTranslucent};
	}

	&:invalid {
		background-color: ${ge.dangerRed};
	}
`,V1=ut.span`
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	color: ${ge.textGrey};
	font-size: 10px;
`,D_={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Qh={prefix:"fas",iconName:"fingerprint",icon:[512,512,[],"f577","M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]},O_={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},U_={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},G1={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"]},W1={prefix:"fas",iconName:"hand",icon:[512,512,[129306,9995,"hand-paper"],"f256","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]},X1={prefix:"fas",iconName:"plug",icon:[384,512,[128268],"f1e6","M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"]},F_={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},k_={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},B_={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},z_={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]},H_={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},V_={prefix:"fas",iconName:"person-shelter",icon:[512,512,[],"e54f","M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.4L256 68.9 448 178.6 448 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 280l0-88 16 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-174.5 26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5 200 488c0 13.3 10.7 24 24 24s24-10.7 24-24z"]},Jh={prefix:"fas",iconName:"hand-scissors",icon:[512,512,[],"f257","M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9c0 0 0 .1 0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z"]},G_={prefix:"fas",iconName:"street-view",icon:[512,512,[],"f21d","M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64l0 48c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l38.7 0c16.3 0 30-12.3 31.8-28.5L318.2 304l1.8 0c17.7 0 32-14.3 32-32l0-48c0-35.3-28.7-64-64-64l-64 0zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"]},j1={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},W_={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},X_={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},j_={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"]},wd={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},bd={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},ef={prefix:"fas",iconName:"hand-lizard",icon:[512,512,[],"f258","M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z"]},Td={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},q_={prefix:"fas",iconName:"vr-cardboard",icon:[640,512,[],"f729","M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},$_={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]},nc={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Y_={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},Ge=Me.height,Z_=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z",style:{fill:"#fff",fillOpacity:1}})]}),K_=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z",style:{fill:"#fff",fillOpacity:1}})]}),Q_=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z",style:{fill:"#fff",fillOpacity:1}})]}),J_=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z",style:{fill:"#fff",fillOpacity:1}})]}),ey=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:.5,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),ty=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),ny=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),iy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),ry=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),sy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),ay=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),oy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),ly=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),cy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),uy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),hy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),fy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),dy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",d:"M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),py=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",d:"m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),my=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:Ge,height:Ge,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("path",{stroke:"#fff",d:"m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),_.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),gy=()=>_.jsx(_a,{icon:Jh,$reverse:!0}),xy=()=>_.jsx(_a,{icon:Jh,$reverse:!1}),vy=()=>_.jsx(_a,{icon:ef,$reverse:!0}),_y=()=>_.jsx(_a,{icon:ef,$reverse:!1}),yy={"x-button-left":Z_,"y-button-left":K_,"a-button-right":Q_,"b-button-right":J_,"thumbstick-left":ey,"thumbstick-up-left":ny,"thumbstick-down-left":iy,"thumbstick-right-left":sy,"thumbstick-left-left":ry,"pose-left":gy,"pinch-left":vy,"thumbstick-right":ty,"thumbstick-up-right":ay,"thumbstick-down-right":oy,"thumbstick-right-right":cy,"thumbstick-left-right":ly,"trigger-left":fy,"trigger-right":dy,"squeeze-left":uy,"squeeze-right":hy,"thumbrest-left":py,"thumbrest-right":my,"pose-right":xy,"pinch-right":_y},oo=({buttonName:n,handedness:e})=>{const t=`${n}-${e}`,i=yy[t];return i?_.jsx(i,{}):_.jsx("div",{style:{width:Me.height,height:Me.height}})},Sy=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("g",{clipPath:"url(#a)",children:_.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),_.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),_.jsx("defs",{children:_.jsx("clipPath",{id:"a",children:_.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),My=({scale:n=1.2})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",transform:`scale(${n}, ${n})`,children:[_.jsx("g",{clipPath:"url(#a)",children:_.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),_.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),_.jsx("defs",{children:_.jsx("clipPath",{id:"a",children:_.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),Ey=({size:n=14,color:e=ge.textWhite})=>_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:_.jsx("path",{stroke:e,strokeWidth:1.5,d:"M7 13.037V5.512m-.324.289 6.3-2.275m-11.952 0 6.3 2.275m.23 6.937 4.233-1.528a1.627 1.627 0 0 0 1.076-1.53V4.396c0-.685-.43-1.297-1.076-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.075 1.53V9.68c0 .686.43 1.298 1.075 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z",style:{stroke:e,strokeOpacity:1}})}),wy=({size:n=14,color:e=ge.textWhite})=>_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:_.jsx("path",{stroke:e,strokeWidth:1.2,d:"M7 13.037V5.512M3.937 11.9V4.375m6.126 7.525V4.375M6.675 5.8l6.3-2.275m-9.275.962 6.3-2.275M1.024 3.526l6.3 2.275M6.85 9.388l6.3-2.275m-12.302 0 6.3 2.276m-3.15-7.176 6.3 2.276m-2.746 8.248 4.234-1.527a1.627 1.627 0 0 0 1.075-1.53V4.396c0-.685-.43-1.297-1.075-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.076 1.53V9.68c0 .686.43 1.298 1.076 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z",style:{stroke:e,strokeOpacity:1}})}),by=({size:n=14,color:e=ge.textWhite})=>_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:_.jsx("path",{stroke:e,strokeWidth:1.2,d:"M1.225 8.225h11.55M2.1 5.075h9.8m-7 7L5.6 2.1m3.5 9.975L8.4 2.1m-5.708 9.712h8.617a1.75 1.75 0 0 0 1.696-2.183l-1.567-6.125a1.75 1.75 0 0 0-1.695-1.317H4.258c-.8 0-1.498.542-1.696 1.317L.996 9.629a1.75 1.75 0 0 0 1.696 2.183Z",style:{stroke:e,strokeOpacity:1}})}),ch=({size:n=14,color:e=ge.textWhite})=>_.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:[_.jsx("path",{fill:e,d:"M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z",style:{fill:e,fillOpacity:1}}),_.jsx("path",{fill:e,fillRule:"evenodd",d:"M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z",clipRule:"evenodd",style:{fill:e,fillOpacity:1}})]}),jn={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:_.jsx(tt,{icon:k_}),Backspace:_.jsx(tt,{icon:X_}),Enter:_.jsx(tt,{style:{transform:"rotate(90deg)"},icon:$_}),ShiftLeft:_.jsx(tt,{icon:wd}),ShiftRight:_.jsx(tt,{icon:wd}),Space:" ",ArrowUp:_.jsx(tt,{icon:B_}),ArrowDown:_.jsx(tt,{icon:W_}),ArrowLeft:_.jsx(tt,{icon:U_}),ArrowRight:_.jsx(tt,{icon:O_}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:_.jsx(Sy,{}),MouseRight:_.jsx(My,{})},Ty={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE",pinch:"MouseLeft",pose:"KeyF"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight",pinch:"MouseRight",pose:"Backslash"}},tf=Dh(n=>({keyMap:Ty,bindKey:(e,t,i="Unmapped")=>n(r=>({keyMap:{...r.keyMap,[e]:{...r.keyMap[e],[t]:i}}}))})),Ay=ut.div`
	display: flex;
	height: ${Me.height};
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${Me.gap};

	&:last-child {
		margin-bottom: 0;
	}
`,q1=({handedness:n,actions:e})=>{const{keyMap:t,bindKey:i}=tf(),[r,s]=Be.useState(null),a=o=>{s({action:o})};return Be.useEffect(()=>{const o=u=>{r&&jn[u.code]&&(i(n,r.action,u.code),s(null))},l=u=>{if(r){const h=u.button===0?"MouseLeft":u.button===2?"MouseRight":null;h&&jn[h]&&(i(n,r.action,h),s(null))}},c=u=>{u.preventDefault()};return window.addEventListener("keydown",o),window.addEventListener("mousedown",l),window.addEventListener("contextmenu",c),()=>{window.removeEventListener("keydown",o),window.removeEventListener("mousedown",l),window.removeEventListener("contextmenu",c)}},[r]),Object.keys(t[n]).filter(o=>e.includes(o)).map(o=>_.jsxs(Ay,{children:[_.jsx(oo,{buttonName:o==="up"?"thumbstick":o,handedness:n}),_.jsxs(sr,{$reverse:!1,children:[_.jsx(an,{$reverse:!1,style:{width:"100px",background:r&&r.action===o?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent},onClick:()=>a(o),onContextMenu:l=>l.preventDefault(),children:t[n][o]}),_.jsx(an,{style:{width:Me.widthShort},$reverse:!1,onClick:()=>i(n,o),onContextMenu:l=>l.preventDefault(),children:_.jsx(xo,{icon:F_})})]})]},o))},Ry=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const[r,s]=Be.useState(!1),[a,o]=Be.useState(!1),[l,c]=Be.useState(!1),[u,h]=Be.useState(0),f=n.inputSource.handedness;return Be.useEffect(()=>{const m=p=>{p.code===i&&(n.updateButtonValue(e,1),c(!0))},g=p=>{p.code===i&&(n.updateButtonValue(e,0),c(!1))},x=p=>{(i==="MouseLeft"&&p.button===0||i==="MouseRight"&&p.button===2)&&(n.updateButtonValue(e,1),c(!0))},d=p=>{(i==="MouseLeft"&&p.button===0||i==="MouseRight"&&p.button===2)&&(n.updateButtonValue(e,0),c(!1))};return t?i==="MouseLeft"||i==="MouseRight"?(window.addEventListener("mousedown",x),window.addEventListener("mouseup",d)):(window.addEventListener("keydown",m),window.addEventListener("keyup",g)):i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",d)):(window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)),()=>{i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",d)):(window.removeEventListener("keydown",m),window.removeEventListener("keyup",g))}},[i,t,e,n]),_.jsxs(sa,{$reverse:f==="right",children:[_.jsx(oo,{buttonName:e,handedness:f}),_.jsx(sr,{$reverse:f==="right",children:t?_.jsx(Ti,{$pressed:l,children:jn[i]}):_.jsxs(_.Fragment,{children:[_.jsx(an,{$reverse:f==="right",style:{background:a?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{o(!0),n.updateButtonValue(e,1),setTimeout(()=>{o(!1),n.updateButtonValue(e,0)},250)},children:"Press"}),_.jsx(an,{title:"Click to toggle touch state",$reverse:f==="right",style:{background:r?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthShort},onClick:()=>{s(!r),n.updateButtonTouch(e,!r)},children:_.jsx(tt,{icon:Qh})}),_.jsx(B1,{$reverse:f==="right",value:u,onChange:m=>{const g=Number(m.target.value);h(g),n.updateButtonValue(e,g/100)},min:"0",max:"100"})]})})]})},Py=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const[r,s]=Be.useState(!1),[a,o]=Be.useState(!1),[l,c]=Be.useState(!1),[u,h]=Be.useState(!1),f=n.inputSource.handedness;return Be.useEffect(()=>{const m=x=>{x.code===i&&(n.updateButtonValue(e,1),h(!0))},g=x=>{x.code===i&&(n.updateButtonValue(e,0),h(!1))};return t?(window.addEventListener("keydown",m),window.addEventListener("keyup",g)):(window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)),()=>{window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)}},[i,t,e,n]),_.jsxs(sa,{$reverse:f==="right",children:[_.jsx(oo,{buttonName:e,handedness:f}),_.jsx(sr,{$reverse:f==="right",children:t?_.jsx(Ti,{$pressed:u,children:jn[i]}):_.jsxs(_.Fragment,{children:[_.jsx(an,{$reverse:f==="right",style:{background:l?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{c(!0),n.updateButtonValue(e,1),setTimeout(()=>{c(!1),n.updateButtonValue(e,0)},250)},children:"Press"}),_.jsx(an,{title:"Click to toggle touch state",$reverse:f==="right",style:{background:r?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthShort},onClick:()=>{s(!r),n.updateButtonTouch(e,!r)},children:_.jsx(tt,{icon:Qh})}),_.jsx(an,{$reverse:f==="right",style:{background:a?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{o(!a),n.updateButtonValue(e,a?0:1)},children:"Hold"})]})})]})},Cy=ut.div`
	display: flex;
	align-items: center;
	margin-bottom: ${Me.gap};
`,Ad=`calc(2 * ${Me.height} + ${Me.gap})`,Ly=ut.button`
	background: ${ge.gradientGreyTranslucent};
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: ${Ad};
	height: ${Ad};
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
`,Iy=ut.div`
	position: absolute;
	font-size: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${ge.textWhite};
	cursor: pointer;
	pointer-events: auto;
`,Rd=ut(an)`
	width: ${Me.widthLong};
	font-size: ${Me.fontSize};

	${({$reverse:n})=>n?`
    &:first-child {
      border-radius: ${Me.radiusLast};
    }

    &:last-child {
      border-radius: ${Me.radiusFirst};
    }
  `:`
    &:first-child {
      border-radius: ${Me.radiusFirst};
    }

    &:last-child {
      border-radius: ${Me.radiusLast};
    }
  `}
`,Ny=({xrController:n,pointerLocked:e,buttonId:t,mappedKeyUp:i,mappedKeyDown:r,mappedKeyLeft:s,mappedKeyRight:a,mappedKeyPressed:o})=>{const l=Be.useRef(null),[c,u]=Be.useState(!1),[h,f]=Be.useState(!1),[m,g]=Be.useState(!1),[x,d]=Be.useState(!1),[p,b]=Be.useState({x:0,y:0}),[v,M]=Be.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),R=n.inputSource.handedness,T=()=>{if(l.current){const E=l.current.getBoundingClientRect();b({x:E.left+E.width/2,y:E.top+E.height/2}),u(!0)}},A=E=>{if(c&&l.current){const y=E.clientX-p.x,C=E.clientY-p.y,V=Math.sqrt(y*y+C*C),U=12;let z,Y;if(V<U)z=y,Y=C;else{const W=Math.atan2(C,y);z=Math.cos(W)*U,Y=Math.sin(W)*U}l.current.style.transform=`translate(${z}px, ${Y}px)`;const X=z/U,ee=Y/U;n.updateAxes(t,X,ee)}},D=()=>{u(!1),l.current&&(l.current.style.transform="translate(0, 0)",n.updateAxes(t,0,0))};return Be.useEffect(()=>{const E=V=>{const U={...v};V.code===i&&(U.up=!0),V.code===r&&(U.down=!0),V.code===s&&(U.left=!0),V.code===a&&(U.right=!0),V.code===o&&(U.pressed=!0,n.updateButtonValue(t,1)),M(U),C(U)},y=V=>{const U={...v};V.code===i&&(U.up=!1),V.code===r&&(U.down=!1),V.code===s&&(U.left=!1),V.code===a&&(U.right=!1),V.code===o&&(U.pressed=!1,n.updateButtonValue(t,0)),M(U),C(U)},C=V=>{const U=(V.right?1:0)-(V.left?1:0),z=(V.down?1:0)-(V.up?1:0),Y=Math.sqrt(U*U+z*z);if(Y===0){n.updateAxes(t,0,0);return}const X=U/Y,ee=z/Y;n.updateAxes(t,X,ee)};return e?(window.addEventListener("keydown",E),window.addEventListener("keyup",y)):(window.removeEventListener("keydown",E),window.removeEventListener("keyup",y)),()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",y)}},[i,r,s,a,e,v]),Be.useEffect(()=>(document.addEventListener("mousemove",A),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",D)}),[c,p]),e?_.jsxs(_.Fragment,{children:[_.jsxs(sa,{$reverse:R==="right",children:[_.jsx(oo,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),_.jsxs(sr,{$reverse:R==="right",children:[_.jsx(Ti,{$pressed:v.up,children:jn[i]}),_.jsx(Ti,{$pressed:v.pressed,children:jn[o]})]})]}),_.jsx(sa,{$reverse:R==="right",style:R==="right"?{marginRight:"2px"}:{marginLeft:"2px"},children:_.jsxs(sr,{$reverse:!1,style:{margin:0},children:[_.jsx(Ti,{$pressed:v.left,children:jn[s]}),_.jsx(Ti,{$pressed:v.down,children:jn[r]}),_.jsx(Ti,{$pressed:v.right,children:jn[a]})]})})]}):_.jsx(Cy,{style:{flexDirection:n.inputSource.handedness==="left"?"row":"row-reverse",alignItems:"flex-start"},children:_.jsxs(_.Fragment,{children:[_.jsx(oo,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),_.jsx(Ly,{style:{margin:"0 5px"},children:_.jsx(Iy,{ref:l,onMouseDown:T,children:_.jsx(tt,{icon:nc,$size:50})})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:R==="right"?"start":"end"},children:[_.jsx(an,{$reverse:R==="right",style:{background:x?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:`calc(${Me.widthLong} + ${Me.widthShort} + ${Me.gap})`,marginBottom:Me.gap,borderRadius:Me.radiusSolo},onClick:()=>{d(!0),n.updateButtonValue(t,1),setTimeout(()=>{d(!1),n.updateButtonValue(t,0)},250)},children:"Press"}),_.jsxs(sr,{$reverse:R==="right",children:[_.jsx(Rd,{title:"Click to toggle touch state",$reverse:n.inputSource.handedness!=="left",style:{background:h?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthShort},onClick:()=>{f(!h),n.updateButtonTouch(t,!h)},children:_.jsx(tt,{icon:Qh})}),_.jsx(Rd,{$reverse:n.inputSource.handedness!=="left",style:{background:m?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{g(!m),n.updateButtonValue(t,m?0:1)},children:"Hold"})]})]})]})})};function es(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}const Dy=ut.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	font-size: 12px;
`,lo=({vector:n,label:e="",icon:t,multiplier:i=1,precision:r=2,onValidInput:s=()=>{},marginBottom:a="0"})=>{const[o,l]=Be.useState({x:(n.x/i).toFixed(r),y:(n.y/i).toFixed(r),z:(n.z/i).toFixed(r)}),c=Be.useRef({x:es(n.x/i,r),y:es(n.y/i,r),z:es(n.z/i,r)}),u=Be.useRef(null),h=()=>{const m={x:es(n.x/i,r),y:es(n.y/i,r),z:es(n.z/i,r)},{x:g,y:x,z:d}=c.current;(m.x!==g||m.y!==x||m.z!==d)&&(c.current=m,l({x:m.x.toFixed(r),y:m.y.toFixed(r),z:m.z.toFixed(r)})),u.current=requestAnimationFrame(h)};Be.useEffect(()=>(u.current=requestAnimationFrame(h),()=>{u.current&&cancelAnimationFrame(u.current)}),[n,i,r]);const f=m=>g=>{const x=g.target.value,d=parseFloat(x);l(p=>({...p,[m]:x})),isNaN(d)||(c.current[m]=d,n[m]=d*i,s())};return _.jsxs(Dy,{style:{marginBottom:a},children:[t?_.jsx(tt,{icon:t,style:{marginRight:"5px"}}):_.jsx("span",{style:{marginRight:"5px"},children:e}),_.jsx(z1,{children:["x","y","z"].map(m=>_.jsxs("div",{style:{position:"relative",display:"inline-block",height:"25px"},children:[_.jsx(H1,{value:o[m],onChange:f(m),className:parseFloat(o[m])!==c.current[m]?"invalid":void 0}),_.jsx(V1,{children:m.toUpperCase()})]},`${e}-${m}`))})]})};function Oy(n){const e=new Set;for(const i of n.axes)i&&i.id&&e.add(i.id);const t=n.buttons.filter(i=>i!==null).map(i=>({id:i.id,type:i.type,hasAxes:e.has(i.id)}));return t.sort((i,r)=>i.hasAxes&&!r.hasAxes?-1:!i.hasAxes&&r.hasAxes?1:0),t}const Uy=({controller:n,handle:e,handedness:t,pointerLocked:i})=>{const{keyMap:r}=tf(),[s,a]=St.useState(n.connected),[o,l]=St.useState(!1),c=Oy(n.gamepadConfig),u=c.flatMap(h=>h.hasAxes?[`${h.id}-left`,`${h.id}-right`,`${h.id}-up`,`${h.id}-down`,h.id]:h.id);return St.useEffect(()=>{i&&l(!1)},[i]),_.jsxs(ao,{style:t==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!i&&_.jsx(_.Fragment,{children:_.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("div",{style:{fontSize:"13px",display:"flex",flexDirection:"row",alignItems:"center"},children:[_.jsx(tt,{icon:G1,style:{marginRight:"5px"}}),"Controller ",_.jsxs("span",{style:{fontWeight:"bold"},children:["[",t==="left"?"L":"R","]"]})]}),_.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:s?_.jsxs(_.Fragment,{children:[_.jsx(Gr,{title:`Click to ${o?"close":"change"} key bindings`,onClick:()=>{l(!o)},children:_.jsx(tt,{icon:j1})}),_.jsx(Gr,{title:`Click to disconnect ${t} controller`,$isRed:!0,onClick:()=>{n.connected=!1,a(!1)},children:_.jsx(tt,{icon:nc})})]}):_.jsx(Gr,{title:`Click to reconnect ${t} controller`,onClick:()=>{n.connected=!0,a(!0)},style:{marginLeft:"5px"},children:_.jsx(tt,{icon:X1})})})]})}),s&&!i&&_.jsxs(_.Fragment,{children:[!o&&_.jsxs(_.Fragment,{children:[_.jsx($r,{}),_.jsx(lo,{vector:e.position,label:"Position",marginBottom:Me.gap}),_.jsx(lo,{vector:e.rotation,label:"Rotation"})]}),_.jsx($r,{})]}),s&&(o?_.jsx(q1,{handedness:t,actions:u}):c.map(h=>{const f=r[t];return h.hasAxes?_.jsx(Ny,{xrController:n,pointerLocked:i,buttonId:h.id,mappedKeyUp:r[t][`${h.id}-up`],mappedKeyDown:f[`${h.id}-down`],mappedKeyLeft:f[`${h.id}-left`],mappedKeyRight:f[`${h.id}-right`],mappedKeyPressed:f[h.id]},h.id):h.type==="analog"?_.jsx(Ry,{xrController:n,buttonId:h.id,mappedKey:f[h.id],pointerLocked:i},h.id):_.jsx(Py,{xrController:n,buttonId:h.id,mappedKey:f[h.id],pointerLocked:i},h.id)}))]},t)},Fy=`calc(${Me.widthLong} + ${Me.widthShort} + ${Me.gap})`,ky=({hand:n,pointerLocked:e,mappedKey:t})=>{const[i,r]=Be.useState(!1),[s,a]=Be.useState(!1),[o,l]=Be.useState(0),c=n.inputSource.handedness;return Be.useEffect(()=>{const u=g=>{g.code===t&&(n.updatePinchValue(1),a(!0))},h=g=>{g.code===t&&(n.updatePinchValue(0),a(!1))},f=g=>{(t==="MouseLeft"&&g.button===0||t==="MouseRight"&&g.button===2)&&(n.updatePinchValue(1),a(!0))},m=g=>{(t==="MouseLeft"&&g.button===0||t==="MouseRight"&&g.button===2)&&(n.updatePinchValue(0),a(!1))};return e?t==="MouseLeft"||t==="MouseRight"?(window.addEventListener("mousedown",f),window.addEventListener("mouseup",m)):(window.addEventListener("keydown",u),window.addEventListener("keyup",h)):t==="MouseLeft"||t==="MouseRight"?(window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",m)):(window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)),()=>{t==="MouseLeft"||t==="MouseRight"?(window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",m)):(window.removeEventListener("keydown",u),window.removeEventListener("keyup",h))}},[t,e,n]),_.jsxs(sa,{$reverse:c==="right",children:[_.jsx(_a,{icon:ef,$reverse:c==="left"}),_.jsx(sr,{$reverse:c==="right",children:e?_.jsx(Ti,{$pressed:s,children:jn[t]}):_.jsxs(_.Fragment,{children:[_.jsx(an,{$reverse:c==="right",style:{background:i?ge.gradientLightGreyTranslucent:ge.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{r(!0),n.updatePinchValue(1),setTimeout(()=>{r(!1),n.updatePinchValue(0)},250)},children:"Pinch"}),_.jsx(B1,{$reverse:c==="right",value:o,onChange:u=>{const h=Number(u.target.value);l(h),n.updatePinchValue(h/100)},style:{width:Fy},min:"0",max:"100"})]})})]})},Ta=["default","point"],By=`calc(2 * ${Me.widthLong} - ${Me.widthShort})`,zy=({hand:n,pointerLocked:e,mappedKey:t})=>{const[i,r]=Be.useState(n.poseId),[s,a]=Be.useState(!1),o=n.inputSource.handedness,l=u=>{const f=(Ta.indexOf(n.poseId)+Ta.length+u)%Ta.length;r(Ta[f]),n.poseId=Ta[f]},c=o==="right";return Be.useEffect(()=>{const u=f=>{f.code===t&&(l(1),a(!0))},h=f=>{f.code===t&&a(!1)};return e?(window.addEventListener("keydown",u),window.addEventListener("keyup",h)):(window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)),()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)}},[t,e,n]),_.jsxs(sa,{$reverse:c,children:[_.jsx(_a,{icon:Jh,$reverse:o==="left"}),_.jsx(sr,{$reverse:c,children:e?_.jsx(Ti,{$pressed:s,children:jn[t]}):_.jsxs(_.Fragment,{children:[_.jsx(an,{$reverse:c,style:{width:Me.widthShort},onClick:()=>{l(c?1:-1)},children:_.jsx(tt,{icon:c?Td:bd})}),_.jsxs(an,{$reverse:c,style:{width:By},disabled:!0,children:["Pose: ",i]}),_.jsx(an,{$reverse:c,style:{width:Me.widthShort},onClick:()=>{l(c?-1:1)},children:_.jsx(tt,{icon:c?bd:Td})})]})})]})},Hy=({hand:n,handle:e,handedness:t,pointerLocked:i})=>{const{keyMap:r}=tf(),[s,a]=St.useState(n.connected),[o,l]=St.useState(!1);return St.useEffect(()=>{i&&l(!1)},[i]),_.jsxs(ao,{style:t==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!i&&_.jsx(_.Fragment,{children:_.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("div",{style:{fontSize:"13px",display:"flex",flexDirection:"row",alignItems:"center"},children:[_.jsx(tt,{icon:W1,$reverse:t==="left",style:{marginRight:"5px"}}),"Hand ",_.jsxs("span",{style:{fontWeight:"bold"},children:["[",t==="left"?"L":"R","]"]})]}),_.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:s?_.jsxs(_.Fragment,{children:[_.jsx(Gr,{title:`Click to ${o?"close":"change"} key bindings`,onClick:()=>{l(!o)},children:_.jsx(tt,{icon:j1})}),_.jsx(Gr,{title:`Click to disconnect ${t} controller`,$isRed:!0,onClick:()=>{n.connected=!1,a(!1)},children:_.jsx(tt,{icon:nc})})]}):_.jsx(Gr,{title:`Click to reconnect ${t} controller`,onClick:()=>{n.connected=!0,a(!0)},style:{marginLeft:"5px"},children:_.jsx(tt,{icon:X1})})})]})}),s&&!i&&_.jsxs(_.Fragment,{children:[!o&&_.jsxs(_.Fragment,{children:[_.jsx($r,{}),_.jsx(lo,{vector:e.position,label:"Position",marginBottom:Me.gap}),_.jsx(lo,{vector:e.rotation,label:"Rotation"})]}),_.jsx($r,{})]}),s&&(o?_.jsx(q1,{handedness:t,actions:["pose","pinch"]}):_.jsxs(_.Fragment,{children:[_.jsx(zy,{hand:n,pointerLocked:i,mappedKey:r[t].pose}),_.jsx(ky,{hand:n,pointerLocked:i,mappedKey:r[t].pinch})]}))]},t)},nf=Dh(n=>({inputMode:"controller",setInputMode:e=>n(()=>({inputMode:e}))})),Vy=({xrDevice:n,inputLayer:e,pointerLocked:t})=>{const{inputMode:i}=nf();return _.jsx(_.Fragment,{children:i==="controller"?Object.entries(n.controllers).map(([r,s])=>_.jsx(Uy,{controller:s,handle:e.transformHandles.get(r),handedness:r,pointerLocked:t},`controller-${r}`)):Object.entries(n.hands).map(([r,s])=>_.jsx(Hy,{hand:s,handle:e.transformHandles.get(r),handedness:r,pointerLocked:t},`hand-${r}`))})},Dc=ut.td`
	text-align: right;
	color: ${ge.textWhite};
	padding: 0 8px 0 0;
	font-weight: bold;
`,Oc=ut.td`
	text-align: left;
	color: ${ge.textGrey};
	padding: 0;
`,Gy=["meeting_room","living_room","music_room","office_large","office_small"],Wy=Dh(n=>({infoPanelOpen:!1,envDropDownOpen:!1,setInfoPanelOpen:e=>n(()=>({infoPanelOpen:e})),setEnvDropDownOpen:e=>n(()=>({envDropDownOpen:e}))}));function Xy(n){return n.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}const jy=({xrDevice:n,inputLayer:e})=>{var t,i,r;const[s,a]=St.useState(!!(!((t=n.sem)===null||t===void 0)&&t.planesVisible)),[o,l]=St.useState(!!(!((i=n.sem)===null||i===void 0)&&i.boundingBoxesVisible)),[c,u]=St.useState(!!(!((r=n.sem)===null||r===void 0)&&r.meshesVisible)),{inputMode:h,setInputMode:f}=nf(),{infoPanelOpen:m,setInfoPanelOpen:g,envDropDownOpen:x,setEnvDropDownOpen:d}=Wy();return _.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",gap:"6px",padding:"8px"},children:[_.jsx(lh,{children:_.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[_.jsx(Dn,{title:"Click to reset device transforms",onClick:()=>{e.resetDeviceTransforms()},children:_.jsx(tt,{icon:z_,$size:16})}),_.jsx(Dn,{title:"Click to activate play mode",onClick:()=>{e.lockPointer(),d(!1),g(!1)},children:_.jsx(tt,{icon:H_,$size:16})}),_.jsx(Dn,{title:"Click to toggle input mode",onClick:()=>{h==="controller"?(f("hand"),n.primaryInputMode="hand"):(f("controller"),n.primaryInputMode="controller")},children:_.jsx(tt,{icon:h==="controller"?G1:W1,$size:16})}),n.sem&&_.jsxs(_.Fragment,{children:[_.jsx($r,{$horizontal:!1}),_.jsx(Dn,{title:"Click to select/change emulated environment",onClick:()=>d(!x),children:_.jsx(tt,{icon:V_,$size:16})}),_.jsx(Dn,{title:"Click to toggle visibility of planes",onClick:()=>{n.sem.planesVisible=!s,a(!s)},children:_.jsx(by,{size:16,color:s?ge.textWhite:ge.textGrey})}),_.jsx(Dn,{title:"Click to toggle visibility of bounding boxes",onClick:()=>{n.sem.boundingBoxesVisible=!o,l(!o)},children:_.jsx(Ey,{size:16,color:o?ge.textWhite:ge.textGrey})}),_.jsx(Dn,{title:"Click to toggle visibility of meshes",onClick:()=>{n.sem.meshesVisible=!c,u(!c)},children:_.jsx(wy,{size:16,color:c?ge.textWhite:ge.textGrey})})]}),_.jsx($r,{$horizontal:!1}),_.jsx(Dn,{title:"Click to exit XR session",onClick:()=>{const p=n.activeSession;p?.end()},children:_.jsx(tt,{icon:D_,$size:16})})]})}),_.jsx(lh,{children:_.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[_.jsx(Dn,{title:"About IWER",onClick:()=>{g(!m)},children:_.jsx(ch,{size:16})}),_.jsx(Dn,{title:"Report issues",onClick:()=>{window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/issues","_blank")},children:_.jsx(tt,{icon:j_,$size:16})})]})}),m&&_.jsxs(ao,{style:{top:"50vh",left:"50vw",transform:"translate(-50%, -50%)",maxWidth:"240px",gap:"4px"},children:[_.jsx("div",{style:{display:"flex",justifyContent:"end"},children:_.jsx(Gr,{$isRed:!0,onClick:()=>{g(!1)},children:_.jsx(tt,{icon:nc})})}),_.jsx("div",{style:{display:"flex",justifyContent:"center"},children:_.jsx(ch,{size:100})}),_.jsxs("p",{style:{textAlign:"center",padding:"0 5px",margin:"0"},children:[_.jsx("b",{children:"Immersive Web Emulation Runtime"})," (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc."]}),_.jsx("table",{style:{width:"100%",borderCollapse:"collapse",display:"flex",justifyContent:"center",fontSize:"12px",padding:"8px"},children:_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Dc,{children:"IWER"}),_.jsxs(Oc,{children:["v",n.version]})]}),_.jsxs("tr",{children:[_.jsx(Dc,{children:"DevUI"}),_.jsxs(Oc,{children:["v",n.devui.version]})]}),n.sem&&_.jsxs("tr",{children:[_.jsx(Dc,{children:"SEM"}),_.jsxs(Oc,{children:["v",n.sem.version]})]})]})}),_.jsx(an,{style:{borderRadius:Me.radiusSolo},onClick:()=>{window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE","_blank")},children:"MIT License"}),_.jsx(an,{style:{borderRadius:Me.radiusSolo},onClick:()=>{window.open("https://github.com/meta-quest/immersive-web-emulation-runtime","_blank")},children:"View Source on GitHub"})]}),x&&_.jsx(ao,{style:{position:"absolute",top:"40px"},children:Gy.map(p=>_.jsx("div",{children:_.jsx(Dn,{style:{fontSize:"12px",width:"100%",justifyContent:"start",borderRadius:"8px"},onClick:()=>{n.sem.loadDefaultEnvironment(p)},children:Xy(p)})},p))})]})},qy=ut.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${Me.gap};
	font-size: 12px;
`,$y=ut.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background: ${ge.gradientGrey};
	border: 1px solid transparent;
	height: 25px;
	color: ${ge.textWhite};
	width: ${Me.widthLong};
	cursor: pointer;
	margin: 0;
	border-radius: 5px;
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 25px;
		background-color: ${ge.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 25px;
		background-color: ${ge.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 25px;
		background-color: ${ge.textWhite};
		border-radius: ${Me.radiusMiddle};
	}
`,Yy=({xrDevice:n,inputLayer:e,pointerLocked:t})=>{const[i,r]=St.useState(n.fovy);return _.jsxs(ao,{style:{left:"8px",top:"8px"},children:[_.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"20px"},children:[_.jsxs("div",{style:{fontSize:"13px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"start"},children:[_.jsx(tt,{icon:q_,style:{marginRight:"5px"}}),_.jsx("div",{style:{alignItems:"end"},children:n.name})]}),_.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"}})]}),_.jsx($r,{}),_.jsx(lo,{vector:e.combinedCameraPosition,icon:G_}),!t&&_.jsxs(qy,{children:[_.jsx(tt,{icon:Y_,style:{marginRight:"5px"}}),_.jsxs(z1,{children:[_.jsxs("div",{style:{position:"relative",display:"inline-block",height:"25px"},children:[_.jsx(H1,{type:"text",value:(i/Math.PI*180).toFixed(0)+"°",readOnly:!0,style:{width:"73px"}}),_.jsx(V1,{children:"FOV-Y"})]}),_.jsx("div",{style:{position:"relative",display:"inline-block"},children:_.jsx($y,{value:i,onChange:s=>{const a=Number(s.target.value);r(a),n.fovy=a},min:Math.PI/6,max:Math.PI/1.5,step:Math.PI/48,style:{width:"80px"}})})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="165",Zy=0,Pd=1,Ky=2,$1=1,Qy=2,wi=3,Ii=0,fn=1,Ai=2,ar=0,qs=1,Cd=2,Ld=3,Id=4,Jy=5,Dr=100,e3=101,t3=102,n3=103,i3=104,r3=200,s3=201,a3=202,o3=203,uh=204,hh=205,l3=206,c3=207,u3=208,h3=209,f3=210,d3=211,p3=212,m3=213,g3=214,x3=0,v3=1,_3=2,Cl=3,y3=4,S3=5,M3=6,E3=7,Y1=0,w3=1,b3=2,or=0,T3=1,A3=2,R3=3,P3=4,C3=5,L3=6,I3=7,Z1=300,aa=301,oa=302,fh=303,dh=304,ic=306,ph=1e3,Fr=1001,mh=1002,Fn=1003,N3=1004,Co=1005,qn=1006,Uc=1007,kr=1008,hr=1009,D3=1010,O3=1011,Ll=1012,K1=1013,la=1014,ir=1015,rc=1016,Q1=1017,J1=1018,ca=1020,U3=35902,F3=1021,k3=1022,di=1023,B3=1024,z3=1025,$s=1026,ua=1027,H3=1028,eg=1029,V3=1030,tg=1031,ng=1033,Fc=33776,kc=33777,Bc=33778,zc=33779,Nd=35840,Dd=35841,Od=35842,Ud=35843,Fd=36196,kd=37492,Bd=37496,zd=37808,Hd=37809,Vd=37810,Gd=37811,Wd=37812,Xd=37813,jd=37814,qd=37815,$d=37816,Yd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,Hc=36492,ep=36494,tp=36495,G3=36283,np=36284,ip=36285,rp=36286,W3=3200,X3=3201,ig=0,j3=1,tr="",si="srgb",mr="srgb-linear",sf="display-p3",sc="display-p3-linear",Il="linear",_t="srgb",Nl="rec709",Dl="p3",ts=7680,sp=519,q3=512,$3=513,Y3=514,rg=515,Z3=516,K3=517,Q3=518,J3=519,ap=35044,op="300 es",Pi=2e3,Ol=2001;class ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,gh=180/Math.PI;function _o(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function eS(n,e){return(n%e+e)%e}function Gc(n,e,t){return(1-t)*n+t*e}function Aa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}let rt=class sg{constructor(e=0,t=0){sg.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class ke{constructor(e,t,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],x=r[0],d=r[3],p=r[6],b=r[1],v=r[4],M=r[7],R=r[2],T=r[5],A=r[8];return s[0]=a*x+o*b+l*R,s[3]=a*d+o*v+l*T,s[6]=a*p+o*M+l*A,s[1]=c*x+u*b+h*R,s[4]=c*d+u*v+h*T,s[7]=c*p+u*M+h*A,s[2]=f*x+m*b+g*R,s[5]=f*d+m*v+g*T,s[8]=f*p+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new ke;function ag(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ul(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tS(){const n=Ul("canvas");return n.style.display="block",n}const lp={};function og(n){n in lp||(lp[n]=!0,console.warn(n))}function nS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const cp=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),up=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[mr]:{transfer:Il,primaries:Nl,toReference:n=>n,fromReference:n=>n},[si]:{transfer:_t,primaries:Nl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sc]:{transfer:Il,primaries:Dl,toReference:n=>n.applyMatrix3(up),fromReference:n=>n.applyMatrix3(cp)},[sf]:{transfer:_t,primaries:Dl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(up),fromReference:n=>n.applyMatrix3(cp).convertLinearToSRGB()}},iS=new Set([mr,sc]),ft={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Lo[e].toReference,r=Lo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Lo[n].primaries},getTransfer:function(n){return n===tr?Il:Lo[n].transfer}};function Ys(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class rS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Ul("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ul("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ys(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ys(t[i]/255)*255):t[i]=Ys(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sS=0;class lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jc(r[a].image)):s.push(jc(r[a]))}else s=jc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aS=0;class dn extends ya{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=Fr,r=Fr,s=qn,a=kr,o=di,l=hr,c=dn.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=_o(),this.name="",this.source=new lg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Z1;dn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,i=0,r=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],x=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,R=(p+1)/2,T=(u+f)/4,A=(h+x)/4,D=(g+d)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=D/s),this.set(i,r,s,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oS extends ya{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends oS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cg extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lS extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let fr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==m||u!==g){let d=1-o;const p=l*f+c*m+u*g+h*x,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,p*b);d=Math.sin(d*T)/R,o=Math.sin(o*T)/R}const M=o*b;if(l=l*d+f*M,c=c*d+m*M,u=u*d+g*M,h=h*d+x*M,d===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class ug{constructor(e=0,t=0,i=0){ug.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const qc=new k,hp=new fr;class yo{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),No.subVectors(this.max,Ra),is.subVectors(e.a,Ra),rs.subVectors(e.b,Ra),ss.subVectors(e.c,Ra),Bi.subVectors(rs,is),zi.subVectors(ss,rs),vr.subVectors(is,ss);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-vr.z,vr.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,vr.z,0,-vr.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-vr.y,vr.x,0];return!$c(t,is,rs,ss,No)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,is,rs,ss,No))?!1:(Do.crossVectors(Bi,zi),t=[Do.x,Do.y,Do.z],$c(t,is,rs,ss,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new k,new k,new k,new k,new k,new k,new k,new k],zn=new k,Io=new yo,is=new k,rs=new k,ss=new k,Bi=new k,zi=new k,vr=new k,Ra=new k,No=new k,Do=new k,_r=new k;function $c(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_r.fromArray(n,s);const o=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),u=i.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cS=new yo,Pa=new k,Yc=new k;class ac{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Yc)),this.expandByPoint(Pa.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new k,Zc=new k,Oo=new k,Hi=new k,Kc=new k,Uo=new k,Qc=new k;class af{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zc.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Zc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=Hi.dot(this.direction),l=-Hi.dot(Oo),c=Hi.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zc).addScaledVector(Oo,f),m}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,s){Kc.subVectors(t,e),Uo.subVectors(i,e),Qc.crossVectors(Kc,Uo);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(Uo.crossVectors(Hi,Uo));if(l<0)return null;const c=o*this.direction.dot(Kc.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(Qc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,a,o,l,c,u,h,f,m,g,x,d){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,f,m,g,x,d)}set(e,t,i,r,s,a,o,l,c,u,h,f,m,g,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,x=c*h;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,hS)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(i,_n),Vi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(i,_n)),Vi.normalize(),Fo.crossVectors(_n,Vi),r[0]=Vi.x,r[4]=Fo.x,r[8]=_n.x,r[1]=Vi.y,r[5]=Fo.y,r[9]=_n.y,r[2]=Vi.z,r[6]=Fo.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],x=i[6],d=i[10],p=i[14],b=i[3],v=i[7],M=i[11],R=i[15],T=r[0],A=r[4],D=r[8],E=r[12],y=r[1],C=r[5],V=r[9],U=r[13],z=r[2],Y=r[6],X=r[10],ee=r[14],W=r[3],le=r[7],xe=r[11],_e=r[15];return s[0]=a*T+o*y+l*z+c*W,s[4]=a*A+o*C+l*Y+c*le,s[8]=a*D+o*V+l*X+c*xe,s[12]=a*E+o*U+l*ee+c*_e,s[1]=u*T+h*y+f*z+m*W,s[5]=u*A+h*C+f*Y+m*le,s[9]=u*D+h*V+f*X+m*xe,s[13]=u*E+h*U+f*ee+m*_e,s[2]=g*T+x*y+d*z+p*W,s[6]=g*A+x*C+d*Y+p*le,s[10]=g*D+x*V+d*X+p*xe,s[14]=g*E+x*U+d*ee+p*_e,s[3]=b*T+v*y+M*z+R*W,s[7]=b*A+v*C+M*Y+R*le,s[11]=b*D+v*V+M*X+R*xe,s[15]=b*E+v*U+M*ee+R*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],x=e[7],d=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+x*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+d*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],x=e[13],d=e[14],p=e[15],b=h*d*c-x*f*c+x*l*m-o*d*m-h*l*p+o*f*p,v=g*f*c-u*d*c-g*l*m+a*d*m+u*l*p-a*f*p,M=u*x*c-g*h*c+g*o*m-a*x*m-u*o*p+a*h*p,R=g*h*l-u*x*l-g*o*f+a*x*f+u*o*d-a*h*d,T=t*b+i*v+r*M+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=b*A,e[1]=(x*f*s-h*d*s-x*r*m+i*d*m+h*r*p-i*f*p)*A,e[2]=(o*d*s-x*l*s+x*r*c-i*d*c-o*r*p+i*l*p)*A,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*A,e[4]=v*A,e[5]=(u*d*s-g*f*s+g*r*m-t*d*m-u*r*p+t*f*p)*A,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*p-t*l*p)*A,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*A,e[8]=M*A,e[9]=(g*h*s-u*x*s-g*i*m+t*x*m+u*i*p-t*h*p)*A,e[10]=(a*x*s-g*o*s+g*i*c-t*x*c-a*i*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*m-t*o*m)*A,e[12]=R*A,e[13]=(u*x*r-g*h*r+g*i*f-t*x*f-u*i*d+t*h*d)*A,e[14]=(g*o*r-a*x*r-g*i*l+t*x*l+a*i*d-t*o*d)*A,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,x=a*u,d=a*h,p=o*h,b=l*c,v=l*u,M=l*h,R=i.x,T=i.y,A=i.z;return r[0]=(1-(x+p))*R,r[1]=(m+M)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(f+p))*T,r[6]=(d+b)*T,r[7]=0,r[8]=(g+v)*A,r[9]=(d-b)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const a=as.set(r[4],r[5],r[6]).length(),o=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,u=1/a,h=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Pi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===Pi)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ol)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*c,m=(i+r)*u;let g,x;if(o===Pi)g=(a+s)*h,x=-2*h;else if(o===Ol)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const as=new k,Hn=new Lt,uS=new k(0,0,0),hS=new k(1,1,1),Vi=new k,Fo=new k,_n=new k,fp=new Lt,dp=new fr;class Ni{constructor(e=0,t=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const pp=new k,os=new fr,yi=new Lt,ko=new k,Ca=new k,dS=new k,pS=new fr,mp=new k(1,0,0),gp=new k(0,1,0),xp=new k(0,0,1),vp={type:"added"},mS={type:"removed"},ls={type:"childadded",child:null},Jc={type:"childremoved",child:null};class on extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new k,t=new Ni,i=new fr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ke}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(xp,e)}translateOnAxis(e,t){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ko.copy(e):ko.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ca,ko,this.up):yi.lookAt(ko,Ca,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(yi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vp),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mS),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vp),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,dS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,pS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new k(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new k,Si=new k,eu=new k,Mi=new k,cs=new k,us=new k,_p=new k,tu=new k,nu=new k,iu=new k;class ci{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),Si.subVectors(i,t),eu.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(Si),l=Vn.dot(eu),c=Si.dot(Si),u=Si.dot(eu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),Si.subVectors(e,t),Vn.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Vn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),us.subVectors(s,i),tu.subVectors(e,i);const l=cs.dot(tu),c=us.dot(tu);if(l<=0&&c<=0)return t.copy(i);nu.subVectors(e,r);const u=cs.dot(nu),h=us.dot(nu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(cs,a);iu.subVectors(e,s);const m=cs.dot(iu),g=us.dot(iu);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(us,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return _p.subVectors(s,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(_p,o);const p=1/(d+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(cs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function ru(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=eS(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ru(a,s,e+1/3),this.g=ru(a,s,e),this.b=ru(a,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const i=hg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return ft.fromWorkingColorSpace(Qt.copy(this),e),Math.round(un(Qt.r*255,0,255))*65536+Math.round(un(Qt.g*255,0,255))*256+Math.round(un(Qt.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=si){ft.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Bo);const i=Gc(Gi.h,Bo.h,t),r=Gc(Gi.s,Bo.s,t),s=Gc(Gi.l,Bo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new nt;nt.NAMES=hg;let gS=0;class Sa extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=qs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=hh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lf extends Sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Y1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new k,zo=new rt;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ap,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return og("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Aa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}}class fg extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dg extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xS=0;const Ln=new Lt,su=new on,hs=new k,yn=new yo,La=new yo,Xt=new k;class ti extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?dg:fg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(yn.min,La.min),yn.expandByPoint(Xt),Xt.addVectors(yn.max,La.max),yn.expandByPoint(Xt)):(yn.expandByPoint(La.min),yn.expandByPoint(La.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(e,c),Xt.add(hs)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new k,l[D]=new k;const c=new k,u=new k,h=new k,f=new rt,m=new rt,g=new rt,x=new k,d=new k;function p(D,E,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(C),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),o[D].add(x),o[E].add(x),o[y].add(x),l[D].add(d),l[E].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,E=b.length;D<E;++D){const y=b[D],C=y.start,V=y.count;for(let U=C,z=C+V;U<z;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new k,M=new k,R=new k,T=new k;function A(D){R.fromBufferAttribute(r,D),T.copy(R);const E=o[D];v.copy(E),v.sub(R.multiplyScalar(R.dot(E))).normalize(),M.crossVectors(T,E);const C=M.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,C)}for(let D=0,E=b.length;D<E;++D){const y=b[D],C=y.start,V=y.count;for(let U=C,z=C+V;U<z;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new kn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yp=new Lt,yr=new af,Ho=new ac,Sp=new k,fs=new k,ds=new k,ps=new k,au=new k,Vo=new k,Go=new rt,Wo=new rt,Xo=new rt,Mp=new k,Ep=new k,wp=new k,jo=new k,qo=new k;class Yn extends on{constructor(e=new ti,t=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(au.fromBufferAttribute(h,e),a?Vo.addScaledVector(au,u):Vo.addScaledVector(au.sub(t),u))}t.add(Vo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Ho.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ho,Sp)===null||yr.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(yp.copy(s).invert(),yr.copy(e.ray).applyMatrix4(yp),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const d=f[g],p=a[d.materialIndex],b=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=b,R=v;M<R;M+=3){const T=o.getX(M),A=o.getX(M+1),D=o.getX(M+2);r=$o(this,p,e,i,c,u,h,T,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=g,p=x;d<p;d+=3){const b=o.getX(d),v=o.getX(d+1),M=o.getX(d+2);r=$o(this,a,e,i,c,u,h,b,v,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const d=f[g],p=a[d.materialIndex],b=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let M=b,R=v;M<R;M+=3){const T=M,A=M+1,D=M+2;r=$o(this,p,e,i,c,u,h,T,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=g,p=x;d<p;d+=3){const b=d,v=d+1,M=d+2;r=$o(this,a,e,i,c,u,h,b,v,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function vS(n,e,t,i,r,s,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ii,o),l===null)return null;qo.copy(o),qo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:n}}function $o(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,fs),n.getVertexPosition(l,ds),n.getVertexPosition(c,ps);const u=vS(n,e,t,i,fs,ds,ps,jo);if(u){r&&(Go.fromBufferAttribute(r,o),Wo.fromBufferAttribute(r,l),Xo.fromBufferAttribute(r,c),u.uv=ci.getInterpolation(jo,fs,ds,ps,Go,Wo,Xo,new rt)),s&&(Go.fromBufferAttribute(s,o),Wo.fromBufferAttribute(s,l),Xo.fromBufferAttribute(s,c),u.uv1=ci.getInterpolation(jo,fs,ds,ps,Go,Wo,Xo,new rt)),a&&(Mp.fromBufferAttribute(a,o),Ep.fromBufferAttribute(a,l),wp.fromBufferAttribute(a,c),u.normal=ci.getInterpolation(jo,fs,ds,ps,Mp,Ep,wp,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};ci.getNormal(fs,ds,ps,h.normal),u.face=h}return u}class Ma extends ti{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function g(x,d,p,b,v,M,R,T,A,D,E){const y=M/A,C=R/D,V=M/2,U=R/2,z=T/2,Y=A+1,X=D+1;let ee=0,W=0;const le=new k;for(let xe=0;xe<X;xe++){const _e=xe*C-U;for(let Oe=0;Oe<Y;Oe++){const st=Oe*y-V;le[x]=st*b,le[d]=_e*v,le[p]=z,c.push(le.x,le.y,le.z),le[x]=0,le[d]=0,le[p]=T>0?1:-1,u.push(le.x,le.y,le.z),h.push(Oe/A),h.push(1-xe/D),ee+=1}}for(let xe=0;xe<D;xe++)for(let _e=0;_e<A;_e++){const Oe=f+_e+Y*xe,st=f+_e+Y*(xe+1),j=f+(_e+1)+Y*(xe+1),te=f+(_e+1)+Y*xe;l.push(Oe,st,te),l.push(st,j,te),W+=6}o.addGroup(m,W,E),m+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=ha(n[t]);for(const r in i)e[r]=i[r]}return e}function _S(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const yS={clone:ha,merge:sn};var SS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SS,this.fragmentShader=MS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new k,bp=new rt,Tp=new rt;class bn extends mg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gh*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,bp,Tp),t.subVectors(Tp,bp)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class ES extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ms,gs,e,t);r.layers=this.layers,this.add(r);const s=new bn(ms,gs,e,t);s.layers=this.layers,this.add(s);const a=new bn(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new bn(ms,gs,e,t);o.layers=this.layers,this.add(o);const l=new bn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new bn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gg extends dn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:aa,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ma(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:ar});s.uniforms.tEquirect.value=t;const a=new Yn(r,s),o=t.minFilter;return t.minFilter===kr&&(t.minFilter=qn),new ES(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ou=new k,bS=new k,TS=new ke;class Cr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ou.subVectors(i,t).cross(bS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||TS.getNormalMatrix(e),r=this.coplanarPoint(ou).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new ac,Yo=new k;class xg{constructor(e=new Cr,t=new Cr,i=new Cr,r=new Cr,s=new Cr,a=new Cr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],x=r[10],d=r[11],p=r[12],b=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,d-m,M-p).normalize(),i[1].setComponents(l+s,f+c,d+m,M+p).normalize(),i[2].setComponents(l+a,f+u,d+g,M+b).normalize(),i[3].setComponents(l-a,f-u,d-g,M-b).normalize(),i[4].setComponents(l-o,f-h,d-x,M-v).normalize(),t===Pi)i[5].setComponents(l+o,f+h,d+x,M+v).normalize();else if(t===Ol)i[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yo.x=r.normal.x>0?e.max.x:e.min.x,Yo.y=r.normal.y>0?e.max.y:e.min.y,Yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vg(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function AS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,o),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let m=0,g=f.length;m<g;m++){const x=f[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class So extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],x=[],d=[];for(let p=0;p<u;p++){const b=p*f-a;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-b,0),x.push(0,0,1),d.push(v/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const v=b+c*p,M=b+c*(p+1),R=b+1+c*(p+1),T=b+1+c*p;m.push(v,M,T),m.push(M,R,T)}this.setIndex(m),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var RS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,US=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,KS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ME=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,OE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:RS,alphahash_pars_fragment:PS,alphamap_fragment:CS,alphamap_pars_fragment:LS,alphatest_fragment:IS,alphatest_pars_fragment:NS,aomap_fragment:DS,aomap_pars_fragment:OS,batching_pars_vertex:US,batching_vertex:FS,begin_vertex:kS,beginnormal_vertex:BS,bsdfs:zS,iridescence_fragment:HS,bumpmap_pars_fragment:VS,clipping_planes_fragment:GS,clipping_planes_pars_fragment:WS,clipping_planes_pars_vertex:XS,clipping_planes_vertex:jS,color_fragment:qS,color_pars_fragment:$S,color_pars_vertex:YS,color_vertex:ZS,common:KS,cube_uv_reflection_fragment:QS,defaultnormal_vertex:JS,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:aM,envmap_common_pars_fragment:oM,envmap_pars_fragment:lM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:yM,envmap_vertex:uM,fog_vertex:hM,fog_pars_vertex:fM,fog_fragment:dM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:vM,lights_pars_begin:_M,lights_toon_fragment:SM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:wM,lights_physical_fragment:bM,lights_physical_pars_fragment:TM,lights_fragment_begin:AM,lights_fragment_maps:RM,lights_fragment_end:PM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:IM,logdepthbuf_vertex:NM,map_fragment:DM,map_pars_fragment:OM,map_particle_fragment:UM,map_particle_pars_fragment:FM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:BM,morphinstance_vertex:zM,morphcolor_vertex:HM,morphnormal_vertex:VM,morphtarget_pars_vertex:GM,morphtarget_vertex:WM,normal_fragment_begin:XM,normal_fragment_maps:jM,normal_pars_fragment:qM,normal_pars_vertex:$M,normal_vertex:YM,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:JM,iridescence_pars_fragment:eE,opaque_fragment:tE,packing:nE,premultiplied_alpha_fragment:iE,project_vertex:rE,dithering_fragment:sE,dithering_pars_fragment:aE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:lE,shadowmap_pars_fragment:cE,shadowmap_pars_vertex:uE,shadowmap_vertex:hE,shadowmask_pars_fragment:fE,skinbase_vertex:dE,skinning_pars_vertex:pE,skinning_vertex:mE,skinnormal_vertex:gE,specularmap_fragment:xE,specularmap_pars_fragment:vE,tonemapping_fragment:_E,tonemapping_pars_fragment:yE,transmission_fragment:SE,transmission_pars_fragment:ME,uv_pars_fragment:EE,uv_pars_vertex:wE,uv_vertex:bE,worldpos_vertex:TE,background_vert:AE,background_frag:RE,backgroundCube_vert:PE,backgroundCube_frag:CE,cube_vert:LE,cube_frag:IE,depth_vert:NE,depth_frag:DE,distanceRGBA_vert:OE,distanceRGBA_frag:UE,equirect_vert:FE,equirect_frag:kE,linedashed_vert:BE,linedashed_frag:zE,meshbasic_vert:HE,meshbasic_frag:VE,meshlambert_vert:GE,meshlambert_frag:WE,meshmatcap_vert:XE,meshmatcap_frag:jE,meshnormal_vert:qE,meshnormal_frag:$E,meshphong_vert:YE,meshphong_frag:ZE,meshphysical_vert:KE,meshphysical_frag:QE,meshtoon_vert:JE,meshtoon_frag:ew,points_vert:tw,points_frag:nw,shadow_vert:iw,shadow_frag:rw,sprite_vert:sw,sprite_frag:aw},oe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},li={basic:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:sn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:sn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:sn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:sn([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:sn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:sn([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:sn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:sn([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:sn([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:sn([oe.lights,oe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};li.physical={uniforms:sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Zo={r:0,b:0,g:0},Mr=new Ni,ow=new Lt;function lw(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function x(b){let v=!1;const M=g(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===ic)?(u===void 0&&(u=new Yn(new Ma(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ha(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mr.copy(v.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ow.makeRotationFromEuler(Mr)),u.material.toneMapped=ft.getTransfer(M.colorSpace)!==_t,(h!==M||f!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Yn(new So(2,2),new dr({name:"BackgroundMaterial",uniforms:ha(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(Zo,pg(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:d}}function cw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,C,V,U,z){let Y=!1;const X=h(U,V,C);s!==X&&(s=X,c(s.object)),Y=m(y,U,V,z),Y&&g(y,U,V,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(y,C,V,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,C,V){const U=V.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let Y=z[C.id];Y===void 0&&(Y={},z[C.id]=Y);let X=Y[U];return X===void 0&&(X=f(l()),Y[U]=X),X}function f(y){const C=[],V=[],U=[];for(let z=0;z<t;z++)C[z]=0,V[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:U,object:y,attributes:{},index:null}}function m(y,C,V,U){const z=s.attributes,Y=C.attributes;let X=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){const xe=z[W];let _e=Y[W];if(_e===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),xe===void 0||xe.attribute!==_e||_e&&xe.data!==_e.data)return!0;X++}return s.attributesNum!==X||s.index!==U}function g(y,C,V,U){const z={},Y=C.attributes;let X=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){let xe=Y[W];xe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const _e={};_e.attribute=xe,xe&&xe.data&&(_e.data=xe.data),z[W]=_e,X++}s.attributes=z,s.attributesNum=X,s.index=U}function x(){const y=s.newAttributes;for(let C=0,V=y.length;C<V;C++)y[C]=0}function d(y){p(y,0)}function p(y,C){const V=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;V[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),z[y]!==C&&(n.vertexAttribDivisor(y,C),z[y]=C)}function b(){const y=s.newAttributes,C=s.enabledAttributes;for(let V=0,U=C.length;V<U;V++)C[V]!==y[V]&&(n.disableVertexAttribArray(V),C[V]=0)}function v(y,C,V,U,z,Y,X){X===!0?n.vertexAttribIPointer(y,C,V,z,Y):n.vertexAttribPointer(y,C,V,U,z,Y)}function M(y,C,V,U){x();const z=U.attributes,Y=V.getAttributes(),X=C.defaultAttributeValues;for(const ee in Y){const W=Y[ee];if(W.location>=0){let le=z[ee];if(le===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const xe=le.normalized,_e=le.itemSize,Oe=e.get(le);if(Oe===void 0)continue;const st=Oe.buffer,j=Oe.type,te=Oe.bytesPerElement,me=j===n.INT||j===n.UNSIGNED_INT||le.gpuType===K1;if(le.isInterleavedBufferAttribute){const ae=le.data,Ue=ae.stride,Ce=le.offset;if(ae.isInstancedInterleavedBuffer){for(let $e=0;$e<W.locationSize;$e++)p(W.location+$e,ae.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let $e=0;$e<W.locationSize;$e++)d(W.location+$e);n.bindBuffer(n.ARRAY_BUFFER,st);for(let $e=0;$e<W.locationSize;$e++)v(W.location+$e,_e/W.locationSize,j,xe,Ue*te,(Ce+_e/W.locationSize*$e)*te,me)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)p(W.location+ae,le.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<W.locationSize;ae++)d(W.location+ae);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ae=0;ae<W.locationSize;ae++)v(W.location+ae,_e/W.locationSize,j,xe,_e*te,_e/W.locationSize*ae*te,me)}}else if(X!==void 0){const xe=X[ee];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(W.location,xe);break;case 3:n.vertexAttrib3fv(W.location,xe);break;case 4:n.vertexAttrib4fv(W.location,xe);break;default:n.vertexAttrib1fv(W.location,xe)}}}}b()}function R(){D();for(const y in i){const C=i[y];for(const V in C){const U=C[V];for(const z in U)u(U[z].object),delete U[z];delete C[V]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const V in C){const U=C[V];for(const z in U)u(U[z].object),delete U[z];delete C[V]}delete i[y.id]}function A(y){for(const C in i){const V=i[C];if(V[y.id]===void 0)continue;const U=V[y.id];for(const z in U)u(U[z].object),delete U[z];delete V[y.id]}}function D(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function uw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,i,1)}}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<f.length;x++)t.update(g,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==di&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===rc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==hr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ir&&!A)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:M,maxSamples:R}}function fw(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Cr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const b=s?0:i,v=b*4;let M=p.clippingState||null;l.value=M,M=u(g,f,v,m);for(let R=0;R!==v;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,g){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=l.value,g!==!0||d===null){const p=m+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,M=m;v!==x;++v,M+=4)a.copy(h[v]).applyMatrix4(b,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function dw(n){let e=new WeakMap;function t(a,o){return o===fh?a.mapping=aa:o===dh&&(a.mapping=oa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fh||o===dh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wS(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pw extends mg{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Ap=[.125,.215,.35,.446,.526,.582],Or=20,lu=new pw,Rp=new nt;let cu=null,uu=0,hu=0,fu=!1;const Lr=(1+Math.sqrt(5))/2,xs=1/Lr,Pp=[new k(-Lr,xs,0),new k(Lr,xs,0),new k(-xs,0,Lr),new k(xs,0,Lr),new k(0,Lr,-xs),new k(0,Lr,xs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,uu,hu),this._renderer.xr.enabled=fu,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===aa||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:rc,format:di,colorSpace:mr,depthBuffer:!1},r=Lp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mw(s)),this._blurMaterial=gw(s,e,t)}return r}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,lu)}_sceneToCubeUV(e,t,i,r){const o=new bn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rp),u.toneMapping=or,u.autoClear=!1;const m=new lf({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Yn(new Ma,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(Rp),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Ko(r,b*v,p>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===aa||e.mapping===oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,lu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pp[(r-s-1)%Pp.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Or-1),x=s/g,d=isFinite(s)?1+Math.floor(u*x):Or;d>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Or}`);const p=[];let b=0;for(let A=0;A<Or;++A){const D=A/x,E=Math.exp(-D*D/2);p.push(E),A===0?b+=E:A<d&&(b+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-Xs?r-v+Xs:0),T=4*(this._cubeSize-M);Ko(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(h,lu)}}function mw(n){const e=[],t=[],i=[];let r=n;const s=n-Xs+1+Ap.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Xs?l=Ap[a-n+Xs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,d=2,p=1,b=new Float32Array(x*g*m),v=new Float32Array(d*g*m),M=new Float32Array(p*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,D=T>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];b.set(E,x*g*T),v.set(f,d*g*T);const y=[T,T,T,T,T,T];M.set(y,p*g*T)}const R=new ti;R.setAttribute("position",new kn(b,x)),R.setAttribute("uv",new kn(v,d)),R.setAttribute("faceIndex",new kn(M,p)),e.push(R),r>Xs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lp(n,e,t){const i=new Yr(n,e,t);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ko(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gw(n,e,t){const i=new Float32Array(Or),r=new k(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ip(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Np(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xw(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===fh||l===dh,u=l===aa||l===oa;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Cp(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Cp(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function vw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&og("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _w(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let d=0,p=x.length;d<p;d++)e.remove(x[d])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let d=0,p=x.length;d<p;d++)e.update(x[d],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let v=0,M=b.length;v<M;v+=3){const R=b[v+0],T=b[v+1],A=b[v+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){const b=g.array;x=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const R=v+0,T=v+1,A=v+2;f.push(R,T,T,A,A,R)}}else return;const d=new(ag(f)?dg:fg)(f,1);d.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function yw(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<g;d++)this.render(f[d]/a,m[d]);else{x.multiDrawElementsWEBGL(i,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];t.update(d,i,1)}}function h(f,m,g,x){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=m[b];for(let b=0;b<x.length;b++)t.update(p,i,x[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mw(n,e,t){const i=new WeakMap,r=new Zt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let M=o.attributes.position.count*v,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*R*4*h),A=new cg(T,M,R,h);A.type=ir,A.needsUpdate=!0;const D=v*4;for(let y=0;y<h;y++){const C=d[y],V=p[y],U=b[y],z=M*R*4*y;for(let Y=0;Y<C.count;Y++){const X=Y*D;m===!0&&(r.fromBufferAttribute(C,Y),T[z+X+0]=r.x,T[z+X+1]=r.y,T[z+X+2]=r.z,T[z+X+3]=0),g===!0&&(r.fromBufferAttribute(V,Y),T[z+X+4]=r.x,T[z+X+5]=r.y,T[z+X+6]=r.z,T[z+X+7]=0),x===!0&&(r.fromBufferAttribute(U,Y),T[z+X+8]=r.x,T[z+X+9]=r.y,T[z+X+10]=r.z,T[z+X+11]=U.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new rt(M,R)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Ew(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class _g extends dn{constructor(e,t,i,r,s,a,o,l,c,u=$s){if(u!==$s&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=la),i===void 0&&u===ua&&(i=ca),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yg=new dn,Sg=new _g(1,1);Sg.compareFunction=rg;const Mg=new cg,Eg=new lS,wg=new gg,Dp=[],Op=[],Up=new Float32Array(16),Fp=new Float32Array(9),kp=new Float32Array(4);function Ea(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dp[r];if(s===void 0&&(s=new Float32Array(r),Dp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oc(n,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ww(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function Aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function Rw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;kp.set(i),n.uniformMatrix2fv(this.addr,!1,kp),Vt(t,i)}}function Pw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Fp.set(i),n.uniformMatrix3fv(this.addr,!1,Fp),Vt(t,i)}}function Cw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Up.set(i),n.uniformMatrix4fv(this.addr,!1,Up),Vt(t,i)}}function Lw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function Nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Ow(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Uw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Bw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Sg:yg;t.setTexture2D(e||s,r)}function zw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eg,r)}function Hw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wg,r)}function Vw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mg,r)}function Gw(n){switch(n){case 5126:return ww;case 35664:return bw;case 35665:return Tw;case 35666:return Aw;case 35674:return Rw;case 35675:return Pw;case 35676:return Cw;case 5124:case 35670:return Lw;case 35667:case 35671:return Iw;case 35668:case 35672:return Nw;case 35669:case 35673:return Dw;case 5125:return Ow;case 36294:return Uw;case 36295:return Fw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}function Ww(n,e){n.uniform1fv(this.addr,e)}function Xw(n,e){const t=Ea(e,this.size,2);n.uniform2fv(this.addr,t)}function jw(n,e){const t=Ea(e,this.size,3);n.uniform3fv(this.addr,t)}function qw(n,e){const t=Ea(e,this.size,4);n.uniform4fv(this.addr,t)}function $w(n,e){const t=Ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yw(n,e){const t=Ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zw(n,e){const t=Ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kw(n,e){n.uniform1iv(this.addr,e)}function Qw(n,e){n.uniform2iv(this.addr,e)}function Jw(n,e){n.uniform3iv(this.addr,e)}function e4(n,e){n.uniform4iv(this.addr,e)}function t4(n,e){n.uniform1uiv(this.addr,e)}function n4(n,e){n.uniform2uiv(this.addr,e)}function i4(n,e){n.uniform3uiv(this.addr,e)}function r4(n,e){n.uniform4uiv(this.addr,e)}function s4(n,e,t){const i=this.cache,r=e.length,s=oc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||yg,s[a])}function a4(n,e,t){const i=this.cache,r=e.length,s=oc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Eg,s[a])}function o4(n,e,t){const i=this.cache,r=e.length,s=oc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wg,s[a])}function l4(n,e,t){const i=this.cache,r=e.length,s=oc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Mg,s[a])}function c4(n){switch(n){case 5126:return Ww;case 35664:return Xw;case 35665:return jw;case 35666:return qw;case 35674:return $w;case 35675:return Yw;case 35676:return Zw;case 5124:case 35670:return Kw;case 35667:case 35671:return Qw;case 35668:case 35672:return Jw;case 35669:case 35673:return e4;case 5125:return t4;case 36294:return n4;case 36295:return i4;case 36296:return r4;case 35678:case 36198:case 36298:case 36306:case 35682:return s4;case 35679:case 36299:case 36307:return a4;case 35680:case 36300:case 36308:case 36293:return o4;case 36289:case 36303:case 36311:case 36292:return l4}}class u4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gw(t.type)}}class h4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c4(t.type)}}class f4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Bp(n,e){n.seq.push(e),n.map[e.id]=e}function d4(n,e,t){const i=n.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bp(t,c===void 0?new u4(o,n,e):new h4(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new f4(o),Bp(t,h)),t=h}}}class gl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);d4(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function zp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const p4=37297;let m4=0;function g4(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function x4(n){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(n);let i;switch(e===t?i="":e===Dl&&t===Nl?i="LinearDisplayP3ToLinearSRGB":e===Nl&&t===Dl&&(i="LinearSRGBToLinearDisplayP3"),n){case mr:case sc:return[i,"LinearTransferOETF"];case si:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+g4(n.getShaderSource(e),a)}else return r}function v4(n,e){const t=x4(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _4(n,e){let t;switch(e){case T3:t="Linear";break;case A3:t="Reinhard";break;case R3:t="OptimizedCineon";break;case P3:t="ACESFilmic";break;case L3:t="AgX";break;case I3:t="Neutral";break;case C3:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y4(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function S4(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M4(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qa(n){return n!==""}function Vp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E4=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(E4,b4)}const w4=new Map;function b4(n,e){let t=He[e];if(t===void 0){const i=w4.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}const T4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(n){return n.replace(T4,A4)}function A4(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R4(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function P4(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case aa:case oa:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C4(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oa:e="ENVMAP_MODE_REFRACTION";break}return e}function L4(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Y1:e="ENVMAP_BLENDING_MULTIPLY";break;case w3:e="ENVMAP_BLENDING_MIX";break;case b3:e="ENVMAP_BLENDING_ADD";break}return e}function I4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function N4(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=R4(t),c=P4(t),u=C4(t),h=L4(t),f=I4(t),m=y4(t),g=S4(s),x=r.createProgram();let d,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(d=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?He.tonemapping_pars_fragment:"",t.toneMapping!==or?_4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,v4("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=xh(a),a=Vp(a,t),a=Gp(a,t),o=xh(o),o=Vp(o,t),o=Gp(o,t),a=Wp(a),o=Wp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+d+a,M=b+p+o,R=zp(r,r.VERTEX_SHADER,v),T=zp(r,r.FRAGMENT_SHADER,M);r.attachShader(x,R),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(C){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),U=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(T).trim();let Y=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,T);else{const ee=Hp(r,R,"vertex"),W=Hp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+ee+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||z==="")&&(X=!1);X&&(C.diagnostics={runnable:Y,programLog:V,vertexShader:{log:U,prefix:d},fragmentShader:{log:z,prefix:p}})}r.deleteShader(R),r.deleteShader(T),D=new gl(r,x),E=M4(r,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,p4)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m4++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let D4=0;class O4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U4(e),t.set(e,i)),i}}class U4{constructor(e){this.id=D4++,this.code=e,this.usedTimes=0}}function F4(n,e,t,i,r,s,a){const o=new of,l=new O4,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function d(E,y,C,V,U){const z=V.fog,Y=U.geometry,X=E.isMeshStandardMaterial?V.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),W=ee&&ee.mapping===ic?ee.image.height:null,le=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=xe!==void 0?xe.length:0;let Oe=0;Y.morphAttributes.position!==void 0&&(Oe=1),Y.morphAttributes.normal!==void 0&&(Oe=2),Y.morphAttributes.color!==void 0&&(Oe=3);let st,j,te,me;if(le){const dt=li[le];st=dt.vertexShader,j=dt.fragmentShader}else st=E.vertexShader,j=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const ae=n.getRenderTarget(),Ue=U.isInstancedMesh===!0,Ce=U.isBatchedMesh===!0,$e=!!E.map,L=!!E.matcap,Fe=!!ee,Je=!!E.aoMap,bt=!!E.lightMap,Pe=!!E.bumpMap,it=!!E.normalMap,Ye=!!E.displacementMap,ze=!!E.emissiveMap,Dt=!!E.metalnessMap,P=!!E.roughnessMap,S=E.anisotropy>0,G=E.clearcoat>0,K=E.dispersion>0,Q=E.iridescence>0,J=E.sheen>0,Ae=E.transmission>0,ce=S&&!!E.anisotropyMap,ue=G&&!!E.clearcoatMap,We=G&&!!E.clearcoatNormalMap,ne=G&&!!E.clearcoatRoughnessMap,we=Q&&!!E.iridescenceMap,Qe=Q&&!!E.iridescenceThicknessMap,Ne=J&&!!E.sheenColorMap,he=J&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,et=!!E.specularColorMap,It=!!E.specularIntensityMap,I=Ae&&!!E.transmissionMap,de=Ae&&!!E.thicknessMap,q=!!E.gradientMap,Z=!!E.alphaMap,re=E.alphaTest>0,De=!!E.alphaHash,at=!!E.extensions;let Nt=or;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Gt={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:j,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:mr,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:L,envMap:Fe,envMapMode:Fe&&ee.mapping,envMapCubeUVHeight:W,aoMap:Je,lightMap:bt,bumpMap:Pe,normalMap:it,displacementMap:f&&Ye,emissiveMap:ze,normalMapObjectSpace:it&&E.normalMapType===j3,normalMapTangentSpace:it&&E.normalMapType===ig,metalnessMap:Dt,roughnessMap:P,anisotropy:S,anisotropyMap:ce,clearcoat:G,clearcoatMap:ue,clearcoatNormalMap:We,clearcoatRoughnessMap:ne,dispersion:K,iridescence:Q,iridescenceMap:we,iridescenceThicknessMap:Qe,sheen:J,sheenColorMap:Ne,sheenRoughnessMap:he,specularMap:Xe,specularColorMap:et,specularIntensityMap:It,transmission:Ae,transmissionMap:I,thicknessMap:de,gradientMap:q,opaque:E.transparent===!1&&E.blending===qs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:re,alphaHash:De,combine:E.combine,mapUv:$e&&x(E.map.channel),aoMapUv:Je&&x(E.aoMap.channel),lightMapUv:bt&&x(E.lightMap.channel),bumpMapUv:Pe&&x(E.bumpMap.channel),normalMapUv:it&&x(E.normalMap.channel),displacementMapUv:Ye&&x(E.displacementMap.channel),emissiveMapUv:ze&&x(E.emissiveMap.channel),metalnessMapUv:Dt&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:ce&&x(E.anisotropyMap.channel),clearcoatMapUv:ue&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(E.sheenRoughnessMap.channel),specularMapUv:Xe&&x(E.specularMap.channel),specularColorMapUv:et&&x(E.specularColorMap.channel),specularIntensityMapUv:It&&x(E.specularIntensityMap.channel),transmissionMapUv:I&&x(E.transmissionMap.channel),thicknessMapUv:de&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(it||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&($e||Z),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===_t,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ai,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:at&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:at&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(y,E),v(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),E.push(o.mask)}function M(E){const y=g[E.type];let C;if(y){const V=li[y];C=yS.clone(V.uniforms)}else C=E.uniforms;return C}function R(E,y){let C;for(let V=0,U=u.length;V<U;V++){const z=u[V];if(z.cacheKey===y){C=z,++C.usedTimes;break}}return C===void 0&&(C=new N4(n,y,E,s),u.push(C)),C}function T(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function D(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:D}}function k4(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function B4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,m,g,x,d){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:d},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=d),e++,p}function o(h,f,m,g,x,d){const p=a(h,f,m,g,x,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,f,m,g,x,d){const p=a(h,f,m,g,x,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||B4),i.length>1&&i.sort(f||jp),r.length>1&&r.sort(f||jp)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function z4(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new qp,n.set(i,[a])):r>=s.length?(a=new qp,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function H4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new nt};break;case"SpotLight":t={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function V4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G4=0;function W4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function X4(n){const e=new H4,t=V4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Lt,a=new Lt;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,x=0,d=0,p=0,b=0,v=0,M=0,R=0,T=0,A=0;c.sort(W4);for(let E=0,y=c.length;E<y;E++){const C=c[E],V=C.color,U=C.intensity,z=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=V.r*U,h+=V.g*U,f+=V.b*U;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],U);A++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=X,m++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(V).multiplyScalar(U),X.distance=z,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[x]=X;const ee=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,ee.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=ee.matrix,C.castShadow){const W=t.get(C);W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=Y,M++}x++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(V).multiplyScalar(U),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[d]=X,d++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=C.shadow.matrix,v++}i.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(U),X.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=X,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==d||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==v||D.numSpotShadows!==M||D.numSpotMaps!==R||D.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,D.directionalLength=m,D.pointLength=g,D.spotLength=x,D.rectAreaLength=d,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=v,D.numSpotShadows=M,D.numSpotMaps=R,D.numLightProbes=A,i.version=G4++)}function l(c,u){let h=0,f=0,m=0,g=0,x=0;const d=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const v=c[p];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),h++}else if(v.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),m++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),a.identity(),s.copy(v.matrixWorld),s.premultiply(d),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:i}}function $p(n){const e=new X4(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j4(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $p(n),e.set(r,[o])):s>=a.length?(o=new $p(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class q4 extends Sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $4 extends Sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function K4(n,e,t){let i=new xg;const r=new rt,s=new rt,a=new Zt,o=new q4({depthPacking:X3}),l=new $4,c={},u=t.maxTextureSize,h={[Ii]:fn,[fn]:Ii,[Ai]:Ai},f=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Y4,fragmentShader:Z4}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ti;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$1;let p=this.type;this.render=function(T,A,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ar),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=p!==wi&&this.type===wi,z=p===wi&&this.type!==wi;for(let Y=0,X=T.length;Y<X;Y++){const ee=T[Y],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const le=W.getFrameExtents();if(r.multiply(le),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,W.mapSize.y=s.y)),W.map===null||U===!0||z===!0){const _e=this.type!==wi?{minFilter:Fn,magFilter:Fn}:{};W.map!==null&&W.map.dispose(),W.map=new Yr(r.x,r.y,_e),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const xe=W.getViewportCount();for(let _e=0;_e<xe;_e++){const Oe=W.getViewport(_e);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),V.viewport(a),W.updateMatrices(ee,_e),i=W.getFrustum(),M(A,D,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===wi&&b(W,D),W.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(E,y,C)};function b(T,A){const D=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,D,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,D,m,x,null)}function v(T,A,D,E){let y=null;const C=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=D.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,U=A.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let Y=z[U];Y===void 0&&(Y=y.clone(),z[U]=Y,A.addEventListener("dispose",R)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,E===wi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=D}return y}function M(T,A,D,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===wi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const U=e.update(T),z=T.material;if(Array.isArray(z)){const Y=U.groups;for(let X=0,ee=Y.length;X<ee;X++){const W=Y[X],le=z[W.materialIndex];if(le&&le.visible){const xe=v(T,le,E,y);T.onBeforeShadow(n,T,A,D,U,xe,W),n.renderBufferDirect(D,null,U,xe,T,W),T.onAfterShadow(n,T,A,D,U,xe,W)}}}else if(z.visible){const Y=v(T,z,E,y);T.onBeforeShadow(n,T,A,D,U,Y,null),n.renderBufferDirect(D,null,U,Y,T,null),T.onAfterShadow(n,T,A,D,U,Y,null)}}const V=T.children;for(let U=0,z=V.length;U<z;U++)M(V[U],A,D,E,y)}function R(T){T.target.removeEventListener("dispose",R);for(const D in c){const E=c[D],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function Q4(n){function e(){let I=!1;const de=new Zt;let q=null;const Z=new Zt(0,0,0,0);return{setMask:function(re){q!==re&&!I&&(n.colorMask(re,re,re,re),q=re)},setLocked:function(re){I=re},setClear:function(re,De,at,Nt,Gt){Gt===!0&&(re*=Nt,De*=Nt,at*=Nt),de.set(re,De,at,Nt),Z.equals(de)===!1&&(n.clearColor(re,De,at,Nt),Z.copy(de))},reset:function(){I=!1,q=null,Z.set(-1,0,0,0)}}}function t(){let I=!1,de=null,q=null,Z=null;return{setTest:function(re){re?me(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(re){de!==re&&!I&&(n.depthMask(re),de=re)},setFunc:function(re){if(q!==re){switch(re){case x3:n.depthFunc(n.NEVER);break;case v3:n.depthFunc(n.ALWAYS);break;case _3:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case y3:n.depthFunc(n.EQUAL);break;case S3:n.depthFunc(n.GEQUAL);break;case M3:n.depthFunc(n.GREATER);break;case E3:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=re}},setLocked:function(re){I=re},setClear:function(re){Z!==re&&(n.clearDepth(re),Z=re)},reset:function(){I=!1,de=null,q=null,Z=null}}}function i(){let I=!1,de=null,q=null,Z=null,re=null,De=null,at=null,Nt=null,Gt=null;return{setTest:function(dt){I||(dt?me(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(dt){de!==dt&&!I&&(n.stencilMask(dt),de=dt)},setFunc:function(dt,ni,ii){(q!==dt||Z!==ni||re!==ii)&&(n.stencilFunc(dt,ni,ii),q=dt,Z=ni,re=ii)},setOp:function(dt,ni,ii){(De!==dt||at!==ni||Nt!==ii)&&(n.stencilOp(dt,ni,ii),De=dt,at=ni,Nt=ii)},setLocked:function(dt){I=dt},setClear:function(dt){Gt!==dt&&(n.clearStencil(dt),Gt=dt)},reset:function(){I=!1,de=null,q=null,Z=null,re=null,De=null,at=null,Nt=null,Gt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,g=!1,x=null,d=null,p=null,b=null,v=null,M=null,R=null,T=new nt(0,0,0),A=0,D=!1,E=null,y=null,C=null,V=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=X>=1):ee.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=X>=2);let W=null,le={};const xe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Oe=new Zt().fromArray(xe),st=new Zt().fromArray(_e);function j(I,de,q,Z){const re=new Uint8Array(4),De=n.createTexture();n.bindTexture(I,De),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<q;at++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(de+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return De}const te={};te[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(n.DEPTH_TEST),s.setFunc(Cl),Pe(!1),it(Pd),me(n.CULL_FACE),Je(ar);function me(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function ae(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ue(I,de){return u[I]!==de?(n.bindFramebuffer(I,de),u[I]=de,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Ce(I,de){let q=f,Z=!1;if(I){q=h.get(de),q===void 0&&(q=[],h.set(de,q));const re=I.textures;if(q.length!==re.length||q[0]!==n.COLOR_ATTACHMENT0){for(let De=0,at=re.length;De<at;De++)q[De]=n.COLOR_ATTACHMENT0+De;q.length=re.length,Z=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Z=!0);Z&&n.drawBuffers(q)}function $e(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const L={[Dr]:n.FUNC_ADD,[e3]:n.FUNC_SUBTRACT,[t3]:n.FUNC_REVERSE_SUBTRACT};L[n3]=n.MIN,L[i3]=n.MAX;const Fe={[r3]:n.ZERO,[s3]:n.ONE,[a3]:n.SRC_COLOR,[uh]:n.SRC_ALPHA,[f3]:n.SRC_ALPHA_SATURATE,[u3]:n.DST_COLOR,[l3]:n.DST_ALPHA,[o3]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[h3]:n.ONE_MINUS_DST_COLOR,[c3]:n.ONE_MINUS_DST_ALPHA,[d3]:n.CONSTANT_COLOR,[p3]:n.ONE_MINUS_CONSTANT_COLOR,[m3]:n.CONSTANT_ALPHA,[g3]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(I,de,q,Z,re,De,at,Nt,Gt,dt){if(I===ar){g===!0&&(ae(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),I!==Jy){if(I!==x||dt!==D){if((d!==Dr||v!==Dr)&&(n.blendEquation(n.FUNC_ADD),d=Dr,v=Dr),dt)switch(I){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cd:n.blendFunc(n.ONE,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Id:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,M=null,R=null,T.set(0,0,0),A=0,x=I,D=dt}return}re=re||de,De=De||q,at=at||Z,(de!==d||re!==v)&&(n.blendEquationSeparate(L[de],L[re]),d=de,v=re),(q!==p||Z!==b||De!==M||at!==R)&&(n.blendFuncSeparate(Fe[q],Fe[Z],Fe[De],Fe[at]),p=q,b=Z,M=De,R=at),(Nt.equals(T)===!1||Gt!==A)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Gt),T.copy(Nt),A=Gt),x=I,D=!1}function bt(I,de){I.side===Ai?ae(n.CULL_FACE):me(n.CULL_FACE);let q=I.side===fn;de&&(q=!q),Pe(q),I.blending===qs&&I.transparent===!1?Je(ar):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ze(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function it(I){I!==Zy?(me(n.CULL_FACE),I!==y&&(I===Pd?n.cullFace(n.BACK):I===Ky?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),y=I}function Ye(I){I!==C&&(Y&&n.lineWidth(I),C=I)}function ze(I,de,q){I?(me(n.POLYGON_OFFSET_FILL),(V!==de||U!==q)&&(n.polygonOffset(de,q),V=de,U=q)):ae(n.POLYGON_OFFSET_FILL)}function Dt(I){I?me(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+z-1),W!==I&&(n.activeTexture(I),W=I)}function S(I,de,q){q===void 0&&(W===null?q=n.TEXTURE0+z-1:q=W);let Z=le[q];Z===void 0&&(Z={type:void 0,texture:void 0},le[q]=Z),(Z.type!==I||Z.texture!==de)&&(W!==q&&(n.activeTexture(q),W=q),n.bindTexture(I,de||te[I]),Z.type=I,Z.texture=de)}function G(){const I=le[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){Oe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function he(I){st.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),st.copy(I))}function Xe(I,de){let q=l.get(de);q===void 0&&(q=new WeakMap,l.set(de,q));let Z=q.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(de,I.name),q.set(I,Z))}function et(I,de){const Z=l.get(de).get(I);o.get(de)!==Z&&(n.uniformBlockBinding(de,Z,I.__bindingPointIndex),o.set(de,Z))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,le={},u={},h=new WeakMap,f=[],m=null,g=!1,x=null,d=null,p=null,b=null,v=null,M=null,R=null,T=new nt(0,0,0),A=0,D=!1,E=null,y=null,C=null,V=null,U=null,Oe.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:me,disable:ae,bindFramebuffer:Ue,drawBuffers:Ce,useProgram:$e,setBlending:Je,setMaterial:bt,setFlipSided:Pe,setCullFace:it,setLineWidth:Ye,setPolygonOffset:ze,setScissorTest:Dt,activeTexture:P,bindTexture:S,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:we,texImage3D:Qe,updateUBOMapping:Xe,uniformBlockBinding:et,texStorage2D:We,texStorage3D:ne,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Ne,viewport:he,reset:It}}function J4(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return m?new OffscreenCanvas(P,S):Ul("canvas")}function x(P,S,G){let K=1;const Q=Dt(P);if((Q.width>G||Q.height>G)&&(K=G/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(K*Q.width),Ae=Math.floor(K*Q.height);h===void 0&&(h=g(J,Ae));const ce=S?g(J,Ae):h;return ce.width=J,ce.height=Ae,ce.getContext("2d").drawImage(P,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Ae+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==Fn&&P.minFilter!==qn}function p(P){n.generateMipmap(P)}function b(P,S,G,K,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=S;if(S===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),S===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),S===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const Ae=Q?Il:ft.getTransfer(K);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Ae===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(P,S){let G;return P?S===null||S===la||S===ca?G=n.DEPTH24_STENCIL8:S===ir?G=n.DEPTH32F_STENCIL8:S===Ll&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===la||S===ca?G=n.DEPTH_COMPONENT24:S===ir?G=n.DEPTH_COMPONENT32F:S===Ll&&(G=n.DEPTH_COMPONENT16),G}function M(P,S){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fn&&P.minFilter!==qn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){const S=P.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&u.delete(S)}function T(P){const S=P.target;S.removeEventListener("dispose",T),E(S)}function A(P){const S=i.get(P);if(S.__webglInit===void 0)return;const G=P.source,K=f.get(G);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(P),Object.keys(K).length===0&&f.delete(G)}i.remove(P)}function D(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const G=P.source,K=f.get(G);delete K[S.__cacheKey],a.memory.textures--}function E(P){const S=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let K=0,Q=G.length;K<Q;K++){const J=i.get(G[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(G[K])}i.remove(P)}let y=0;function C(){y=0}function V(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function U(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function z(P,S){const G=i.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(G,P,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function Y(P,S){const G=i.get(P);if(P.version>0&&G.__version!==P.version){st(G,P,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function X(P,S){const G=i.get(P);if(P.version>0&&G.__version!==P.version){st(G,P,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function ee(P,S){const G=i.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const W={[ph]:n.REPEAT,[Fr]:n.CLAMP_TO_EDGE,[mh]:n.MIRRORED_REPEAT},le={[Fn]:n.NEAREST,[N3]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[Uc]:n.LINEAR_MIPMAP_NEAREST,[kr]:n.LINEAR_MIPMAP_LINEAR},xe={[q3]:n.NEVER,[J3]:n.ALWAYS,[$3]:n.LESS,[rg]:n.LEQUAL,[Y3]:n.EQUAL,[Q3]:n.GEQUAL,[Z3]:n.GREATER,[K3]:n.NOTEQUAL};function _e(P,S){if(S.type===ir&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qn||S.magFilter===Uc||S.magFilter===Co||S.magFilter===kr||S.minFilter===qn||S.minFilter===Uc||S.minFilter===Co||S.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,W[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,W[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,W[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,le[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==Co&&S.minFilter!==kr||S.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",R));const K=S.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const J=U(S);if(J!==P.__cacheKey){Q[J]===void 0&&(Q[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[J].usedTimes++;const Ae=Q[P.__cacheKey];Ae!==void 0&&(Q[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&D(S)),P.__cacheKey=J,P.__webglTexture=Q[J].texture}return G}function st(P,S,G){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);const Q=Oe(P,S),J=S.source;t.bindTexture(K,P.__webglTexture,n.TEXTURE0+G);const Ae=i.get(J);if(J.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const ce=ft.getPrimaries(ft.workingColorSpace),ue=S.colorSpace===tr?null:ft.getPrimaries(S.colorSpace),We=S.colorSpace===tr||ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ne=x(S.image,!1,r.maxTextureSize);ne=ze(S,ne);const we=s.convert(S.format,S.colorSpace),Qe=s.convert(S.type);let Ne=b(S.internalFormat,we,Qe,S.colorSpace,S.isVideoTexture);_e(K,S);let he;const Xe=S.mipmaps,et=S.isVideoTexture!==!0,It=Ae.__version===void 0||Q===!0,I=J.dataReady,de=M(S,ne);if(S.isDepthTexture)Ne=v(S.format===ua,S.type),It&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ne.width,ne.height,0,we,Qe,null));else if(S.isDataTexture)if(Xe.length>0){et&&It&&t.texStorage2D(n.TEXTURE_2D,de,Ne,Xe[0].width,Xe[0].height);for(let q=0,Z=Xe.length;q<Z;q++)he=Xe[q],et?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,he.width,he.height,we,Qe,he.data):t.texImage2D(n.TEXTURE_2D,q,Ne,he.width,he.height,0,we,Qe,he.data);S.generateMipmaps=!1}else et?(It&&t.texStorage2D(n.TEXTURE_2D,de,Ne,ne.width,ne.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,we,Qe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ne.width,ne.height,0,we,Qe,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,Xe[0].width,Xe[0].height,ne.depth);for(let q=0,Z=Xe.length;q<Z;q++)if(he=Xe[q],S.format!==di)if(we!==null)if(et){if(I)if(S.layerUpdates.size>0){for(const re of S.layerUpdates){const De=he.width*he.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,re,he.width,he.height,1,we,he.data.slice(De*re,De*(re+1)),0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,he.width,he.height,ne.depth,we,he.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ne,he.width,he.height,ne.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,he.width,he.height,ne.depth,we,Qe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ne,he.width,he.height,ne.depth,0,we,Qe,he.data)}else{et&&It&&t.texStorage2D(n.TEXTURE_2D,de,Ne,Xe[0].width,Xe[0].height);for(let q=0,Z=Xe.length;q<Z;q++)he=Xe[q],S.format!==di?we!==null?et?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,he.width,he.height,we,he.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ne,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,he.width,he.height,we,Qe,he.data):t.texImage2D(n.TEXTURE_2D,q,Ne,he.width,he.height,0,we,Qe,he.data)}else if(S.isDataArrayTexture)if(et){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,ne.width,ne.height,ne.depth),I)if(S.layerUpdates.size>0){let q;switch(Qe){case n.UNSIGNED_BYTE:switch(we){case n.ALPHA:q=1;break;case n.LUMINANCE:q=1;break;case n.LUMINANCE_ALPHA:q=2;break;case n.RGB:q=3;break;case n.RGBA:q=4;break;default:throw new Error(`Unknown texel size for format ${we}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:q=1;break;default:throw new Error(`Unknown texel size for type ${Qe}.`)}const Z=ne.width*ne.height*q;for(const re of S.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ne.width,ne.height,1,we,Qe,ne.data.slice(Z*re,Z*(re+1)));S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,we,Qe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ne.width,ne.height,ne.depth,0,we,Qe,ne.data);else if(S.isData3DTexture)et?(It&&t.texStorage3D(n.TEXTURE_3D,de,Ne,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,we,Qe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ne.width,ne.height,ne.depth,0,we,Qe,ne.data);else if(S.isFramebufferTexture){if(It)if(et)t.texStorage2D(n.TEXTURE_2D,de,Ne,ne.width,ne.height);else{let q=ne.width,Z=ne.height;for(let re=0;re<de;re++)t.texImage2D(n.TEXTURE_2D,re,Ne,q,Z,0,we,Qe,null),q>>=1,Z>>=1}}else if(Xe.length>0){if(et&&It){const q=Dt(Xe[0]);t.texStorage2D(n.TEXTURE_2D,de,Ne,q.width,q.height)}for(let q=0,Z=Xe.length;q<Z;q++)he=Xe[q],et?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we,Qe,he):t.texImage2D(n.TEXTURE_2D,q,Ne,we,Qe,he);S.generateMipmaps=!1}else if(et){if(It){const q=Dt(ne);t.texStorage2D(n.TEXTURE_2D,de,Ne,q.width,q.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Qe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ne,we,Qe,ne);d(S)&&p(K),Ae.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function j(P,S,G){if(S.image.length!==6)return;const K=Oe(P,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const J=i.get(Q);if(Q.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+G);const Ae=ft.getPrimaries(ft.workingColorSpace),ce=S.colorSpace===tr?null:ft.getPrimaries(S.colorSpace),ue=S.colorSpace===tr||Ae===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,we=[];for(let Z=0;Z<6;Z++)!We&&!ne?we[Z]=x(S.image[Z],!0,r.maxCubemapSize):we[Z]=ne?S.image[Z].image:S.image[Z],we[Z]=ze(S,we[Z]);const Qe=we[0],Ne=s.convert(S.format,S.colorSpace),he=s.convert(S.type),Xe=b(S.internalFormat,Ne,he,S.colorSpace),et=S.isVideoTexture!==!0,It=J.__version===void 0||K===!0,I=Q.dataReady;let de=M(S,Qe);_e(n.TEXTURE_CUBE_MAP,S);let q;if(We){et&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Xe,Qe.width,Qe.height);for(let Z=0;Z<6;Z++){q=we[Z].mipmaps;for(let re=0;re<q.length;re++){const De=q[re];S.format!==di?Ne!==null?et?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,De.width,De.height,Ne,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,De.width,De.height,Ne,he,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,Xe,De.width,De.height,0,Ne,he,De.data)}}}else{if(q=S.mipmaps,et&&It){q.length>0&&de++;const Z=Dt(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){et?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we[Z].width,we[Z].height,Ne,he,we[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,we[Z].width,we[Z].height,0,Ne,he,we[Z].data);for(let re=0;re<q.length;re++){const at=q[re].image[Z].image;et?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,at.width,at.height,Ne,he,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,Xe,at.width,at.height,0,Ne,he,at.data)}}else{et?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,he,we[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Ne,he,we[Z]);for(let re=0;re<q.length;re++){const De=q[re];et?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,Ne,he,De.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,Xe,Ne,he,De.image[Z])}}}d(S)&&p(n.TEXTURE_CUBE_MAP),J.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function te(P,S,G,K,Q,J){const Ae=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),ue=b(G.internalFormat,Ae,ce,G.colorSpace);if(!i.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>J),we=Math.max(1,S.height>>J);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,ue,ne,we,S.depth,0,Ae,ce,null):t.texImage2D(Q,J,ue,ne,we,0,Ae,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),it(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,i.get(G).__webglTexture,0,Pe(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,i.get(G).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(P,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,J=v(S.stencilBuffer,Q),Ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Pe(S);it(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,J,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,P)}else{const K=S.textures;for(let Q=0;Q<K.length;Q++){const J=K[Q],Ae=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),ue=b(J.internalFormat,Ae,ce,J.colorSpace),We=Pe(S);G&&it(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ue,S.width,S.height):it(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,ue,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ue,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,Q=Pe(S);if(S.depthTexture.format===$s)it(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===ua)it(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const S=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ae(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=n.createRenderbuffer(),me(S.__webglDepthbuffer[K],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),me(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(P,S,G){const K=i.get(P);S!==void 0&&te(K.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ue(P)}function $e(P){const S=P.texture,G=i.get(P),K=i.get(S);P.addEventListener("dispose",T);const Q=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let ue=0;ue<S.mipmaps.length;ue++)G.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else G.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)G.__webglFramebuffer[ce]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ce=0,ue=Q.length;ce<ue;ce++){const We=i.get(Q[ce]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&it(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const ue=Q[ce];G.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const We=s.convert(ue.format,ue.colorSpace),ne=s.convert(ue.type),we=b(ue.internalFormat,We,ne,ue.colorSpace,P.isXRRenderTarget===!0),Qe=Pe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),me(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),_e(n.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)te(G.__webglFramebuffer[ce][ue],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else te(G.__webglFramebuffer[ce],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);d(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ce=0,ue=Q.length;ce<ue;ce++){const We=Q[ce],ne=i.get(We);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),_e(n.TEXTURE_2D,We),te(G.__webglFramebuffer,P,We,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),d(We)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),_e(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)te(G.__webglFramebuffer[ue],P,S,n.COLOR_ATTACHMENT0,ce,ue);else te(G.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,ce,0);d(S)&&p(ce),t.unbindTexture()}P.depthBuffer&&Ue(P)}function L(P){const S=P.textures;for(let G=0,K=S.length;G<K;G++){const Q=S[G];if(d(Q)){const J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(Q).__webglTexture;t.bindTexture(J,Ae),p(J),t.unbindTexture()}}}const Fe=[],Je=[];function bt(P){if(P.samples>0){if(it(P)===!1){const S=P.textures,G=P.width,K=P.height;let Q=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(P),ce=S.length>1;if(ce)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ue]);const We=i.get(S[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,Q,n.NEAREST),l===!0&&(Fe.length=0,Je.length=0,Fe.push(n.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(J),Je.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ue]);const We=i.get(S[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Pe(P){return Math.min(r.maxSamples,P.samples)}function it(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ye(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function ze(P,S){const G=P.colorSpace,K=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==mr&&G!==tr&&(ft.getTransfer(G)===_t?(K!==di||Q!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=ee,this.rebindTextures=Ce,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=te,this.useMultisampledRTT=it}function eb(n,e){function t(i,r=tr){let s;const a=ft.getTransfer(r);if(i===hr)return n.UNSIGNED_BYTE;if(i===Q1)return n.UNSIGNED_SHORT_4_4_4_4;if(i===J1)return n.UNSIGNED_SHORT_5_5_5_1;if(i===U3)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===D3)return n.BYTE;if(i===O3)return n.SHORT;if(i===Ll)return n.UNSIGNED_SHORT;if(i===K1)return n.INT;if(i===la)return n.UNSIGNED_INT;if(i===ir)return n.FLOAT;if(i===rc)return n.HALF_FLOAT;if(i===F3)return n.ALPHA;if(i===k3)return n.RGB;if(i===di)return n.RGBA;if(i===B3)return n.LUMINANCE;if(i===z3)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===ua)return n.DEPTH_STENCIL;if(i===H3)return n.RED;if(i===eg)return n.RED_INTEGER;if(i===V3)return n.RG;if(i===tg)return n.RG_INTEGER;if(i===ng)return n.RGBA_INTEGER;if(i===Fc||i===kc||i===Bc||i===zc)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nd||i===Dd||i===Od||i===Ud)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===kd||i===Bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fd||i===kd)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===Xd||i===jd||i===qd||i===$d||i===Yd||i===Zd||i===Kd||i===Qd||i===Jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$d)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hc||i===ep||i===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hc)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===G3||i===np||i===ip||i===rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class tb extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pi extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(c,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dr({vertexShader:ib,fragmentShader:rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class ab extends ya{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const x=new sb,d=t.getContextAttributes();let p=null,b=null;const v=[],M=[],R=new rt;let T=null;const A=new bn;A.layers.enable(1),A.viewport=new Zt;const D=new bn;D.layers.enable(2),D.viewport=new Zt;const E=[A,D],y=new tb;y.layers.enable(1),y.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=v[j];return te===void 0&&(te=new pu,v[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=v[j];return te===void 0&&(te=new pu,v[j]=te),te.getGripSpace()},this.getHand=function(j){let te=v[j];return te===void 0&&(te=new pu,v[j]=te),te.getHandSpace()};function U(j){const te=M.indexOf(j.inputSource);if(te===-1)return;const me=v[te];me!==void 0&&(me.update(j.inputSource,j.frame,c||a),me.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<v.length;j++){const te=M[j];te!==null&&(M[j]=null,v[j].disconnect(te))}C=null,V=null,x.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Yr(m.framebufferWidth,m.framebufferHeight,{format:di,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let te=null,me=null,ae=null;d.depth&&(ae=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=d.stencil?ua:$s,me=d.stencil?ca:la);const Ue={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Yr(f.textureWidth,f.textureHeight,{format:di,type:hr,depthTexture:new _g(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(j){for(let te=0;te<j.removed.length;te++){const me=j.removed[te],ae=M.indexOf(me);ae>=0&&(M[ae]=null,v[ae].disconnect(me))}for(let te=0;te<j.added.length;te++){const me=j.added[te];let ae=M.indexOf(me);if(ae===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=M.length){M.push(me),ae=Ce;break}else if(M[Ce]===null){M[Ce]=me,ae=Ce;break}if(ae===-1)break}const Ue=v[ae];Ue&&Ue.connect(me)}}const X=new k,ee=new k;function W(j,te,me){X.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const ae=X.distanceTo(ee),Ue=te.projectionMatrix.elements,Ce=me.projectionMatrix.elements,$e=Ue[14]/(Ue[10]-1),L=Ue[14]/(Ue[10]+1),Fe=(Ue[9]+1)/Ue[5],Je=(Ue[9]-1)/Ue[5],bt=(Ue[8]-1)/Ue[0],Pe=(Ce[8]+1)/Ce[0],it=$e*bt,Ye=$e*Pe,ze=ae/(-bt+Pe),Dt=ze*-bt;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Dt),j.translateZ(ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const P=$e+ze,S=L+ze,G=it-Dt,K=Ye+(ae-Dt),Q=Fe*L/S*P,J=Je*L/S*P;j.projectionMatrix.makePerspective(G,K,Q,J,P,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function le(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),y.near=D.near=A.near=j.near,y.far=D.far=A.far=j.far,(C!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far,A.near=C,A.far=V,D.near=C,D.far=V,A.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());const te=j.parent,me=y.cameras;le(y,te);for(let ae=0;ae<me.length;ae++)le(me[ae],te);me.length===2?W(y,A,D):y.projectionMatrix.copy(A.projectionMatrix),xe(j,y,te)};function xe(j,te,me){me===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _e=null;function Oe(j,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;me.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ce=0;Ce<me.length;Ce++){const $e=me[Ce];let L=null;if(m!==null)L=m.getViewport($e);else{const Je=h.getViewSubImage(f,$e);L=Je.viewport,Ce===0&&(e.setRenderTargetTextures(b,Je.colorTexture,f.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(b))}let Fe=E[Ce];Fe===void 0&&(Fe=new bn,Fe.layers.enable(Ce),Fe.viewport=new Zt,E[Ce]=Fe),Fe.matrix.fromArray($e.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray($e.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(L.x,L.y,L.width,L.height),Ce===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Fe)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ce=h.getDepthInformation(me[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let me=0;me<v.length;me++){const ae=M[me],Ue=v[me];ae!==null&&Ue!==void 0&&Ue.update(ae,te,c||a)}_e&&_e(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const st=new vg;st.setAnimationLoop(Oe),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}}const Er=new Ni,ob=new Lt;function lb(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,pg(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,b,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),x(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,b,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===fn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===fn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,M=b.envMapRotation;v&&(d.envMap.value=v,Er.copy(M),Er.x*=-1,Er.y*=-1,Er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),d.envMapRotation.value.setFromMatrix4(ob.makeRotationFromEuler(Er)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=v*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cb(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const M=v.program;i.uniformBlockBinding(b,M)}function c(b,v){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",d));const R=v.program;i.updateUBOMapping(b,R);const T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function u(b){const v=h();b.__bindingPointIndex=v;const M=n.createBuffer(),R=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=r[b.id],M=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){const D=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,y=D.length;E<y;E++){const C=D[E];if(m(C,T,E,R)===!0){const V=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let Y=0;Y<U.length;Y++){const X=U[Y],ee=x(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,V+z,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,z),z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,v,M,R){const T=b.value,A=v+"_"+M;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const D=R[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return R[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(b){const v=b.uniforms;let M=0;const R=16;for(let A=0,D=v.length;A<D;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,C=E.length;y<C;y++){const V=E[y],U=Array.isArray(V.value)?V.value:[V.value];for(let z=0,Y=U.length;z<Y;z++){const X=U[z],ee=x(X),W=M%R;W!==0&&R-W<ee.boundary&&(M+=R-W),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=ee.storage}}}const T=M%R;return T>0&&(M+=R-T),b.__size=M,b.__cache={},this}function x(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function d(b){const v=b.target;v.removeEventListener("dispose",d);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class bg{constructor(e={}){const{canvas:t=tS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,d=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=or,this.toneMappingExposure=1;const v=this;let M=!1,R=0,T=0,A=null,D=-1,E=null;const y=new Zt,C=new Zt;let V=null;const U=new nt(0);let z=0,Y=t.width,X=t.height,ee=1,W=null,le=null;const xe=new Zt(0,0,Y,X),_e=new Zt(0,0,Y,X);let Oe=!1;const st=new xg;let j=!1,te=!1;const me=new Lt,ae=new k,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function $e(){return A===null?ee:1}let L=i;function Fe(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rf}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",Z,!1),L===null){const O="webgl2";if(L=Fe(O,w),L===null)throw Fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Je,bt,Pe,it,Ye,ze,Dt,P,S,G,K,Q,J,Ae,ce,ue,We,ne,we,Qe,Ne,he,Xe,et;function It(){Je=new vw(L),Je.init(),he=new eb(L,Je),bt=new hw(L,Je,e,he),Pe=new Q4(L),it=new Sw(L),Ye=new k4,ze=new J4(L,Je,Pe,Ye,bt,he,it),Dt=new dw(v),P=new xw(v),S=new AS(L),Xe=new cw(L,S),G=new _w(L,S,it,Xe),K=new Ew(L,G,S,it),we=new Mw(L,bt,ze),ue=new fw(Ye),Q=new F4(v,Dt,P,Je,bt,Xe,ue),J=new lb(v,Ye),Ae=new z4,ce=new j4(Je),ne=new lw(v,Dt,P,Pe,K,f,l),We=new K4(v,K,bt),et=new cb(L,it,bt,Pe),Qe=new uw(L,Je,it),Ne=new yw(L,Je,it),it.programs=Q.programs,v.capabilities=bt,v.extensions=Je,v.properties=Ye,v.renderLists=Ae,v.shadowMap=We,v.state=Pe,v.info=it}It();const I=new ab(v,L);this.xr=I,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(Y,X,!1))},this.getSize=function(w){return w.set(Y,X)},this.setSize=function(w,O,B=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,X=O,t.width=Math.floor(w*ee),t.height=Math.floor(O*ee),B===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Y*ee,X*ee).floor()},this.setDrawingBufferSize=function(w,O,B){Y=w,X=O,ee=B,t.width=Math.floor(w*B),t.height=Math.floor(O*B),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(xe)},this.setViewport=function(w,O,B,H){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,O,B,H),Pe.viewport(y.copy(xe).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,O,B,H){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,O,B,H),Pe.scissor(C.copy(_e).multiplyScalar(ee).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){Pe.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,O=!0,B=!0){let H=0;if(w){let F=!1;if(A!==null){const ie=A.texture.format;F=ie===ng||ie===tg||ie===eg}if(F){const ie=A.texture.type,pe=ie===hr||ie===la||ie===Ll||ie===ca||ie===Q1||ie===J1,ye=ne.getClearColor(),Ee=ne.getClearAlpha(),Le=ye.r,Ie=ye.g,Re=ye.b;pe?(m[0]=Le,m[1]=Ie,m[2]=Re,m[3]=Ee,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Le,g[1]=Ie,g[2]=Re,g[3]=Ee,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),B&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ae.dispose(),ce.dispose(),Ye.dispose(),Dt.dispose(),P.dispose(),K.dispose(),Xe.dispose(),et.dispose(),Q.dispose(),I.dispose(),I.removeEventListener("sessionstart",ni),I.removeEventListener("sessionend",ii),gr.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=it.autoReset,O=We.enabled,B=We.autoUpdate,H=We.needsUpdate,F=We.type;It(),it.autoReset=w,We.enabled=O,We.autoUpdate=B,We.needsUpdate=H,We.type=F}function Z(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const O=w.target;O.removeEventListener("dispose",re),De(O)}function De(w){at(w),Ye.remove(w)}function at(w){const O=Ye.get(w).programs;O!==void 0&&(O.forEach(function(B){Q.releaseProgram(B)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,B,H,F,ie){O===null&&(O=Ue);const pe=F.isMesh&&F.matrixWorld.determinant()<0,ye=cx(w,O,B,H,F);Pe.setMaterial(H,pe);let Ee=B.index,Le=1;if(H.wireframe===!0){if(Ee=G.getWireframeAttribute(B),Ee===void 0)return;Le=2}const Ie=B.drawRange,Re=B.attributes.position;let lt=Ie.start*Le,Rt=(Ie.start+Ie.count)*Le;ie!==null&&(lt=Math.max(lt,ie.start*Le),Rt=Math.min(Rt,(ie.start+ie.count)*Le)),Ee!==null?(lt=Math.max(lt,0),Rt=Math.min(Rt,Ee.count)):Re!=null&&(lt=Math.max(lt,0),Rt=Math.min(Rt,Re.count));const Pt=Rt-lt;if(Pt<0||Pt===1/0)return;Xe.setup(F,H,ye,B,Ee);let vn,ht=Qe;if(Ee!==null&&(vn=S.get(Ee),ht=Ne,ht.setIndex(vn)),F.isMesh)H.wireframe===!0?(Pe.setLineWidth(H.wireframeLinewidth*$e()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(F.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*$e()),F.isLineSegments?ht.setMode(L.LINES):F.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else F.isPoints?ht.setMode(L.POINTS):F.isSprite&&ht.setMode(L.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ht.renderInstances(lt,Pt,F.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,nn=Math.min(B.instanceCount,Te);ht.renderInstances(lt,Pt,nn)}else ht.render(lt,Pt)};function Nt(w,O,B){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,bo(w,O,B),w.side=Ii,w.needsUpdate=!0,bo(w,O,B),w.side=Ai):bo(w,O,B)}this.compile=function(w,O,B=null){B===null&&(B=w),d=ce.get(B),d.init(O),b.push(d),B.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==B&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return w.traverse(function(F){const ie=F.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const ye=ie[pe];Nt(ye,B,F),H.add(ye)}else Nt(ie,B,F),H.add(ie)}),b.pop(),d=null,H},this.compileAsync=function(w,O,B=null){const H=this.compile(w,O,B);return new Promise(F=>{function ie(){if(H.forEach(function(pe){Ye.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){F(w);return}setTimeout(ie,10)}Je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Gt=null;function dt(w){Gt&&Gt(w)}function ni(){gr.stop()}function ii(){gr.start()}const gr=new vg;gr.setAnimationLoop(dt),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(w){Gt=w,I.setAnimationLoop(w),w===null?gr.stop():gr.start()},I.addEventListener("sessionstart",ni),I.addEventListener("sessionend",ii),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(O),O=I.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,A),d=ce.get(w,b.length),d.init(O),b.push(d),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),st.setFromProjectionMatrix(me),te=this.localClippingEnabled,j=ue.init(this.clippingPlanes,te),x=Ae.get(w,p.length),x.init(),p.push(x),I.enabled===!0&&I.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&gc(ie,O,-1/0,v.sortObjects)}gc(w,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,le),Ce=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Ce&&ne.addToRenderList(x,w),this.info.render.frame++,j===!0&&ue.beginShadows();const B=d.state.shadowsArray;We.render(B,w,O),j===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,F=x.transmissive;if(d.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let pe=0,ye=ie.length;pe<ye;pe++){const Ee=ie[pe];bf(H,F,w,Ee)}Ce&&ne.render(w);for(let pe=0,ye=ie.length;pe<ye;pe++){const Ee=ie[pe];wf(x,w,Ee,Ee.viewport)}}else F.length>0&&bf(H,F,w,O),Ce&&ne.render(w),wf(x,w,O);A!==null&&(ze.updateMultisampleRenderTarget(A),ze.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,O),Xe.resetDefaultState(),D=-1,E=null,b.pop(),b.length>0?(d=b[b.length-1],j===!0&&ue.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function gc(w,O,B,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||st.intersectsSprite(w)){H&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const pe=K.update(w),ye=w.material;ye.visible&&x.push(w,pe,ye,B,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||st.intersectsObject(w))){const pe=K.update(w),ye=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const Ee=pe.groups;for(let Le=0,Ie=Ee.length;Le<Ie;Le++){const Re=Ee[Le],lt=ye[Re.materialIndex];lt&&lt.visible&&x.push(w,pe,lt,B,ae.z,Re)}}else ye.visible&&x.push(w,pe,ye,B,ae.z,null)}}const ie=w.children;for(let pe=0,ye=ie.length;pe<ye;pe++)gc(ie[pe],O,B,H)}function wf(w,O,B,H){const F=w.opaque,ie=w.transmissive,pe=w.transparent;d.setupLightsView(B),j===!0&&ue.setGlobalState(v.clippingPlanes,B),H&&Pe.viewport(y.copy(H)),F.length>0&&wo(F,O,B),ie.length>0&&wo(ie,O,B),pe.length>0&&wo(pe,O,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function bf(w,O,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Yr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?rc:hr,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ie=d.state.transmissionRenderTarget[H.id],pe=H.viewport||y;ie.setSize(pe.z,pe.w);const ye=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(U),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),Ce?ne.render(B):v.clear();const Ee=v.toneMapping;v.toneMapping=or;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),j===!0&&ue.setGlobalState(v.clippingPlanes,H),wo(w,B,H),ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Re=0,lt=O.length;Re<lt;Re++){const Rt=O[Re],Pt=Rt.object,vn=Rt.geometry,ht=Rt.material,Te=Rt.group;if(ht.side===Ai&&Pt.layers.test(H.layers)){const nn=ht.side;ht.side=fn,ht.needsUpdate=!0,Tf(Pt,B,H,vn,ht,Te),ht.side=nn,ht.needsUpdate=!0,Ie=!0}}Ie===!0&&(ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie))}v.setRenderTarget(ye),v.setClearColor(U,z),Le!==void 0&&(H.viewport=Le),v.toneMapping=Ee}function wo(w,O,B){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=w.length;F<ie;F++){const pe=w[F],ye=pe.object,Ee=pe.geometry,Le=H===null?pe.material:H,Ie=pe.group;ye.layers.test(B.layers)&&Tf(ye,O,B,Ee,Le,Ie)}}function Tf(w,O,B,H,F,ie){w.onBeforeRender(v,O,B,H,F,ie),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,O,B,H,w,ie),F.transparent===!0&&F.side===Ai&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,v.renderBufferDirect(B,O,H,F,w,ie),F.side=Ii,F.needsUpdate=!0,v.renderBufferDirect(B,O,H,F,w,ie),F.side=Ai):v.renderBufferDirect(B,O,H,F,w,ie),w.onAfterRender(v,O,B,H,F,ie)}function bo(w,O,B){O.isScene!==!0&&(O=Ue);const H=Ye.get(w),F=d.state.lights,ie=d.state.shadowsArray,pe=F.state.version,ye=Q.getParameters(w,F.state,ie,O,B),Ee=Q.getProgramCacheKey(ye);let Le=H.programs;H.environment=w.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(w.isMeshStandardMaterial?P:Dt).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",re),Le=new Map,H.programs=Le);let Ie=Le.get(Ee);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===pe)return Rf(w,ye),Ie}else ye.uniforms=Q.getUniforms(w),w.onBuild(B,ye,v),w.onBeforeCompile(ye,v),Ie=Q.acquireProgram(ye,Ee),Le.set(Ee,Ie),H.uniforms=ye.uniforms;const Re=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=ue.uniform),Rf(w,ye),H.needsLights=hx(w),H.lightsStateVersion=pe,H.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Af(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=gl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Rf(w,O){const B=Ye.get(w);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function cx(w,O,B,H,F){O.isScene!==!0&&(O=Ue),ze.resetTextureUnits();const ie=O.fog,pe=H.isMeshStandardMaterial?O.environment:null,ye=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mr,Ee=(H.isMeshStandardMaterial?P:Dt).get(H.envMap||pe),Le=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!B.morphAttributes.position,lt=!!B.morphAttributes.normal,Rt=!!B.morphAttributes.color;let Pt=or;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const vn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ht=vn!==void 0?vn.length:0,Te=Ye.get(H),nn=d.state.lights;if(j===!0&&(te===!0||w!==E)){const Cn=w===E&&H.id===D;ue.setState(H,w,Cn)}let pt=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==nn.state.version||Te.outputColorSpace!==ye||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Ee||H.fog===!0&&Te.fog!==ie||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ue.numPlanes||Te.numIntersection!==ue.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ie||Te.morphTargets!==Re||Te.morphNormals!==lt||Te.morphColors!==Rt||Te.toneMapping!==Pt||Te.morphTargetsCount!==ht)&&(pt=!0):(pt=!0,Te.__version=H.version);let xi=Te.currentProgram;pt===!0&&(xi=bo(H,O,F));let To=!1,xr=!1,xc=!1;const Wt=xi.getUniforms(),Fi=Te.uniforms;if(Pe.useProgram(xi.program)&&(To=!0,xr=!0,xc=!0),H.id!==D&&(D=H.id,xr=!0),To||E!==w){Wt.setValue(L,"projectionMatrix",w.projectionMatrix),Wt.setValue(L,"viewMatrix",w.matrixWorldInverse);const Cn=Wt.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,ae.setFromMatrixPosition(w.matrixWorld)),bt.logarithmicDepthBuffer&&Wt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Wt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,xr=!0,xc=!0)}if(F.isSkinnedMesh){Wt.setOptional(L,F,"bindMatrix"),Wt.setOptional(L,F,"bindMatrixInverse");const Cn=F.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Wt.setValue(L,"boneTexture",Cn.boneTexture,ze))}F.isBatchedMesh&&(Wt.setOptional(L,F,"batchingTexture"),Wt.setValue(L,"batchingTexture",F._matricesTexture,ze),Wt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Wt.setValue(L,"batchingColorTexture",F._colorsTexture,ze));const vc=B.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0)&&we.update(F,B,xi),(xr||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,Wt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fi.envMap.value=Ee,Fi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Fi.envMapIntensity.value=O.environmentIntensity),xr&&(Wt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&ux(Fi,xc),ie&&H.fog===!0&&J.refreshFogUniforms(Fi,ie),J.refreshMaterialUniforms(Fi,H,ee,X,d.state.transmissionRenderTarget[w.id]),gl.upload(L,Af(Te),Fi,ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gl.upload(L,Af(Te),Fi,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Wt.setValue(L,"center",F.center),Wt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Wt.setValue(L,"normalMatrix",F.normalMatrix),Wt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Cn=H.uniformsGroups;for(let _c=0,fx=Cn.length;_c<fx;_c++){const Pf=Cn[_c];et.update(Pf,xi),et.bind(Pf,xi)}}return xi}function ux(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function hx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,B){Ye.get(w.texture).__webglTexture=O,Ye.get(w.depthTexture).__webglTexture=B;const H=Ye.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const B=Ye.get(w);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,B=0){A=w,R=O,T=B;let H=!0,F=null,ie=!1,pe=!1;if(w){const Ee=Ye.get(w);Ee.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):Ee.__webglFramebuffer===void 0?ze.setupRenderTarget(w):Ee.__hasExternalTextures&&ze.rebindTextures(w,Ye.get(w.texture).__webglTexture,Ye.get(w.depthTexture).__webglTexture);const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ie=Ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?F=Ie[O][B]:F=Ie[O],ie=!0):w.samples>0&&ze.useMultisampledRTT(w)===!1?F=Ye.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[B]:F=Ie,y.copy(w.viewport),C.copy(w.scissor),V=w.scissorTest}else y.copy(xe).multiplyScalar(ee).floor(),C.copy(_e).multiplyScalar(ee).floor(),V=Oe;if(Pe.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&Pe.drawBuffers(w,F),Pe.viewport(y),Pe.scissor(C),Pe.setScissorTest(V),ie){const Ee=Ye.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,B)}else if(pe){const Ee=Ye.get(w.texture),Le=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,B||0,Le)}D=-1},this.readRenderTargetPixels=function(w,O,B,H,F,ie,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Ee=w.texture,Le=Ee.format,Ie=Ee.type;if(!bt.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&B>=0&&B<=w.height-F&&L.readPixels(O,B,H,F,he.convert(Le),he.convert(Ie),ie)}finally{const Ee=A!==null?Ye.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,O,B,H,F,ie,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Ee=w.texture,Le=Ee.format,Ie=Ee.type;if(!bt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-H&&B>=0&&B<=w.height-F){const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(O,B,H,F,he.convert(Le),he.convert(Ie),0),L.flush();const lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await nS(L,lt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie)}finally{L.deleteBuffer(Re),L.deleteSync(lt)}return ie}}finally{const Ee=A!==null?Ye.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(w,O=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-B),F=Math.floor(w.image.width*H),ie=Math.floor(w.image.height*H),pe=O!==null?O.x:0,ye=O!==null?O.y:0;ze.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,pe,ye,F,ie),Pe.unbindTexture()},this.copyTextureToTexture=function(w,O,B=null,H=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,B=null);let ie,pe,ye,Ee,Le,Ie;B!==null?(ie=B.max.x-B.min.x,pe=B.max.y-B.min.y,ye=B.min.x,Ee=B.min.y):(ie=w.image.width,pe=w.image.height,ye=0,Ee=0),H!==null?(Le=H.x,Ie=H.y):(Le=0,Ie=0);const Re=he.convert(O.format),lt=he.convert(O.type);ze.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Rt=L.getParameter(L.UNPACK_ROW_LENGTH),Pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vn=L.getParameter(L.UNPACK_SKIP_PIXELS),ht=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),nn=w.isCompressedTexture?w.mipmaps[F]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,nn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Le,Ie,ie,pe,Re,lt,nn.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Le,Ie,nn.width,nn.height,Re,nn.data):L.texSubImage2D(L.TEXTURE_2D,F,Le,Ie,Re,lt,nn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),F===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,B=null,H=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0);let ie,pe,ye,Ee,Le,Ie,Re,lt,Rt;const Pt=w.isCompressedTexture?w.mipmaps[F]:w.image;B!==null?(ie=B.max.x-B.min.x,pe=B.max.y-B.min.y,ye=B.max.z-B.min.z,Ee=B.min.x,Le=B.min.y,Ie=B.min.z):(ie=Pt.width,pe=Pt.height,ye=Pt.depth,Ee=0,Le=0,Ie=0),H!==null?(Re=H.x,lt=H.y,Rt=H.z):(Re=0,lt=0,Rt=0);const vn=he.convert(O.format),ht=he.convert(O.type);let Te;if(O.isData3DTexture)ze.setTexture3D(O,0),Te=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)ze.setTexture2DArray(O,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const nn=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xi=L.getParameter(L.UNPACK_SKIP_PIXELS),To=L.getParameter(L.UNPACK_SKIP_ROWS),xr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Te,F,Re,lt,Rt,ie,pe,ye,vn,ht,Pt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,F,Re,lt,Rt,ie,pe,ye,vn,Pt.data):L.texSubImage3D(Te,F,Re,lt,Rt,ie,pe,ye,vn,ht,Pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,nn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xi),L.pixelStorei(L.UNPACK_SKIP_ROWS,To),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xr),F===0&&O.generateMipmaps&&L.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(w){Ye.get(w).__webglFramebuffer===void 0&&ze.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ze.setTextureCube(w,0):w.isData3DTexture?ze.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ze.setTexture2DArray(w,0):ze.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,Pe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sf?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===sc?"display-p3":"srgb"}}class Tg extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ag extends Sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fl=new k,kl=new k,Yp=new Lt,Ia=new af,Qo=new ac,mu=new k,Zp=new k;class ub extends on{constructor(e=new ti,t=new Ag){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fl.fromBufferAttribute(t,r-1),kl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fl.distanceTo(kl);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;Yp.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(Yp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=m,d=g-1;x<d;x+=c){const p=u.getX(x),b=u.getX(x+1),v=Jo(this,e,Ia,l,p,b);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(g-1),d=u.getX(m),p=Jo(this,e,Ia,l,x,d);p&&t.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=m,d=g-1;x<d;x+=c){const p=Jo(this,e,Ia,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Jo(this,e,Ia,l,g-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jo(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Fl.fromBufferAttribute(a,r),kl.fromBufferAttribute(a,s),t.distanceSqToSegment(Fl,kl,mu,Zp)>i)return;mu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(mu);if(!(l<e.near||l>e.far))return{distance:l,point:Zp.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Kp=new k,Qp=new k;class hb extends ub{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Kp.fromBufferAttribute(t,r),Qp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kp.distanceTo(Qp);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uf extends ti{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,m=new k,g=new rt;for(let x=0;x<=r;x++){for(let d=0;d<=i;d++){const p=s+d/i*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<r;x++){const d=x*(i+1);for(let p=0;p<i;p++){const b=p+d,v=b,M=b+i+1,R=b+i+2,T=b+1;o.push(v,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fb extends Sa{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new nt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ig,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Jp=new Lt;class db{constructor(e,t,i=0,r=1/0){this.ray=new af(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jp),this}intersectObject(e,t=!0,i=[]){return vh(e,this,i,t),i.sort(e0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vh(e[r],this,i,t);return i.sort(e0),i}}function e0(n,e){return n.distance-e.distance}function vh(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)vh(s[a],e,t,!0)}}class pb extends hb{constructor(e=10,t=10,i=4473924,r=8947848){i=new nt(i),r=new nt(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=f===s?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const u=new ti;u.setAttribute("position",new pn(l,3)),u.setAttribute("color",new pn(c,3));const h=new Ag({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);const gu=new pr,mb=new pr,gb={x:"XYZ",y:"YXZ",z:"ZXY"};function hf(n,e,t,i,r,s){gu.copy(t),r!=null&&gu.premultiply(mb.copy(r).invert());const a=new se,o=new xt,l=new se;gu.decompose(a,o,l),i0(a,i.initialTargetPosition,s.translate??!0);let c;const u=s.rotate??!0;if(u===!1)o.copy(i.initialTargetQuaternion),c=i.initialTargetRotation.clone();else if(Array.isArray(u)||u===!0||typeof u!="string"&&!Array.isArray(u)&&u.x===!0&&u.y===!0&&u.z===!0)c=new Et().setFromQuaternion(o,i.initialTargetRotation.order);else if(typeof u=="string"){const h=gb[u];c=new Et().setFromQuaternion(o,h);for(const f of h){const m=f.toLowerCase();m!==u&&(c[m]=0)}c.order=i.initialTargetRotation.order,o.setFromEuler(c)}else c=yb(o,i.initialTargetRotation,u);return(typeof s.scale!="object"||!s.scale.uniform)&&i0(l,i.initialTargetScale,s.scale??!0),{pointerAmount:e,position:a,quaternion:o,rotation:c,scale:l,time:n}}const vs=new Ih,_s=new se,ys=new se,xb=new se,vb=new xt;function t0(n,e,t){return vs.normal.copy(n),vs.constant=0,_b(_s,vs.normal),ys.copy(_s),ys.applyQuaternion(vb.copy(e).invert().premultiply(t)),vs.projectPoint(_s,_s).normalize(),vs.projectPoint(ys,ys).normalize(),(xb.crossVectors(_s,vs.normal).dot(ys)<0?1:-1)*_s.angleTo(ys)}function _b(n,e){if(e.x===0){n.set(1,0,0);return}if(e.y===0){n.set(0,1,0);return}if(e.z===0){n.set(0,0,1);return}n.set(-e.y,e.x,0)}function yb(n,e,t){let i="",r="";for(const o of e.order)t[o.toLowerCase()]===!1?r+=o:i+=o;const s=i+r,a=new Et().setFromQuaternion(n,s);for(const o of s){const l=o.toLowerCase();a[l]=xl(l,a[l],e[l],t)}return n.setFromEuler(a),a}const xu=new se,n0=new Ih,Sb=new se,Mb=new se;function i0(n,e,t){if(Array.isArray(t)){switch(t.length){case 0:n.copy(e);return;case 1:n.sub(e),Rg(n,t[0]instanceof se?t[0]:xu.fromArray(t[0])),n.add(e);return;case 2:xu.crossVectors(t[0]instanceof se?t[0]:Sb.fromArray(t[0]),t[1]instanceof se?t[1]:Mb.fromArray(t[1])),n0.setFromNormalAndCoplanarPoint(xu,e),n0.projectPoint(n,n);return}return}n.x=xl("x",n.x,e.x,t),n.y=xl("y",n.y,e.y,t),n.z=xl("z",n.z,e.z,t)}function xl(n,e,t,i){if(typeof i=="boolean")return i?e:t;if(typeof i=="string")return i===n?e:t;const r=i[n];return r===!1?t:Array.isArray(r)?xx(e,...r):e}function Zs(n=!0,e,t,i,r,s){if(n){switch(e.length){case 0:case 3:return;case 1:wb(t,...e,i,r,s);return;case 2:Eb(...e,t,i,r,s);return}throw new Error(`space cannot be ${e.length}D but received (${e.map(a=>a.toArray().join("/")).join("; ")})`)}}const vl={x:new se(1,0,0),y:new se(0,1,0),z:new se(0,0,1)};function Ks(n,e,t,i,r){if(i!==!1){if(i===!0){n[0]=vl.x,n[1]=vl.y,n[2]=vl.z;return}if(typeof i=="string"){Na(n,e,t,i,r);return}if(Array.isArray(i)){for(const s of i)Na(n,e,t,s,r);return}i.x!==!1&&Na(n,e,t,"x",r),i.y!==!1&&Na(n,e,t,"y",r),i.z!==!1&&Na(n,e,t,"z",r)}}const wr=new xt,el=new Et,Gn=new se,Ss=new se,br=new se;function Na(n,e,t,i,r){if(Array.isArray(i)?Gn.set(...i):i instanceof se?Gn.copy(i):Gn.copy(vl[i]),r==="translate"){Gn.applyQuaternion(e),tl(n,Gn);return}if(r==="scale"){Array.isArray(i)?wr.identity():wr.setFromEuler(t),wr.premultiply(e),Gn.applyQuaternion(wr),tl(n,Gn);return}if(Array.isArray(i))el.set(0,0,0);else{el.copy(t);for(let s=2;s>=0;s--){const a=t.order[s].toLowerCase();if(el[a]=0,a===i)break}}wr.setFromEuler(el).premultiply(e),Gn.normalize(),Ss.set(0,1,0),Gn.dot(Ss)>.99&&Ss.set(0,0,1),br.crossVectors(Gn,Ss).normalize(),Ss.copy(br),br.applyQuaternion(wr),tl(n,br),br.crossVectors(Gn,Ss).normalize(),br.applyQuaternion(wr),tl(n,br)}const r0=new se;function tl(n,e){if(n.length!==3){if(n.length===0){n.push(e.clone());return}if(n.length===1){Math.abs(n[0].dot(e))<.999&&n.push(e.clone());return}r0.crossVectors(n[0],n[1]),!(Math.abs(r0.dot(e))<.001)&&n.push(e.clone())}}const Da=new Ih,vu=new se,$a=new se;function Eb(n,e,t,i,r,s){vu.crossVectors(n,e).normalize(),Da.setFromNormalAndCoplanarPoint(vu,t);const a=s==null?0:Math.abs(vu.dot(s));if(s==null||a<.01){Da.projectPoint(r,r);return}const l=-Da.distanceToPoint(i)/s.dot(Da.normal);if(l<0){Da.projectPoint(r,r);return}$a.copy(r),r.copy(i).addScaledVector(s,l)}function wb(n,e,t,i,r){const s=r==null?0:1-Math.abs(e.dot(r));if(r==null||s<.001){s0(i,n,e);return}$a.subVectors(t,n);const a=e.dot(r),o=e.dot($a),l=r.dot($a),c=1-a*a,u=(o-a*l)/c;if((a*o-l)/c<0){s0(i,n,e);return}$a.copy(i),i.copy(n).addScaledVector(e,u)}function s0(n,e,t){n.sub(e),Rg(n,t),n.add(e)}function Rg(n,e){const t=n.dot(e);n.copy(e).multiplyScalar(t)}const _u=new pr,nl=new pr,il=new se,bb=new se,Tr=new xt,Tb=new se(1,1,1),yu=[];function Ab(n,e,t,i,r){return i==null?Tr.identity():i.decompose(il,Tr,bb),yu.length=0,Ks(yu,Tr,t.initialTargetRotation,r.translate??!0,"translate"),nl.makeRotationFromQuaternion(Tr.copy(e.initialPointerWorldQuaternion).invert()).multiply(_u.makeTranslation(il.copy(e.initialPointerWorldPoint).negate())),t.initialTargetParentWorldMatrix!=null&&nl.multiply(t.initialTargetParentWorldMatrix),Zs(r.projectRays,yu,e.initialPointerWorldPoint,e.pointerWorldOrigin,il.copy(e.pointerWorldPoint),e.pointerWorldDirection),Tr.copy(e.pointerWorldQuaternion),(r.rotate??!0)===!1&&Tr.copy(e.initialPointerWorldQuaternion),_u.compose(il,Tr,Tb).multiply(nl).multiply(nl.compose(t.initialTargetPosition,t.initialTargetQuaternion,t.initialTargetScale)),hf(n,1,_u,t,i,r)}const Ms=new se,Oa=new se,zt=new se,Xi=new se,Rb=new se,a0=new se,Es=new se,o0=new pr,Ua=new pr,rl=new pr,ri=new xt,Fa=new xt,ws=[];function Pb(n,e,t,i,r,s){r==null?ri.identity():r.decompose(zt,ri,Xi),ws.length=0,Ks(ws,ri,i.initialTargetRotation,s.translate??!0,"translate"),Ks(ws,ri,i.initialTargetRotation,s.rotate??!0,"rotate"),Ks(ws,ri,i.initialTargetRotation,s.scale??!0,"scale"),Zs(s.projectRays,ws,e.initialPointerWorldPoint,e.pointerWorldOrigin,zt.copy(e.pointerWorldPoint),e.pointerWorldDirection),Zs(s.projectRays,ws,t.initialPointerWorldPoint,t.pointerWorldOrigin,Xi.copy(t.pointerWorldPoint),t.pointerWorldDirection),Ms.copy(t.initialPointerWorldPoint).sub(e.initialPointerWorldPoint),Oa.copy(Xi).sub(zt),zt.copy(Ms),i.prevTwoPointerDeltaRotation!=null&&zt.applyQuaternion(i.prevTwoPointerDeltaRotation),zt.normalize(),Xi.copy(Oa).normalize(),ri.setFromUnitVectors(zt,Xi),i.prevTwoPointerDeltaRotation==null?i.prevTwoPointerDeltaRotation=new xt:ri.multiply(i.prevTwoPointerDeltaRotation),i.prevTwoPointerDeltaRotation.copy(ri);const a=(t0(Xi,e.prevPointerWorldQuaternion,e.pointerWorldQuaternion)+t0(Xi,t.prevPointerWorldQuaternion,t.pointerWorldQuaternion))*.5+(i.prevAngle??0);if(i.prevAngle=a,ri.premultiply(Fa.setFromAxisAngle(Xi,a)),rl.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale),i.initialTargetParentWorldMatrix!=null&&rl.premultiply(i.initialTargetParentWorldMatrix),typeof s.scale=="object"&&(s.scale.uniform??!1))Es.setScalar(Oa.length()/Ms.length());else{rl.decompose(Rb,Fa,a0),zt.copy(Ms).applyQuaternion(Fa.invert()).divide(a0),zt.x=Math.abs(zt.x),zt.y=Math.abs(zt.y),zt.z=Math.abs(zt.z);const o=Math.max(...zt.toArray());zt.divideScalar(o),Es.set(1,1,1),Es.addScaledVector(zt,Oa.length()/Ms.length()-1)}return o0.makeTranslation(zt.copy(Oa).multiplyScalar(.5).add(e.pointerWorldPoint)).multiply(Ua.makeRotationFromQuaternion(ri)).multiply(Ua.makeRotationFromQuaternion(Fa.invert())).multiply(Ua.makeScale(Es.x,Es.y,Es.z)).multiply(Ua.makeRotationFromQuaternion(Fa.invert())).multiply(Ua.makeTranslation(zt.copy(Ms).multiplyScalar(.5).add(e.initialPointerWorldPoint).negate())).multiply(rl),hf(n,2,o0,i,r,s)}const Tt=new se,In=new se,Su=new se,ji=new se,Ar=new se,Nn=new xt,Sn=new xt,qi=new pr,Ei=new se,bs=[];function Cb(n,e,t,i,r,s){if(r==null?Nn.identity():r.decompose(Tt,Nn,In),bs.length=0,s.translate==="as-scale"&&Ks(bs,Nn,t.initialTargetRotation,s.scale??!0,"scale"),s.translate!="as-scale"&&Ks(bs,Nn,t.initialTargetRotation,s.rotate??!0,"rotate"),qi.makeTranslation(t.initialTargetPosition),t.initialTargetParentWorldMatrix!=null&&qi.premultiply(t.initialTargetParentWorldMatrix),ji.setFromMatrixPosition(qi),Zs(s.projectRays,bs,e.initialPointerWorldPoint,e.pointerWorldOrigin,ji,void 0),ji.negate().add(e.initialPointerWorldPoint),Ar.setFromMatrixPosition(i),Zs(s.projectRays,bs,e.initialPointerWorldPoint,e.pointerWorldOrigin,Ar,void 0),Zs(s.projectRays,bs,e.initialPointerWorldPoint,e.pointerWorldOrigin,In.copy(e.pointerWorldPoint),e.pointerWorldDirection),Ar.negate().add(In),s.translate==="as-scale"?Nn.copy(t.initialTargetQuaternion):(Tt.copy(ji),t.prevTranslateAsDeltaRotation!=null&&Tt.applyQuaternion(t.prevTranslateAsDeltaRotation),Tt.normalize(),In.copy(Ar).normalize(),Nn.setFromUnitVectors(Tt,In),t.prevTranslateAsDeltaRotation==null?t.prevTranslateAsDeltaRotation=new xt:Nn.multiply(t.prevTranslateAsDeltaRotation),t.prevTranslateAsDeltaRotation.copy(Nn),t.initialTargetParentWorldMatrix!=null&&(Sn.setFromRotationMatrix(t.initialTargetParentWorldMatrix),Nn.multiply(Sn.normalize()),Nn.premultiply(Sn.invert())),Nn.multiply(t.initialTargetQuaternion)),s.translate==="as-rotate")Ei.set(1,1,1);else if(typeof s.scale=="object"&&(s.scale.uniform??!1))Ei.setScalar(Ar.length()/ji.length());else if(s.translate==="as-rotate-and-scale"){qi.compose(t.initialTargetPosition,t.initialTargetQuaternion,t.initialTargetScale),t.initialTargetParentWorldMatrix!=null&&qi.premultiply(t.initialTargetParentWorldMatrix),qi.decompose(In,Sn,Su),Tt.copy(ji).applyQuaternion(Sn.invert()).divide(Su),Tt.x=Math.abs(Tt.x),Tt.y=Math.abs(Tt.y),Tt.z=Math.abs(Tt.z);const a=Math.max(...Tt.toArray());Tt.divideScalar(a),Ei.set(1,1,1),Ei.addScaledVector(Tt,Ar.length()/ji.length()-1)}else t.initialTargetParentWorldMatrix!=null?(t.initialTargetParentWorldMatrix.decompose(Tt,Sn,In),Sn.multiply(t.initialTargetQuaternion)):Sn.copy(t.initialTargetQuaternion),Tt.copy(ji).applyQuaternion(Sn.invert()),r!=null?(r.decompose(In,Sn,Su),Sn.multiply(t.initialTargetQuaternion)):Sn.copy(t.initialTargetQuaternion),In.copy(Ar).applyQuaternion(Sn.invert()),Ei.x=Math.abs(Tt.x)<.001?1:Math.abs(In.x/Tt.x),Ei.y=Math.abs(Tt.y)<.001?1:Math.abs(In.y/Tt.y),Ei.z=Math.abs(Tt.z)<.001?1:Math.abs(In.z/Tt.z);return Ei.multiply(t.initialTargetScale),qi.compose(t.initialTargetPosition,Nn,Ei),hf(n,1,qi,t,void 0,s)}class l0{t1;t2;_position;_quaternion;_rotation;_scale;constructor(e,t){this.t1=e,this.t2=t}get time(){return this.t1.time-this.t2.time}get position(){return this._position??=this.t1.position.clone().sub(this.t2.position)}get quaternion(){return this._quaternion??=this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion)}get rotation(){return this._rotation??=new Et().setFromQuaternion(this.quaternion)}get scale(){return this._scale??=this.t1.scale.clone().sub(this.t2.scale)}}class Lb{cancel;previous;memo;event;initial;current;first;last;_delta;_offset;constructor(e){this.cancel=e}start(e,t){this.event=e,this.previous=void 0,this.current=t,this.initial=t,this.first=!0,this.last=!1,this.memo=void 0,this._delta=void 0,this._offset=void 0}update(e,t){this.event=e,this.previous=this.current,this.current=t,this.first=!1,this.last=!1,this._delta=void 0,this._offset=void 0}end(e){this.event=e,this.first=!1,this.last=!0,this._delta=void 0,this._offset=void 0}get delta(){if(this.previous!=null)return this._delta??=new l0(this.current,this.previous)}get offset(){return this._offset??=new l0(this.current,this.initial)}}function c0(n,e){if(n.details.type==="sphere")return!1;if(n.details.type==="lines"){const{line:t}=n.details;return e.copy(t.end).sub(t.start).normalize(),!0}return n.details.type==="screen-ray"?(e.copy(n.details.direction),!0):(e.set(0,0,-1).applyQuaternion(n.pointerQuaternion),!0)}const u0=new se;class Ib{target;getOptions;outputState;latestMoveEvent;inputState=new Map;capturedObjects=new Map;initialTargetPosition=new se;initialTargetQuaternion=new xt;initialTargetRotation=new Et;initialTargetScale=new se;initialTargetParentWorldMatrix;prevTwoPointerDeltaRotation;prevTranslateAsDeltaRotation;prevAngle;handlers={onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerUp:this.onPointerUp.bind(this)};constructor(e,t=()=>({})){this.target=e,this.getOptions=t,this.outputState=new Lb(this.cancel.bind(this))}firstOnPointer(e){const t=this.getTarget();if(t==null)return;const i=c0(e,u0)?u0.clone():void 0;e.intersection.details.type,this.inputState.set(e.pointerId,{pointerWorldDirection:i,pointerWorldPoint:e.point,pointerWorldOrigin:e.pointerPosition,pointerWorldQuaternion:e.pointerQuaternion,initialPointerWorldPoint:e.point.clone(),initialPointerWorldDirection:i?.clone(),initialPointerWorldQuaternion:e.pointerQuaternion.clone(),prevPointerWorldQuaternion:e.pointerQuaternion}),this.save(),this.inputState.size===1&&this.outputState.start(e,{pointerAmount:1,time:e.timeStamp,position:this.initialTargetPosition.clone(),quaternion:this.initialTargetQuaternion.clone(),rotation:this.initialTargetRotation.clone(),scale:this.initialTargetScale.clone()}),this.outputState.memo=this.apply(t)}onPointerDown(e){this.stopPropagation(e),this.capturePointer(e.pointerId,e.object)&&this.firstOnPointer(e)}onPointerMove(e){if(!this.capturedObjects.has(e.pointerId))return;this.stopPropagation(e);const t=this.inputState.get(e.pointerId);if(t==null){this.firstOnPointer(e);return}this.latestMoveEvent=e,t.pointerWorldPoint=e.point,t.prevPointerWorldQuaternion=t.pointerWorldQuaternion,t.pointerWorldQuaternion=e.pointerQuaternion,t.pointerWorldOrigin=e.pointerPosition,t.pointerWorldDirection!=null&&c0(e,t.pointerWorldDirection)}cancel(){if(this.capturedObjects.size===0)return;for(const[t,i]of this.capturedObjects)i.releasePointerCapture(t);this.capturedObjects.clear(),this.inputState.clear(),this.outputState.end(void 0);const e=this.getTarget();e!=null&&this.apply(e)}onPointerUp(e){this.capturedObjects.has(e.pointerId)&&(this.stopPropagation(e),this.releasePointer(e.pointerId,e.object,e))}update(e){const t=this.getTarget();if(t==null||this.inputState.size===0||this.latestMoveEvent==null&&(this.getOptions().alwaysUpdate??!1)===!1)return;const i=this.getOptions();let r;if(i.translate==="as-rotate"||i.translate==="as-rotate-and-scale"||i.translate==="as-scale"){i.translate,this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0;const[s]=this.inputState.values(),a=t.matrixWorld,o=t.parent?.matrixWorld;r=Cb(e,s,this,a,o,i)}else if(this.inputState.size===1){this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0,this.prevTranslateAsDeltaRotation=void 0;const[s]=this.inputState.values();r=Ab(e,s,this,t.parent?.matrixWorld,i)}else{this.prevTranslateAsDeltaRotation=void 0;const[s,a]=this.inputState.values();r=Pb(e,s,a,this,t.parent?.matrixWorld,i)}this.outputState.update(this.latestMoveEvent,r),this.outputState.memo=this.apply(t),this.latestMoveEvent=void 0}getTarget(){return this.target instanceof Pm?this.target:this.target?.current}capturePointer(e,t){if(this.capturedObjects.has(e))return!1;const{multitouch:i,translate:r}=this.getOptions();return((i??!0)===!1||typeof r=="string")&&this.capturedObjects.size===1?!1:(this.capturedObjects.set(e,t),t.setPointerCapture(e),!0)}releasePointer(e,t,i){const r=this.getTarget();if(!(r==null||!this.capturedObjects.delete(e))){if(this.inputState.delete(e),t.releasePointerCapture(e),this.inputState.size>0){this.save();return}this.outputState.end(i),this.apply(r)}}stopPropagation(e){e==null||!(this.getOptions()?.stopPropagation??!0)||e.stopPropagation()}apply(e){return(this.getOptions().apply??Pg)(this.outputState,e)}getState(){return this.inputState.size===0?void 0:this.outputState}save(){const e=this.getTarget();if(e!=null){e.updateWorldMatrix(!0,!1),this.prevAngle=void 0,this.prevTwoPointerDeltaRotation=void 0,this.prevTranslateAsDeltaRotation=void 0,this.initialTargetParentWorldMatrix=e.parent?.matrixWorld.clone(),e.matrixAutoUpdate?(this.initialTargetPosition.copy(e.position),this.initialTargetQuaternion.copy(e.quaternion),this.initialTargetRotation.copy(e.rotation),this.initialTargetScale.copy(e.scale)):(e.matrix.decompose(this.initialTargetPosition,this.initialTargetQuaternion,this.initialTargetScale),this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion,e.rotation.order));for(const t of this.inputState.values())t.pointerWorldDirection!=null&&t.initialPointerWorldDirection?.copy(t.pointerWorldDirection),t.initialPointerWorldPoint.copy(t.pointerWorldPoint),t.initialPointerWorldQuaternion.copy(t.pointerWorldQuaternion)}}bind(e){const{onPointerDown:t,onPointerMove:i,onPointerUp:r}=this.handlers;return e.addEventListener("pointerdown",t),e.addEventListener("pointermove",i),e.addEventListener("pointerup",r),()=>{e.removeEventListener("pointerdown",t),e.removeEventListener("pointermove",i),e.removeEventListener("pointerup",r),this.cancel()}}capture(e,t){return this.capturePointer(e,t)?()=>this.releasePointer(e,t,void 0):Nb}}function Nb(){}function Pg(n,e){e.position.copy(n.current.position),e.rotation.order=n.current.rotation.order,e.quaternion.copy(n.current.quaternion),e.scale.copy(n.current.scale)}class Db{target;getOptions;handles=[];hoveredTagMap=new Map;hoverSubscriptions=[];applySubscriptions=[];space;constructor(e,t){this.target=e,this.getOptions=t}getSpace(){return this.space??"world"}getTarget(){return this.target instanceof Pm?this.target:this.target.current}getHandleOptions(e,t){const i=this.getOptions?.(),r=t?.();return{...i,...r,apply:(s,a)=>(this.onApply(e,s,a),(r?.apply??i?.apply??Pg)?.(s,a))}}registerHandle(e,t,i){const r={object:t,store:e,tag:i};this.handles.push(r);const s=e.bind(t),a=this.onPointerEnter.bind(this,i),o=this.onPointerLeave.bind(this);return t.addEventListener("pointerenter",a),t.addEventListener("pointerleave",o),()=>{const l=this.handles.indexOf(r);l!=-1&&this.handles.splice(l,1),s(),e.cancel()}}subscribeHover(e){return this.hoverSubscriptions.push(e),e(Array.from(this.hoveredTagMap.values())),()=>{const t=this.hoverSubscriptions.indexOf(e);t!==-1&&this.hoverSubscriptions.splice(t,1)}}subscribeApply(e){return this.applySubscriptions.push(e),()=>{const t=this.applySubscriptions.indexOf(e);t!==-1&&this.applySubscriptions.splice(t,1)}}update(e){for(const{store:t}of this.handles)t.update(e)}onPointerEnter(e,t){this.hoveredTagMap.set(t.pointerId,e),this.updateHover()}onPointerLeave(e){this.hoveredTagMap.delete(e.pointerId),this.updateHover()}updateHover(){const e=Array.from(this.hoveredTagMap.values());for(const t of this.hoverSubscriptions)t(e)}onApply(e,t,i){for(const r of this.applySubscriptions)r(e,t,i)}}const ln={depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0};function Jn(n,e,t,{color:i,hoverColor:r,hoverOpacity:s,opacity:a,disabled:o=!1}){if(r==null&&s==null||o){e.color.set(i),e.opacity=a??1,o&&(e.opacity*=.5,e.color.lerp(new vx(1,1,1),.5));return}return r??=i,n.subscribeHover(l=>{const c=l.some(u=>u.includes(t));e.color.set(c?r:i),e.opacity=(c?s:a)??1})}const sl=new xt,Cg=new Lm;Cg.setAttribute("position",new Nm([-1e3,0,0,1e3,0,0],3));class Mu extends Cm{context;rotationOffset;constructor(e,t){super(Cg),this.context=e,this.rotationOffset=t,this.renderOrder=1/0}update(){this.quaternion.setFromEuler(this.rotationOffset);const e=this.context.getTarget();this.context.getSpace()==="world"&&e!=null&&(e.getWorldQuaternion(sl).invert(),this.quaternion.premultiply(sl))}bind(e){this.material=new Im({...ln,color:this.material.color??"white",opacity:this.material.opacity??1});const t=this.context.subscribeHover(r=>{const s=r.some(a=>a.includes(e));this.visible=s}),i=this.context.subscribeApply((r,s)=>{if(s.last){this.position.set(0,0,0);return}this.position.copy(s.initial.position).sub(s.current.position);const a=this.context.getTarget();a!=null&&(sl.copy(a.quaternion).invert(),this.position.applyQuaternion(sl))});return()=>{this.material.dispose(),t(),i()}}}class Oi extends mi{context;axis;store;options;tag;constructor(e,t,i,r){super(),this.context=e,this.axis=t,this.tag=(i??"")+t,this.store=new Ib(e.target,()=>e.getHandleOptions(this.tag,r))}}function Ui(n,e=!0){if(e===!1)return{options:!1,disabled:!0};if(e===!0){const r={x:!1,y:!1,z:!1,e:!1};for(const s of n)r[s]=!0;return{options:r,disabled:!1}}if(e==="disabled")return{options:{x:!0,y:!0,z:!0,e:!0},disabled:!0};if(typeof e=="string")return{options:e===n?{x:!1,y:!1,z:!1,e:!1,[n]:!0}:!1,disabled:!1};const t={x:!1,y:!1,z:!1,e:!1};let i=!1;for(const r of n){let s=e[r]??!0;if(s===!1)return{options:!1,disabled:!0};s==="disabled"&&(i=!0,s=!0),t[r]=s}return{options:t,disabled:i}}const h0=new se,f0=new se;function ff(n,e,t,i){if(!t)return i;let r;return e instanceof _x?r=(e.top-e.bottom)/e.zoom:(e.getWorldPosition(h0),n.getWorldPosition(f0),r=h0.distanceTo(f0)*Math.min(1.9*Math.tan(Math.PI*e.fov/360)/e.zoom,7)),r*i/4}const Lg=new to(0,.04,.1,12);Lg.translate(0,.05,0);const Ig=new to(.0075,.0075,.5,3);Ig.translate(0,.25,0);const Ob=new Et(0,0,-Math.PI/2),Ub=new Et(0,0,Math.PI/2);class Ts extends Oi{invert;showArrowBody;constructor(e,t,i="",r,s=!1,a=!0){super(e,t,i,()=>({scale:!1,rotate:!1,translate:r!=null?[r]:this.options,multitouch:!1})),this.invert=s,this.showArrowBody=a}bind(e,t,i){const{options:r,disabled:s}=Ui(this.axis,i);if(r===!1)return;this.options=r;const a=this.invert?Ub:Ob,o=new mn(ln),l=Jn(this.context,o,this.tag,{color:e,hoverColor:t,disabled:s}),c=new Bt(Lg,o);c.renderOrder=1/0,c.position.x=this.invert?-.5:.5,c.rotation.copy(a),this.add(c);let u,h;if(this.showArrowBody){const g=new mn(ln);u=Jn(this.context,g,this.tag,{color:e,hoverColor:16777024,disabled:s}),h=new Bt(Ig,g),h.renderOrder=1/0,h.rotation.copy(a),this.add(h)}const f=new Bt(new to(.13,0,.6,4));f.pointerEventsOrder=1/0,f.position.x=this.invert?-.3:.3,f.rotation.copy(a),f.visible=!1,this.add(f);const m=s?void 0:this.context.registerHandle(this.store,f,this.tag);return()=>{o.dispose(),m?.(),l?.(),u?.(),this.remove(c),h!=null&&this.remove(h),this.remove(f)}}}class Eu extends Oi{constructor(e,t,i="",r){super(e,t,i,()=>({translate:r??this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e,t,i){const{options:r,disabled:s}=Ui(this.axis,i);if(r===!1)return;this.options=r;const a=new mn(ln),o=Jn(this.context,a,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:t,disabled:s}),l=new Bt(new no(.2,.2,.01),a);l.renderOrder=1/0,l.pointerEventsOrder=1/0,l.position.set(.15,.15,0);const c=s?void 0:this.context.registerHandle(this.store,l,this.tag);return this.add(l),()=>{a.dispose(),l.geometry.dispose(),c?.(),o?.(),this.remove(l)}}}new se;const d0=new xt;function Fb(n,e){const t=new Bt(new Ml(.01,2),new mn(ln));t.renderOrder=1/0,t.visible=!1,n.add(t);const i=new Bt(new Ml(.01,2),new mn(ln));i.renderOrder=1/0,i.visible=!1,n.add(i);const r=new Lm;r.setAttribute("position",new Nm([0,0,0,1,1,1],3));const s=new Cm(r,new Im(ln));s.renderOrder=1/0,s.visible=!1,n.add(s);const a=e.subscribeApply((o,l)=>{i.position.set(0,0,0),t.position.copy(l.initial.position).sub(l.current.position);const c=e.getTarget();c!=null&&(d0.copy(c.quaternion).invert(),t.position.applyQuaternion(d0)),s.position.set(0,0,0),s.scale.copy(t.position),t.visible=!l.last,s.visible=!l.last,i.visible=!l.last});return()=>{t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose(),s.geometry.dispose(),s.material.dispose(),n.remove(t),n.remove(i),n.remove(s),a()}}class kb extends Oi{constructor(e){super(e,"xyz","",()=>({translate:this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e){const{options:t,disabled:i}=Ui(this.axis,e);if(t===!1)return;this.options=t;const r=new mn(ln),s=Jn(this.context,r,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,hoverOpacity:1,disabled:i}),a=new Bt(new Ml(.1,0),r);a.renderOrder=1/0,this.add(a);const o=new Bt(new Ml(.2,0));o.pointerEventsOrder=1/0,o.visible=!1,this.add(o);const l=i?void 0:this.context.registerHandle(this.store,o,this.tag);return()=>{r.dispose(),a.geometry.dispose(),o.geometry.dispose(),l?.(),s?.(),this.remove(a),this.remove(o)}}}const p0=new se,rn=new xt,m0=new xt,g0=new xt().setFromEuler(new Et(0,0,Math.PI/2)),x0=new xt().setFromEuler(new Et(0,-Math.PI/2,0)),Bb=new xt,zb=new xt().setFromEuler(new Et(0,-Math.PI/2,0)),Hb=new xt().setFromEuler(new Et(Math.PI/2,0,0));class Vb extends mi{context;size;fixed;free;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;scaleGroup=new mi;xAxis=new se;yAxis=new se;zAxis=new se;negXAxis=new se;negYAxis=new se;negZAxis=new se;constructor(e,t,i){super(),this.context=e,this.size=t,this.fixed=i,this.add(this.scaleGroup),this.free=new kb(this.context),this.scaleGroup.add(this.free),this.translationX=new Ts(this.context,"x",void 0,this.xAxis),this.scaleGroup.add(this.translationX),this.translationY=new Ts(this.context,"y",void 0,this.yAxis),this.scaleGroup.add(this.translationY),this.translationZ=new Ts(this.context,"z",void 0,this.zAxis),this.scaleGroup.add(this.translationZ),this.translationNegX=new Ts(this.context,"x",void 0,this.negXAxis,!0,!1),this.scaleGroup.add(this.translationNegX),this.translationNegY=new Ts(this.context,"y",void 0,this.negYAxis,!0,!1),this.scaleGroup.add(this.translationNegY),this.translationNegZ=new Ts(this.context,"z",void 0,this.negZAxis,!0,!1),this.scaleGroup.add(this.translationNegZ),this.translationXY=new Eu(this.context,"xy",void 0,[this.xAxis,this.yAxis]),this.scaleGroup.add(this.translationXY),this.translationXZ=new Eu(this.context,"xz",void 0,[this.xAxis,this.zAxis]),this.scaleGroup.add(this.translationXZ),this.translationYZ=new Eu(this.context,"yz",void 0,[this.yAxis,this.zAxis]),this.scaleGroup.add(this.translationYZ)}update(e){this.updateWorldMatrix(!0,!1),this.xAxis.set(1,0,0),this.yAxis.set(0,1,0),this.zAxis.set(0,0,1),this.free.quaternion.identity(),this.translationX.quaternion.copy(m0),this.translationY.quaternion.copy(g0),this.translationZ.quaternion.copy(x0),this.translationNegX.quaternion.copy(m0),this.translationNegY.quaternion.copy(g0),this.translationNegZ.quaternion.copy(x0),this.translationXY.quaternion.copy(Bb),this.translationYZ.quaternion.copy(zb),this.translationXZ.quaternion.copy(Hb);const t=this.context.getSpace(),i=this.context.getTarget();t=="world"&&i!=null?(i.getWorldQuaternion(rn).invert(),this.free.quaternion.premultiply(rn),this.translationX.quaternion.premultiply(rn),this.translationY.quaternion.premultiply(rn),this.translationZ.quaternion.premultiply(rn),this.translationNegX.quaternion.premultiply(rn),this.translationNegY.quaternion.premultiply(rn),this.translationNegZ.quaternion.premultiply(rn),this.translationXY.quaternion.premultiply(rn),this.translationYZ.quaternion.premultiply(rn),this.translationXZ.quaternion.premultiply(rn),i.parent!=null&&(i.parent.getWorldQuaternion(rn).invert(),this.xAxis.applyQuaternion(rn),this.yAxis.applyQuaternion(rn),this.zAxis.applyQuaternion(rn))):i!=null&&(this.xAxis.applyQuaternion(i.quaternion),this.yAxis.applyQuaternion(i.quaternion),this.zAxis.applyQuaternion(i.quaternion)),this.negXAxis.copy(this.xAxis).negate(),this.negYAxis.copy(this.yAxis).negate(),this.negZAxis.copy(this.zAxis).negate(),this.scaleGroup.scale.setScalar(1),i!=null&&(i.getWorldScale(p0),this.scaleGroup.scale.divide(p0)),this.scaleGroup.scale.multiplyScalar(ff(this,e,this.fixed??!0,this.size??1))}bind(e){const t=Fb(this,this.context),i=this.translationX.bind(16711680,16776960,e),r=this.translationY.bind(65280,16776960,e),s=this.translationZ.bind(255,16776960,e),a=this.translationNegX.bind(16711680,16776960,e),o=this.translationNegY.bind(65280,16776960,e),l=this.translationNegZ.bind(255,16776960,e),c=this.translationXY.bind(255,16776960,e),u=this.translationYZ.bind(16711680,16776960,e),h=this.translationXZ.bind(65280,16776960,e),f=this.free.bind(e);return()=>{t(),i?.(),r?.(),s?.(),a?.(),o?.(),l?.(),c?.(),u?.(),h?.(),f?.()}}}const Gb=new Et(0,0,-Math.PI/2),Wb=new Et(0,0,Math.PI/2);class As extends Oi{invert;showHandleLine;constructor(e,t,i="",r=!1,s=!0){super(e,t,i,()=>({scale:this.options,rotate:!1,translate:"as-scale",multitouch:!1})),this.invert=r,this.showHandleLine=s}bind(e,t,i){const{options:r,disabled:s}=Ui(this.axis,i);if(r===!1)return;this.options=r;const a=this.invert?Wb:Gb,o=new mi;o.position.x=this.invert?-.5:.5,o.rotation.copy(a),this.add(o);const l=new mn(ln),c=Jn(this.context,l,this.tag,{color:e,hoverColor:t,disabled:s}),u=new Bt(new no(.08,.08,.08),l);u.renderOrder=1/0,u.rotation.copy(a),o.add(u);let h,f,m;if(this.showHandleLine){m=new mi,m.rotation.copy(a),this.add(m);const p=new mn(ln);h=Jn(this.context,p,this.tag,{color:e,hoverColor:t,disabled:s}),f=new Bt(new to(.0075,.0075,.5,3),p),f.renderOrder=1/0,f.position.y=.25,m.add(f)}const g=new mi;g.visible=!1,g.rotation.copy(a),g.position.x=this.invert?-.3:.3,this.add(g);const x=new Bt(new to(.2,0,.5,4));x.pointerEventsOrder=1/0,x.position.y=.04,g.add(x);const d=s?void 0:this.context.registerHandle(this.store,x,this.tag);return()=>{l.dispose(),x.geometry.dispose(),u.geometry.dispose(),f?.geometry.dispose(),d?.(),c?.(),h?.(),m!=null&&this.remove(m),this.remove(g),this.remove(o)}}}class wu extends Oi{constructor(e,t,i=""){super(e,t,i,()=>({translate:"as-scale",scale:this.options,rotate:!1,multitouch:!1}))}bind(e,t,i){const{options:r,disabled:s}=Ui(this.axis,i);if(r===!1)return;this.options=r;const a=new mn(ln),o=Jn(this.context,a,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:t,disabled:s}),l=new Bt(new no(.2,.2,.01),a);l.renderOrder=1/0,l.pointerEventsOrder=1/0,l.position.set(.15,.15,0);const c=s?void 0:this.context.registerHandle(this.store,l,this.tag);return this.add(l),()=>{a.dispose(),l.geometry.dispose(),c?.(),o?.(),this.remove(l)}}}const Xb=new Et(0,0,-Math.PI/2),jb=new Et(0,0,Math.PI/2);class Rs extends Oi{actualAxis;invert;constructor(e,t="",i,r=!1){super(e,"xyz",t,()=>({scale:{uniform:!0,...this.options},rotate:!1,translate:"as-scale",multitouch:!1})),this.actualAxis=i,this.invert=r}bind(e,t,i){const{options:r,disabled:s}=Ui(this.actualAxis,i);if(r===!1)return;this.options=r;const a=this.invert?jb:Xb,o=new mi;o.position.x=this.invert?-.7:.7,o.rotation.copy(a),this.add(o);const l=new mn(ln),c=Jn(this.context,l,this.tag,{color:e,hoverColor:t,opacity:.5,hoverOpacity:1,disabled:s}),u=new Bt(new no(.08,.08,.08),l);u.renderOrder=1/0,u.rotation.copy(a),o.add(u);const h=new Bt(new no(.15,.15,.15),l);h.visible=!1,h.pointerEventsOrder=1/0,h.rotation.copy(a),o.add(h);const f=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{l.dispose(),u.geometry.dispose(),f?.(),c?.(),this.remove(o)}}}const v0=new se;class qb extends mi{context;size;fixed;scaleX;scaleY;scaleZ;scaleNegX;scaleNegY;scaleNegZ;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;constructor(e,t,i){super(),this.context=e,this.size=t,this.fixed=i,this.scaleX=new Rs(this.context,void 0,"x"),this.add(this.scaleX),this.scaleY=new Rs(this.context,void 0,"y"),this.scaleY.rotation.z=Math.PI/2,this.add(this.scaleY),this.scaleZ=new Rs(this.context,void 0,"z"),this.scaleZ.rotation.y=-Math.PI/2,this.add(this.scaleZ),this.scaleNegX=new Rs(this.context,void 0,"x",!0),this.add(this.scaleNegX),this.scaleNegY=new Rs(this.context,void 0,"y",!0),this.scaleNegY.rotation.z=Math.PI/2,this.add(this.scaleNegY),this.scaleNegZ=new Rs(this.context,void 0,"z",!0),this.scaleNegZ.rotation.y=-Math.PI/2,this.add(this.scaleNegZ),this.translationX=new As(this.context,"x"),this.add(this.translationX),this.translationY=new As(this.context,"y"),this.translationY.rotation.z=Math.PI/2,this.add(this.translationY),this.translationZ=new As(this.context,"z"),this.translationZ.rotation.y=-Math.PI/2,this.add(this.translationZ),this.translationNegX=new As(this.context,"x",void 0,!0,!1),this.add(this.translationNegX),this.translationNegY=new As(this.context,"y",void 0,!0,!1),this.translationNegY.rotation.z=Math.PI/2,this.add(this.translationNegY),this.translationNegZ=new As(this.context,"z",void 0,!0,!1),this.translationNegZ.rotation.y=-Math.PI/2,this.add(this.translationNegZ),this.translationXY=new wu(this.context,"xy"),this.add(this.translationXY),this.translationXZ=new wu(this.context,"xz"),this.translationXZ.rotation.x=Math.PI/2,this.add(this.translationXZ),this.translationYZ=new wu(this.context,"yz"),this.translationYZ.rotation.y=-Math.PI/2,this.add(this.translationYZ)}update(e){this.updateWorldMatrix(!0,!1),this.scale.setScalar(1);const t=this.context.getTarget();t!=null&&(t.getWorldScale(v0),this.scale.divide(v0)),this.scale.multiplyScalar(ff(this,e,this.fixed??!0,this.size??1))}bind(e){const t=this.scaleX.bind(16777215,16776960,e),i=this.scaleY.bind(16777215,16776960,e),r=this.scaleZ.bind(16777215,16776960,e),s=this.scaleNegX.bind(16777215,16776960,e),a=this.scaleNegY.bind(16777215,16776960,e),o=this.scaleNegZ.bind(16777215,16776960,e),l=this.translationX.bind(16711680,16776960,e),c=this.translationY.bind(65280,16776960,e),u=this.translationZ.bind(255,16776960,e),h=this.translationNegX.bind(16711680,16776960,e),f=this.translationNegY.bind(65280,16776960,e),m=this.translationNegZ.bind(255,16776960,e),g=this.translationXY.bind(255,16776960,e),x=this.translationYZ.bind(16711680,16776960,e),d=this.translationXZ.bind(65280,16776960,e);return()=>{l?.(),c?.(),u?.(),h?.(),f?.(),m?.(),g?.(),x?.(),d?.(),t?.(),i?.(),r?.(),s?.(),a?.(),o?.()}}}const _0={x:{vector1:new se(0,0,-1),vector2:new se(0,-1,0),rotationOffset:new xt,axis:[1,0,0]},y:{vector1:new se(0,0,-1),vector2:new se(-1,0,-1),rotationOffset:new xt().setFromEuler(new Et(0,0,Math.PI/2)),axis:[0,1,0]},z:{vector1:new se(-1,0,0),vector2:new se(0,-1,0),rotationOffset:new xt().setFromEuler(new Et(0,Math.PI/2,0)),axis:[0,0,1]}},bu=new se,ka=new se,al=new se,Rr=new se,Wn=new xt;class Tu extends Oi{direction=new se(1,0,0);constructor(e,t,i=""){super(e,t,i,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}))}update(e){const{rotationOffset:t,vector1:i,vector2:r}=_0[this.axis];e.getWorldPosition(bu),this.getWorldPosition(ka).sub(bu),al.copy(i),Rr.copy(r);const s=this.context.getTarget(),a=this.context.getSpace();a==="local"&&s!=null&&(s.getWorldQuaternion(Wn),al.applyQuaternion(Wn),Rr.applyQuaternion(Wn)),Rr.crossVectors(al,Rr);const o=ka.dot(Rr);Rr.multiplyScalar(o),ka.sub(Rr),this.quaternion.setFromUnitVectors(al,ka.normalize()),a==="local"&&s!=null&&(s.getWorldQuaternion(Wn),this.quaternion.multiply(Wn)),this.quaternion.multiply(t),s?.parent!=null?(s.parent.matrixWorld.decompose(bu,Wn,ka),Wn.invert(),this.quaternion.premultiply(Wn)):Wn.identity(),this.store.getState()==null&&(this.direction.fromArray(_0[this.axis].axis),this.direction.applyQuaternion(a==="local"&&s!=null?s?.quaternion:Wn)),s!=null&&this.quaternion.premultiply(Wn.copy(s.quaternion).invert())}bind(e,t){const{options:i,disabled:r}=Ui(this.axis,t);if(i===!1)return;this.options=i;const s=new mn(ln),a=Jn(this.context,s,this.tag,{color:e,hoverColor:16776960,disabled:r}),o=new Bt(df(.5,.5),s);o.renderOrder=1/0,this.add(o);const l=new Bt(new Nh(.5,.1,4,24));l.visible=!1,l.pointerEventsOrder=1/0,l.rotation.set(0,-Math.PI/2,-Math.PI/2),this.add(l);const c=r?void 0:this.context.registerHandle(this.store,l,this.tag);return()=>{s.dispose(),l.geometry.dispose(),o.geometry.dispose(),c?.(),a?.(),this.remove(l),this.remove(o)}}}const Au=new se,Ru=new se,$b=new se(1,0,0),Ba=new xt;class Yb extends Oi{constructor(e,t=""){super(e,"xyz",t,()=>({scale:!1,translate:"as-rotate",rotate:this.options,multitouch:!1}))}update(e){e.getWorldPosition(Au),this.getWorldPosition(Ru).sub(Au),this.quaternion.setFromUnitVectors($b,Ru.normalize());const t=this.context.getTarget();t?.parent!=null&&(t.parent.matrixWorld.decompose(Au,Ba,Ru),Ba.invert(),this.quaternion.premultiply(Ba)),t!=null&&(Ba.copy(t.quaternion).invert(),this.quaternion.premultiply(Ba))}bind(e){const{options:t,disabled:i}=Ui(this.axis,e);if(t===!1)return;this.options=t;const r=new mn(ln),s=Jn(this.context,r,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,disabled:i}),a=new Bt(df(.5,1),r);a.renderOrder=1/0,this.add(a);const o=new Bt(new yx(.25,10,8));o.visible=!1,o.pointerEventsOrder=1/0,this.add(o);const l=i?void 0:this.context.registerHandle(this.store,o,this.tag);return()=>{this.pointerEvents="none",r.dispose(),o.geometry.dispose(),a.geometry.dispose(),l?.(),s?.(),this.remove(o),this.remove(a)}}}const Pu=new se,Zb=new se,Kb=new se(1,0,0),Ps=new xt;class Qb extends Oi{direction=new se(1,0,0);constructor(e,t=""){super(e,"e",t,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}))}update(e){e.getWorldPosition(Pu),this.getWorldPosition(this.direction).sub(Pu).normalize(),this.quaternion.setFromUnitVectors(Kb,this.direction);const t=this.context.getTarget();t?.parent!=null&&(t.parent.matrixWorld.decompose(Pu,Ps,Zb),Ps.invert(),this.quaternion.premultiply(Ps),this.direction.applyQuaternion(Ps)),t!=null&&(Ps.copy(t.quaternion).invert(),this.quaternion.premultiply(Ps)),this.direction.negate()}bind(e){const{options:t,disabled:i}=Ui(this.axis,e);if(t===!1)return;this.options=t;const r=new mn(ln),s=Jn(this.context,r,this.tag,{color:16776960,hoverColor:16776960,opacity:.5,disabled:i}),a=new Bt(df(.75,1),r);a.renderOrder=1/0,this.add(a);const o=new Bt(new Nh(.75,.1,2,24),new mn({color:"white"}));o.visible=!1,o.rotation.y=Math.PI/2,o.pointerEventsOrder=1/0,this.add(o);const l=i?void 0:this.context.registerHandle(this.store,o,this.tag);return()=>{r.dispose(),o.geometry.dispose(),a.geometry.dispose(),l?.(),s?.(),this.remove(o),this.remove(a)}}}function df(n,e){const t=new Nh(n,.0075,3,64,e*Math.PI*2);return t.rotateY(Math.PI/2),t.rotateX(Math.PI/2),t}const y0=new se;class Jb extends mi{context;fixed;size;rotationX;rotationY;rotationZ;free;screen;constructor(e,t,i){super(),this.context=e,this.fixed=t,this.size=i,this.rotationX=new Tu(this.context,"x"),this.add(this.rotationX),this.rotationY=new Tu(this.context,"y"),this.add(this.rotationY),this.rotationZ=new Tu(this.context,"z"),this.add(this.rotationZ),this.free=new Yb(this.context),this.add(this.free),this.screen=new Qb(this.context),this.add(this.screen)}update(e){this.updateWorldMatrix(!0,!1),this.rotationX.update(e),this.rotationY.update(e),this.rotationZ.update(e),this.free.update(e),this.screen.update(e),this.scale.setScalar(1);const t=this.context.getTarget();t!=null&&(t.getWorldScale(y0),this.scale.divide(y0)),this.scale.multiplyScalar(ff(this,e,this.fixed??!0,this.size??1))}bind(e){const t=this.rotationX.bind(16711680,e),i=this.rotationY.bind(65280,e),r=this.rotationZ.bind(255,e),s=this.screen.bind(e),a=this.free.bind(e);return()=>{t?.(),i?.(),r?.(),s?.(),a?.()}}}const e5=new Et,t5=new Et(0,0,Math.PI/2),n5=new Et(0,-Math.PI/2,0);class i5 extends mi{xAxisHighlight;yAxisHighlight;zAxisHighlight;handles;context;constructor(e){super(),this.context=new Db(this,e),this.xAxisHighlight=new Mu(this.context,e5),this.add(this.xAxisHighlight),this.yAxisHighlight=new Mu(this.context,t5),this.add(this.yAxisHighlight),this.zAxisHighlight=new Mu(this.context,n5),this.add(this.zAxisHighlight)}set space(e){this.context.space=e}get space(){return this.context.space}update(e,t){this.context.update(e),this.xAxisHighlight.update(),this.yAxisHighlight.update(),this.zAxisHighlight.update(),this.handles?.update(t)}bind(e,t){const i=this.xAxisHighlight.bind("x"),r=this.yAxisHighlight.bind("y"),s=this.zAxisHighlight.bind("z");switch(e){case"rotate":this.handles=new Jb(this.context);break;case"scale":this.handles=new qb(this.context);break;case"translate":this.handles=new Vb(this.context);break}this.add(this.handles);const a=this.handles.bind(t);return()=>{this.handles!=null&&this.remove(this.handles),this.handles=void 0,a(),i(),r(),s()}}}new se(0,0,1);new se(0,1,0);new se;new se;new Et;new se;new Kr;new se;new se;new se;new Kr;new Kr;new se;new se;new Kr;new Kr;new Kr;new Kr;new se;new se;const r5=2;class s5{constructor(e){this.xrDevice=e,this.combinedCameraPosition=new k,this.isPointerLocked=!1,this.vec3=new k,this.quat=new fr,this.keyState={ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},this.lastTime=0,this.scene=new Tg,this.camera=new bn(50,window.innerWidth/window.innerHeight,.1,40),this.playerRig=new pi,this.cameraRig=new pi,this.scene.add(this.playerRig),this.playerRig.add(this.cameraRig),this.cameraRig.position.fromArray(e.position.vec3),this.cameraRig.quaternion.fromArray(e.quaternion.quat),this.cameraRig.add(this.camera),this.camera.position.x-=e.ipd/2;const t=new Yn(new uf(.25,.27,32),new lf({color:16777215,side:Ii}));t.rotateX(-Math.PI/2),this.scene.add(t),this.renderer=new bg({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.transformHandles=new Map,["left","right"].forEach(i=>{const r=new i5;r.scale.setScalar(.1),r.position.fromArray(e.controllers[i].position.vec3),r.quaternion.fromArray(e.controllers[i].quaternion.quat),this.cameraRig.attach(r),r.userData={defaultPosition:r.position.toArray(),defaultQuaternion:r.quaternion.toArray()},r.userData.setMode=s=>{var a,o;(o=(a=r.userData).modeCleanup)===null||o===void 0||o.call(a),r.userData.modeCleanup=r.bind(s),r.userData.mode=s},r.userData.setMode("translate"),r.space="local",this.transformHandles.set(i,r),r.addEventListener("click",()=>{r.userData.mode==="translate"?r.userData.setMode("rotate"):r.userData.setMode("translate")})}),window.transformHandles=this.transformHandles,this.mouseMoveHandler=i=>{if(!this.isPointerLocked)return;const r=i.movementX||i.mozMovementX||i.webkitMovementX||0,s=i.movementY||i.mozMovementY||i.webkitMovementY||0;this.playerRig.rotation.y-=r*.002,this.cameraRig.rotation.x-=s*.002,e.quaternion.copy(this.cameraRig.getWorldQuaternion(new fr))},this.cameraRig.getWorldPosition(this.combinedCameraPosition),this.headsetDefaultPosition=this.cameraRig.position.clone(),this.headsetDefaultQuaternion=this.cameraRig.quaternion.clone(),this.forwardHtmlEvents=Mx(this.renderer.domElement,()=>this.camera,this.scene).update,document.addEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),document.addEventListener("keyup",this.keyUpHandler.bind(this),!1)}lockPointer(){this.renderer.domElement.requestPointerLock=this.renderer.domElement.requestPointerLock||this.renderer.domElement.mozRequestPointerLock||this.renderer.domElement.webkitRequestPointerLock,this.renderer.domElement.requestPointerLock()}pointerLockChangeHandler(){this.isPointerLocked=document.pointerLockElement===this.renderer.domElement||document.mozPointerLockElement===this.renderer.domElement||document.webkitPointerLockElement===this.renderer.domElement,this.isPointerLocked?(document.addEventListener("mousemove",this.mouseMoveHandler,!1),Object.values(this.transformHandles).forEach(e=>{e.visible=!1})):(document.removeEventListener("mousemove",this.mouseMoveHandler,!1),Object.values(this.transformHandles).forEach(e=>{e.visible=!0}))}keyDownHandler(e){const{keyState:t}=this;e.code in t&&(t[e.code]=!0),t.ShiftLeft&&t.ArrowUp&&(this.cameraRig.position.y+=.05),t.ShiftLeft&&t.ArrowDown&&(this.cameraRig.position.y-=.05)}keyUpHandler(e){const{keyState:t}=this;e.code in t&&(t[e.code]=!1)}movePlayerRig(e){const{playerRig:t,keyState:i,vec3:r}=this;r.set((i.KeyD?1:0)-(i.KeyA?1:0),0,(i.KeyS?1:0)-(i.KeyW?1:0)),r.lengthSq()>0&&i.ShiftLeft&&(r.normalize().multiplyScalar(r5*e).applyQuaternion(t.quaternion),t.position.add(r))}resetDeviceTransforms(){const{playerRig:e,cameraRig:t,transformHandles:i}=this;t.position.copy(this.headsetDefaultPosition),t.quaternion.copy(this.headsetDefaultQuaternion),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),i.forEach(r=>{r.position.fromArray(r.userData.defaultPosition),r.quaternion.fromArray(r.userData.defaultQuaternion)})}syncDeviceTransforms(){const{xrDevice:e,cameraRig:t,transformHandles:i}=this;e.position.copy(t.getWorldPosition(this.vec3)),e.quaternion.copy(t.getWorldQuaternion(this.quat)),i.forEach((r,s)=>{const a=e.primaryInputMode==="controller"?e.controllers[s]:e.hands[s];a.position.copy(r.getWorldPosition(this.vec3)),a.quaternion.copy(r.getWorldQuaternion(this.quat))})}renderScene(e){const t=this.xrDevice.fovy/Math.PI*180;let i=!1;this.camera.fov!==t&&(this.camera.fov=t,i=!0);const r=this.xrDevice.canvasDimensions;if(r){const a=this.renderer.domElement;(a.width!==r.width||a.height!==r.height)&&(this.camera.aspect=r.width/r.height,this.renderer.setSize(r.width,r.height),i=!0)}i&&this.camera.updateProjectionMatrix(),this.isPointerLocked?this.cameraRig.getWorldPosition(this.combinedCameraPosition):(this.cameraRig.position.y=this.combinedCameraPosition.y,this.playerRig.position.x=this.combinedCameraPosition.x,this.playerRig.position.z=this.combinedCameraPosition.z),this.forwardHtmlEvents(),this.transformHandles.forEach((a,o)=>{var l;const c=!!(!((l=this.xrDevice.controllers[o])===null||l===void 0)&&l.connected);a.visible=c&&!this.isPointerLocked,c&&a.update(e,this.camera)});const s=Math.min((e-this.lastTime)/1e3,.1);this.movePlayerRig(s),this.syncDeviceTransforms(),this.renderer.render(this.scene,this.camera),this.lastTime=e}get domElement(){return this.renderer.domElement}dispose(){this.renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mousemove",this.mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandler.bind(this),!1),document.removeEventListener("keyup",this.keyUpHandler.bind(this),!1)}}const a5="1.1.1";class o5{constructor(e){this.version=a5,e.ipd=0,nf.getState().setInputMode(e.primaryInputMode),this.devUIContainer=document.createElement("div"),this.devUIContainer.style.position="fixed",this.devUIContainer.style.width="100vw",this.devUIContainer.style.height="100vh",this.devUIContainer.style.top="50vh",this.devUIContainer.style.left="50vw",this.devUIContainer.style.transform="translate(-50%, -50%)",this.devUIContainer.style.pointerEvents="none";const t=this.devUIContainer.attachShadow({mode:"open"});this.inputLayer=new s5(e),Cf.createRoot(t).render(_.jsx(l5,{xrDevice:e,inputLayer:this.inputLayer,shadowRoot:t}));const r=()=>{const s=document.createElement("div");document.body.appendChild(s);const a=s.attachShadow({mode:"open"});Cf.createRoot(a).render(_.jsx(c5,{xrDevice:e,shadowRoot:a}))};document.body?r():window.onload=r}render(e){this.inputLayer.renderScene(e)}get devUICanvas(){return this.inputLayer.domElement}}const l5=({xrDevice:n,inputLayer:e,shadowRoot:t})=>{const[i,r]=Be.useState(!1);return Be.useEffect(()=>{const s=()=>{const a=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;r(!!a)};return document.addEventListener("pointerlockchange",s,!1),document.addEventListener("mozpointerlockchange",s,!1),document.addEventListener("webkitpointerlockchange",s,!1),()=>{document.removeEventListener("pointerlockchange",s,!1),document.removeEventListener("mozpointerlockchange",s,!1),document.removeEventListener("webkitpointerlockchange",s,!1)}},[]),_.jsx(D1,{target:t,disableCSSOMInjection:!0,children:_.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"},children:[_.jsx(jy,{xrDevice:n,inputLayer:e}),_.jsx(Yy,{xrDevice:n,inputLayer:e,pointerLocked:i}),_.jsx(Vy,{xrDevice:n,inputLayer:e,pointerLocked:i})]})})},c5=({xrDevice:n,shadowRoot:e})=>{const[t,i]=St.useState(n.sessionOffered&&!n.activeSession);return St.useEffect(()=>{setInterval(()=>{i(n.sessionOffered&&!n.activeSession)},1e3)},[]),_.jsx(D1,{target:e,disableCSSOMInjection:!0,children:_.jsxs(lh,{style:{zIndex:899,position:"fixed",top:t?"8px":"-30px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"space-between",left:"50vw",transform:"translateX(-50%)",transition:"all 0.2s ease-in-out",paddingLeft:"5px",gap:"3px"},children:[_.jsx(ch,{size:24}),_.jsx(Dn,{onClick:()=>{n.grantOfferedSession()},style:{fontSize:"16px"},children:"Enter XR"})]})})};var Ng=1e-6,gn=typeof Float32Array<"u"?Float32Array:Array;function u5(){var n=new gn(9);return gn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function Yt(){var n=new gn(16);return gn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function h5(n){var e=new gn(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function Dg(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function f5(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Og(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],x=e[13],d=e[14],p=e[15],b=t*o-i*a,v=t*l-r*a,M=t*c-s*a,R=i*l-r*o,T=i*c-s*o,A=r*c-s*l,D=u*x-h*g,E=u*d-f*g,y=u*p-m*g,C=h*d-f*x,V=h*p-m*x,U=f*p-m*d,z=b*U-v*V+M*C+R*y-T*E+A*D;return z?(z=1/z,n[0]=(o*U-l*V+c*C)*z,n[1]=(r*V-i*U-s*C)*z,n[2]=(x*A-d*T+p*R)*z,n[3]=(f*T-h*A-m*R)*z,n[4]=(l*y-a*U-c*E)*z,n[5]=(t*U-r*y+s*E)*z,n[6]=(d*M-g*A-p*v)*z,n[7]=(u*A-f*M+m*v)*z,n[8]=(a*V-o*y+c*D)*z,n[9]=(i*y-t*V-s*D)*z,n[10]=(g*T-x*M+p*b)*z,n[11]=(h*M-u*T-m*b)*z,n[12]=(o*E-a*C-l*D)*z,n[13]=(t*C-i*E+r*D)*z,n[14]=(x*v-g*R-d*b)*z,n[15]=(u*R-h*v+f*b)*z,n):null}function lc(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],m=e[10],g=e[11],x=e[12],d=e[13],p=e[14],b=e[15],v=t[0],M=t[1],R=t[2],T=t[3];return n[0]=v*i+M*o+R*h+T*x,n[1]=v*r+M*l+R*f+T*d,n[2]=v*s+M*c+R*m+T*p,n[3]=v*a+M*u+R*g+T*b,v=t[4],M=t[5],R=t[6],T=t[7],n[4]=v*i+M*o+R*h+T*x,n[5]=v*r+M*l+R*f+T*d,n[6]=v*s+M*c+R*m+T*p,n[7]=v*a+M*u+R*g+T*b,v=t[8],M=t[9],R=t[10],T=t[11],n[8]=v*i+M*o+R*h+T*x,n[9]=v*r+M*l+R*f+T*d,n[10]=v*s+M*c+R*m+T*p,n[11]=v*a+M*u+R*g+T*b,v=t[12],M=t[13],R=t[14],T=t[15],n[12]=v*i+M*o+R*h+T*x,n[13]=v*r+M*l+R*f+T*d,n[14]=v*s+M*c+R*m+T*p,n[15]=v*a+M*u+R*g+T*b,n}function fa(n,e){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function S0(n,e,t){var i=t[0],r=t[1],s=t[2],a=Math.sqrt(i*i+r*r+s*s),o,l,c;return a<Ng?null:(a=1/a,i*=a,r*=a,s*=a,o=Math.sin(e),l=Math.cos(e),c=1-l,n[0]=i*i*c+l,n[1]=r*i*c+s*o,n[2]=s*i*c-r*o,n[3]=0,n[4]=i*r*c-s*o,n[5]=r*r*c+l,n[6]=s*r*c+i*o,n[7]=0,n[8]=i*s*c+r*o,n[9]=r*s*c-i*o,n[10]=s*s*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)}function Mo(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=i+i,l=r+r,c=s+s,u=i*o,h=i*l,f=i*c,m=r*l,g=r*c,x=s*c,d=a*o,p=a*l,b=a*c;return n[0]=1-(m+x),n[1]=h+b,n[2]=f-p,n[3]=0,n[4]=h-b,n[5]=1-(u+x),n[6]=g+d,n[7]=0,n[8]=f+p,n[9]=g-d,n[10]=1-(u+m),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function co(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function _h(n,e){var t=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return n[0]=Math.sqrt(t*t+i*i+r*r),n[1]=Math.sqrt(s*s+a*a+o*o),n[2]=Math.sqrt(l*l+c*c+u*u),n}function Bl(n,e){var t=new gn(3);_h(t,e);var i=1/t[0],r=1/t[1],s=1/t[2],a=e[0]*i,o=e[1]*r,l=e[2]*s,c=e[4]*i,u=e[5]*r,h=e[6]*s,f=e[8]*i,m=e[9]*r,g=e[10]*s,x=a+u+g,d=0;return x>0?(d=Math.sqrt(x+1)*2,n[3]=.25*d,n[0]=(h-m)/d,n[1]=(f-l)/d,n[2]=(o-c)/d):a>u&&a>g?(d=Math.sqrt(1+a-u-g)*2,n[3]=(h-m)/d,n[0]=.25*d,n[1]=(o+c)/d,n[2]=(f+l)/d):u>g?(d=Math.sqrt(1+u-a-g)*2,n[3]=(f-l)/d,n[0]=(o+c)/d,n[1]=.25*d,n[2]=(h+m)/d):(d=Math.sqrt(1+g-a-u)*2,n[3]=(o-c)/d,n[0]=(f+l)/d,n[1]=(h+m)/d,n[2]=.25*d),n}function d5(n,e,t,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=r+r,c=s+s,u=a+a,h=r*l,f=r*c,m=r*u,g=s*c,x=s*u,d=a*u,p=o*l,b=o*c,v=o*u,M=i[0],R=i[1],T=i[2];return n[0]=(1-(g+d))*M,n[1]=(f+v)*M,n[2]=(m-b)*M,n[3]=0,n[4]=(f-v)*R,n[5]=(1-(h+d))*R,n[6]=(x+p)*R,n[7]=0,n[8]=(m+b)*T,n[9]=(x-p)*T,n[10]=(1-(h+g))*T,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function p5(n,e,t,i,r){var s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0){var a=1/(i-r);n[10]=(r+i)*a,n[14]=2*r*i*a}else n[10]=-1,n[14]=-2*i;return n}var M0=p5;function $t(){var n=new gn(3);return gn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function m5(n){var e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function Zn(n,e,t){var i=new gn(3);return i[0]=n,i[1]=e,i[2]=t,i}function Cu(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function Ya(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function g5(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function Ug(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function Fg(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function _l(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return n[0]=r*l-s*o,n[1]=s*a-i*l,n[2]=i*o-r*a,n}function yh(n,e,t,i){var r=e[0],s=e[1],a=e[2];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n[2]=a+i*(t[2]-a),n}function x5(n,e,t){var i=t[0],r=t[1],s=t[2],a=t[3],o=e[0],l=e[1],c=e[2],u=r*c-s*l,h=s*o-i*c,f=i*l-r*o;return u=u+u,h=h+h,f=f+f,n[0]=o+a*u+r*f-s*h,n[1]=l+a*h+s*u-i*f,n[2]=c+a*f+i*h-r*u,n}var v5=m5;(function(){var n=$t();return function(e,t,i,r,s,a){var o,l;for(t||(t=3),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();function Sh(){var n=new gn(4);return gn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function _5(n,e,t,i){var r=new gn(4);return r[0]=n,r[1]=e,r[2]=t,r[3]=i,r}function y5(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function Mh(n,e,t,i,r){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n}function S5(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a,n}function E0(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3];return n[0]=t[0]*i+t[4]*r+t[8]*s+t[12]*a,n[1]=t[1]*i+t[5]*r+t[9]*s+t[13]*a,n[2]=t[2]*i+t[6]*r+t[10]*s+t[14]*a,n[3]=t[3]*i+t[7]*r+t[11]*s+t[15]*a,n}(function(){var n=Sh();return function(e,t,i,r,s,a){var o,l;for(t||(t=4),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],n[3]=e[o+3],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2],e[o+3]=n[3];return e}})();function Qn(){var n=new gn(4);return gn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function kg(n,e,t){t=t*.5;var i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function M5(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],u=t[3];return n[0]=i*u+a*o+r*c-s*l,n[1]=r*u+a*l+s*o-i*c,n[2]=s*u+a*c+i*l-r*o,n[3]=a*u-i*o-r*l-s*c,n}function Ja(n,e,t,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],c=t[1],u=t[2],h=t[3],f,m,g,x,d;return m=r*l+s*c+a*u+o*h,m<0&&(m=-m,l=-l,c=-c,u=-u,h=-h),1-m>Ng?(f=Math.acos(m),g=Math.sin(f),x=Math.sin((1-i)*f)/g,d=Math.sin(i*f)/g):(x=1-i,d=i),n[0]=x*r+d*l,n[1]=x*s+d*c,n[2]=x*a+d*u,n[3]=x*o+d*h,n}function E5(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function w5(n,e){var t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}var zl=_5,Lu=y5,w0=Mh,cc=S5;(function(){var n=$t(),e=Zn(1,0,0),t=Zn(0,1,0);return function(i,r,s){var a=Fg(r,s);return a<-.999999?(_l(n,e,r),v5(n)<1e-6&&_l(n,t,r),Ug(n,n),kg(i,n,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(_l(n,r,s),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=1+a,cc(i,i))}})();(function(){var n=Qn(),e=Qn();return function(t,i,r,s,a,o){return Ja(n,i,a,o),Ja(e,r,s,o),Ja(t,n,e,2*o*(1-o)),t}})();(function(){var n=u5();return function(e,t,i,r){return n[0]=i[0],n[3]=i[1],n[6]=i[2],n[1]=r[0],n[4]=r[1],n[7]=r[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],cc(e,w5(e,n))}})();const je=Symbol("@iwer/action-player"),On=Symbol("@iwer/xr-anchor"),Iu=Symbol("@iwer/xr-controller"),$=Symbol("@iwer/xr-device"),Pr=Symbol("@iwer/xr-hand-input"),At=Symbol("@iwer/xr-tracked-input"),ot=Symbol("@iwer/xr-frame"),be=Symbol("@iwer/gamepad"),Un=Symbol("@iwer/xr-system"),$i=Symbol("@iwer/xr-input-source"),Zi=Symbol("@iwer/xr-webgl-layer"),Ki=Symbol("@iwer/xr-mesh"),Qi=Symbol("@iwer/xr-plane"),b0=Symbol("@iwer/xr-joint-pose"),za=Symbol("@iwer/xr-pose"),T0=Symbol("@iwer/xr-viewer-pose"),Mn=Symbol("@iwer/xr-rigid-transform"),Ha=Symbol("@iwer/xr-render-state"),N=Symbol("@iwer/xr-session"),Wr=Symbol("@iwer/xr-joint-space"),Ji=Symbol("@iwer/xr-reference-space"),Ft=Symbol("@iwer/xr-space"),Ir=Symbol("@iwer/xr-view"),Va=Symbol("@iwer/xr-viewport"),En=Symbol("@iwer/xr-ray"),Ri=Symbol("@iwer/xr-hit-test");class Ct extends EventTarget{constructor(e,t){super(),this[Ft]={parentSpace:e,offsetMatrix:t?h5(t):Yt(),emulated:!0}}}class b5 extends Ct{constructor(){super(void 0,Yt())}}class da{static updateOffsetPosition(e,t){const i=e[Ft].offsetMatrix;fa(i,t)}static updateOffsetQuaternion(e,t){const i=e[Ft].offsetMatrix,r=$t();co(r,i),Mo(i,t,r)}static updateOffsetMatrix(e,t){const i=e[Ft].offsetMatrix;Dg(i,t)}static calculateGlobalOffsetMatrix(e,t=Yt()){const i=e[Ft].parentSpace?da.calculateGlobalOffsetMatrix(e[Ft].parentSpace):Yt();return lc(t,i,e[Ft].offsetMatrix),t}}let Xr=class Bg{constructor(e=0,t=0,i=0){this.vec3=Zn(e,t,i),this.tempVec3=$t()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,t,i){return Ya(this.vec3,e,t,i),this}clone(){return new Bg(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return Cu(this.tempVec3,this.vec3),Ug(this.vec3,this.tempVec3),this}add(e){return Cu(this.tempVec3,this.vec3),g5(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return Cu(this.tempVec3,this.vec3),x5(this.vec3,this.tempVec3,e.quat),this}},eo=class zg{constructor(e=0,t=0,i=0,r=1){this.quat=zl(e,t,i,r),this.tempQuat=Qn()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,t,i,r){return w0(this.quat,e,t,i,r),this}clone(){return new zg(this.x,this.y,this.z,this.w)}copy(e){return w0(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return Lu(this.tempQuat,this.quat),cc(this.quat,this.tempQuat),this}invert(){return Lu(this.tempQuat,this.quat),E5(this.quat,this.tempQuat),this}multiply(e){return Lu(this.tempQuat,this.quat),M5(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,t){return kg(this.quat,e.vec3,t),this}};var uo;(function(n){n.None="",n.Standard="standard",n.XRStandard="xr-standard"})(uo||(uo={}));class Hg{constructor(e,t){this[be]={type:e,eventTrigger:t,pressed:!1,touched:!1,value:0,lastFrameValue:0,pendingValue:null}}get pressed(){return this[be].type==="manual"?this[be].pressed:this[be].value>0}get touched(){return this[be].type==="manual"?this[be].touched:this[be].touched||this.pressed}get value(){return this[be].value}}class T5{constructor(){this.pressed=!1,this.touched=!1,this.value=0}}class pf{constructor(e,t="",i=-1){this[be]={id:t,index:i,connected:!1,timestamp:performance.now(),mapping:e.mapping,buttonsMap:{},buttonsSequence:[],axesMap:{},axesSequence:[],hapticActuators:[]},e.buttons.forEach(r=>{var s;r===null?this[be].buttonsSequence.push(null):(this[be].buttonsSequence.push(r.id),this[be].buttonsMap[r.id]=new Hg(r.type,(s=r.eventTrigger)!==null&&s!==void 0?s:null))}),e.axes.forEach(r=>{r===null?this[be].axesSequence.push(null):(this[be].axesSequence.push(r.id+r.type),this[be].axesMap[r.id]||(this[be].axesMap[r.id]={x:0,y:0}))})}get id(){return this[be].id}get index(){return this[be].index}get connected(){return this[be].connected}get timestamp(){return this[be].timestamp}get mapping(){return this[be].mapping}get axes(){const e=[];return this[be].axesSequence.forEach(t=>{if(t===null)e.push(null);else{const i=t.substring(0,t.length-6),r=t.substring(t.length-6);e.push(r==="y-axis"?this[be].axesMap[i].y:this[be].axesMap[i].x)}}),e}get buttons(){return this[be].buttonsSequence.map(e=>e===null?new T5:this[be].buttonsMap[e])}get hapticActuators(){return this[be].hapticActuators}get vibrationActuator(){return null}}var Tn;(function(n){n.None="none",n.Left="left",n.Right="right"})(Tn||(Tn={}));var Hl;(function(n){n.Gaze="gaze",n.TrackedPointer="tracked-pointer",n.Screen="screen",n.TransientPointer="transient-pointer"})(Hl||(Hl={}));class A5 extends Array{}class uc{constructor(e,t,i,r,s,a,o){this[$i]={handedness:e,targetRayMode:t,targetRaySpace:r,gripSpace:a,profiles:i,gamepad:s,hand:o}}get handedness(){return this[$i].handedness}get targetRayMode(){return this[$i].targetRayMode}get targetRaySpace(){return this[$i].targetRaySpace}get gripSpace(){return this[$i].gripSpace}get profiles(){return this[$i].profiles}get gamepad(){return this[$i].gamepad}get hand(){return this[$i].hand}}class yl extends Event{constructor(e,t){if(super(e,t),!t.frame)throw new Error("XRInputSourceEventInit.frame is required");if(!t.inputSource)throw new Error("XRInputSourceEventInit.inputSource is required");this.frame=t.frame,this.inputSource=t.inputSource}}const A0={[Tn.Left]:{position:new Xr(-.25,1.5,-.4),quaternion:new eo},[Tn.Right]:{position:new Xr(.25,1.5,-.4),quaternion:new eo},[Tn.None]:{position:new Xr(.25,1.5,-.4),quaternion:new eo}};class Vg{constructor(e){this[At]={inputSource:e,position:A0[e.handedness].position.clone(),quaternion:A0[e.handedness].quaternion.clone(),connected:!0,lastFrameConnected:!1,inputSourceChanged:!0}}get position(){return this[At].position}get quaternion(){return this[At].quaternion}get inputSource(){return this[At].inputSource}get connected(){return this[At].connected}set connected(e){this[At].connected=e,this[At].inputSource.gamepad[be].connected=e}onFrameStart(e){const t=this[At].inputSource.targetRaySpace;Mo(t[Ft].offsetMatrix,this[At].quaternion.quat,this[At].position.vec3);const i=e.session;this[At].inputSource.gamepad.buttons.forEach(r=>{r instanceof Hg&&(r[be].lastFrameValue=r[be].value,r[be].pendingValue!=null&&(r[be].value=r[be].pendingValue,r[be].pendingValue=null),r[be].eventTrigger!=null&&(r[be].lastFrameValue===0&&r[be].value>0?(i.dispatchEvent(new yl(r[be].eventTrigger,{frame:e,inputSource:this[At].inputSource})),i.dispatchEvent(new yl(r[be].eventTrigger+"start",{frame:e,inputSource:this[At].inputSource}))):r[be].lastFrameValue>0&&r[be].value===0&&i.dispatchEvent(new yl(r[be].eventTrigger+"end",{frame:e,inputSource:this[At].inputSource}))))}),this[At].inputSourceChanged=this.connected!==this[At].lastFrameConnected,this[At].lastFrameConnected=this.connected}}class R5 extends Vg{constructor(e,t,i){if(!e.layout[t])throw new DOMException("Handedness not supported","InvalidStateError");const r=new Ct(i),s=e.layout[t].gripOffsetMatrix?new Ct(r,e.layout[t].gripOffsetMatrix):void 0,a=[e.profileId,...e.fallbackProfileIds],o=new uc(t,Hl.TrackedPointer,a,r,new pf(e.layout[t].gamepad),s);super(o),this[Iu]={profileId:e.profileId,gamepadConfig:e.layout[t].gamepad}}get gamepadConfig(){return this[Iu].gamepadConfig}get profileId(){return this[Iu].profileId}updateButtonValue(e,t){if(t>1||t<0){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}const i=this[At].inputSource.gamepad[be].buttonsMap[e];if(i){if(i[be].type==="binary"&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}i[be].pendingValue=t}else console.warn(`Current controller does not have button ${e}.`)}updateButtonTouch(e,t){const i=this[At].inputSource.gamepad[be].buttonsMap[e];i?i[be].touched=t:console.warn(`Current controller does not have button ${e}.`)}updateAxis(e,t,i){if(i>1||i<-1){console.warn(`Out-of-range value ${i} provided for ${e} axes.`);return}const r=this[At].inputSource.gamepad[be].axesMap[e];r?t==="x-axis"?r.x=i:t==="y-axis"&&(r.y=i):console.warn(`Current controller does not have ${e} axes.`)}updateAxes(e,t,i){if(t>1||t<-1||i>1||i<-1){console.warn(`Out-of-range value x:${t}, y:${i} provided for ${e} axes.`);return}const r=this[At].inputSource.gamepad[be].axesMap[e];r?(r.x=t,r.y=i):console.warn(`Current controller does not have ${e} axes.`)}}class P5{constructor(e,t,i,r,s){this[Ki]={nativeMesh:e,frame:void 0,meshSpace:t,vertices:i,indices:r,lastChangedTime:performance.now(),semanticLabel:s}}get meshSpace(){return this[Ki].meshSpace}get vertices(){return this[Ki].vertices}get indices(){return this[Ki].indices}get lastChangedTime(){return this[Ki].lastChangedTime}get semanticLabel(){return this[Ki].semanticLabel}}class C5 extends Set{}class L5{constructor(e,t,i,r){this.transform=e,this.vertices=t,this.indices=i,this.semanticLabel=r}}var qe;(function(n){n.Desk="desk",n.Couch="couch",n.Floor="floor",n.Ceiling="ceiling",n.Wall="wall",n.Door="door",n.Window="window",n.Table="table",n.Shelf="shelf",n.Bed="bed",n.Screen="screen",n.Lamp="lamp",n.Plant="plant",n.WallArt="wall art",n.GlobalMesh="global mesh",n.Other="other"})(qe||(qe={}));var en;(function(n){n.Horizontal="horizontal",n.Vertical="vertical"})(en||(en={}));const I5={[qe.Desk]:en.Horizontal,[qe.Couch]:en.Horizontal,[qe.Floor]:en.Horizontal,[qe.Ceiling]:en.Horizontal,[qe.Wall]:en.Vertical,[qe.Door]:en.Vertical,[qe.Window]:en.Vertical,[qe.Table]:en.Horizontal,[qe.Shelf]:en.Horizontal,[qe.Bed]:en.Horizontal,[qe.Screen]:en.Horizontal,[qe.Lamp]:en.Horizontal,[qe.Plant]:en.Horizontal,[qe.WallArt]:en.Vertical};class N5{constructor(e,t,i,r){this[Qi]={nativePlane:e,frame:void 0,planeSpace:t,polygon:i,lastChangedTime:performance.now(),semanticLabel:r,orientation:r?I5[r]:void 0}}get planeSpace(){return this[Qi].planeSpace}get polygon(){return this[Qi].polygon}get orientation(){return this[Qi].orientation}get lastChangedTime(){return this[Qi].lastChangedTime}get semanticLabel(){return this[Qi].semanticLabel}}class D5 extends Set{}class O5{constructor(e,t,i){this.transform=e,this.polygon=t,this.semanticLabel=i}}class Gg{constructor(e,t){this[On]={anchorSpace:e,session:t,deleted:!1},t[N].trackedAnchors.add(this)}get anchorSpace(){if(this[On].deleted)throw new DOMException("XRAnchor has already been deleted.","InvalidStateError");return this[On].anchorSpace}requestPersistentHandle(){return new Promise((e,t)=>{if(this[On].deleted)t(new DOMException("XRAnchor has already been deleted.","InvalidStateError"));else{const i=this[On].session[N].persistentAnchors;for(const[s,a]of i.entries())if(a===this){e(s);return}const r=crypto.randomUUID();Wg.createPersistentAnchor(this[On].session,this,r),e(r)}})}delete(){this[On].deleted||(this[On].anchorSpace=null,this[On].deleted=!0,this[On].session[N].trackedAnchors.delete(this))}}class R0 extends Set{}const Nu="@immersive-web-emulation-runtime/persistent-anchors";class Wg{static recoverPersistentAnchorsFromStorage(e){const t=JSON.parse(localStorage.getItem(Nu)||"{}");Object.entries(t).forEach(([i,r])=>{const s=e[N].device[$].globalSpace,a=new Ct(s,r),o=new Gg(a,e);e[N].persistentAnchors.set(i,o)})}static createPersistentAnchor(e,t,i){e[N].trackedAnchors.add(t),e[N].persistentAnchors.set(i,t);const r=JSON.parse(localStorage.getItem(Nu)||"{}");r[i]=Array.from(t[On].anchorSpace[Ft].offsetMatrix),localStorage.setItem(Nu,JSON.stringify(r))}}class Qr{constructor(e,t){const i=Zn(0,0,0),r=Qn();this[Mn]={matrix:Yt(),position:e?Zn(e.x,e.y,e.z):i,orientation:t?cc(Qn(),zl(t.x,t.y,t.z,t.w)):r,inverse:null},this.updateMatrix()}updateMatrix(){Mo(this[Mn].matrix,this[Mn].orientation,this[Mn].position)}get matrix(){return this[Mn].matrix}get position(){const e=this[Mn].position;return new DOMPointReadOnly(e[0],e[1],e[2],1)}get orientation(){const e=this[Mn].orientation;return new DOMPointReadOnly(e[0],e[1],e[2],e[3])}get inverse(){if(!this[Mn].inverse){const e=Yt();if(!Og(e,this[Mn].matrix))throw new Error("Matrix is not invertible.");let t=$t();co(t,e);let i=Qn();Bl(i,e),this[Mn].inverse=new Qr(new DOMPointReadOnly(t[0],t[1],t[2],1),new DOMPointReadOnly(i[0],i[1],i[2],i[3])),this[Mn].inverse[Mn].inverse=this}return this[Mn].inverse}}let P0=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}};class U5{constructor(e,t){const i={x:0,y:0,z:0,w:1},r={x:0,y:0,z:-1,w:0};if(e instanceof Qr){const o=e.matrix,l=Mh(Sh(),i.x,i.y,i.z,i.w),c=Mh(Sh(),r.x,r.y,r.z,r.w);E0(l,l,o),E0(c,c,o),i.x=l[0],i.y=l[1],i.z=l[2],i.w=l[3],r.x=c[0],r.y=c[1],r.z=c[2],r.w=c[3]}else if(e&&(i.x=e.x,i.y=e.y,i.z=e.z,i.w=e.w),t){if(t.x===0&&t.y===0&&t.z===0||t.w!==0)throw new DOMException("Invalid direction value to construct XRRay","TypeError");r.x=t.x,r.y=t.y,r.z=t.z,r.w=t.w}const s=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z)||1;r.x=r.x/s,r.y=r.y/s,r.z=r.z/s,this[En]={origin:new P0(i.x,i.y,i.z,i.w),direction:new P0(r.x,r.y,r.z,r.w),matrix:null}}get origin(){return this[En].origin}get direction(){return this[En].direction}get matrix(){if(this[En].matrix)return this[En].matrix;const e=Ya($t(),0,0,-1),t=Ya($t(),this[En].origin.x,this[En].origin.y,this[En].origin.z),i=Ya($t(),this[En].direction.x,this[En].direction.y,this[En].direction.z),r=_l($t(),i,e),s=Fg(i,e),a=Yt();s>-1&&s<1?S0(a,Math.acos(s),r):s===-1?S0(a,Math.acos(s),Ya($t(),1,0,0)):f5(a);const o=fa(Yt(),t),l=lc(Yt(),o,a);return this[En].matrix=new Float32Array(l),this[En].matrix}}class F5{constructor(e,t){var i;this[Ri]={session:e,space:t.space,offsetRay:(i=t.offsetRay)!==null&&i!==void 0?i:new U5}}cancel(){this[Ri].session[N].hitTestSources.delete(this)}}class k5{constructor(e,t){this[Ri]={frame:e,offsetSpace:t}}getPose(e){return this[Ri].frame.getPose(this[Ri].offsetSpace,e)}createAnchor(){return this[Ri].frame.createAnchor(new Qr,this[Ri].offsetSpace)}}class Xg extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRInputSourcesChangeEventInit.session is required");if(!t.added)throw new Error("XRInputSourcesChangeEventInit.added is required");if(!t.removed)throw new Error("XRInputSourcesChangeEventInit.removed is required");this.session=t.session,this.added=t.added,this.removed=t.removed}}var jg,jt;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded"})(jt||(jt={}));class Zr extends Ct{constructor(e,t,i){super(t,i),this[jg]={type:null,onreset:()=>{}},this[Ji].type=e}get onreset(){var e;return(e=this[Ji].onreset)!==null&&e!==void 0?e:(()=>{})}set onreset(e){this[Ji].onreset&&this.removeEventListener("reset",this[Ji].onreset),this[Ji].onreset=e,e&&this.addEventListener("reset",e)}getOffsetReferenceSpace(e){return new Zr(this[Ji].type,this,e)}}jg=Ji;class Eh{constructor(e={},t){this[Ha]={depthNear:e.depthNear||t?.depthNear||.1,depthFar:e.depthFar||t?.depthFar||1e3,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||t?.inlineVerticalFieldOfView||null,baseLayer:e.baseLayer||t?.baseLayer||null}}get depthNear(){return this[Ha].depthNear}get depthFar(){return this[Ha].depthFar}get inlineVerticalFieldOfView(){return this[Ha].inlineVerticalFieldOfView}get baseLayer(){return this[Ha].baseLayer}}class Vl extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRSessionEventInit.session is required");this.session=t.session}}var yt;(function(n){n.None="none",n.Left="left",n.Right="right"})(yt||(yt={}));class qg{constructor(e,t,i,r){this[Ir]={eye:e,projectionMatrix:t,transform:i,recommendedViewportScale:null,requestedViewportScale:1,session:r}}get eye(){return this[Ir].eye}get projectionMatrix(){return this[Ir].projectionMatrix}get transform(){return this[Ir].transform}get recommendedViewportScale(){return this[Ir].recommendedViewportScale}requestViewportScale(e){if(e===null||e<=0||e>1){console.warn("Invalid scale value. Scale must be > 0 and <= 1.");return}this[Ir].requestedViewportScale=e}}class hc{constructor(e,t=!1,i=void 0,r=void 0){this[za]={transform:e,emulatedPosition:t,linearVelocity:i,angularVelocity:r}}get transform(){return this[za].transform}get emulatedPosition(){return this[za].emulatedPosition}get linearVelocity(){return this[za].linearVelocity}get angularVelocity(){return this[za].angularVelocity}}class $g extends hc{constructor(e,t,i=!1,r=void 0,s=void 0){super(e,i,r,s),this[b0]={radius:t}}get radius(){return this[b0].radius}}class Yg extends hc{constructor(e,t,i=!1,r=void 0,s=void 0){super(e,i,r,s),this[T0]={views:Object.freeze(t)}}get views(){return this[T0].views}}const C0=Yt(),L0=Yt(),I0=Yt(),N0=(n,e,t)=>{da.calculateGlobalOffsetMatrix(e,C0),da.calculateGlobalOffsetMatrix(t,L0),Og(I0,L0),lc(n,I0,C0)};class Zg{constructor(e,t,i,r,s){this[ot]={session:e,id:t,active:i,animationFrame:r,predictedDisplayTime:s,tempMat4:Yt(),detectedPlanes:new D5,detectedMeshes:new C5,trackedAnchors:e[N].frameTrackedAnchors,hitTestResultsMap:new Map}}get session(){return this[ot].session}get predictedDisplayTime(){return this[ot].predictedDisplayTime}getPose(e,t){if(!this[ot].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");N0(this[ot].tempMat4,e,t);const i=$t();co(i,this[ot].tempMat4);const r=Qn();return Bl(r,this[ot].tempMat4),new hc(new Qr({x:i[0],y:i[1],z:i[2],w:1},{x:r[0],y:r[1],z:r[2],w:r[3]}),e[Ft].emulated)}getViewerPose(e){if(!this[ot].animationFrame)throw new DOMException("getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.","InvalidStateError");const t=this[ot].session,i=t[N].device,r=this.getPose(i.viewerSpace,e),s=t[N].mode==="inline"?[yt.None]:[yt.Left,yt.Right],a=[];return s.forEach(o=>{const l=i.viewSpaces[o],c=this.getPose(l,e),u=t[N].getProjectionMatrix(o),h=new qg(o,new Float32Array(u),c.transform,t);a.push(h)}),new Yg(r.transform,a,!1)}getJointPose(e,t){const i=this.getPose(e,t),r=e[Wr].radius;return new $g(i.transform,r,!1)}fillJointRadii(e,t){if(e=Array.from(e),!this[ot].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length>t.length)throw new DOMException("The length of jointSpaces is larger than the number of elements in radii","TypeError");let i=!0;for(let r=0;r<e.length;r++)e[r][Wr].radius?t[r]=e[r][Wr].radius:(t[r]=NaN,i=!1);return i}fillPoses(e,t,i){if(e=Array.from(e),!this[ot].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length*16>i.length)throw new DOMException("The length of spaces multiplied by 16 is larger than the number of elements in transforms","TypeError");return e.forEach((r,s)=>{N0(this[ot].tempMat4,r,t);for(let a=0;a<16;a++)i[s*16+a]=this[ot].tempMat4[a]}),!0}get detectedPlanes(){if(!this[ot].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");return this[ot].detectedPlanes}get detectedMeshes(){if(!this[ot].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");return this[ot].detectedMeshes}get trackedAnchors(){if(!this[ot].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");return this[ot].trackedAnchors}createAnchor(e,t){return new Promise((i,r)=>{if(!this[ot].active)r(new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError"));else{const s=this[ot].session[N].device[$].globalSpace,a=new Ct(t,e.matrix),o=da.calculateGlobalOffsetMatrix(a),l=new Ct(s,o),c=new Gg(l,this[ot].session);this[ot].session[N].trackedAnchors.add(c),this[ot].session[N].newAnchors.set(c,{resolve:i,reject:r})}})}getHitTestResults(e){if(this[ot].active){if(this[ot].hitTestResultsMap.has(e))return[...this[ot].hitTestResultsMap.get(e)];throw new DOMException("Requested hit test results are not available for current frame.","InvalidStateError")}else throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError")}}var ei;(function(n){n.Opaque="opaque",n.AlphaBlend="alpha-blend",n.Additive="additive"})(ei||(ei={}));var pa;(function(n){n.ScreenSpace="screen-space",n.WorldSpace="world-space"})(pa||(pa={}));class mf extends EventTarget{constructor(e,t,i){super(),this[N]={device:e,mode:t,renderState:new Eh,pendingRenderState:null,enabledFeatures:i,isSystemKeyboardSupported:!1,ended:!1,projectionMatrices:{[yt.Left]:Yt(),[yt.Right]:Yt(),[yt.None]:Yt()},getProjectionMatrix:r=>this[N].projectionMatrices[r],referenceSpaceIsSupported:r=>{if(!this[N].enabledFeatures.includes(r))return!1;switch(r){case jt.Viewer:return!0;case jt.Local:case jt.LocalFloor:case jt.BoundedFloor:case jt.Unbounded:return this[N].mode!="inline"}},frameHandle:0,frameCallbacks:[],currentFrameCallbacks:null,onDeviceFrame:()=>{if(this[N].ended)return;this[N].deviceFrameHandle=globalThis.requestAnimationFrame(this[N].onDeviceFrame),this[N].pendingRenderState!=null&&(this[N].renderState=this[N].pendingRenderState,this[N].pendingRenderState=null,this[N].device[$].onBaseLayerSet(this[N].renderState.baseLayer));const r=this[N].renderState.baseLayer;if(r===null)return;const s=r.context,a=s.canvas;if(this[N].mode!="inline"){const d=s.getParameter(s.COLOR_CLEAR_VALUE),p=s.getParameter(s.DEPTH_CLEAR_VALUE),b=s.getParameter(s.STENCIL_CLEAR_VALUE);s.clearColor(0,0,0,0),s.clearDepth(1),s.clearStencil(0),s.clear(s.DEPTH_BUFFER_BIT|s.COLOR_BUFFER_BIT|s.STENCIL_BUFFER_BIT),s.clearColor(d[0],d[1],d[2],d[3]),s.clearDepth(p),s.clearStencil(b)}const{depthNear:o,depthFar:l}=this[N].renderState,{width:c,height:u}=a;if(this[N].mode!=="inline"){const d=c*(this[N].device.stereoEnabled?.5:1)/u;M0(this[N].projectionMatrices[yt.Left],this[N].device.fovy,d,o,l),Dg(this[N].projectionMatrices[yt.Right],this[N].projectionMatrices[yt.Left])}else{const d=c/u;M0(this[N].projectionMatrices[yt.None],this[N].renderState.inlineVerticalFieldOfView,d,o,l)}const h=new Zg(this,this[N].frameHandle,!0,!0,performance.now()),f=performance.now(),m=this[N].device[$].devui;if(m&&m.render(f),this[N].mode==="immersive-ar"){const d=this[N].device[$].sem;d&&d.render(f)}this[N].enabledFeatures.includes("anchors")&&this[N].updateTrackedAnchors(),this[N].enabledFeatures.includes("plane-detection")&&this[N].updateTrackedPlanes(h),this[N].enabledFeatures.includes("mesh-detection")&&this[N].updateTrackedMeshes(h),this[N].enabledFeatures.includes("hit-test")&&this[N].computeHitTestResults(h),this[N].device[$].onFrameStart(h),this[N].updateActiveInputSources();const g=this[N].currentFrameCallbacks=this[N].frameCallbacks;this[N].frameCallbacks=[];const x=performance.now();for(let d=0;d<g.length;d++)try{g[d].cancelled||g[d].callback(x,h)}catch(p){console.error(p)}this[N].currentFrameCallbacks=null,h[ot].active=!1},nominalFrameRate:e.internalNominalFrameRate,referenceSpaces:[],inputSourceArray:[],activeInputSources:[],updateActiveInputSources:()=>{const r=this[N].enabledFeatures.includes("hand-tracking"),s=this[N].activeInputSources,a=this[N].device.inputSources.filter(c=>!c.hand||r),o=a.filter(c=>!s.includes(c)),l=s.filter(c=>!a.includes(c));this[N].activeInputSources=a,(o.length>0||l.length>0)&&this.dispatchEvent(new Xg("inputsourceschange",{session:this,added:o,removed:l}))},trackedAnchors:new R0,persistentAnchors:new Map,newAnchors:new Map,frameTrackedAnchors:new R0,updateTrackedAnchors:()=>{this[N].enabledFeatures.includes("anchors")&&(this[N].frameTrackedAnchors.clear(),Array.from(this[N].trackedAnchors).forEach(r=>{if(r[On].deleted){if(this[N].trackedAnchors.delete(r),this[N].newAnchors.has(r)){const{reject:s}=this[N].newAnchors.get(r);s(new DOMException("Anchor is no longer tracked","InvalidStateError"))}}else if(this[N].frameTrackedAnchors.add(r),this[N].newAnchors.has(r)){const{resolve:s}=this[N].newAnchors.get(r);s(r),this[N].newAnchors.delete(r)}}))},trackedPlanes:new Map,updateTrackedPlanes:r=>{const s=this[N].device[$].sem;if(!s)return;Array.from(this[N].trackedPlanes.keys()).forEach(o=>{s.trackedPlanes.has(o)||this[N].trackedPlanes.delete(o)}),s.trackedPlanes.forEach(o=>{let l=this[N].trackedPlanes.get(o);if(!l){const c=new Ct(this[N].device[$].globalSpace,o.transform.matrix);l=new N5(o,c,o.polygon,o.semanticLabel),this[N].trackedPlanes.set(o,l)}l[Qi].lastChangedTime=r.predictedDisplayTime,l[Qi].frame=r,r[ot].detectedPlanes.add(l)})},trackedMeshes:new Map,updateTrackedMeshes:r=>{const s=this[N].device[$].sem;if(!s)return;Array.from(this[N].trackedMeshes.keys()).forEach(o=>{s.trackedMeshes.has(o)||this[N].trackedMeshes.delete(o)}),s.trackedMeshes.forEach(o=>{let l=this[N].trackedMeshes.get(o);if(!l){const c=new Ct(this[N].device[$].globalSpace,o.transform.matrix);l=new P5(o,c,o.vertices,o.indices,o.semanticLabel),this[N].trackedMeshes.set(o,l)}l[Ki].lastChangedTime=r.predictedDisplayTime,l[Ki].frame=r,r[ot].detectedMeshes.add(l)})},hitTestSources:new Set,computeHitTestResults:r=>{const s=this[N].device[$].sem;if(!s)return;const a=this[N].device[$].globalSpace;this[N].hitTestSources.forEach(o=>{const l=o[Ri].space,c=da.calculateGlobalOffsetMatrix(l),u=o[Ri].offsetRay.matrix,h=Yt();lc(h,c,u);const f=[];s.computeHitTestResults(h).forEach(m=>{const g=new Ct(a,m),x=new k5(r,g);f.push(x)}),r[ot].hitTestResultsMap.set(o,f)})},onend:null,oninputsourceschange:null,onselect:null,onselectstart:null,onselectend:null,onsqueeze:null,onsqueezestart:null,onsqueezeend:null,onvisibilitychange:null,onframeratechange:null},Wg.recoverPersistentAnchorsFromStorage(this),this[N].onDeviceFrame()}get visibilityState(){return this[N].device.visibilityState}get frameRate(){return this[N].nominalFrameRate}get supportedFrameRates(){return new Float32Array(this[N].device.supportedFrameRates)}get renderState(){return this[N].renderState}get inputSources(){return this[N].inputSourceArray.length=0,!this[N].ended&&this[N].mode!=="inline"&&this[N].inputSourceArray.push(...this[N].activeInputSources),this[N].inputSourceArray}get enabledFeatures(){return this[N].enabledFeatures}get isSystemKeyboardSupported(){return this[N].isSystemKeyboardSupported}get environmentBlendMode(){var e;return(e=this[N].device[$].environmentBlendModes[this[N].mode])!==null&&e!==void 0?e:ei.Opaque}get interactionMode(){return this[N].device[$].interactionMode}updateRenderState(e={}){var t,i,r,s;if(this[N].ended)throw new DOMException("XRSession has already ended.","InvalidStateError");if(e.baseLayer&&e.baseLayer[Zi].session!==this)throw new DOMException("Base layer was created by a different XRSession","InvalidStateError");if(e.inlineVerticalFieldOfView!=null&&this[N].mode!=="inline")throw new DOMException("InlineVerticalFieldOfView must not be set for an immersive session","InvalidStateError");const a={baseLayer:e.baseLayer||((t=this[N].pendingRenderState)===null||t===void 0?void 0:t.baseLayer)||void 0,depthFar:e.depthFar||((i=this[N].pendingRenderState)===null||i===void 0?void 0:i.depthFar)||void 0,depthNear:e.depthNear||((r=this[N].pendingRenderState)===null||r===void 0?void 0:r.depthNear)||void 0,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||((s=this[N].pendingRenderState)===null||s===void 0?void 0:s.inlineVerticalFieldOfView)||void 0};this[N].pendingRenderState=new Eh(a,this[N].renderState)}async updateTargetFrameRate(e){return new Promise((t,i)=>{this[N].ended?i(new DOMException("XRSession has already ended.","InvalidStateError")):this[N].device.supportedFrameRates.includes(e)?(this[N].nominalFrameRate===e?console.log("Requested frame rate is the same as the current nominal frame rate, no update made"):(this[N].nominalFrameRate=e,this.dispatchEvent(new Vl("frameratechange",{session:this})),console.log(`Nominal frame rate updated to ${e}`)),t()):i(new DOMException("Requested frame rate not supported.","InvalidStateError"))})}async requestReferenceSpace(e){return new Promise((t,i)=>{if(this[N].ended||!this[N].referenceSpaceIsSupported(e)){i(new DOMException("The requested reference space type is not supported.","NotSupportedError"));return}let r;switch(e){case jt.Viewer:r=this[N].device.viewerSpace;break;case jt.Local:r=new Zr(e,this[N].device[$].globalSpace,this[N].device.viewerSpace[Ft].offsetMatrix);break;case jt.LocalFloor:case jt.BoundedFloor:case jt.Unbounded:r=new Zr(e,this[N].device[$].globalSpace);break}this[N].referenceSpaces.push(r),t(r)})}requestAnimationFrame(e){if(this[N].ended)return 0;const t=++this[N].frameHandle;return this[N].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[N].frameCallbacks,i=t.findIndex(r=>r&&r.handle===e);i>-1&&(t[i].cancelled=!0,t.splice(i,1)),t=this[N].currentFrameCallbacks,t&&(i=t.findIndex(r=>r&&r.handle===e),i>-1&&(t[i].cancelled=!0))}async end(){return new Promise((e,t)=>{this[N].ended||this[N].deviceFrameHandle===null?t(new DOMException("XRSession has already ended.","InvalidStateError")):(globalThis.cancelAnimationFrame(this[N].deviceFrameHandle),this[N].device[$].onSessionEnd(),this.dispatchEvent(new Vl("end",{session:this})),e())})}get persistentAnchors(){return Array.from(this[N].persistentAnchors.keys())}restorePersistentAnchor(e){return new Promise((t,i)=>{if(!this[N].persistentAnchors.has(e))i(new DOMException(`Persistent anchor with uuid ${e} not found.`,"InvalidStateError"));else if(this[N].ended)i(new DOMException("XRSession has already ended.","InvalidStateError"));else{const r=this[N].persistentAnchors.get(e);this[N].newAnchors.has(r)?i(new DOMException(`Multiple concurrent attempts detected to restore the anchor with UUID: ${e}.`,"InvalidStateError")):(this[N].trackedAnchors.add(r),this[N].newAnchors.set(r,{resolve:t,reject:i}))}})}deletePersistentAnchor(e){return new Promise((t,i)=>{if(!this[N].persistentAnchors.has(e))i(new DOMException(`Persistent anchor with uuid ${e} not found.`,"InvalidStateError"));else{const r=this[N].persistentAnchors.get(e);this[N].persistentAnchors.delete(e),r.delete(),t(void 0)}})}requestHitTestSource(e){return new Promise((t,i)=>{if(!this[N].enabledFeatures.includes("hit-test"))i(new DOMException('WebXR feature "hit-test" is not supported by current session',"NotSupportedError"));else if(this[N].ended)i(new DOMException("XRSession has already ended.","InvalidStateError"));else if(!this[N].device[$].sem)i(new DOMException("Synthethic Environment Module required for emulating hit-test","OperationError"));else{const r=new F5(this,e);this[N].hitTestSources.add(r),t(r)}})}get onend(){var e;return(e=this[N].onend)!==null&&e!==void 0?e:(()=>{})}set onend(e){this[N].onend&&this.removeEventListener("end",this[N].onend),this[N].onend=e,e&&this.addEventListener("end",e)}get oninputsourceschange(){var e;return(e=this[N].oninputsourceschange)!==null&&e!==void 0?e:(()=>{})}set oninputsourceschange(e){this[N].oninputsourceschange&&this.removeEventListener("inputsourceschange",this[N].oninputsourceschange),this[N].oninputsourceschange=e,e&&this.addEventListener("inputsourceschange",e)}get onselect(){var e;return(e=this[N].onselect)!==null&&e!==void 0?e:(()=>{})}set onselect(e){this[N].onselect&&this.removeEventListener("select",this[N].onselect),this[N].onselect=e,e&&this.addEventListener("select",e)}get onselectstart(){var e;return(e=this[N].onselectstart)!==null&&e!==void 0?e:(()=>{})}set onselectstart(e){this[N].onselectstart&&this.removeEventListener("selectstart",this[N].onselectstart),this[N].onselectstart=e,e&&this.addEventListener("selectstart",e)}get onselectend(){var e;return(e=this[N].onselectend)!==null&&e!==void 0?e:(()=>{})}set onselectend(e){this[N].onselectend&&this.removeEventListener("selectend",this[N].onselectend),this[N].onselectend=e,e&&this.addEventListener("selectend",e)}get onsqueeze(){var e;return(e=this[N].onsqueeze)!==null&&e!==void 0?e:(()=>{})}set onsqueeze(e){this[N].onsqueeze&&this.removeEventListener("squeeze",this[N].onsqueeze),this[N].onsqueeze=e,e&&this.addEventListener("squeeze",e)}get onsqueezestart(){var e;return(e=this[N].onsqueezestart)!==null&&e!==void 0?e:(()=>{})}set onsqueezestart(e){this[N].onsqueezestart&&this.removeEventListener("squeezestart",this[N].onsqueezestart),this[N].onsqueezestart=e,e&&this.addEventListener("squeezestart",e)}get onsqueezeend(){var e;return(e=this[N].onsqueezeend)!==null&&e!==void 0?e:(()=>{})}set onsqueezeend(e){this[N].onsqueezeend&&this.removeEventListener("squeezeend",this[N].onsqueezeend),this[N].onsqueezeend=e,e&&this.addEventListener("squeezeend",e)}get onvisibilitychange(){var e;return(e=this[N].onvisibilitychange)!==null&&e!==void 0?e:(()=>{})}set onvisibilitychange(e){this[N].onvisibilitychange&&this.removeEventListener("visibilitychange",this[N].onvisibilitychange),this[N].onvisibilitychange=e,e&&this.addEventListener("visibilitychange",e)}get onframeratechange(){var e;return(e=this[N].onframeratechange)!==null&&e!==void 0?e:(()=>{})}set onframeratechange(e){this[N].onframeratechange&&this.removeEventListener("frameratechange",this[N].onframeratechange),this[N].onframeratechange=e,e&&this.addEventListener("frameratechange",e)}}var ho;(function(n){n.Wrist="wrist",n.ThumbMetacarpal="thumb-metacarpal",n.ThumbPhalanxProximal="thumb-phalanx-proximal",n.ThumbPhalanxDistal="thumb-phalanx-distal",n.ThumbTip="thumb-tip",n.IndexFingerMetacarpal="index-finger-metacarpal",n.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",n.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",n.IndexFingerPhalanxDistal="index-finger-phalanx-distal",n.IndexFingerTip="index-finger-tip",n.MiddleFingerMetacarpal="middle-finger-metacarpal",n.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",n.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",n.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",n.MiddleFingerTip="middle-finger-tip",n.RingFingerMetacarpal="ring-finger-metacarpal",n.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",n.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",n.RingFingerPhalanxDistal="ring-finger-phalanx-distal",n.RingFingerTip="ring-finger-tip",n.PinkyFingerMetacarpal="pinky-finger-metacarpal",n.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",n.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",n.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",n.PinkyFingerTip="pinky-finger-tip"})(ho||(ho={}));class gf extends Map{}class xf extends Ct{constructor(e,t,i){super(t,i),this[Wr]={jointName:e,radius:0}}get jointName(){return this[Wr].jointName}}const B5={jointTransforms:{wrist:{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06867414712905884,-.009423808194696903,.10627774149179459,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.5012241005897522,-.8650535345077515,-.0213695727288723,0,.7415963411331177,-.4421543478965759,.5045139193534851,0,-.44587990641593933,.23702676594257355,.8631392121315002,0,-.032122574746608734,-.01196830440312624,.07194234430789948,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[-.3175753057003021,-.9460570216178894,-.06419729441404343,0,.8958902955055237,-.32153913378715515,.30658137798309326,0,-.3106854259967804,.03984907269477844,.9496771097183228,0,-.017625702545046806,-.01967475935816765,.04387917369604111,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,-.007126678712666035,-.021021386608481407,.011786630377173424,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,.0003423091256991029,-.024528030306100845,-.011410919018089771,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.038037415593862534,-.0020236473064869642,.07626739144325256,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.7986818552017212,-.35985732078552246,.48229536414146423,0,.538311243057251,.7854709625244141,-.30537736415863037,0,-.2689369022846222,.5035246014595032,.8210577368736267,0,-.006869405973702669,.033938243985176086,.04206443578004837,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.8285930156707764,-.32672837376594543,.4546217918395996,0,.5577570199966431,.4116027057170868,-.7207564115524292,0,.04836784675717354,.8507823944091797,.5232869386672974,0,.0033306588884443045,.014840902760624886,.010923954658210278,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,.0021551470272243023,-.0058362227864563465,-.0017938464879989624,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,-.00131594471167773,-.025222131982445717,-.012442642822861671,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.05395089089870453,.003063359996303916,.07402937114238739,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9187911748886108,-.1530158370733261,.36387869715690613,0,.038666240870952606,.9522662162780762,.302808940410614,0,-.3928440511226654,-.26414817571640015,.8808513283729553,0,-.02717282809317112,.04162866622209549,.03678669035434723,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9228746294975281,-.12856416404247284,.36300456523895264,0,.14524033665657043,.9892153143882751,-.01890045404434204,0,-.3566599190235138,.07016586512327194,.9315956234931946,0,-.01030921470373869,.05296773463487625,-.0010256498353555799,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,-.0004833847051486373,.05103470757603645,-.026690717786550522,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,.008158999495208263,.05004044249653816,-.050120558589696884,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06732909381389618,.007902119308710098,.07209732383489609,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9391821026802063,-.027994679287075996,.34227466583251953,0,-.18282271921634674,.8029410243034363,.5673282742500305,0,-.2907087206840515,-.5954000353813171,.7489906549453735,0,-.047129884362220764,.03806127607822418,.032147664576768875,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9249380826950073,.03699534013867378,.3783116042613983,0,-.12898847460746765,.9667453765869141,.2208271026611328,0,-.3575615882873535,-.25304901599884033,.8989526629447937,0,-.03579339757561684,.06127955764532089,.002939916681498289,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.026291755959391594,.06800390034914017,-.02094830758869648,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.016345610842108727,.07300511747598648,-.04263874143362045,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.8769711852073669,.31462907791137695,.36322021484375,0,-.4506046175956726,.801031768321991,.39408499002456665,0,-.16696058213710785,-.5092697143554688,.8442559838294983,0,-.07460174709558487,.0062340241856873035,.06756893545389175,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9498357176780701,.1553308218717575,.2714462876319885,0,-.3019258379936218,.6817675232887268,.6663586497306824,0,-.08155745267868042,-.7148879170417786,.694466233253479,0,-.06697750836610794,.029482364654541016,.02902858518064022,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9214097261428833,.27928245067596436,.2701927423477173,0,-.3670244514942169,.8538867831230164,.36901235580444336,0,-.12765564024448395,-.43917882442474365,.8892839550971985,0,-.06447203457355499,.05144399777054787,.0076942890882492065,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.06187915802001953,.060364335775375366,-.010368337854743004,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.056796226650476456,.07042007893323898,-.02921444922685623,1],radius:.005425984505563974}},gripOffsetMatrix:[.08027800917625427,-.8086723685264587,-.5827556252479553,0,-.4154181480407715,-.5585916638374329,.7179154753684998,0,-.9060805439949036,.1844543218612671,-.3807799518108368,0,-.038054611533880234,-.002910431008785963,.03720742464065552,1]},z5={jointTransforms:{wrist:{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05789132043719292,.01670890860259533,.11183350533246994,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[.02145560085773468,-.9978390336036682,.0621047280728817,0,.41311800479888916,.06541631370782852,.9083252549171448,0,-.9104245901107788,.006167683284729719,.4136286973953247,0,-.016488194465637207,.012708572670817375,.08862338215112686,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.21270370483398438,-.966137707233429,.14606566727161407,0,.49890995025634766,.2359165996313095,.8339261412620544,0,-.8401462435722351,-.10450579971075058,.5321959853172302,0,.013112368993461132,.012508046813309193,.07517509907484055,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.04150351136922836,.016039609909057617,.05719054117798805,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.06548332422971725,.01683700829744339,.0516640841960907,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.02592567168176174,.019982583820819855,.08479326963424683,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9063700437545776,-.21756279468536377,.3621589243412018,0,.0970839336514473,.9415287375450134,.3226419687271118,0,-.41117796301841736,-.2572731077671051,.8744958639144897,0,-.0015709538711234927,.043078210204839706,.034657616168260574,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9159826040267944,-.1651475727558136,.36565208435058594,0,.09755707532167435,.9756820797920227,.1962820291519165,0,-.3891757130622864,-.14411886036396027,.9098196625709534,0,.014023927971720695,.052835866808891296,.0014903299743309617,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.023482320830225945,.05633850023150444,-.020621655508875847,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.03096788562834263,.06281610578298569,-.040703095495700836,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.04184452444314957,.022474845871329308,.08177298307418823,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9720265865325928,-.08313076198101044,.21966552734375,0,.20477405190467834,.7580050826072693,-.6192700862884521,0,-.11502730846405029,.6469289064407349,.7538246512413025,0,-.022107340395450592,.05035499855875969,.02970452979207039,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9779140949249268,-.07129573822021484,.19646917283535004,0,.1287083923816681,-.5352076292037964,-.8348574042320251,0,.1646735966205597,.8417060971260071,-.5142109394073486,0,-.017169542610645294,.022584279999136925,-.00265491777099669,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02170622907578945,-.0006043742760084569,.011511396616697311,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02438267692923546,-.0026927536819130182,.03627248480916023,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05944233387708664,.0264605600386858,.07478221505880356,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9842101335525513,.024470895528793335,.1753024309873581,0,.12200043350458145,.6237703561782837,-.7720272541046143,0,-.12824076414108276,.7812241315841675,.610936164855957,0,-.04249368980526924,.0467497780919075,.027722163125872612,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9941774606704712,.05949164181947708,.08983955532312393,0,.10504482686519623,-.7208291888237,-.6851072907447815,0,.024001073092222214,.6905553936958313,-.7228817939758301,0,-.0374927744269371,.016285063698887825,.0038980208337306976,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.038130562752485275,-.0020653479732573032,.02310742810368538,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.0390593595802784,.004176302347332239,.0466572530567646,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9147363901138306,.3458845317363739,.20885537564754486,0,-.3923271894454956,.8839452862739563,.2544005811214447,0,-.09662359952926636,-.3146490156650543,.9442773461341858,0,-.06715242564678192,.024195827543735504,.07137546688318253,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9613109827041626,.22439135611057281,.15977802872657776,0,.01002211682498455,.5511574745178223,-.8343409299850464,0,-.27528178691864014,.8036624789237976,.5275853276252747,0,-.06273911893367767,.038559623062610626,.028268879279494286,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9820972084999084,.18811029195785522,-.00995189044624567,0,.14063723385334015,-.7673450708389282,-.6256227493286133,0,-.12532226741313934,.6130226850509644,-.7800630927085876,0,-.05428232625126839,.013870777562260628,.012061242014169693,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05173685774207115,.0014194445684552193,.02790539152920246,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05098633095622063,.008463085629045963,.048688892275094986,1],radius:.005425984505563974}},gripOffsetMatrix:[.005510995630174875,-.9149997234344482,-.40341615676879883,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.9340395331382751,.13936474919319153,-.32885703444480896,0,-.031803809106349945,.007837686687707901,.04313928261399269,1]},H5={jointTransforms:{wrist:{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.04913589730858803,.0021463718730956316,.11701996624469757,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.07536252588033676,-.9959676265716553,-.04867160692811012,0,.5877083539962769,-.08379616588354111,.8047218918800354,0,-.8055551648139954,.032041035592556,.5916536450386047,0,-.010643752291798592,.0006936835707165301,.08736639469861984,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.1374533325433731,-.9904957413673401,.004982374142855406,0,.5534393787384033,.08097179979085922,.8289443850517273,0,-.8214688897132874,-.11118389666080475,.559309184551239,0,.015547193586826324,-.0003480653394944966,.0681300163269043,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.04330715537071228,.003409178927540779,.0492292083799839,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.062003348022699356,.004069602582603693,.03322213143110275,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.02009812369942665,.008770795539021492,.08660387247800827,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9001791477203369,-.2598813474178314,.3494834005832672,0,.06073702871799469,.8695210218429565,.490146666765213,0,-.4312632381916046,-.41999316215515137,.7985095381736755,0,-.00017739279428496957,.03890012577176094,.039073407649993896,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9082008600234985,-.20898112654685974,.36262574791908264,0,.11045389622449875,.9553793668746948,.27395179867744446,0,-.40369608998298645,-.20874978601932526,.8907597661018372,0,.01617925800383091,.05482936650514603,.008788082748651505,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.02599053829908371,.059902746230363846,-.012860597111284733,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.03362493962049484,.06421422213315964,-.033461250364780426,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.03627845644950867,.011579737067222595,.08550142496824265,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9876697659492493,-.06786545366048813,.1410750150680542,0,-.015095947310328484,.855663537979126,.5173118710517883,0,-.15582047402858734,-.5130629539489746,.8440889716148376,0,-.021259509027004242,.04587256908416748,.03659208118915558,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.988391637802124,-.04354291781783104,.14555205404758453,0,.008894841186702251,.9729899168014526,.23067504167556763,0,-.15166506171226501,-.22670257091522217,.9620829224586487,0,-.014570588245987892,.06789684295654297,.0003578895702958107,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.010392282158136368,.07414241135120392,-.026147106662392616,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.0069718430750072,.08024183660745621,-.05014154314994812,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.05402477830648422,.015797706320881844,.08152295649051666,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9940828680992126,.05735103040933609,.09224652498960495,0,-.10022822767496109,.8116500377655029,.5754809379577637,0,-.041867565363645554,-.5813214182853699,.8125960826873779,0,-.041623555123806,.04171867296099663,.03582974523305893,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9843675494194031,.12044742703437805,.12850022315979004,0,-.15629759430885315,.9337108135223389,.3221098482608795,0,-.08118485659360886,-.3371586799621582,.937940776348114,0,-.039990875869989395,.06438793987035751,.004141641780734062,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03783353418111801,.07334739714860916,-.020782606676220894,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03445569798350334,.0802423357963562,-.04392268508672714,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9181402921676636,.35625091195106506,.17350243031978607,0,-.39615097641944885,.8352503180503845,.38134080171585083,0,-.009065053425729275,-.41885748505592346,.9080066680908203,0,-.06191859766840935,.013620133511722088,.07850203663110733,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9714386463165283,.236698180437088,-.016745081171393394,0,-.18462024629116058,.7982627749443054,.5733163952827454,0,.14906984567642212,-.5538501739501953,.8191629648208618,0,-.061502378433942795,.032741155475378036,.03705105185508728,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9337416291236877,.35620439052581787,-.03527557849884033,0,-.33203884959220886,.8987522721290588,.28634607791900635,0,.13370157778263092,-.2556603252887726,.9574766755104065,0,-.06608185172080994,.049755651503801346,.011886020191013813,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.0687975287437439,.054948460310697556,-.007561664097011089,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.06947512179613113,.0613851435482502,-.028543535619974136,1],radius:.005425984505563974}},gripOffsetMatrix:[-.0005348679260350764,-.8648636937141418,-.5020061135292053,0,-.2741127908229828,-.48265108466148376,.8318111896514893,0,-.9616971015930176,.13805119693279266,-.2368120402097702,0,-.02878567762672901,.0017147823236882687,.04536811262369156,1]},D0={profileId:"oculus-hand",fallbackProfileIds:["generic-hand","generic-hand-select","generic-trigger"],poses:{default:H5,pinch:B5,point:z5}},V5={mapping:uo.None,buttons:[{id:"pinch",type:"analog",eventTrigger:"select"}],axes:[]},O0=$t(),U0=Qn(),F0=$t(),k0=$t(),B0=Qn(),z0=$t(),H0=$t(),V0=Qn(),G0=$t(),W0=(n,e,t,i)=>(co(O0,e),Bl(U0,e),_h(F0,e),co(k0,t),Bl(B0,t),_h(z0,t),yh(H0,O0,k0,i),Ja(V0,U0,B0,i),yh(G0,F0,z0,i),d5(n,V0,H0,G0),n),G5=[1,-1,-1,0,-1,1,1,0,-1,1,1,0,-1,1,1,1],W5=n=>{for(let e=0;e<16;e++)n[e]*=G5[e]};class X0 extends Vg{constructor(e,t,i){if(t!==Tn.Left&&t!==Tn.Right)throw new DOMException('handedness for XRHandInput must be either "left" or "right"',"InvalidStateError");if(!e.poses.default||!e.poses.pinch)throw new DOMException('"default" and "pinch" hand pose configs are required',"InvalidStateError");const r=new Ct(i),s=new Ct(r),a=[e.profileId,...e.fallbackProfileIds],o=new gf;Object.values(ho).forEach(c=>{o.set(c,new xf(c,r))});const l=new uc(t,Hl.TrackedPointer,a,r,new pf(V5),s,o);super(l),this[Pr]={poseId:"default",poses:e.poses},this.updateHandPose()}get poseId(){return this[Pr].poseId}set poseId(e){if(!this[Pr].poses[e]){console.warn(`Pose config ${e} not found`);return}this[Pr].poseId=e}updateHandPose(){const e=this[Pr].poses[this[Pr].poseId],t=this[Pr].poses.pinch;Object.values(ho).forEach(i=>{const r=e.jointTransforms[i].offsetMatrix,s=t.jointTransforms[i].offsetMatrix,a=this.inputSource.hand.get(i);W0(a[Ft].offsetMatrix,r,s,this.pinchValue),this.inputSource.handedness===Tn.Right&&W5(a[Ft].offsetMatrix),a[Wr].radius=(1-this.pinchValue)*e.jointTransforms[i].radius+this.pinchValue*t.jointTransforms[i].radius}),e.gripOffsetMatrix&&t.gripOffsetMatrix&&W0(this.inputSource.gripSpace[Ft].offsetMatrix,e.gripOffsetMatrix,t.gripOffsetMatrix,this.pinchValue)}get pinchValue(){return this[At].inputSource.gamepad[be].buttonsMap.pinch.value}updatePinchValue(e){if(e>1||e<0){console.warn(`Out-of-range value ${e} provided for pinch`);return}const t=this[At].inputSource.gamepad[be].buttonsMap.pinch;t[be].pendingValue=e}onFrameStart(e){super.onFrameStart(e),this.updateHandPose()}}class Kg extends EventTarget{}const X5={antialias:!0,depth:!0,stencil:!1,alpha:!0,ignoreDepthValues:!1,framebufferScaleFactor:1};let j5=class extends Kg{constructor(e,t,i={}){if(super(),e[N].ended)throw new DOMException("Session has ended","InvalidStateError");const r={...X5,...i};this[Zi]={session:e,context:t,antialias:r.antialias}}get context(){return this[Zi].context}get antialias(){return this[Zi].antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[Zi].context.drawingBufferWidth}get framebufferHeight(){return this[Zi].context.drawingBufferHeight}getViewport(e){if(e[Ir].session!==this[Zi].session)throw new DOMException("View's session differs from Layer's session","InvalidStateError");return this[Zi].session[N].device[$].getViewport(this,e)}static getNativeFramebufferScaleFactor(e){if(!(e instanceof mf))throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[N].ended?0:1}};class q5{constructor(e,t,i){const{schema:r,frames:s}=t;if(!s||!r||s.length===0)throw new DOMException("wrong recording format","NotSupportedError");const a=new Zr(jt.Viewer,e),o={[yt.Left]:new Ct(a),[yt.Right]:new Ct(a),[yt.None]:new Ct(a)};this[je]={refSpace:e,inputSources:new Map,inputSchemas:new Map,frames:s,recordedFramePointer:0,startingTimeStamp:s[0][0],endingTimeStamp:s[s.length-1][0],playbackTime:s[0][0],playing:!1,viewerSpace:a,viewSpaces:o,vec3:$t(),quat:Qn()},fa(this[je].viewSpaces[yt.Left][Ft].offsetMatrix,Zn(-i/2,0,0)),fa(this[je].viewSpaces[yt.Right][Ft].offsetMatrix,Zn(i/2,0,0)),r.forEach(l=>{const c=l[0],u=l[1];let h;if(u.hasGamepad){const x=[];for(let p=0;p<u.numButtons;p++)x.push({id:p.toString(),type:"manual"});const d=[];for(let p=0;p<u.numAxes;p++)d.push({id:p.toString(),type:"manual"});h=new pf({mapping:u.mapping,buttons:x,axes:d})}const f=new Ct(e);let m;u.hasHand&&(m=new gf,Object.values(ho).forEach(x=>{m.set(x,new xf(x,f))}));const g=new uc(u.handedness,u.targetRayMode,u.profiles,f,h,u.hasGrip?new Ct(e):void 0,u.hasHand?m:void 0);this[je].inputSources.set(c,{active:!1,source:g}),this[je].inputSchemas.set(c,u)})}play(){this[je].recordedFramePointer=0,this[je].playbackTime=this[je].startingTimeStamp,this[je].playing=!0,this[je].actualTimeStamp=performance.now()}stop(){this[je].playing=!1}get playing(){return this[je].playing}get viewerSpace(){return this[je].viewerSpace}get viewSpaces(){return this[je].viewSpaces}get inputSources(){return Array.from(this[je].inputSources.values()).filter(e=>e.active).map(e=>e.source)}playFrame(){const e=performance.now(),t=e-this[je].actualTimeStamp;if(this[je].actualTimeStamp=e,this[je].playbackTime+=t,this[je].playbackTime>this[je].endingTimeStamp){this.stop();return}for(;this[je].frames[this[je].recordedFramePointer+1][0]<this[je].playbackTime;)this[je].recordedFramePointer++;const i=this[je].frames[this[je].recordedFramePointer],r=this[je].frames[this[je].recordedFramePointer+1],s=(this[je].playbackTime-i[0])/(r[0]-i[0]);this.updateXRSpaceFromMergedFrames(this[je].viewerSpace,i.slice(1,8),r.slice(1,8),s);const a=new Map;for(let l=8;l<i.length;l++){const{index:c,inputData:u}=this.processRawInputData(i[l]);a.set(c,u)}const o=new Map;for(let l=8;l<r.length;l++){const{index:c,inputData:u}=this.processRawInputData(r[l]);o.set(c,u)}this[je].inputSources.forEach(l=>{l.active=!1}),o.forEach((l,c)=>{this[je].inputSources.get(c).active=!0;const u=this[je].inputSources.get(c).source,h=this[je].inputSchemas.get(c);this.updateInputSource(u,h,a.has(c)?a.get(c):l,l,s)})}updateInputSource(e,t,i,r,s){if(this.updateXRSpaceFromMergedFrames(e.targetRaySpace,i.targetRayTransform,r.targetRayTransform,s),t.hasGrip&&this.updateXRSpaceFromMergedFrames(e.gripSpace,i.gripTransform,r.gripTransform,s),t.hasHand)for(let a=0;a<25;a++){const o=i.handTransforms.slice(a*8,a*8+7),l=r.handTransforms.slice(a*8,a*8+7),c=i.handTransforms[a*8+7],u=r.handTransforms[a*8+7],h=e.hand.get(t.jointSequence[a]);this.updateXRSpaceFromMergedFrames(h,o,l,s),h[Wr].radius=(u-c)*s+c}if(t.hasGamepad){const a=e.gamepad;r.buttons.forEach((o,l)=>{const c=a.buttons[l];c[be].pressed=o[0]===1,c[be].touched=o[1]===1;const u=i.buttons[l][2],h=o[2];c[be].value=(h-u)*s+u}),r.axes.forEach((o,l)=>{const c=i.axes[l];a[be].axesMap[l.toString()].x=(o-c)*s+c})}}updateXRSpaceFromMergedFrames(e,t,i,r){const s=Zn(t[0],t[1],t[2]),a=zl(t[3],t[4],t[5],t[6]),o=Zn(i[0],i[1],i[2]),l=zl(i[3],i[4],i[5],i[6]);yh(this[je].vec3,s,o,r),Ja(this[je].quat,a,l,r),Mo(e[Ft].offsetMatrix,this[je].quat,this[je].vec3)}processRawInputData(e){const t=e[0],i=this[je].inputSchemas.get(t),s={targetRayTransform:e.slice(1,8)};let a=8;if(i.hasGrip&&(s.gripTransform=e[a++]),i.hasHand&&(s.handTransforms=e[a++]),i.hasGamepad){const o=e[a];s.buttons=o.slice(0,i.numButtons),s.axes=o.slice(i.numButtons)}return{index:t,inputData:s}}}const j0="2.1.1";class q0 extends Event{constructor(e,t){if(super(e,t),!t.referenceSpace)throw new Error("XRReferenceSpaceEventInit.referenceSpace is required");this.referenceSpace=t.referenceSpace,this.transform=t.transform}}class $0 extends EventTarget{constructor(e){super(),this[Un]={device:e,grantSession:({resolve:t,reject:i,mode:r,options:s})=>{if(this[Un].activeSession){i(new DOMException("An active XRSession already exists.","InvalidStateError"));return}const{requiredFeatures:a=[],optionalFeatures:o=[]}=s,{supportedFeatures:l}=this[Un].device;if(!a.every(m=>l.includes(m))){i(new Error("One or more required features are not supported by the device."));return}const u=o.filter(m=>l.includes(m)),h=Array.from(new Set([...a,...u,"viewer","local"])),f=new mf(this[Un].device,r,h);this[Un].activeSession=f,f.addEventListener("end",()=>{this[Un].activeSession=void 0}),t(f)}}}isSessionSupported(e){return new Promise((t,i)=>{t(e==="inline"?!0:this[Un].device.supportedSessionModes.includes(e))})}requestSession(e,t={}){return new Promise((i,r)=>{this.isSessionSupported(e).then(s=>{if(!s){r(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}const a={resolve:i,reject:r,mode:e,options:t};this[Un].grantSession(a)}).catch(r)})}offerSession(e,t={}){return new Promise((i,r)=>{this.isSessionSupported(e).then(s=>{if(!s){r(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}this[Un].offeredSessionConfig={resolve:i,reject:r,mode:e,options:t}}).catch(r)})}}class ol{constructor(e,t,i,r){this[Va]={x:e,y:t,width:i,height:r}}get x(){return this[Va].x}get y(){return this[Va].y}get width(){return this[Va].width}get height(){return this[Va].height}}/**
 * @license
 * webxr-layers-polyfill
 * Version 1.1.0
 * Copyright (c) 2021 Facebook, Inc. and its affiliates.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*//**
 * @license
 * gl-matrix 
 * Version 3.4.3
 * Copyright (c) 2015-2021, Brandon Jones, Colin MacKenzie IV.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*/var Ke;(function(n){n.texture="texture",n["texture-array"]="texture-array"})(Ke||(Ke={}));var ve;(function(n){n.default="default",n.mono="mono",n.stereo="stereo",n["stereo-left-right"]="stereo-left-right",n["stereo-top-bottom"]="stereo-top-bottom"})(ve||(ve={}));const fo=n=>n&&typeof n.getOffsetReferenceSpace=="function",ma=()=>typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{},wh=(n,e)=>{switch(e){case n.RGBA8:case n.RGB5_A1:case n.RGBA4:case n.SRGB8_ALPHA8:return{internalFormat:e,textureFormat:n.RGBA,type:n.UNSIGNED_BYTE};case n.RGBA8_SNORM:return{internalFormat:e,textureFormat:n.RGBA,type:n.BYTE};case n.RGB10_A2:return{internalFormat:e,textureFormat:n.RGBA,type:n.UNSIGNED_INT_2_10_10_10_REV};case n.RGBA16F:return{internalFormat:e,textureFormat:n.RGBA,type:n.HALF_FLOAT};case n.RGBA32F:return{internalFormat:e,textureFormat:n.RGBA,type:n.FLOAT};case n.RGBA8UI:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.UNSIGNED_BYTE};case n.RGBA8I:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.BYTE};case n.RGBA16UI:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.UNSIGNED_SHORT};case n.RGBA16I:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.SHORT};case n.RGBA32UI:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.UNSIGNED_INT};case n.RGBA32I:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.INT};case n.RGB10_A2UI:return{internalFormat:e,textureFormat:n.RGBA_INTEGER,type:n.UNSIGNED_INT_2_10_10_10_REV};case n.RGB8:case n.RGB565:case n.SRGB8:return{internalFormat:e,textureFormat:n.RGB,type:n.UNSIGNED_BYTE};case n.RGB8_SNORM:return{internalFormat:e,textureFormat:n.RGB,type:n.BYTE};case n.RGB16F:case n.R11F_G11F_B10F:case n.RGB9_E5:return{internalFormat:e,textureFormat:n.RGB,type:n.HALF_FLOAT};case n.RGB32F:return{internalFormat:e,textureFormat:n.RGB,type:n.FLOAT};case n.RGB8UI:return{internalFormat:e,textureFormat:n.RGB_INTEGER,type:n.UNSIGNED_BYTE};case n.RGB8I:return{internalFormat:e,textureFormat:n.RGB_INTEGER,type:n.BYTE};case n.RGB16UI:return{internalFormat:e,textureFormat:n.RGB_INTEGER,type:n.UNSIGNED_SHORT};case n.RGB16I:return{internalFormat:e,textureFormat:n.RGB_INTEGER,type:n.SHORT};case n.RGB32UI:return{internalFormat:e,textureFormat:n.RGB_INTEGER,type:n.UNSIGNED_INT};case n.RGB32I:return{internalFormat:e,textureFormat:n.RGB_INTEGER,type:n.INT};case n.DEPTH_COMPONENT16:return{internalFormat:e,textureFormat:n.DEPTH_COMPONENT,type:n.UNSIGNED_SHORT};case n.DEPTH_COMPONENT24:return{internalFormat:e,textureFormat:n.DEPTH_COMPONENT,type:n.UNSIGNED_INT};case n.DEPTH_COMPONENT32F:return{internalFormat:e,textureFormat:n.DEPTH_COMPONENT,type:n.FLOAT};case n.DEPTH24_STENCIL8:return{internalFormat:e,textureFormat:n.DEPTH_STENCIL,type:n.UNSIGNED_INT_24_8};case n.DEPTH32F_STENCIL8:return{internalFormat:e,textureFormat:n.DEPTH_STENCIL,type:n.FLOAT_32_UNSIGNED_INT_24_8_REV};case n.DEPTH_COMPONENT:return wh(n,n.DEPTH_COMPONENT24);case n.DEPTH_STENCIL:return wh(n,n.DEPTH24_STENCIL8);case n.RGBA:case n.RGB:case n.LUMINANCE_ALPHA:case n.LUMINANCE:case n.ALPHA:return{internalFormat:e,textureFormat:e,type:n.UNSIGNED_BYTE};default:throw new Error("Attempted to create polyfill with unsupported format.")}};class wa{constructor(){this._hasRunDeferredInitialize=!1,this._media=null}initialize(e,t){this.session=e,t&&(this.context=t),this.blendTextureSourceAlpha=!0}destroy(){this._colorTextures=[],this._depthStencilTextures=[]}addEventListener(e,t,i){}dispatchEvent(e){return!1}removeEventListener(e,t,i){}getContext(){return this.context}getTextureType(){throw new Error("Unimplemented")}get colorTextures(){return this._colorTextures}get depthStencilTextures(){return this._depthStencilTextures}get colorTexturesMeta(){return this._texturesMeta}get media(){return this.isMediaLayer()||console.warn("Attempted to retrieve media from a non-media layer"),this._media}determineLayoutAttribute(e,t,i){if(!(t instanceof WebGL2RenderingContext)&&e===Ke["texture-array"])throw new TypeError;if(i===ve.mono)return i;if(i===ve.default){if(this.session.internalViews&&this.session.internalViews.length===1)return ve.mono;if(e===Ke["texture-array"])return i}return i===ve.default||i===ve.stereo?ve["stereo-left-right"]:i}isMediaLayer(){return this._media!==null}_deferredInitialize(){}initializeIfNeeded(){this._hasRunDeferredInitialize||(this._hasRunDeferredInitialize=!0,this._deferredInitialize())}_allocateColorTexturesInternal(e,t){let r=this.session.internalViews;if(!r||r.length===0){console.warn("We can't allocate color textures without views");return}if(this.initializeIfNeeded(),this.layout===ve.mono)if(e===Ke["texture-array"]){const s=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[s],this._colorTextures=[s.texture];return}else{const s=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[s],this._colorTextures=[s.texture];return}else if(this.layout===ve.stereo)if(e===Ke["texture-array"]){const s=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat,2);this._texturesMeta=[s],this._colorTextures=[s.texture];return}else{const s=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat),a=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[s,a],this._colorTextures=[s.texture,a.texture];return}else if(this.layout===ve["stereo-left-right"]){const s=this._createNewColorTexture(t.viewPixelWidth*2,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[s],this._colorTextures=[s.texture];return}else if(this.layout===ve["stereo-top-bottom"]){const s=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight*2,e,t.colorFormat);this._texturesMeta=[s],this._colorTextures=[s.texture];return}}_allocateDepthStencilTexturesInternal(e,t){if(!t.depthFormat){this._depthStencilTextures=[];return}if(this._getSupportedDepthFormats().indexOf(t.depthFormat)<0)throw new Error("Depth format provided is not supported in non-projection layers.");if(t.mipLevels<1)throw new Error("Invalid miplevel. Miplevel needs to be >= 1");if(this.layout===ve.mono)if(e===Ke["texture-array"]){const i=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[i.texture];return}else{const i=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[i.texture];return}else if(this.layout===ve.stereo)if(e===Ke["texture-array"]){const i=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat,2);this._depthStencilTextures=[i.texture];return}else{const i=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat),r=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[i.texture,r.texture];return}else if(this.layout===ve["stereo-left-right"]){const i=this._createNewDepthStencilTexture(t.viewPixelWidth*2,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[i.texture];return}else if(this.layout===ve["stereo-top-bottom"]){const i=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight*2,e,t.depthFormat);this._depthStencilTextures=[i.texture];return}}_createNewColorTexture(e,t,i,r,s=1){return this._createGenericPolyfillTexture(i,e,t,r,0,s)}_createNewDepthStencilTexture(e,t,i,r,s=1){return this._createGenericPolyfillTexture(i,e,t,r,0,s)}_createGenericPolyfillTexture(e,t,i,r,s=0,a=1){if(e===Ke["texture-array"]&&a<=1&&console.warn("creating a texture array with a single layer..."),e===Ke["texture-array"]&&this.context instanceof WebGLRenderingContext)throw new Error("WebGL 1 does not support texture array");let o=this.context.createTexture(),l={width:t,height:i,layers:a,type:e,textureFormat:r,texture:o},c=r,u=this.context.UNSIGNED_BYTE;if(this.context instanceof WebGL2RenderingContext){const h=wh(this.context,r);c=h.internalFormat,r=h.textureFormat,u=h.type}else r===this.context.DEPTH_COMPONENT&&(u=this.context.UNSIGNED_INT),r===this.context.DEPTH_STENCIL&&(u=this.context.UNSIGNED_INT_24_8_WEBGL);if(e===Ke["texture-array"]&&this.context instanceof WebGL2RenderingContext){console.warn("texture-array layers are supported...questionably in the polyfill at the moment. Use at your own risk.");const h=this.context.getParameter(this.context.TEXTURE_BINDING_2D_ARRAY);this.context.bindTexture(this.context.TEXTURE_2D_ARRAY,o),this._getSupportedDepthFormats().indexOf(r)>=0?this.context.texStorage3D(this.context.TEXTURE_2D_ARRAY,1,c,t,i,a):this.context.texImage3D(this.context.TEXTURE_2D_ARRAY,0,c,t,i,a,0,r,u,null),this.context.bindTexture(this.context.TEXTURE_2D_ARRAY,h)}else{const h=this.context.getParameter(this.context.TEXTURE_BINDING_2D);this.context.bindTexture(this.context.TEXTURE_2D,o),this.context.texImage2D(this.context.TEXTURE_2D,0,c,t,i,0,r,u,null),this.context.bindTexture(this.context.TEXTURE_2D,h)}return l}_getSupportedDepthFormats(){const e=[];return this.context instanceof WebGLRenderingContext&&!this.context.getExtension("WEBGL_depth_texture")||(e.push(this.context.DEPTH_COMPONENT,this.context.DEPTH_STENCIL),this.context instanceof WebGL2RenderingContext&&e.push(this.context.DEPTH_COMPONENT24,this.context.DEPTH24_STENCIL8)),e}}const Qg={colorFormat:6408,mipLevels:1,layout:ve.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0,textureType:Ke.texture,radius:2,centralAngle:.78539,aspectRatio:2},$5={layout:ve.mono,invertStereo:!1,space:null,radius:2,centralAngle:.78539};class vf extends wa{constructor(e,t){super(),this._media=t??null,this.isMediaLayer()?this.init=Object.assign(Object.assign({},$5),e):this.init=Object.assign(Object.assign({},Qg),e),this.radius=this.init.radius,this.centralAngle=this.init.centralAngle,this.aspectRatio=this.init.aspectRatio,this.space=this.init.space,this.layout=this.init.layout;const i=ma();this.init.transform?this.transform=new i.XRRigidTransform(e.transform.position,e.transform.orientation):this.transform=new i.XRRigidTransform({x:0,y:0,z:0,w:1}),this.isMediaLayer()||(this.isStatic=e.isStatic)}getTextureType(){return this.isMediaLayer()?Ke.texture:this.init.textureType}_deferredInitialize(){let e=this.determineLayoutAttribute(this.init.textureType,this.context,this.init.layout);this.layout=e,this.needsRedraw=!0}get colorTextures(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._colorTextures}get depthStencilTextures(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._depthStencilTextures||!this._depthStencilTextures.length)&&this._allocateDepthStencilTexturesInternal(this.getTextureType(),this.init),this._depthStencilTextures}get colorTexturesMeta(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._texturesMeta}get width(){const e=2*this.radius*Math.PI,t=this.centralAngle/(2*Math.PI);return e*t}get height(){return this.width/this.aspectRatio}}const Jg={colorFormat:6408,mipLevels:1,layout:ve.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0,textureType:Ke.texture,radius:0,centralHorizontalAngle:6.28318,upperVerticalAngle:1.570795,lowerVerticalAngle:-1.570795},Y5={space:null,layout:ve.mono,invertStereo:!1,radius:0,centralHorizontalAngle:6.28318,upperVerticalAngle:1.570795,lowerVerticalAngle:-1.570795};class _f extends wa{constructor(e,t){if(super(),this._media=t??null,this.isMediaLayer()?this.init=Object.assign(Object.assign({},Y5),e):this.init=Object.assign(Object.assign({},Jg),e),!fo(this.init.space))throw new TypeError("Equirect layer's space needs to be an XRReferenceSpace");this.radius=this.init.radius,this.centralHorizontalAngle=this.init.centralHorizontalAngle,this.upperVerticalAngle=this.init.upperVerticalAngle,this.lowerVerticalAngle=this.init.lowerVerticalAngle,this.space=this.init.space,this.layout=this.init.layout;const i=ma();e.transform?this.transform=new i.XRRigidTransform(e.transform.position,e.transform.orientation):this.transform=new i.XRRigidTransform({x:0,y:0,z:0,w:1}),this.isMediaLayer()||(this.isStatic=e.isStatic)}getTextureType(){return this.isMediaLayer()?Ke.texture:this.init.textureType}_deferredInitialize(){let e=this.determineLayoutAttribute(this.init.textureType,this.context,this.init.layout);this.layout=e,this.needsRedraw=!0}get colorTextures(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._colorTextures}get depthStencilTextures(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._depthStencilTextures||!this._depthStencilTextures.length)&&this._allocateDepthStencilTexturesInternal(this.getTextureType(),this.init),this._depthStencilTextures}get colorTexturesMeta(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._texturesMeta}}const ex={colorFormat:6408,mipLevels:1,layout:ve.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0,textureType:Ke.texture,width:1,height:1},Z5={space:null,layout:ve.mono,invertStereo:!1};class yf extends wa{constructor(e,t){super(),this._media=t??null,this.isMediaLayer()?this.init=Object.assign(Object.assign({},Z5),e):this.init=Object.assign(Object.assign({},ex),e),this.width=this.init.width,this.height=this.init.height,this.space=this.init.space,this.layout=this.init.layout;const i=ma();this.init.transform?this.transform=new i.XRRigidTransform(e.transform.position,e.transform.orientation):this.transform=new i.XRRigidTransform({x:0,y:0,z:0,w:1}),this.isMediaLayer()||(this.isStatic=e.isStatic)}getTextureType(){return this.isMediaLayer()?Ke.texture:this.init.textureType}_deferredInitialize(){let e=this.determineLayoutAttribute(this.init.textureType,this.context,this.init.layout);this.layout=e,this.needsRedraw=!0}get colorTextures(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._colorTextures}get depthStencilTextures(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._depthStencilTextures||!this._depthStencilTextures.length)&&this._allocateDepthStencilTexturesInternal(this.getTextureType(),this.init),this._depthStencilTextures}get colorTexturesMeta(){if(this.isMediaLayer())throw new Error("Media layers do not have associated textures");return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._texturesMeta}}class K5{constructor(e){if(this.session=e,this.session.ended)throw new Error("Session has ended")}createQuadLayer(e,t){if(this.session.ended)throw new Error("Session has ended");if(t.layout===ve.default)throw new TypeError("Media Quad layer cannot be created with layout of default");let i=this.calculateAspectRatio(e,t.layout);t.width===void 0&&t.height===void 0&&(t.width=1),t.height===void 0&&(t.height=t.width/i),t.width===void 0&&(t.width=t.height/i);let r=new yf(t,e);return r.needsRedraw=!1,r.initialize(this.session),r}createCylinderLayer(e,t){if(this.session.ended)throw new Error("Session has ended");if(t.layout===ve.default)throw new TypeError("Media Cylinder layer cannot be created with layout of default");let i=this.calculateAspectRatio(e,t.layout);t.aspectRatio===void 0&&(t.aspectRatio=i);let r=new vf(t,e);return r.needsRedraw=!1,r.initialize(this.session),r}createEquirectLayer(e,t){if(this.session.ended)throw new Error("Session has ended");if(t.layout===ve.default)throw new TypeError("Media Equirect layer cannot be created with layout of default");if(!fo(t.space))throw new Error("Media Equirect layer's space must be of type XRReferenceSpace");let i=new _f(t,e);return i.needsRedraw=!1,i.initialize(this.session),i}calculateAspectRatio(e,t){let i=e.videoWidth,r=e.videoHeight;return t===ve["stereo-left-right"]&&(i/=2),t===ve["stereo-top-bottom"]&&(r/=2),i/r}}const bh={textureType:Ke.texture,colorFormat:6408,depthFormat:6402,scaleFactor:1};class Gl extends wa{constructor(e=bh){super(),this.init=Object.assign(Object.assign({},bh),e)}initialize(e,t){super.initialize(e,t),this.initializeIfNeeded();let i=e.getBaseLayer();this.textureWidth=i.framebufferWidth*this.init.scaleFactor,this.textureHeight=i.framebufferHeight*this.init.scaleFactor}_allocateProjectionColorTextures(){let e=[],t=[];const i=()=>{e=[];for(let u of t)e.push(u.texture)};let r=this.session,s=r.internalViews;if(!s||s.length===0){console.warn("We can't allocate color textures without views");return}let a=r.getBaseLayer(),o=s.length,l=a.framebufferWidth*this.init.scaleFactor/s.length,c=a.framebufferHeight*this.init.scaleFactor;if(this.layout===ve.mono||this.layout===ve.default){if(this.init.textureType===Ke["texture-array"])t=[this._createNewColorTexture(l,c,Ke["texture-array"],this.init.colorFormat,o)];else for(let u of s){let h=this._createNewColorTexture(l,c,Ke.texture,this.init.colorFormat);t.push(h)}i(),this._colorTexturesMeta=t,this._colorTextures=e;return}this.layout===ve["stereo-left-right"]?t=[this._createNewColorTexture(l*o,c,this.init.textureType,this.init.colorFormat)]:this.layout===ve["stereo-top-bottom"]&&(t=[this._createNewColorTexture(l,c*o,this.init.textureType,this.init.colorFormat)]),i(),this._colorTexturesMeta=t,this._colorTextures=e}_allocateProjectionDepthStencilTextures(){let e=this.session,t=e.internalViews;if(!t||t.length===0)return;if(this.init.depthFormat===0){this._depthStencilTextures=[];return}if(this.context instanceof WebGLRenderingContext&&!this.context.getExtension("WEBGL_depth_texture")){this._depthStencilTextures=[];return}let i=[],r=[];const s=()=>{i=[];for(let u of r)i.push(u.texture)};this.initializeIfNeeded();let a=e.getBaseLayer(),o=t.length,l=a.framebufferWidth*this.init.scaleFactor/t.length,c=a.framebufferHeight*this.init.scaleFactor;if(this.layout===ve.mono||this.layout===ve.default){if(this.init.textureType===Ke["texture-array"])r=[this._createNewDepthStencilTexture(l,c,this.init.textureType,this.init.depthFormat,o)];else for(let u of t){let h=this._createNewDepthStencilTexture(l,c,this.init.textureType,this.init.depthFormat);r.push(h)}s(),this._depthStencilTextures=i;return}this.layout===ve["stereo-left-right"]?r=[this._createNewDepthStencilTexture(l*o,c,this.init.textureType,this.init.depthFormat)]:this.layout===ve["stereo-top-bottom"]&&(r=[this._createNewDepthStencilTexture(l,c*o,this.init.textureType,this.init.depthFormat)]),s(),this._depthStencilTextures=i}get colorTextures(){return(!this._colorTextures||!this._colorTextures.length)&&this._allocateProjectionColorTextures(),this._colorTextures}get depthStencilTextures(){return this._depthStencilTextures===void 0&&this._allocateProjectionDepthStencilTextures(),this._depthStencilTextures||[]}get colorTexturesMeta(){return(!this._colorTextures||!this._colorTextures.length)&&this._allocateProjectionColorTextures(),this._colorTexturesMeta}getTextureType(){return this.init.textureType}_deferredInitialize(){this.isStatic=!1,this.ignoreDepthValues=!1,this.fixedFoveation=0;let e=this.determineLayoutAttribute(this.init.textureType,this.context,ve.default);this.layout=e,this.needsRedraw=!0;let t=this.determineMaximumScaleFactor(),i=Math.min(this.init.scaleFactor,t);this.init.scaleFactor=i}determineMaximumScaleFactor(){let e=this.session.getBaseLayer(this.context),t=e.framebufferWidth,i=e.framebufferHeight;this.layout===ve["stereo-left-right"]&&(t*=2),this.layout===ve["stereo-top-bottom"]&&(i*=2);let r=Math.max(t,i);return this.context.getParameter(this.context.MAX_TEXTURE_SIZE)/r}}const rr=(n,e,t,i,r)=>{let s=0,a=0,o=e.width,l=e.height;t===ve["stereo-left-right"]?(s=e.width*i/r,o=e.width/r):t===ve["stereo-top-bottom"]&&(a=e.height*i/r,l=e.height/r),n.x=s,n.y=a,n.width=o,n.height=l},Y0=(n,e,t)=>{var i=n.createShader(t);n.shaderSource(i,e),n.compileShader(i);var r=n.getShaderParameter(i,n.COMPILE_STATUS);if(!r)throw"could not compile shader:"+n.getShaderInfoLog(i);return i},po=(n,e,t)=>{const i=n.createProgram(),r=Y0(n,e,n.VERTEX_SHADER),s=Y0(n,t,n.FRAGMENT_SHADER);n.attachShader(i,r),n.attachShader(i,s),n.deleteShader(r),n.deleteShader(s),n.linkProgram(i);var a=n.getProgramParameter(i,n.LINK_STATUS);if(!a)throw"program failed to link:"+n.getProgramInfoLog(i);return i},Q5=(n,e,t,i,r)=>{var s=e,a=e+i,o=t,l=t+r;n.bufferData(n.ARRAY_BUFFER,new Float32Array([s,o,a,o,s,l,s,l,a,o,a,l]),n.DYNAMIC_DRAW)},Sf=n=>{if(n instanceof WebGL2RenderingContext)return n;const e=n.getExtension("OES_vertex_array_object");if(!e)throw new Error("Cannot use VAOs.");return{VERTEX_ARRAY_BINDING:e.VERTEX_ARRAY_BINDING_OES,bindVertexArray:e.bindVertexArrayOES.bind(e),createVertexArray:e.createVertexArrayOES.bind(e),deleteVertexArray:e.deleteVertexArrayOES.bind(e),isVertexArray:e.isVertexArrayOES.bind(e)}},fc=n=>n,J5=fc`
attribute vec2 a_position;
attribute vec2 a_texCoord;

varying vec2 v_texCoord;

void main() {
   // convert the rectangle from pixels to 0.0 to 1.0
   vec2 zeroToOne = a_position;

   // convert from 0->1 to 0->2
   vec2 zeroToTwo = zeroToOne * 2.0;

   // convert from 0->2 to -1->+1 (clipspace)
   vec2 clipSpace = zeroToTwo - 1.0;

   gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`,eT=fc`
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   	vec4 tex = texture2D(u_image, v_texCoord);
	gl_FragColor = vec4(tex.rgb, tex.a);
}
`;class tx{constructor(e,t){this.gl=t,this.layer=e,this.program=po(this.gl,J5,eT),this.programInfo={attribLocations:{a_position:this.gl.getAttribLocation(this.program,"a_position"),a_texCoord:this.gl.getAttribLocation(this.program,"a_texCoord")}},this._createVAOs()}render(e){let t=this.gl,i=e.getBaseLayer();t.viewport(0,0,i.framebufferWidth,i.framebufferHeight);const r=this.layer.getTextureType(),s=t.getParameter(t.TEXTURE_BINDING_2D),a=t.getParameter(t.ACTIVE_TEXTURE);if(r===Ke.texture)t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.layer.colorTextures[0]),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);else throw new Error(`Created a texture projection renderer instead of a texture-array projection renderer for a texture-array layer.
This is probably an error with the polyfill itself; please file an issue on Github if you run into this.`);for(let o of e.internalViews){let l=i.getViewport(o);t.viewport(l.x,l.y,l.width,l.height),this._shouldUseStereoTexturePoints()?this._renderInternalStereo(o):this._renderInternal()}t.activeTexture(a),t.bindTexture(t.TEXTURE_2D,s)}_renderInternal(){let e=this.gl;const t=e.getParameter(e.CURRENT_PROGRAM);e.useProgram(this.program),this.vaoGl.bindVertexArray(this.vao);var i=e.TRIANGLES,r=0,s=6;e.drawArrays(i,r,s),this.vaoGl.bindVertexArray(null),e.useProgram(t)}_renderInternalStereo(e){if(e.eye==="none")return this._renderInternal();let t=this.gl;this.vaoGl.bindVertexArray(this.vao);const i=t.getParameter(t.CURRENT_PROGRAM);t.useProgram(this.program),this._setStereoTextureBuffer(e.eye==="right"?1:0);var r=t.TRIANGLES,s=0,a=6;t.drawArrays(r,s,a),this.vaoGl.bindVertexArray(null),t.useProgram(i)}_createVAOs(){this._createTextureUVs();let e=this.gl;this.vaoGl=Sf(e);let t=e.createBuffer();this.vao=this.vaoGl.createVertexArray(),this.vaoGl.bindVertexArray(this.vao),e.enableVertexAttribArray(this.programInfo.attribLocations.a_position),e.bindBuffer(e.ARRAY_BUFFER,t),Q5(e,0,0,1,1);let i=2,r=e.FLOAT,s=!1,a=0,o=0;e.vertexAttribPointer(this.programInfo.attribLocations.a_position,i,r,s,a,o),this.texcoordBuffer=e.createBuffer(),e.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),e.bindBuffer(e.ARRAY_BUFFER,this.texcoordBuffer),e.bufferData(e.ARRAY_BUFFER,this.texturePoints,e.DYNAMIC_DRAW),e.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,i,r,s,a,o),this.vaoGl.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}_setStereoTextureBuffer(e){let t=this.gl;t.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),t.bindBuffer(t.ARRAY_BUFFER,this.texcoordBuffer),t.bufferData(t.ARRAY_BUFFER,this.stereoTexturePoints[e],t.STATIC_DRAW);var i=2,r=t.FLOAT,s=!1,a=0,o=0;t.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,i,r,s,a,o),t.bindBuffer(t.ARRAY_BUFFER,null)}_createTextureUVs(){this.texturePoints=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]);const e={x:0,y:0,width:1,height:1};this._shouldUseStereoTexturePoints()&&(this.stereoTexturePoints=[],rr(e,this.layer.colorTexturesMeta[0],this.layer.layout,0,2),this.stereoTexturePoints[0]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e),rr(e,this.layer.colorTexturesMeta[0],this.layer.layout,1,2),this.stereoTexturePoints[1]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e))}_offsetTextureUVsByRect(e,t,i){i=i??{x:0,y:0,width:e.width,height:e.height};const r=i.x/e.width,s=i.y/e.height,a=i.width/e.width,o=i.height/e.height,l=[];for(let c=0;c<t.length;c+=2){let u=t[c],h=t[c+1],f=u*a+r,m=h*o+s;l[c]=f,l[c+1]=m}return new Float32Array(l)}_shouldUseStereoTexturePoints(){return this.layer.layout===ve["stereo-left-right"]||this.layer.layout===ve["stereo-top-bottom"]}}const tT=fc`#version 300 es

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_texCoord;

void main() {
	// convert the rectangle from pixels to 0.0 to 1.0
	vec2 zeroToOne = a_position;

	// convert from 0->1 to 0->2
	vec2 zeroToTwo = zeroToOne * 2.0;

	// convert from 0->2 to -1->+1 (clipspace)
	vec2 clipSpace = zeroToTwo - 1.0;

	gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);

	// pass the texCoord to the fragment shader
	// The GPU will interpolate this value between points.
	v_texCoord = a_texCoord;
}
`,nT=fc`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2DArray;

uniform sampler2DArray u_image;
uniform int u_layer;

in vec2 v_texCoord;

out vec4 fragColor;

void main() {
	vec4 tex = texture(u_image, vec3(v_texCoord.x, v_texCoord.y, u_layer));
 	fragColor = vec4(tex.rgb, tex.a);
}

`;class iT extends tx{constructor(e,t){super(e,t),this.program=po(this.gl,tT,nT),this._createVAOs(),this.u_layerInfo=this.gl.getUniformLocation(this.program,"u_layer")}render(e){let t=this.gl;if(this.layer.getTextureType()===Ke.texture)throw new Error("Using texture array projection renderer on a layer without texture array.");let r=e.getBaseLayer();const s=t.getParameter(t.TEXTURE_BINDING_2D_ARRAY);t.bindTexture(t.TEXTURE_2D_ARRAY,this.layer.colorTextures[0]),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.LINEAR);for(let a of e.internalViews){let o=e.getViewIndex(a),l=r.getViewport(a);t.viewport(l.x,l.y,l.width,l.height),this._renderInternal(o)}t.bindTexture(t.TEXTURE_2D_ARRAY,s)}_renderInternal(e=0){let t=this.gl;const i=t.getParameter(t.CURRENT_PROGRAM);t.useProgram(this.program),t.bindVertexArray(this.vao),t.uniform1i(this.u_layerInfo,e);var r=t.TRIANGLES,s=0,a=6;t.drawArrays(r,s,a),t.bindVertexArray(null),t.useProgram(i)}}const rT=(n,e)=>n.getTextureType()===Ke["texture-array"]&&e instanceof WebGL2RenderingContext?new iT(n,e):new tx(n,e);var Wl=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,e=arguments.length;e--;)n+=arguments[e]*arguments[e];return Math.sqrt(n)});function Th(){var n=new Wl(16);return Wl!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function Ah(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],m=e[10],g=e[11],x=e[12],d=e[13],p=e[14],b=e[15],v=t[0],M=t[1],R=t[2],T=t[3];return n[0]=v*i+M*o+R*h+T*x,n[1]=v*r+M*l+R*f+T*d,n[2]=v*s+M*c+R*m+T*p,n[3]=v*a+M*u+R*g+T*b,v=t[4],M=t[5],R=t[6],T=t[7],n[4]=v*i+M*o+R*h+T*x,n[5]=v*r+M*l+R*f+T*d,n[6]=v*s+M*c+R*m+T*p,n[7]=v*a+M*u+R*g+T*b,v=t[8],M=t[9],R=t[10],T=t[11],n[8]=v*i+M*o+R*h+T*x,n[9]=v*r+M*l+R*f+T*d,n[10]=v*s+M*c+R*m+T*p,n[11]=v*a+M*u+R*g+T*b,v=t[12],M=t[13],R=t[14],T=t[15],n[12]=v*i+M*o+R*h+T*x,n[13]=v*r+M*l+R*f+T*d,n[14]=v*s+M*c+R*m+T*p,n[15]=v*a+M*u+R*g+T*b,n}function Z0(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,c=t*a,u=i*a,h=i*o,f=r*a,m=r*o,g=r*l,x=s*a,d=s*o,p=s*l;return n[0]=1-h-g,n[1]=u+p,n[2]=f-d,n[3]=0,n[4]=u-p,n[5]=1-c-g,n[6]=m+x,n[7]=0,n[8]=f+d,n[9]=m-x,n[10]=1-c-h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Rh(){var n=new Wl(2);return Wl!=Float32Array&&(n[0]=0,n[1]=0),n}(function(){var n=Rh();return function(e,t,i,r,s,a){var o,l;for(t||(t=2),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],s(n,n,a),e[o]=n[0],e[o+1]=n[1];return e}})();const dc=n=>n,sT=dc`
attribute vec4 a_position;
attribute vec2 a_texCoord;

uniform mat4 u_matrix;
uniform mat4 u_projectionMatrix;

varying vec2 v_texCoord;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_projectionMatrix * u_matrix * a_position;

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`,aT=dc`
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   	vec4 tex = texture2D(u_image, v_texCoord);
	gl_FragColor = vec4(tex.rgb, tex.a);
	// gl_FragColor = vec4(1.0, 0, 0, 1.0);
}
`,oT=dc`#version 300 es

in vec4 a_position;
in vec2 a_texCoord;

uniform mat4 u_matrix;
uniform mat4 u_projectionMatrix;

out vec2 v_texCoord;

void main() {
	// Multiply the position by the matrix.
    gl_Position = u_projectionMatrix * u_matrix * a_position;

	// pass the texCoord to the fragment shader
	// The GPU will interpolate this value between points.
	v_texCoord = a_texCoord;
}
`,lT=dc`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2DArray;

uniform sampler2DArray u_image;
uniform int u_layer;

in vec2 v_texCoord;

out vec4 fragColor;

void main() {
	vec4 tex = texture(u_image, vec3(v_texCoord.x, v_texCoord.y, u_layer));
 	fragColor = vec4(tex.rgb, tex.a);
}

`;class Mf{constructor(e,t){this.usesTextureArrayShaders=!1,this.savedVaoState={vao:null,arrayBuffer:null},this.hasMipmap=!1,this.gl=t,this.layer=e;let i=this.gl;this.transformMatrix=Th(),t instanceof WebGL2RenderingContext&&this.layer.getTextureType()===Ke["texture-array"]&&(this.usesTextureArrayShaders=!0),this.usesTextureArrayShaders?this.program=po(i,oT,lT):this.program=po(i,sT,aT),this.programInfo={attribLocations:{a_position:i.getAttribLocation(this.program,"a_position"),a_texCoord:i.getAttribLocation(this.program,"a_texCoord")},uniformLocations:{u_matrix:i.getUniformLocation(this.program,"u_matrix"),u_projectionMatrix:i.getUniformLocation(this.program,"u_projectionMatrix")}},this.usesTextureArrayShaders&&(this.programInfo.uniformLocations.u_layer=i.getUniformLocation(this.program,"u_layer"))}saveVaoState(){this.savedVaoState.vao=this.gl.getParameter(this.vaoGl.VERTEX_ARRAY_BINDING),this.savedVaoState.arrayBuffer=this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING)}restoreVaoState(){this.vaoGl.bindVertexArray(this.savedVaoState.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.savedVaoState.arrayBuffer),this.savedVaoState.vao=this.savedVaoState.arrayBuffer=null}initialize(){let e=this.gl;if(this.layer.isMediaLayer()){this.mediaTexture=e.createTexture(),this.mediaTexturePolyfill={texture:this.mediaTexture,textureFormat:e.RGBA,width:this.layer.media.videoWidth,height:this.layer.media.videoHeight,type:Ke.texture};const t=e.getParameter(e.TEXTURE_BINDING_2D);e.bindTexture(e.TEXTURE_2D,this.mediaTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.layer.media.videoWidth,this.layer.media.videoHeight,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,t)}this._createVAOs()}render(e,t){this.saveVaoState();let i=this.gl,r=e.getBaseLayer(),s=t.getViewerPose(e.getReferenceSpace());const a=i.getParameter(i.ACTIVE_TEXTURE);for(let o of s.views){let l=r.getViewport(o);if(i.viewport(l.x,l.y,l.width,l.height),i.activeTexture(i.TEXTURE0),this.usesTextureArrayShaders){if(i instanceof WebGLRenderingContext)throw new Error("This should never happen; texture-arrays only supported on WebGL2.");if(this.layer.isMediaLayer())throw new Error("This should never happen. Media layers should never be created with texture-array");const c=i.getParameter(i.TEXTURE_BINDING_2D_ARRAY);i.bindTexture(i.TEXTURE_2D_ARRAY,this.layer.colorTextures[0]),this.layer.isStatic?(this.layer.needsRedraw===!0&&i.generateMipmap(i.TEXTURE_2D_ARRAY),this.hasMipmap=!0):this.hasMipmap=this.layer.mipLevels>0,i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,this.hasMipmap?i.LINEAR_MIPMAP_LINEAR:i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,this.hasMipmap?i.LINEAR_MIPMAP_LINEAR:i.LINEAR);let u=0;if(this.layer.layout===ve.stereo)switch(o.eye){case"right":u=1;break}this._shouldUseStereoTexturePoints()?this._renderInternalStereo(e,t,o,u):this._renderInternal(e,t,o,u),i.activeTexture(a),i.bindTexture(i.TEXTURE_2D_ARRAY,c)}else{const c=i.getParameter(i.TEXTURE_BINDING_2D);if(this.layer.isMediaLayer())i.bindTexture(i.TEXTURE_2D,this.mediaTexture),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texSubImage2D(i.TEXTURE_2D,0,0,0,this.layer.media.videoWidth,this.layer.media.videoHeight,i.RGBA,i.UNSIGNED_BYTE,this.layer.media);else if(this.layer.layout===ve.stereo)switch(o.eye){case"right":i.bindTexture(i.TEXTURE_2D,this.layer.colorTextures[1]);break;default:i.bindTexture(i.TEXTURE_2D,this.layer.colorTextures[0])}else i.bindTexture(i.TEXTURE_2D,this.layer.colorTextures[0]);this.layer.isStatic?(this.layer.needsRedraw===!0&&i.generateMipmap(i.TEXTURE_2D),this.hasMipmap=!0):this.hasMipmap=this.layer.mipLevels>0,i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.hasMipmap?i.LINEAR_MIPMAP_LINEAR:i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.hasMipmap?i.LINEAR_MIPMAP_LINEAR:i.LINEAR),this._shouldUseStereoTexturePoints()?this._renderInternalStereo(e,t,o):this._renderInternal(e,t,o),i.activeTexture(a),i.bindTexture(i.TEXTURE_2D,c)}}this.restoreVaoState()}createPositionPoints(){return new Float32Array([])}createTextureUVs(){return new Float32Array([])}_offsetTextureUVsByRect(e,t,i){i=i??{x:0,y:0,width:e.width,height:e.height};const r=i.x/e.width,s=i.y/e.height,a=i.width/e.width,o=i.height/e.height,l=[];for(let c=0;c<t.length;c+=2){let u=t[c],h=t[c+1],f=u*a+r,m=h*o+s;l[c]=f,l[c+1]=m}return new Float32Array(l)}_shouldUseStereoTexturePoints(){return this.layer.layout===ve["stereo-left-right"]||this.layer.layout===ve["stereo-top-bottom"]}_setStereoTextureBuffer(e){let t=this.gl;t.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),t.bindBuffer(t.ARRAY_BUFFER,this.texcoordBuffer),t.bufferData(t.ARRAY_BUFFER,this.stereoTexturePoints[e],t.STATIC_DRAW);var i=2,r=t.FLOAT,s=!1,a=0,o=0;t.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,i,r,s,a,o),t.bindBuffer(t.ARRAY_BUFFER,null)}_recalculateVertices(){this.positionPoints=this.createPositionPoints(),this.texturePoints=this.createTextureUVs();const e={x:0,y:0,width:1,height:1};if(this._shouldUseStereoTexturePoints()){if(this.stereoTexturePoints=[],this.layer.isMediaLayer()){rr(e,this.mediaTexturePolyfill,this.layer.layout,0,2),this.stereoTexturePoints[0]=this._offsetTextureUVsByRect(this.mediaTexturePolyfill,this.texturePoints,e),rr(e,this.mediaTexturePolyfill,this.layer.layout,1,2),this.stereoTexturePoints[1]=this._offsetTextureUVsByRect(this.mediaTexturePolyfill,this.texturePoints,e),this.layer.layout===ve["stereo-top-bottom"]&&([this.stereoTexturePoints[0],this.stereoTexturePoints[1]]=[this.stereoTexturePoints[1],this.stereoTexturePoints[0]]);return}rr(e,this.layer.colorTexturesMeta[0],this.layer.layout,0,2),this.stereoTexturePoints[0]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e),rr(e,this.layer.colorTexturesMeta[0],this.layer.layout,1,2),this.stereoTexturePoints[1]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e),this.layer.layout===ve["stereo-top-bottom"]&&([this.stereoTexturePoints[0],this.stereoTexturePoints[1]]=[this.stereoTexturePoints[1],this.stereoTexturePoints[0]])}}_createVAOs(){this._recalculateVertices();let e=this.gl;this.vaoGl=Sf(e),this.saveVaoState();let t=e.createBuffer();this.vao=this.vaoGl.createVertexArray(),this.vaoGl.bindVertexArray(this.vao),e.enableVertexAttribArray(this.programInfo.attribLocations.a_position),e.bindBuffer(e.ARRAY_BUFFER,t);const i=this.positionPoints;e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW);var r=3,s=e.FLOAT,a=!1,o=0,l=0;e.vertexAttribPointer(this.programInfo.attribLocations.a_position,r,s,a,o,l),e.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),this.texcoordBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.texcoordBuffer),e.bufferData(e.ARRAY_BUFFER,this.texturePoints,e.STATIC_DRAW);var r=2,s=e.FLOAT,a=!1,o=0,l=0;e.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,r,s,a,o,l),this.restoreVaoState()}_renderInternal(e,t,i,r){let s=this.gl;const a=s.getParameter(s.CURRENT_PROGRAM);s.useProgram(this.program),this.vaoGl.bindVertexArray(this.vao),this.usesTextureArrayShaders&&s.uniform1i(this.programInfo.uniformLocations.u_layer,r),this._setTransformMatrix(e,t,i),s.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix,!1,this.transformMatrix),s.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix,!1,i.projectionMatrix);var o=s.TRIANGLES,l=0,c=this.positionPoints.length/3;s.drawArrays(o,l,c),this.vaoGl.bindVertexArray(null),s.useProgram(a)}_renderInternalStereo(e,t,i,r){if(i.eye==="none")return this._renderInternal(e,t,i);let s=this.gl;this.vaoGl.bindVertexArray(this.vao);const a=s.getParameter(s.CURRENT_PROGRAM);s.useProgram(this.program),this._setStereoTextureBuffer(i.eye==="right"?1:0),this.usesTextureArrayShaders&&s.uniform1i(this.programInfo.uniformLocations.u_layer,r),this._setTransformMatrix(e,t,i),s.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix,!1,this.transformMatrix),s.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix,!1,i.projectionMatrix);var o=s.TRIANGLES,l=0,c=this.positionPoints.length/3;s.drawArrays(o,l,c),this.vaoGl.bindVertexArray(null),s.useProgram(a)}_setTransformMatrix(e,t,i){let r=t.getPose(this.layer.space,e.getReferenceSpace());Ah(this.transformMatrix,r.transform.matrix,this.layer.transform.matrix),Ah(this.transformMatrix,i.transform.inverse.matrix,this.transformMatrix)}}class cT extends Mf{constructor(e,t){super(e,t),this.initialize()}createPositionPoints(){const e=this.layer.width,t=this.layer.height,i=0,r=[-e,-t,i,e,-t,i,-e,t,i,-e,t,i,e,-t,i,e,t,i];return new Float32Array(r)}createTextureUVs(){return new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1])}}class uT extends Mf{constructor(e,t){super(e,t),this.segments=16,this.initialize()}createPositionPoints(){const e=[],t=this.layer.centralAngle,i=this.layer.height,r=this.layer.radius,s=t/this.segments,a=Math.PI/2-t/2,o=[],l=Rh();l[0]=r*Math.cos(a),l[1]=-r*Math.sin(a),o.push(l);for(let c=0;c<this.segments;c++){const u=Rh();u[0]=r*Math.cos(a+s*(c+1)),u[1]=-r*Math.sin(a+s*(c+1)),o.push(u)}o.reverse();for(let c=0;c<this.segments;c++){const u=o[c],h=o[c+1];e.push(u[0],-i/2,u[1]),e.push(h[0],-i/2,h[1]),e.push(u[0],i/2,u[1]),e.push(u[0],i/2,u[1]),e.push(h[0],-i/2,h[1]),e.push(h[0],i/2,h[1])}return new Float32Array(e)}createTextureUVs(){let e=[];const t=1/this.segments;for(let i=0;i<this.segments;i++){let r=t*i,s=t*(i+1);e.push(r,0),e.push(s,0),e.push(r,1),e.push(r,1),e.push(s,0),e.push(s,1)}return new Float32Array(e)}}class hT extends Mf{constructor(e,t){super(e,t),this.segmentsPerAxis=40,this.initialize()}createPositionPoints(){const e=[];let t=this.layer.radius;t===0&&(t=25),t>25&&(t=25);const i=this.layer.centralHorizontalAngle,r=this.layer.upperVerticalAngle+Math.PI/2,s=this.layer.lowerVerticalAngle+Math.PI/2,a=r,o=s,l=Math.PI/2-i/2,c=l+i,u=o-a,h=c-l,f=[];for(let g=0;g<=this.segmentsPerAxis;g++)for(let x=0;x<=this.segmentsPerAxis;x++){const d=x/this.segmentsPerAxis,p=g/this.segmentsPerAxis;let b=t,v=c-h*d,M=u*p+a;const R=Math.cos(v)*Math.sin(M),T=Math.cos(M),A=-Math.sin(v)*Math.sin(M);f.push([b*R,b*T,b*A])}const m=this.segmentsPerAxis+1;for(let g=0;g<this.segmentsPerAxis;g++)for(let x=0;x<this.segmentsPerAxis;x++)e.push(...f[x*m+g]),e.push(...f[x*m+g+1]),e.push(...f[(x+1)*m+g]),e.push(...f[(x+1)*m+g]),e.push(...f[x*m+g+1]),e.push(...f[(x+1)*m+g+1]);return new Float32Array(e)}createTextureUVs(){const e=[],t=[];for(let r=0;r<=this.segmentsPerAxis;r++)for(let s=0;s<=this.segmentsPerAxis;s++){const a=s/this.segmentsPerAxis,o=r/this.segmentsPerAxis;t.push([a,o])}const i=this.segmentsPerAxis+1;for(let r=0;r<this.segmentsPerAxis;r++)for(let s=0;s<this.segmentsPerAxis;s++)e.push(...t[s*i+r]),e.push(...t[s*i+r+1]),e.push(...t[(s+1)*i+r]),e.push(...t[(s+1)*i+r]),e.push(...t[s*i+r+1]),e.push(...t[(s+1)*i+r+1]);return new Float32Array(e)}}const K0={colorFormat:6408,mipLevels:1,layout:ve.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0};class nx extends wa{constructor(e=K0){if(super(),!fo(e.space))throw new TypeError("XRCubeLayer's space needs to be an XRReferenceSpace");switch(this.init=Object.assign(Object.assign({},K0),e),this.space=this.init.space,this.isStatic=this.init.isStatic,this.init.orientation?this.orientation=DOMPointReadOnly.fromPoint(this.init.orientation):this.orientation=new DOMPointReadOnly,this.init.layout){case ve.default:case ve["stereo-left-right"]:case ve["stereo-top-bottom"]:throw new TypeError("Invalid layout format for XRCubeLayer")}this.layout=this.init.layout,this.needsRedraw=!0}initialize(e,t){super.initialize(e,t),this._allocateColorTexturesInternal(),this._allocateDepthStencilTexturesInternal()}_allocateColorTexturesInternal(){if(this._colorTextures=[],this._texturesMeta=[],this.layout===ve.mono){const e=this._createCubeColorTexture();this._texturesMeta.push(e),this._colorTextures.push(e.texture);return}else{const e=this._createCubeColorTexture(),t=this._createCubeColorTexture();this._texturesMeta.push(e,t),this._colorTextures.push(e.texture,t.texture);return}}_allocateDepthStencilTexturesInternal(){if(this._depthStencilTextures=[],!!this.init.depthFormat){if(this.context instanceof WebGLRenderingContext&&!this.context.getExtension("WEBGL_depth_texture"))throw new TypeError("Depth textures not supported in the current context");if(this.layout===ve.mono){const e=this._createCubeDepthTexture();this._depthStencilTextures.push(e.texture);return}else{const e=this._createCubeDepthTexture(),t=this._createCubeDepthTexture();this._depthStencilTextures.push(e.texture,t.texture);return}}}_createCubeColorTexture(){let e=this.context.createTexture(),t={width:this.init.viewPixelWidth,height:this.init.viewPixelHeight,layers:1,type:Ke.texture,textureFormat:this.init.colorFormat,texture:e};const i=this.context.getParameter(this.context.TEXTURE_BINDING_CUBE_MAP);this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,e);for(let r=0;r<6;r++)this.context.texImage2D(this.context.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,t.textureFormat,t.width,t.height,0,t.textureFormat,this.context.UNSIGNED_BYTE,null);return this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,i),t}_createCubeDepthTexture(){let e=this.context.createTexture(),t={width:this.init.viewPixelWidth,height:this.init.viewPixelHeight,layers:1,type:Ke.texture,textureFormat:this.init.depthFormat,texture:e};const i=this.context.getParameter(this.context.TEXTURE_BINDING_CUBE_MAP);this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,e);let r=this.init.depthFormat;this.context instanceof WebGL2RenderingContext&&(r===this.context.DEPTH_COMPONENT&&(r=this.context.DEPTH_COMPONENT24),r===this.context.DEPTH_STENCIL&&(r=this.context.DEPTH24_STENCIL8));for(let s=0;s<6;s++)this.context.texImage2D(this.context.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,r,t.width,t.height,0,t.textureFormat,this.context.UNSIGNED_INT,null);return this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,i),t}getTextureType(){return Ke.texture}}const ix=n=>n,fT=ix`
attribute vec4 a_position;
uniform mat4 u_projectionMatrix;
uniform mat4 u_matrix;
varying vec3 v_normal;

void main() {
   gl_Position = u_projectionMatrix * u_matrix * a_position;

   v_normal = normalize(a_position.xyz);
}
`,dT=ix`
precision mediump float;

varying vec3 v_normal;

uniform samplerCube u_texture;

void main() {
   gl_FragColor = textureCube(u_texture, normalize(v_normal));
}
`;class pT{constructor(e,t){this.savedVaoState={vao:null,arrayBuffer:null},this.hasMipmap=!1,this.layer=e,this.gl=t,this.transformMatrix=Th(),this.program=po(t,fT,dT),this.programInfo={attribLocations:{a_position:t.getAttribLocation(this.program,"a_position")},uniformLocations:{u_matrix:t.getUniformLocation(this.program,"u_matrix"),u_texture:t.getUniformLocation(this.program,"u_texture"),u_projectionMatrix:t.getUniformLocation(this.program,"u_projectionMatrix")}},this._createVAOs()}saveVaoState(){this.savedVaoState.vao=this.gl.getParameter(this.vaoGl.VERTEX_ARRAY_BINDING),this.savedVaoState.arrayBuffer=this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING)}restoreVaoState(){this.vaoGl.bindVertexArray(this.savedVaoState.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.savedVaoState.arrayBuffer),this.savedVaoState.vao=this.savedVaoState.arrayBuffer=null}render(e,t){this.saveVaoState();let i=this.gl,r=e.getBaseLayer(),s=t.getViewerPose(e.getReferenceSpace());const a=i.getParameter(i.ACTIVE_TEXTURE);for(let o of s.views){let l=r.getViewport(o);i.viewport(l.x,l.y,l.width,l.height),i.activeTexture(i.TEXTURE0);const c=i.getParameter(i.TEXTURE_BINDING_CUBE_MAP);if(this.layer.layout===ve.stereo){const u=o.eye==="right"?1:0;i.bindTexture(i.TEXTURE_CUBE_MAP,this.layer.colorTextures[u])}else i.bindTexture(i.TEXTURE_CUBE_MAP,this.layer.colorTextures[0]);this.layer.isStatic?(this.layer.needsRedraw===!0&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this.hasMipmap=!0):this.hasMipmap=this.layer.mipLevels>0,i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,this.hasMipmap?i.LINEAR_MIPMAP_LINEAR:i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,this.hasMipmap?i.LINEAR_MIPMAP_LINEAR:i.LINEAR),this._renderInternal(this.layer.orientation,o),i.activeTexture(a),i.bindTexture(i.TEXTURE_CUBE_MAP,c)}this.restoreVaoState()}createPositionPoints(){const t=[-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5];return new Float32Array(t)}_renderInternal(e,t){let i=this.gl;const r=i.getParameter(i.CURRENT_PROGRAM);i.useProgram(this.program),this.vaoGl.bindVertexArray(this.vao),Z0(this.transformMatrix,[e.x,e.y,e.z,e.w]),this._poseOrientationMatrix||(this._poseOrientationMatrix=Th()),Z0(this._poseOrientationMatrix,[t.transform.inverse.orientation.x,t.transform.inverse.orientation.y,t.transform.inverse.orientation.z,t.transform.inverse.orientation.w]),Ah(this.transformMatrix,this.transformMatrix,this._poseOrientationMatrix),i.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix,!1,this.transformMatrix),i.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix,!1,t.projectionMatrix),i.uniform1i(this.programInfo.uniformLocations.u_texture,0);var s=i.TRIANGLES,a=0,o=this.positionPoints.length/3;i.drawArrays(s,a,o),this.vaoGl.bindVertexArray(null),i.useProgram(r)}_recalculateVertices(){this.positionPoints=this.createPositionPoints()}_createVAOs(){this._recalculateVertices();let e=this.gl;this.vaoGl=Sf(e),this.saveVaoState();let t=e.createBuffer();this.vao=this.vaoGl.createVertexArray(),this.vaoGl.bindVertexArray(this.vao),e.enableVertexAttribArray(this.programInfo.attribLocations.a_position),e.bindBuffer(e.ARRAY_BUFFER,t);const i=this.positionPoints;e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW);var r=3,s=e.FLOAT,a=!1,o=0,l=0;e.vertexAttribPointer(this.programInfo.attribLocations.a_position,r,s,a,o,l),this.restoreVaoState()}}class ll{constructor(){this.mode="inline",this.layers=[],this.views=[],this.initializedViews=!1,this.isPolyfillActive=!1,this.taskQueue=[]}requestAnimationFrame(e){this.injectedFrameCallback||(this.injectedFrameCallback=(t,i)=>{let r=this.context;if(!this.initializedViews&&this.referenceSpace){let s=i.getViewerPose(this.referenceSpace);s&&(this.views=s.views,this.initializedViews=!0)}if(this.isPolyfillActive&&this.initializedViews){this.tempFramebuffer||(this.tempFramebuffer=r.createFramebuffer()),r.bindFramebuffer(r.FRAMEBUFFER,this.tempFramebuffer);const s=r.getParameter(r.COLOR_CLEAR_VALUE),a=r.getParameter(r.FRAMEBUFFER_BINDING);r.clearColor(0,0,0,0);for(let o of this.layers)if(o instanceof Gl)for(let l=0;l<o.colorTextures.length;l++)o.colorTexturesMeta[l].type===Ke["texture-array"]||(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o.colorTextures[l],0),o.depthStencilTextures&&l<o.depthStencilTextures.length?r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,o.depthStencilTextures[l],0):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,null,0),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT));r.bindFramebuffer(r.FRAMEBUFFER,a),r.clearColor(s[0],s[1],s[2],s[3])}if(e(t,i),this.isPolyfillActive&&this.initializedViews){let s=r.isEnabled(r.BLEND),a=r.isEnabled(r.DEPTH_TEST),o=r.isEnabled(r.CULL_FACE);const l=r.getParameter(r.FRAMEBUFFER_BINDING),c=r.getParameter(r.COLOR_CLEAR_VALUE);r.bindFramebuffer(r.FRAMEBUFFER,this.getBaseLayer().framebuffer),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.clearColor(c[0],c[1],c[2],c[3]),r.enable(r.BLEND),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE);let u=r.getParameter(r.BLEND_SRC_RGB),h=r.getParameter(r.BLEND_SRC_ALPHA),f=r.getParameter(r.BLEND_DST_RGB),m=r.getParameter(r.BLEND_DST_ALPHA);r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);for(let g of this.layers)if(this.renderers||(this.renderers=new WeakMap),g instanceof Gl)this.renderers.has(g)||this.renderers.set(g,rT(g,this.context)),this.renderers.get(g).render(this);else if(g instanceof yf)this.renderers.has(g)||this.renderers.set(g,new cT(g,this.context)),this.renderers.get(g).render(this,i);else if(g instanceof vf)this.renderers.has(g)||this.renderers.set(g,new uT(g,this.context)),this.renderers.get(g).render(this,i);else if(g instanceof _f)this.renderers.has(g)||this.renderers.set(g,new hT(g,this.context)),this.renderers.get(g).render(this,i);else if(g instanceof nx)this.renderers.has(g)||this.renderers.set(g,new pT(g,this.context)),this.renderers.get(g).render(this,i);else{const x=g;if(x.framebuffer===null)continue;r instanceof WebGL2RenderingContext?(r.bindFramebuffer(r.READ_FRAMEBUFFER,x.framebuffer),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,this.getBaseLayer().framebuffer),r.blitFramebuffer(0,0,x.framebufferWidth,x.framebufferHeight,0,0,this.getBaseLayer().framebufferWidth,this.getBaseLayer().framebufferHeight,r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT,r.LINEAR)):console.warn("GL blitFramebuffer is not supported on WebGL1, so XRWebGLLayers may not show up properly when polyfilled.")}for(s||r.disable(r.BLEND),a&&r.enable(r.DEPTH_TEST),o&&r.enable(r.CULL_FACE),r.blendFuncSeparate(u,f,h,m),r.bindFramebuffer(r.FRAMEBUFFER,l);this.taskQueue.length>0;)this.taskQueue.shift()()}}),this._requestAnimationFrame(this.injectedFrameCallback)}updateRenderState(e){if(this.existingBaseLayer=e.baseLayer,e.layers&&(this.layers=e.layers),this.activeRenderState||this.createActiveRenderState(),this.activeRenderState=Object.assign(Object.assign({},this.activeRenderState),e),!e.layers){this._updateRenderState(e);return}let t=Object.assign({},e);delete t.layers;let i;for(let r of this.layers)if(r instanceof wa){i=r.getContext();break}if(!i&&!this.context){let s=function(){i.canvas.width=i.canvas.clientWidth*window.devicePixelRatio,i.canvas.height=i.canvas.clientHeight*window.devicePixelRatio};console.log("No existing context! Have the session make one");const r=document.createElement("canvas");if(i=r.getContext("webgl2",{xrCompatible:!0}),i||(i=r.getContext("webgl",{xrCompatible:!0})),!i)throw new Error("No webGL support detected.");document.body.appendChild(i.canvas),window.addEventListener("resize",s),s()}this.createInternalLayer(i),this.isPolyfillActive=!0,this._updateRenderState(Object.assign(Object.assign({},t),{baseLayer:this.internalLayer}))}initializeSession(e){this.mode=e,this.requestReferenceSpace("local").then(t=>{this.referenceSpace=t}).catch(t=>{}),this.requestReferenceSpace("viewer").then(t=>{this.viewerSpace=t})}getBaseLayer(e){return!this.internalLayer&&!this.existingBaseLayer&&e&&this.createInternalLayer(e),this.internalLayer||this.existingBaseLayer}getReferenceSpace(){return this.referenceSpace?this.referenceSpace:this.viewerSpace}getViewerSpace(){return this.viewerSpace}queueTask(e){this.taskQueue.push(e)}get renderState(){return this.activeRenderState||this.createActiveRenderState(),this.activeRenderState}get internalViews(){return this.views}getViewIndex(e){for(let t=0;t<this.views.length;t++){let i=this.views[t];if(e.eye===i.eye&&e.recommendedViewportScale===i.recommendedViewportScale)return t}return-1}createInternalLayer(e){if(!e&&this.internalLayer)return this.internalLayer;if(e===this.context&&this.internalLayer)return this.internalLayer;const t=ma();return this.internalLayer=new t.XRWebGLLayer(this,e),this.setContext(e),this.internalLayer}setContext(e){this.context=e,this.tempFramebuffer=e.createFramebuffer(),this.renderers=new WeakMap}createActiveRenderState(){const e=ma();let t=Object.getOwnPropertyNames(e.XRRenderState.prototype);const i={};for(let r of t)i[r]=this._renderState[r];i.layers=[],this.activeRenderState=i}}class Q0{constructor(){this.viewport={x:0,y:0,width:0,height:0}}}class mT{constructor(e,t){this.session=e,this.context=t,this.subImageCache=new gT}createProjectionLayer(e=bh){const t=new Gl(e);if(this.session.ended)throw new Error("Session has ended");if(this.context.isContextLost())throw new Error("context is lost");return t.initialize(this.session,this.context),t}createQuadLayer(e=ex){if(this.session.ended)throw new Error("Session has ended");if(this.context.isContextLost())throw new Error("context is lost");if(e.layout===ve.default)throw new TypeError("Trying to create a quad layer with default layout");const t=new yf(e);return t.initialize(this.session,this.context),t}createCylinderLayer(e=Qg){if(this.session.ended)throw new Error("Session has ended");if(this.context.isContextLost())throw new Error("context is lost");if(e.layout===ve.default)throw new TypeError("Cylinder Layer cannot have a default layout");const t=new vf(e);return t.initialize(this.session,this.context),t}createEquirectLayer(e=Jg){if(this.session.ended)throw new Error("Session has ended");if(this.context.isContextLost())throw new Error("context is lost");if(e.layout===ve.default)throw new TypeError("Equirect Layer cannot have a default layout");if(!fo(e.space))throw new TypeError("Equirect layer requires an XRReferenceSpace");let t=new _f(e);return t.initialize(this.session,this.context),t}createCubeLayer(e){if(this.session.ended)throw new Error("Session has ended");if(this.context.isContextLost())throw new Error("context is lost");if(!(this.context instanceof WebGL2RenderingContext))throw new Error("XRCubeLayer only work on WebGL2");if(!fo(e.space))throw new TypeError("XRCubeLayer requires a space of type XRReferenceSpace");let t=new nx(e);return t.initialize(this.session,this.context),t}getSubImage(e,t,i="none"){if(e.isStatic&&e.needsRedraw===!1)throw new Error("Invalid state for subimage creation");let r=this.subImageCache.tryGetCachedSubImage(this.context,e,i);if(r)return r;let s=new Q0;if(e instanceof Gl)throw new TypeError;if(e.layout===ve.default)throw new TypeError;if(!this.validateStateofSubImageCreation(e,t))throw new Error("Invalid state for subimage creation");let a=0;if(e.layout===ve.stereo){if(i==="none")throw new TypeError;i==="right"&&(a=1)}e.getTextureType()===Ke["texture-array"]?s.imageIndex=a:s.imageIndex=0;let o=0;e.getTextureType()===Ke.texture?(s.colorTexture=e.colorTextures[a],o=a):(s.colorTexture=e.colorTextures[0],o=0),!e.depthStencilTextures||!e.depthStencilTextures.length?s.depthStencilTexture=null:e.getTextureType()===Ke.texture?s.depthStencilTexture=e.depthStencilTextures[a]:s.depthStencilTexture=e.depthStencilTextures[0];const l=e.colorTexturesMeta[o];s.textureWidth=l.width,s.textureHeight=l.height;let c=1;return(e.layout===ve["stereo-left-right"]||e.layout===ve["stereo-top-bottom"])&&(c=2),rr(s.viewport,l,e.layout,a,c),this.session.queueTask(()=>{e.needsRedraw=!1}),this.subImageCache.cacheSubImage(s,this.context,e,i),s}getViewSubImage(e,t){let i=this.subImageCache.tryGetCachedViewSubImage(this.context,e,t);if(i)return i;let r=new Q0,s=this.session;if(!s.internalViews||!s.internalViews.length)return console.warn("Tried to get view sub image before we have any views"),r;let a=s.getViewIndex(t),o=0;return e.getTextureType()===Ke["texture-array"]?r.imageIndex=a:r.imageIndex=0,e.layout===ve.default&&e.getTextureType()===Ke.texture?(r.colorTexture=e.colorTextures[a],o=a):(r.colorTexture=e.colorTextures[0],o=0),e.depthStencilTextures.length===0?r.depthStencilTexture=null:e.layout===ve.default&&e.getTextureType()===Ke.texture?r.depthStencilTexture=e.depthStencilTextures[a]:r.depthStencilTexture=e.depthStencilTextures[0],r.textureWidth=e.colorTexturesMeta[o].width,r.textureHeight=e.colorTexturesMeta[o].height,rr(r.viewport,e.colorTexturesMeta[o],e.layout,a,s.internalViews.length),e.needsRedraw=!1,this.subImageCache.cacheViewSubImage(r,this.context,e,t),r}validateStateofSubImageCreation(e,t){return!(t.session!==e.session||this.session!==e.session||this.context!==e.context||!e.colorTextures||!e.colorTextures.length||e.isStatic&&e.needsRedraw===!1)}}class gT{constructor(){this.cache=new Map,this.viewCache=new Map}cacheSubImage(e,t,i,r){let s=new Map;s.set(r,e);let a=new Map;a.set(i,s),this.cache.set(t,a)}tryGetCachedSubImage(e,t,i){var r,s;return(s=(r=this.cache.get(e))===null||r===void 0?void 0:r.get(t))===null||s===void 0?void 0:s.get(i)}cacheViewSubImage(e,t,i,r){let s=new Map;s.set(r,e);let a=new Map;a.set(i,s),this.viewCache.set(t,a)}tryGetCachedViewSubImage(e,t,i){var r,s;return(s=(r=this.viewCache.get(e))===null||r===void 0?void 0:r.get(t))===null||s===void 0?void 0:s.get(i)}}const xT=n=>n.navigator.xr?!!(n.XRMediaBinding&&n.XRWebGLBinding):!1;class vT{constructor(){this.injected=!1;const e=ma();this._injectPolyfill(e)}_injectPolyfill(e){if(!("xr"in e.navigator))throw new Error("WebXR Layers polyfill requires WebXR support.");this.injected===!0&&console.warn("Polyfill has already been injected..."),!xT(e)&&(this._polyfillRequiredLayersFeature(e),this._polyfillXRSession(e),e.XRWebGLBinding=mT,e.XRMediaBinding=K5,this.injected=!0,console.log("Injected Layers Polyfill"))}_polyfillXRSession(e){e.XRSession.prototype._updateRenderState=e.XRSession.prototype.updateRenderState,e.XRSession.prototype._requestAnimationFrame=e.XRSession.prototype.requestAnimationFrame;let t=Object.getOwnPropertyDescriptor(e.XRSession.prototype,"renderState");Object.defineProperty(e.XRSession.prototype,"_renderState",t);let i=Object.getOwnPropertyDescriptor(ll.prototype,"renderState");Object.defineProperty(e.XRSession.prototype,"renderState",i);let r=Object.getOwnPropertyNames(ll.prototype);for(let s of r){let a=Object.getOwnPropertyDescriptor(ll.prototype,s);Object.defineProperty(e.XRSession.prototype,s,a)}}_polyfillRequiredLayersFeature(e){const t=e.navigator.xr.requestSession;Object.defineProperty(e.navigator.xr,"requestSessionInternal",{writable:!0}),e.navigator.xr.requestSessionInternal=t;const i=(r,s)=>{const a=(o,l)=>e.navigator.xr.requestSessionInternal(o,l).then(c=>{Object.assign(c,new ll);let u=c;return u.initializeSession(r),Promise.resolve(u)});if(r!=="immersive-vr"||!s)return a(r,s);if(s.requiredFeatures&&s.requiredFeatures.indexOf("layers")>-1){const o=Object.assign({},s),l=[...s.requiredFeatures],c=l.indexOf("layers");return l.splice(c,1),o.requiredFeatures=l,a(r,o)}return a(r,s)};Object.defineProperty(e.navigator.xr,"requestSession",{writable:!0}),e.navigator.xr.requestSession=i}}const Ga={ipd:.063,fovy:Math.PI/2,headsetPosition:new Xr(0,1.6,0),headsetQuaternion:new eo,stereoEnabled:!1},_T=1,yT=2,ST=3,MT=4;class ET{constructor(e,t={}){var i,r,s,a,o,l;this.version=j0;const c=new b5,u=new Zr(jt.Viewer,c),h={[yt.Left]:new Ct(u),[yt.Right]:new Ct(u),[yt.None]:new Ct(u)},f=e.controllerConfig,m={};f&&Object.values(Tn).forEach(d=>{f.layout[d]&&(m[d]=new R5(f,d,c))});const g={[Tn.Left]:new X0(D0,Tn.Left,c),[Tn.Right]:new X0(D0,Tn.Right,c)},x=(i=t.canvasContainer)!==null&&i!==void 0?i:document.createElement("div");x.dataset.webxr_runtime=`Immersive Web Emulation Runtime v${j0}`,x.style.position="fixed",x.style.width="100%",x.style.height="100%",x.style.top="0",x.style.left="0",x.style.display="flex",x.style.justifyContent="center",x.style.alignItems="center",x.style.overflow="hidden",x.style.zIndex="999",this[$]={name:e.name,supportedSessionModes:e.supportedSessionModes,supportedFeatures:e.supportedFeatures,supportedFrameRates:e.supportedFrameRates,isSystemKeyboardSupported:e.isSystemKeyboardSupported,internalNominalFrameRate:e.internalNominalFrameRate,environmentBlendModes:e.environmentBlendModes,interactionMode:e.interactionMode,userAgent:e.userAgent,position:(r=t.headsetPosition)!==null&&r!==void 0?r:Ga.headsetPosition.clone(),quaternion:(s=t.headsetQuaternion)!==null&&s!==void 0?s:Ga.headsetQuaternion.clone(),stereoEnabled:(a=t.stereoEnabled)!==null&&a!==void 0?a:Ga.stereoEnabled,ipd:(o=t.ipd)!==null&&o!==void 0?o:Ga.ipd,fovy:(l=t.fovy)!==null&&l!==void 0?l:Ga.fovy,controllers:m,hands:g,primaryInputMode:"controller",pendingReferenceSpaceReset:!1,visibilityState:"visible",pendingVisibilityState:null,xrSystem:null,matrix:Yt(),globalSpace:c,viewerSpace:u,viewSpaces:h,canvasContainer:x,getViewport:(d,p)=>{const b=d.context.canvas,{width:v,height:M}=b;switch(p.eye){case yt.None:return new ol(0,0,v,M);case yt.Left:return new ol(0,0,this[$].stereoEnabled?v/2:v,M);case yt.Right:return new ol(v/2,0,this[$].stereoEnabled?v/2:0,M)}},updateViews:()=>{const d=this[$].viewerSpace;Mo(d[Ft].offsetMatrix,this[$].quaternion.quat,this[$].position.vec3),fa(this[$].viewSpaces[yt.Left][Ft].offsetMatrix,Zn(-this[$].ipd/2,0,0)),fa(this[$].viewSpaces[yt.Right][Ft].offsetMatrix,Zn(this[$].ipd/2,0,0))},onBaseLayerSet:d=>{if(!d)return;const p=d.context.canvas;if(p.parentElement!==this[$].canvasContainer){const b=this[$].devui;if(b){const{devUICanvas:M,devUIContainer:R}=b;M.style.zIndex=ST.toString(),R.style.zIndex=MT.toString(),this[$].canvasContainer.appendChild(b.devUICanvas),this[$].canvasContainer.appendChild(b.devUIContainer)}const v=this[$].sem;v&&(v.environmentCanvas.style.zIndex=_T.toString(),this[$].canvasContainer.appendChild(v.environmentCanvas)),this[$].canvasData={canvas:p,parent:p.parentElement,width:p.width,height:p.height,zIndex:p.style.zIndex},p.style.zIndex=yT.toString(),this[$].canvasContainer.appendChild(p),document.body.appendChild(this[$].canvasContainer)}p.width=window.innerWidth,p.height=window.innerHeight},onSessionEnd:()=>{if(this[$].canvasData){const{canvas:d,parent:p,width:b,height:v,zIndex:M}=this[$].canvasData;d.width=b,d.height=v,d.style.zIndex=M,p?p.appendChild(d):this[$].canvasContainer.removeChild(d);const R=this[$].devui;R&&(this[$].canvasContainer.removeChild(R.devUICanvas),this[$].canvasContainer.removeChild(R.devUIContainer));const T=this[$].sem;T&&this[$].canvasContainer.removeChild(T.environmentCanvas),document.body.removeChild(this[$].canvasContainer),this[$].canvasData=void 0,window.dispatchEvent(new Event("resize"))}},onFrameStart:d=>{var p;if(!((p=this[$].actionPlayer)===null||p===void 0)&&p.playing)this[$].actionPlayer.playFrame();else{const b=d.session;this[$].updateViews(),this[$].pendingVisibilityState&&(this[$].visibilityState=this[$].pendingVisibilityState,this[$].pendingVisibilityState=null,b.dispatchEvent(new Vl("visibilitychange",{session:b}))),this[$].visibilityState==="visible"&&this.activeInputs.forEach(v=>{v.onFrameStart(d)}),this[$].pendingReferenceSpaceReset&&(b[N].referenceSpaces.forEach(v=>{switch(v[Ji].type){case jt.Local:case jt.LocalFloor:case jt.BoundedFloor:case jt.Unbounded:v.dispatchEvent(new q0("reset",{referenceSpace:v}));break}}),this[$].pendingReferenceSpaceReset=!1)}this[$].updateViews()}},this[$].updateViews()}installRuntime(e){var t;const i=(t=e?.globalObject)!==null&&t!==void 0?t:globalThis,r=e?.polyfillLayers;Object.defineProperty(WebGL2RenderingContext.prototype,"makeXRCompatible",{value:function(){return new Promise((s,a)=>{s(!0)})},configurable:!0}),this[$].xrSystem=new $0(this),Object.defineProperty(globalThis.navigator,"xr",{value:this[$].xrSystem,configurable:!0}),Object.defineProperty(navigator,"userAgent",{value:this[$].userAgent,writable:!1,configurable:!1,enumerable:!0}),i.XRSystem=$0,i.XRSession=mf,i.XRRenderState=Eh,i.XRFrame=Zg,i.XRSpace=Ct,i.XRReferenceSpace=Zr,i.XRJointSpace=xf,i.XRView=qg,i.XRViewport=ol,i.XRRigidTransform=Qr,i.XRPose=hc,i.XRViewerPose=Yg,i.XRJointPose=$g,i.XRInputSource=uc,i.XRInputSourceArray=A5,i.XRHand=gf,i.XRLayer=Kg,i.XRWebGLLayer=j5,i.XRSessionEvent=Vl,i.XRInputSourceEvent=yl,i.XRInputSourcesChangeEvent=Xg,i.XRReferenceSpaceEvent=q0,r?new vT:(i.XRMediaBinding=void 0,i.XRWebGLBinding=void 0)}installDevUI(e){this[$].devui=new e(this)}installSEM(e){this[$].sem=new e(this)}get supportedSessionModes(){return this[$].supportedSessionModes}get supportedFeatures(){return this[$].supportedFeatures}get supportedFrameRates(){return this[$].supportedFrameRates}get isSystemKeyboardSupported(){return this[$].isSystemKeyboardSupported}get internalNominalFrameRate(){return this[$].internalNominalFrameRate}get stereoEnabled(){return this[$].stereoEnabled}set stereoEnabled(e){this[$].stereoEnabled=e}get ipd(){return this[$].ipd}set ipd(e){this[$].ipd=e}get fovy(){return this[$].fovy}set fovy(e){this[$].fovy=e}get position(){return this[$].position}get quaternion(){return this[$].quaternion}get viewerSpace(){var e;return!((e=this[$].actionPlayer)===null||e===void 0)&&e.playing?this[$].actionPlayer.viewerSpace:this[$].viewerSpace}get viewSpaces(){var e;return!((e=this[$].actionPlayer)===null||e===void 0)&&e.playing?this[$].actionPlayer.viewSpaces:this[$].viewSpaces}get controllers(){return this[$].controllers}get hands(){return this[$].hands}get primaryInputMode(){return this[$].primaryInputMode}set primaryInputMode(e){if(e!=="controller"&&e!=="hand"){console.warn('primary input mode can only be "controller" or "hand"');return}this[$].primaryInputMode=e}get activeInputs(){return this[$].visibilityState!=="visible"?[]:(this[$].primaryInputMode==="controller"?Object.values(this[$].controllers):Object.values(this[$].hands)).filter(t=>t.connected)}get inputSources(){var e;return!((e=this[$].actionPlayer)===null||e===void 0)&&e.playing?this[$].actionPlayer.inputSources:this.activeInputs.map(t=>t.inputSource)}get canvasContainer(){return this[$].canvasContainer}get canvasDimensions(){if(this[$].canvasData){const{width:e,height:t}=this[$].canvasData.canvas;return{width:e,height:t}}}get activeSession(){var e;return(e=this[$].xrSystem)===null||e===void 0?void 0:e[Un].activeSession}get sessionOffered(){var e;return!!(!((e=this[$].xrSystem)===null||e===void 0)&&e[Un].offeredSessionConfig)}get name(){return this[$].name}grantOfferedSession(){const e=this[$].xrSystem,t=e?.[Un];if(t&&t.offeredSessionConfig){const{resolve:i,reject:r,mode:s,options:a}=t.offeredSessionConfig;t.offeredSessionConfig=void 0,e.requestSession(s,a).then(i).catch(r)}}recenter(){const e=new Xr(-this.position.x,0,-this.position.z),t=new Xr(0,0,-1).applyQuaternion(this.quaternion);t.y=0,t.normalize();const i=Math.atan2(t.x,-t.z),r=new eo().setFromAxisAngle(new Xr(0,1,0),i);this.position.add(e),this.quaternion.multiply(r),[...Object.values(this[$].controllers),...Object.values(this[$].hands)].forEach(s=>{s.position.add(e),s.quaternion.multiply(r),s.position.applyQuaternion(r)}),this[$].pendingReferenceSpaceReset=!0}get visibilityState(){return this[$].visibilityState}updateVisibilityState(e){if(!Object.values(["visible","visible-blurred","hidden"]).includes(e))throw new DOMException("Invalid XRVisibilityState value","NotSupportedError");e!==this[$].visibilityState&&(this[$].pendingVisibilityState=e)}createActionPlayer(e,t){return this[$].actionPlayer=new q5(e,t,this[$].ipd),this[$].actionPlayer}get devui(){return this[$].devui}get sem(){return this[$].sem}}const pc={mapping:uo.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},mc={mapping:uo.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},wT={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:pc,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:mc,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},bT={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:pc,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:mc,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},TT={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:pc,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:mc,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},AT={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:pc,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:mc,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}},RT={name:"Oculus Quest 1",controllerConfig:wT,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","hand-tracking"],supportedFrameRates:[72,80,90],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{"immersive-vr":ei.Opaque,"immersive-ar":ei.AlphaBlend},interactionMode:pa.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},PT={name:"Meta Quest 2",controllerConfig:bT,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","mesh-detection","hit-test","hand-tracking"],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{"immersive-vr":ei.Opaque,"immersive-ar":ei.AlphaBlend},interactionMode:pa.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},CT={name:"Meta Quest Pro",controllerConfig:TT,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","mesh-detection","hit-test","hand-tracking"],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{"immersive-vr":ei.Opaque,"immersive-ar":ei.AlphaBlend},interactionMode:pa.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},LT={name:"Meta Quest 3",controllerConfig:AT,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","mesh-detection","hit-test","hand-tracking","depth-sensing"],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{"immersive-vr":ei.Opaque,"immersive-ar":ei.AlphaBlend},interactionMode:pa.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"};function IT(){let n=0,e=0;for(let i=0;i<28;i+=7){let r=this.buf[this.pos++];if(n|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[n,e]}let t=this.buf[this.pos++];if(n|=(t&15)<<28,e=(t&112)>>4,(t&128)==0)return this.assertBounds(),[n,e];for(let i=3;i<=31;i+=7){let r=this.buf[this.pos++];if(e|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[n,e]}throw new Error("invalid varint")}function Du(n,e,t){for(let s=0;s<28;s=s+7){const a=n>>>s,o=!(!(a>>>7)&&e==0),l=(o?a|128:a)&255;if(t.push(l),!o)return}const i=n>>>28&15|(e&7)<<4,r=e>>3!=0;if(t.push((r?i|128:i)&255),!!r){for(let s=3;s<31;s=s+7){const a=e>>>s,o=!!(a>>>7),l=(o?a|128:a)&255;if(t.push(l),!o)return}t.push(e>>>31&1)}}const Sl=4294967296;function J0(n){const e=n[0]==="-";e&&(n=n.slice(1));const t=1e6;let i=0,r=0;function s(a,o){const l=Number(n.slice(a,o));r*=t,i=i*t+l,i>=Sl&&(r=r+(i/Sl|0),i=i%Sl)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),e?sx(i,r):Ef(i,r)}function NT(n,e){let t=Ef(n,e);const i=t.hi&2147483648;i&&(t=sx(t.lo,t.hi));const r=rx(t.lo,t.hi);return i?"-"+r:r}function rx(n,e){if({lo:n,hi:e}=DT(n,e),e<=2097151)return String(Sl*e+n);const t=n&16777215,i=(n>>>24|e<<8)&16777215,r=e>>16&65535;let s=t+i*6777216+r*6710656,a=i+r*8147497,o=r*2;const l=1e7;return s>=l&&(a+=Math.floor(s/l),s%=l),a>=l&&(o+=Math.floor(a/l),a%=l),o.toString()+em(a)+em(s)}function DT(n,e){return{lo:n>>>0,hi:e>>>0}}function Ef(n,e){return{lo:n|0,hi:e|0}}function sx(n,e){return e=~e,n?n=~n+1:e+=1,Ef(n,e)}const em=n=>{const e=String(n);return"0000000".slice(e.length)+e};function tm(n,e){if(n>=0){for(;n>127;)e.push(n&127|128),n=n>>>7;e.push(n)}else{for(let t=0;t<9;t++)e.push(n&127|128),n=n>>7;e.push(1)}}function OT(){let n=this.buf[this.pos++],e=n&127;if((n&128)==0)return this.assertBounds(),e;if(n=this.buf[this.pos++],e|=(n&127)<<7,(n&128)==0)return this.assertBounds(),e;if(n=this.buf[this.pos++],e|=(n&127)<<14,(n&128)==0)return this.assertBounds(),e;if(n=this.buf[this.pos++],e|=(n&127)<<21,(n&128)==0)return this.assertBounds(),e;n=this.buf[this.pos++],e|=(n&15)<<28;for(let t=5;(n&128)!==0&&t<10;t++)n=this.buf[this.pos++];if((n&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var nm={};const ui=UT();function UT(){const n=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof n.getBigInt64=="function"&&typeof n.getBigUint64=="function"&&typeof n.setBigInt64=="function"&&typeof n.setBigUint64=="function"&&(!!globalThis.Deno||typeof process!="object"||typeof nm!="object"||nm.BUF_BIGINT_DISABLE!=="1")){const t=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),r=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){const o=typeof a=="bigint"?a:BigInt(a);if(o>i||o<t)throw new Error(`invalid int64: ${a}`);return o},uParse(a){const o=typeof a=="bigint"?a:BigInt(a);if(o>s||o<r)throw new Error(`invalid uint64: ${a}`);return o},enc(a){return n.setBigInt64(0,this.parse(a),!0),{lo:n.getInt32(0,!0),hi:n.getInt32(4,!0)}},uEnc(a){return n.setBigInt64(0,this.uParse(a),!0),{lo:n.getInt32(0,!0),hi:n.getInt32(4,!0)}},dec(a,o){return n.setInt32(0,a,!0),n.setInt32(4,o,!0),n.getBigInt64(0,!0)},uDec(a,o){return n.setInt32(0,a,!0),n.setInt32(4,o,!0),n.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(t){return typeof t!="string"&&(t=t.toString()),im(t),t},uParse(t){return typeof t!="string"&&(t=t.toString()),rm(t),t},enc(t){return typeof t!="string"&&(t=t.toString()),im(t),J0(t)},uEnc(t){return typeof t!="string"&&(t=t.toString()),rm(t),J0(t)},dec(t,i){return NT(t,i)},uDec(t,i){return rx(t,i)}}}function im(n){if(!/^-?[0-9]+$/.test(n))throw new Error("invalid int64: "+n)}function rm(n){if(!/^[0-9]+$/.test(n))throw new Error("invalid uint64: "+n)}const Ou=Symbol.for("@bufbuild/protobuf/text-encoding");function ax(){if(globalThis[Ou]==null){const n=new globalThis.TextEncoder,e=new globalThis.TextDecoder;globalThis[Ou]={encodeUtf8(t){return n.encode(t)},decodeUtf8(t){return e.decode(t)},checkUtf8(t){try{return encodeURIComponent(t),!0}catch{return!1}}}}return globalThis[Ou]}var er;(function(n){n[n.Varint=0]="Varint",n[n.Bit64=1]="Bit64",n[n.LengthDelimited=2]="LengthDelimited",n[n.StartGroup=3]="StartGroup",n[n.EndGroup=4]="EndGroup",n[n.Bit32=5]="Bit32"})(er||(er={}));const FT=34028234663852886e22,kT=-34028234663852886e22,BT=4294967295,zT=2147483647,HT=-2147483648;class xn{constructor(e=ax().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let r=0;r<this.chunks.length;r++)e+=this.chunks[r].length;let t=new Uint8Array(e),i=0;for(let r=0;r<this.chunks.length;r++)t.set(this.chunks[r],i),i+=this.chunks[r].length;return this.chunks=[],t}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),t=this.stack.pop();if(!t)throw new Error("invalid state, fork stack empty");return this.chunks=t.chunks,this.buf=t.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,t){return this.uint32((e<<3|t)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(sm(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return Uu(e),tm(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let t=this.encodeUtf8(e);return this.uint32(t.byteLength),this.raw(t)}float(e){VT(e);let t=new Uint8Array(4);return new DataView(t.buffer).setFloat32(0,e,!0),this.raw(t)}double(e){let t=new Uint8Array(8);return new DataView(t.buffer).setFloat64(0,e,!0),this.raw(t)}fixed32(e){sm(e);let t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,e,!0),this.raw(t)}sfixed32(e){Uu(e);let t=new Uint8Array(4);return new DataView(t.buffer).setInt32(0,e,!0),this.raw(t)}sint32(e){return Uu(e),e=(e<<1^e>>31)>>>0,tm(e,this.buf),this}sfixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),r=ui.enc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(t)}fixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),r=ui.uEnc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(t)}int64(e){let t=ui.enc(e);return Du(t.lo,t.hi,this.buf),this}sint64(e){const t=ui.enc(e),i=t.hi>>31,r=t.lo<<1^i,s=(t.hi<<1|t.lo>>>31)^i;return Du(r,s,this.buf),this}uint64(e){const t=ui.uEnc(e);return Du(t.lo,t.hi,this.buf),this}}class mt{constructor(e,t=ax().decodeUtf8){this.decodeUtf8=t,this.varint64=IT,this.uint32=OT,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.uint32(),t=e>>>3,i=e&7;if(t<=0||i<0||i>5)throw new Error("illegal tag: field no "+t+" wire type "+i);return[t,i]}skip(e,t){let i=this.pos;switch(e){case er.Varint:for(;this.buf[this.pos++]&128;);break;case er.Bit64:this.pos+=4;case er.Bit32:this.pos+=4;break;case er.LengthDelimited:let r=this.uint32();this.pos+=r;break;case er.StartGroup:for(;;){const[s,a]=this.tag();if(a===er.EndGroup){if(t!==void 0&&s!==t)throw new Error("invalid end group tag");break}this.skip(a,s)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return ui.dec(...this.varint64())}uint64(){return ui.uDec(...this.varint64())}sint64(){let[e,t]=this.varint64(),i=-(e&1);return e=(e>>>1|(t&1)<<31)^i,t=t>>>1^i,ui.dec(e,t)}bool(){let[e,t]=this.varint64();return e!==0||t!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return ui.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return ui.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),t=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(t,t+e)}string(){return this.decodeUtf8(this.bytes())}}function Uu(n){if(typeof n=="string")n=Number(n);else if(typeof n!="number")throw new Error("invalid int32: "+typeof n);if(!Number.isInteger(n)||n>zT||n<HT)throw new Error("invalid int32: "+n)}function sm(n){if(typeof n=="string")n=Number(n);else if(typeof n!="number")throw new Error("invalid uint32: "+typeof n);if(!Number.isInteger(n)||n>BT||n<0)throw new Error("invalid uint32: "+n)}function VT(n){if(typeof n=="string"){const e=n;if(n=Number(n),Number.isNaN(n)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof n!="number")throw new Error("invalid float32: "+typeof n);if(Number.isFinite(n)&&(n>FT||n<kT))throw new Error("invalid float32: "+n)}function am(){return{x:0,y:0}}const Cs={encode(n,e=new xn){return n.x!==0&&e.uint32(13).float(n.x),n.y!==0&&e.uint32(21).float(n.y),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=am();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==13)break;r.x=t.float();continue}case 2:{if(s!==21)break;r.y=t.float();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{x:kt(n.x)?globalThis.Number(n.x):0,y:kt(n.y)?globalThis.Number(n.y):0}},toJSON(n){const e={};return n.x!==0&&(e.x=n.x),n.y!==0&&(e.y=n.y),e},create(n){return Cs.fromPartial(n??{})},fromPartial(n){var e,t;const i=am();return i.x=(e=n.x)!==null&&e!==void 0?e:0,i.y=(t=n.y)!==null&&t!==void 0?t:0,i}};function om(){return{width:0,height:0}}const Ls={encode(n,e=new xn){return n.width!==0&&e.uint32(13).float(n.width),n.height!==0&&e.uint32(21).float(n.height),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=om();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==13)break;r.width=t.float();continue}case 2:{if(s!==21)break;r.height=t.float();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{width:kt(n.width)?globalThis.Number(n.width):0,height:kt(n.height)?globalThis.Number(n.height):0}},toJSON(n){const e={};return n.width!==0&&(e.width=n.width),n.height!==0&&(e.height=n.height),e},create(n){return Ls.fromPartial(n??{})},fromPartial(n){var e,t;const i=om();return i.width=(e=n.width)!==null&&e!==void 0?e:0,i.height=(t=n.height)!==null&&t!==void 0?t:0,i}};function lm(){return{x:0,y:0,z:0}}const $n={encode(n,e=new xn){return n.x!==0&&e.uint32(13).float(n.x),n.y!==0&&e.uint32(21).float(n.y),n.z!==0&&e.uint32(29).float(n.z),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=lm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==13)break;r.x=t.float();continue}case 2:{if(s!==21)break;r.y=t.float();continue}case 3:{if(s!==29)break;r.z=t.float();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{x:kt(n.x)?globalThis.Number(n.x):0,y:kt(n.y)?globalThis.Number(n.y):0,z:kt(n.z)?globalThis.Number(n.z):0}},toJSON(n){const e={};return n.x!==0&&(e.x=n.x),n.y!==0&&(e.y=n.y),n.z!==0&&(e.z=n.z),e},create(n){return $n.fromPartial(n??{})},fromPartial(n){var e,t,i;const r=lm();return r.x=(e=n.x)!==null&&e!==void 0?e:0,r.y=(t=n.y)!==null&&t!==void 0?t:0,r.z=(i=n.z)!==null&&i!==void 0?i:0,r}};function cm(){return{width:0,height:0,depth:0}}const Is={encode(n,e=new xn){return n.width!==0&&e.uint32(13).float(n.width),n.height!==0&&e.uint32(21).float(n.height),n.depth!==0&&e.uint32(29).float(n.depth),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=cm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==13)break;r.width=t.float();continue}case 2:{if(s!==21)break;r.height=t.float();continue}case 3:{if(s!==29)break;r.depth=t.float();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{width:kt(n.width)?globalThis.Number(n.width):0,height:kt(n.height)?globalThis.Number(n.height):0,depth:kt(n.depth)?globalThis.Number(n.depth):0}},toJSON(n){const e={};return n.width!==0&&(e.width=n.width),n.height!==0&&(e.height=n.height),n.depth!==0&&(e.depth=n.depth),e},create(n){return Is.fromPartial(n??{})},fromPartial(n){var e,t,i;const r=cm();return r.width=(e=n.width)!==null&&e!==void 0?e:0,r.height=(t=n.height)!==null&&t!==void 0?t:0,r.depth=(i=n.depth)!==null&&i!==void 0?i:0,r}};function um(){return{x:0,y:0,z:0,w:0}}const Ns={encode(n,e=new xn){return n.x!==0&&e.uint32(13).float(n.x),n.y!==0&&e.uint32(21).float(n.y),n.z!==0&&e.uint32(29).float(n.z),n.w!==0&&e.uint32(37).float(n.w),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=um();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==13)break;r.x=t.float();continue}case 2:{if(s!==21)break;r.y=t.float();continue}case 3:{if(s!==29)break;r.z=t.float();continue}case 4:{if(s!==37)break;r.w=t.float();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{x:kt(n.x)?globalThis.Number(n.x):0,y:kt(n.y)?globalThis.Number(n.y):0,z:kt(n.z)?globalThis.Number(n.z):0,w:kt(n.w)?globalThis.Number(n.w):0}},toJSON(n){const e={};return n.x!==0&&(e.x=n.x),n.y!==0&&(e.y=n.y),n.z!==0&&(e.z=n.z),n.w!==0&&(e.w=n.w),e},create(n){return Ns.fromPartial(n??{})},fromPartial(n){var e,t,i,r;const s=um();return s.x=(e=n.x)!==null&&e!==void 0?e:0,s.y=(t=n.y)!==null&&t!==void 0?t:0,s.z=(i=n.z)!==null&&i!==void 0?i:0,s.w=(r=n.w)!==null&&r!==void 0?r:0,s}};function hm(){return{offset:void 0,extent:void 0}}const Ds={encode(n,e=new xn){return n.offset!==void 0&&Cs.encode(n.offset,e.uint32(10).fork()).join(),n.extent!==void 0&&Ls.encode(n.extent,e.uint32(18).fork()).join(),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=hm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.offset=Cs.decode(t,t.uint32());continue}case 2:{if(s!==18)break;r.extent=Ls.decode(t,t.uint32());continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{offset:kt(n.offset)?Cs.fromJSON(n.offset):void 0,extent:kt(n.extent)?Ls.fromJSON(n.extent):void 0}},toJSON(n){const e={};return n.offset!==void 0&&(e.offset=Cs.toJSON(n.offset)),n.extent!==void 0&&(e.extent=Ls.toJSON(n.extent)),e},create(n){return Ds.fromPartial(n??{})},fromPartial(n){const e=hm();return e.offset=n.offset!==void 0&&n.offset!==null?Cs.fromPartial(n.offset):void 0,e.extent=n.extent!==void 0&&n.extent!==null?Ls.fromPartial(n.extent):void 0,e}};function fm(){return{offset:void 0,extent:void 0}}const Os={encode(n,e=new xn){return n.offset!==void 0&&$n.encode(n.offset,e.uint32(10).fork()).join(),n.extent!==void 0&&Is.encode(n.extent,e.uint32(18).fork()).join(),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=fm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.offset=$n.decode(t,t.uint32());continue}case 2:{if(s!==18)break;r.extent=Is.decode(t,t.uint32());continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{offset:kt(n.offset)?$n.fromJSON(n.offset):void 0,extent:kt(n.extent)?Is.fromJSON(n.extent):void 0}},toJSON(n){const e={};return n.offset!==void 0&&(e.offset=$n.toJSON(n.offset)),n.extent!==void 0&&(e.extent=Is.toJSON(n.extent)),e},create(n){return Os.fromPartial(n??{})},fromPartial(n){const e=fm();return e.offset=n.offset!==void 0&&n.offset!==null?$n.fromPartial(n.offset):void 0,e.extent=n.extent!==void 0&&n.extent!==null?Is.fromPartial(n.extent):void 0,e}};function dm(){return{orientation:void 0,position:void 0}}const Us={encode(n,e=new xn){return n.orientation!==void 0&&Ns.encode(n.orientation,e.uint32(10).fork()).join(),n.position!==void 0&&$n.encode(n.position,e.uint32(18).fork()).join(),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=dm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.orientation=Ns.decode(t,t.uint32());continue}case 2:{if(s!==18)break;r.position=$n.decode(t,t.uint32());continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{orientation:kt(n.orientation)?Ns.fromJSON(n.orientation):void 0,position:kt(n.position)?$n.fromJSON(n.position):void 0}},toJSON(n){const e={};return n.orientation!==void 0&&(e.orientation=Ns.toJSON(n.orientation)),n.position!==void 0&&(e.position=$n.toJSON(n.position)),e},create(n){return Us.fromPartial(n??{})},fromPartial(n){const e=dm();return e.orientation=n.orientation!==void 0&&n.orientation!==null?Ns.fromPartial(n.orientation):void 0,e.position=n.position!==void 0&&n.position!==null?$n.fromPartial(n.position):void 0,e}};function kt(n){return n!=null}var ga;(function(n){n[n.Keyboard=0]="Keyboard",n[n.UNRECOGNIZED=-1]="UNRECOGNIZED"})(ga||(ga={}));function GT(n){switch(n){case 0:case"Keyboard":return ga.Keyboard;case-1:case"UNRECOGNIZED":default:return ga.UNRECOGNIZED}}function WT(n){switch(n){case ga.Keyboard:return"Keyboard";case ga.UNRECOGNIZED:default:return"UNRECOGNIZED"}}var fe;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.FLOOR=1]="FLOOR",n[n.CEILING=2]="CEILING",n[n.WALL_FACE=3]="WALL_FACE",n[n.TABLE=4]="TABLE",n[n.COUCH=5]="COUCH",n[n.DOOR_FRAME=6]="DOOR_FRAME",n[n.WINDOW_FRAME=7]="WINDOW_FRAME",n[n.OTHER=8]="OTHER",n[n.STORAGE=9]="STORAGE",n[n.BED=10]="BED",n[n.SCREEN=11]="SCREEN",n[n.LAMP=12]="LAMP",n[n.PLANT=13]="PLANT",n[n.WALL_ART=14]="WALL_ART",n[n.GLOBAL_MESH=15]="GLOBAL_MESH",n[n.INVISIBLE_WALL_FACE=16]="INVISIBLE_WALL_FACE",n[n.CHAIR=17]="CHAIR",n[n.INNER_WALL_FACE=18]="INNER_WALL_FACE",n[n.OTHER_ROOM_FACE=19]="OTHER_ROOM_FACE",n[n.OPENING=20]="OPENING",n[n.UNRECOGNIZED=-1]="UNRECOGNIZED"})(fe||(fe={}));function XT(n){switch(n){case 0:case"UNKNOWN":return fe.UNKNOWN;case 1:case"FLOOR":return fe.FLOOR;case 2:case"CEILING":return fe.CEILING;case 3:case"WALL_FACE":return fe.WALL_FACE;case 4:case"TABLE":return fe.TABLE;case 5:case"COUCH":return fe.COUCH;case 6:case"DOOR_FRAME":return fe.DOOR_FRAME;case 7:case"WINDOW_FRAME":return fe.WINDOW_FRAME;case 8:case"OTHER":return fe.OTHER;case 9:case"STORAGE":return fe.STORAGE;case 10:case"BED":return fe.BED;case 11:case"SCREEN":return fe.SCREEN;case 12:case"LAMP":return fe.LAMP;case 13:case"PLANT":return fe.PLANT;case 14:case"WALL_ART":return fe.WALL_ART;case 15:case"GLOBAL_MESH":return fe.GLOBAL_MESH;case 16:case"INVISIBLE_WALL_FACE":return fe.INVISIBLE_WALL_FACE;case 17:case"CHAIR":return fe.CHAIR;case 18:case"INNER_WALL_FACE":return fe.INNER_WALL_FACE;case 19:case"OTHER_ROOM_FACE":return fe.OTHER_ROOM_FACE;case 20:case"OPENING":return fe.OPENING;case-1:case"UNRECOGNIZED":default:return fe.UNRECOGNIZED}}function Ph(n){switch(n){case fe.UNKNOWN:return"UNKNOWN";case fe.FLOOR:return"FLOOR";case fe.CEILING:return"CEILING";case fe.WALL_FACE:return"WALL_FACE";case fe.TABLE:return"TABLE";case fe.COUCH:return"COUCH";case fe.DOOR_FRAME:return"DOOR_FRAME";case fe.WINDOW_FRAME:return"WINDOW_FRAME";case fe.OTHER:return"OTHER";case fe.STORAGE:return"STORAGE";case fe.BED:return"BED";case fe.SCREEN:return"SCREEN";case fe.LAMP:return"LAMP";case fe.PLANT:return"PLANT";case fe.WALL_ART:return"WALL_ART";case fe.GLOBAL_MESH:return"GLOBAL_MESH";case fe.INVISIBLE_WALL_FACE:return"INVISIBLE_WALL_FACE";case fe.CHAIR:return"CHAIR";case fe.INNER_WALL_FACE:return"INNER_WALL_FACE";case fe.OTHER_ROOM_FACE:return"OTHER_ROOM_FACE";case fe.OPENING:return"OPENING";case fe.UNRECOGNIZED:default:return"UNRECOGNIZED"}}function pm(){return{floorUuid:"",ceilingUuid:"",wallUuids:[]}}const Fs={encode(n,e=new xn){n.floorUuid!==""&&e.uint32(10).string(n.floorUuid),n.ceilingUuid!==""&&e.uint32(18).string(n.ceilingUuid);for(const t of n.wallUuids)e.uint32(26).string(t);return e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=pm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.floorUuid=t.string();continue}case 2:{if(s!==18)break;r.ceilingUuid=t.string();continue}case 3:{if(s!==26)break;r.wallUuids.push(t.string());continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{floorUuid:tn(n.floorUuid)?globalThis.String(n.floorUuid):"",ceilingUuid:tn(n.ceilingUuid)?globalThis.String(n.ceilingUuid):"",wallUuids:globalThis.Array.isArray(n?.wallUuids)?n.wallUuids.map(e=>globalThis.String(e)):[]}},toJSON(n){var e;const t={};return n.floorUuid!==""&&(t.floorUuid=n.floorUuid),n.ceilingUuid!==""&&(t.ceilingUuid=n.ceilingUuid),!((e=n.wallUuids)===null||e===void 0)&&e.length&&(t.wallUuids=n.wallUuids),t},create(n){return Fs.fromPartial(n??{})},fromPartial(n){var e,t,i;const r=pm();return r.floorUuid=(e=n.floorUuid)!==null&&e!==void 0?e:"",r.ceilingUuid=(t=n.ceilingUuid)!==null&&t!==void 0?t:"",r.wallUuids=((i=n.wallUuids)===null||i===void 0?void 0:i.map(s=>s))||[],r}};function mm(){return{uuids:[]}}const ks={encode(n,e=new xn){for(const t of n.uuids)e.uint32(10).string(t);return e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=mm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.uuids.push(t.string());continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{uuids:globalThis.Array.isArray(n?.uuids)?n.uuids.map(e=>globalThis.String(e)):[]}},toJSON(n){var e;const t={};return!((e=n.uuids)===null||e===void 0)&&e.length&&(t.uuids=n.uuids),t},create(n){return ks.fromPartial(n??{})},fromPartial(n){var e;const t=mm();return t.uuids=((e=n.uuids)===null||e===void 0?void 0:e.map(i=>i))||[],t}};function gm(){return{vertices:new Uint8Array(0)}}const Bs={encode(n,e=new xn){return n.vertices.length!==0&&e.uint32(10).bytes(n.vertices),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=gm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.vertices=t.bytes();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{vertices:tn(n.vertices)?Ch(n.vertices):new Uint8Array(0)}},toJSON(n){const e={};return n.vertices.length!==0&&(e.vertices=Lh(n.vertices)),e},create(n){return Bs.fromPartial(n??{})},fromPartial(n){var e;const t=gm();return t.vertices=(e=n.vertices)!==null&&e!==void 0?e:new Uint8Array(0),t}};function xm(){return{vertices:new Uint8Array(0),indices:new Uint8Array(0)}}const zs={encode(n,e=new xn){return n.vertices.length!==0&&e.uint32(10).bytes(n.vertices),n.indices.length!==0&&e.uint32(18).bytes(n.indices),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=xm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.vertices=t.bytes();continue}case 2:{if(s!==18)break;r.indices=t.bytes();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{vertices:tn(n.vertices)?Ch(n.vertices):new Uint8Array(0),indices:tn(n.indices)?Ch(n.indices):new Uint8Array(0)}},toJSON(n){const e={};return n.vertices.length!==0&&(e.vertices=Lh(n.vertices)),n.indices.length!==0&&(e.indices=Lh(n.indices)),e},create(n){return zs.fromPartial(n??{})},fromPartial(n){var e,t;const i=xm();return i.vertices=(e=n.vertices)!==null&&e!==void 0?e:new Uint8Array(0),i.indices=(t=n.indices)!==null&&t!==void 0?t:new Uint8Array(0),i}};function vm(){return{classType:0}}const Hs={encode(n,e=new xn){return n.classType!==0&&e.uint32(8).int32(n.classType),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=vm();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==8)break;r.classType=t.int32();continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{classType:tn(n.classType)?GT(n.classType):0}},toJSON(n){const e={};return n.classType!==0&&(e.classType=WT(n.classType)),e},create(n){return Hs.fromPartial(n??{})},fromPartial(n){var e;const t=vm();return t.classType=(e=n.classType)!==null&&e!==void 0?e:0,t}};function _m(){return{uuid:"",semanticLabel_META:void 0,locatable_META:void 0,boundary2D_META:void 0,bounded2D_META:void 0,bounded3D_META:void 0,roomLayout_META:void 0,spaceContainer_META:void 0,triangleMesh_META:void 0,dynamicObject_META:void 0}}const ox={encode(n,e=new xn){return n.uuid!==""&&e.uint32(10).string(n.uuid),n.semanticLabel_META!==void 0&&e.uint32(16).int32(n.semanticLabel_META),n.locatable_META!==void 0&&Us.encode(n.locatable_META,e.uint32(26).fork()).join(),n.boundary2D_META!==void 0&&Bs.encode(n.boundary2D_META,e.uint32(34).fork()).join(),n.bounded2D_META!==void 0&&Ds.encode(n.bounded2D_META,e.uint32(42).fork()).join(),n.bounded3D_META!==void 0&&Os.encode(n.bounded3D_META,e.uint32(50).fork()).join(),n.roomLayout_META!==void 0&&Fs.encode(n.roomLayout_META,e.uint32(58).fork()).join(),n.spaceContainer_META!==void 0&&ks.encode(n.spaceContainer_META,e.uint32(66).fork()).join(),n.triangleMesh_META!==void 0&&zs.encode(n.triangleMesh_META,e.uint32(74).fork()).join(),n.dynamicObject_META!==void 0&&Hs.encode(n.dynamicObject_META,e.uint32(82).fork()).join(),e},decode(n,e){const t=n instanceof mt?n:new mt(n);let i=e===void 0?t.len:t.pos+e;const r=_m();for(;t.pos<i;){const s=t.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.uuid=t.string();continue}case 2:{if(s!==16)break;r.semanticLabel_META=t.int32();continue}case 3:{if(s!==26)break;r.locatable_META=Us.decode(t,t.uint32());continue}case 4:{if(s!==34)break;r.boundary2D_META=Bs.decode(t,t.uint32());continue}case 5:{if(s!==42)break;r.bounded2D_META=Ds.decode(t,t.uint32());continue}case 6:{if(s!==50)break;r.bounded3D_META=Os.decode(t,t.uint32());continue}case 7:{if(s!==58)break;r.roomLayout_META=Fs.decode(t,t.uint32());continue}case 8:{if(s!==66)break;r.spaceContainer_META=ks.decode(t,t.uint32());continue}case 9:{if(s!==74)break;r.triangleMesh_META=zs.decode(t,t.uint32());continue}case 10:{if(s!==82)break;r.dynamicObject_META=Hs.decode(t,t.uint32());continue}}if((s&7)===4||s===0)break;t.skip(s&7)}return r},fromJSON(n){return{uuid:tn(n.uuid)?globalThis.String(n.uuid):"",semanticLabel_META:tn(n.semanticLabel_META)?XT(n.semanticLabel_META):void 0,locatable_META:tn(n.locatable_META)?Us.fromJSON(n.locatable_META):void 0,boundary2D_META:tn(n.boundary2D_META)?Bs.fromJSON(n.boundary2D_META):void 0,bounded2D_META:tn(n.bounded2D_META)?Ds.fromJSON(n.bounded2D_META):void 0,bounded3D_META:tn(n.bounded3D_META)?Os.fromJSON(n.bounded3D_META):void 0,roomLayout_META:tn(n.roomLayout_META)?Fs.fromJSON(n.roomLayout_META):void 0,spaceContainer_META:tn(n.spaceContainer_META)?ks.fromJSON(n.spaceContainer_META):void 0,triangleMesh_META:tn(n.triangleMesh_META)?zs.fromJSON(n.triangleMesh_META):void 0,dynamicObject_META:tn(n.dynamicObject_META)?Hs.fromJSON(n.dynamicObject_META):void 0}},toJSON(n){const e={};return n.uuid!==""&&(e.uuid=n.uuid),n.semanticLabel_META!==void 0&&(e.semanticLabel_META=Ph(n.semanticLabel_META)),n.locatable_META!==void 0&&(e.locatable_META=Us.toJSON(n.locatable_META)),n.boundary2D_META!==void 0&&(e.boundary2D_META=Bs.toJSON(n.boundary2D_META)),n.bounded2D_META!==void 0&&(e.bounded2D_META=Ds.toJSON(n.bounded2D_META)),n.bounded3D_META!==void 0&&(e.bounded3D_META=Os.toJSON(n.bounded3D_META)),n.roomLayout_META!==void 0&&(e.roomLayout_META=Fs.toJSON(n.roomLayout_META)),n.spaceContainer_META!==void 0&&(e.spaceContainer_META=ks.toJSON(n.spaceContainer_META)),n.triangleMesh_META!==void 0&&(e.triangleMesh_META=zs.toJSON(n.triangleMesh_META)),n.dynamicObject_META!==void 0&&(e.dynamicObject_META=Hs.toJSON(n.dynamicObject_META)),e},create(n){return ox.fromPartial(n??{})},fromPartial(n){var e,t;const i=_m();return i.uuid=(e=n.uuid)!==null&&e!==void 0?e:"",i.semanticLabel_META=(t=n.semanticLabel_META)!==null&&t!==void 0?t:void 0,i.locatable_META=n.locatable_META!==void 0&&n.locatable_META!==null?Us.fromPartial(n.locatable_META):void 0,i.boundary2D_META=n.boundary2D_META!==void 0&&n.boundary2D_META!==null?Bs.fromPartial(n.boundary2D_META):void 0,i.bounded2D_META=n.bounded2D_META!==void 0&&n.bounded2D_META!==null?Ds.fromPartial(n.bounded2D_META):void 0,i.bounded3D_META=n.bounded3D_META!==void 0&&n.bounded3D_META!==null?Os.fromPartial(n.bounded3D_META):void 0,i.roomLayout_META=n.roomLayout_META!==void 0&&n.roomLayout_META!==null?Fs.fromPartial(n.roomLayout_META):void 0,i.spaceContainer_META=n.spaceContainer_META!==void 0&&n.spaceContainer_META!==null?ks.fromPartial(n.spaceContainer_META):void 0,i.triangleMesh_META=n.triangleMesh_META!==void 0&&n.triangleMesh_META!==null?zs.fromPartial(n.triangleMesh_META):void 0,i.dynamicObject_META=n.dynamicObject_META!==void 0&&n.dynamicObject_META!==null?Hs.fromPartial(n.dynamicObject_META):void 0,i}};function Ch(n){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(n,"base64"));{const e=globalThis.atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;++i)t[i]=e.charCodeAt(i);return t}}function Lh(n){if(globalThis.Buffer)return globalThis.Buffer.from(n).toString("base64");{const e=[];return n.forEach(t=>{e.push(globalThis.String.fromCharCode(t))}),globalThis.btoa(e.join(""))}}function tn(n){return n!=null}var gt;(function(n){n.Locatable="locatable",n.Bounded3D="bounded3D",n.Bounded2D="bounded2D",n.TriangleMesh="triangleMesh",n.SemanticLabel="semanticLabel"})(gt||(gt={}));class Eo extends EventTarget{constructor(e){super(),this._spatialEntity=e}}class jT extends Eo{constructor(e,t){super(e),this._offset=new rt,this._extent=new rt,this.type=gt.Bounded2D;const{offset:i,extent:r}=t;this._offset.set(i.x,i.y),this._extent.set(r.width,r.height),this.buildGeometry()}buildGeometry(){var e;const t=new So(this._extent.x,this._extent.y);t.translate(this._offset.x+this._extent.x/2,this._offset.y+this._extent.y/2,0),t.rotateX(Math.PI/2),(e=this._spatialEntity.geometry)===null||e===void 0||e.dispose(),this._spatialEntity.geometry=t}get offset(){return this._offset}get extent(){return this._extent}get initData(){return{offset:this.offset,extent:this.extent}}get pbData(){return{offset:{x:this._offset.x,y:this._offset.y},extent:{width:this._extent.x,height:this._extent.y}}}}class qT extends Eo{constructor(e,t){super(e),this._offset=new k,this._extent=new k,this.type=gt.Bounded3D;const{offset:i,extent:r}=t;this._offset.set(i.x,i.y,i.z),this._extent.set(r.width,r.height,r.depth),this.buildGeometry()}buildGeometry(){var e;const t=new Ma(this._extent.x,this._extent.y,this._extent.z);t.translate(this._offset.x+this._extent.x/2,this._offset.y+this._extent.y/2,this._offset.z+this._extent.z/2),(e=this._spatialEntity.geometry)===null||e===void 0||e.dispose(),this._spatialEntity.geometry=t}get offset(){return this._offset}get extent(){return this._extent}get initData(){return{offset:this.offset,extent:this.extent}}get pbData(){return{offset:{x:this._offset.x,y:this._offset.y,z:this._offset.z},extent:{width:this._extent.x,height:this._extent.y,depth:this._extent.z}}}}class $T extends Eo{constructor(e,t){super(e),this.type=gt.Locatable,t.position&&this.position.copy(t.position),t.orientation&&this.orientation.copy(t.orientation)}get position(){return this._spatialEntity.position}get rotation(){return this._spatialEntity.rotation}get orientation(){return this._spatialEntity.quaternion}get initData(){return{position:{x:this.position.x,y:this.position.y,z:this.position.z},orientation:{x:this.orientation.x,y:this.orientation.y,z:this.orientation.z,w:this.orientation.w}}}get pbData(){return{position:{x:this._spatialEntity.position.x,y:this._spatialEntity.position.y,z:this._spatialEntity.position.z},orientation:{x:this._spatialEntity.quaternion.x,y:this._spatialEntity.quaternion.y,z:this._spatialEntity.quaternion.z,w:this._spatialEntity.quaternion.w}}}}function ym(n){return n.toLowerCase().replace(/_/g," ").trim()}class YT extends Eo{constructor(e,t){super(e),this._semanticLabel=t,this.type=gt.SemanticLabel,this._spatialEntity.name=ym(Ph(t))}get semanticLabel(){return this._semanticLabel}set semanticLabel(e){Object.values(fe).includes(e)?this._semanticLabel=e:this._semanticLabel=fe.UNRECOGNIZED,this._spatialEntity.name=ym(Ph(this._semanticLabel))}get initData(){return this._semanticLabel}get pbData(){return this._semanticLabel}}function Sm(n){const e=new Float32Array(n.length*3);let t=0;for(const i of n)e[t++]=i.x,e[t++]=i.y,e[t++]=i.z;return e}class ZT extends Eo{constructor(e,t){super(e),this._polygonCount=0,this._vertexCount=0,this._dimensions={x:0,y:0,z:0},this.type=gt.TriangleMesh;const{vertices:i,indices:r}=t,s=new Float32Array(i.buffer),a=new Uint32Array(r.buffer),o=[];for(let c=0;c<s.length/3;c++)o.push({x:s[3*c],y:s[3*c+1],z:s[3*c+2]});this._vertices=o,this._indices=[...a],this.buildGeometry();const l=e.material;l.polygonOffset=!0,l.polygonOffsetFactor=1,l.polygonOffsetUnits=.005,l.color.setHex(13948116),e.renderOrder=999}buildGeometry(){var e;const t=new ti,i=Sm(this._vertices);t.setAttribute("position",new kn(i,3)),t.setIndex(new kn(new Uint16Array(this._indices),1)),(e=this._spatialEntity.geometry)===null||e===void 0||e.dispose(),this._spatialEntity.geometry=t,t.computeVertexNormals(),this._vertexCount=t.attributes.position.count,this._polygonCount=t.index?t.index.count/3:this._vertexCount/3,t.computeBoundingBox();const r=t.boundingBox;this._dimensions={x:r.max.x-r.min.x,y:r.max.y-r.min.y,z:r.max.z-r.min.z}}get vertexCount(){return this._vertexCount}get polygonCount(){return this._polygonCount}get dimensions(){return this._dimensions}get initData(){return{vertices:this._vertices,indices:this._indices}}get pbData(){const e=Sm(this._vertices),t=new Uint32Array(this._indices);return{vertices:new Uint8Array(e.buffer),indices:new Uint8Array(t.buffer)}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function KT(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}var Xn;(function(n){n.Plane="plane",n.Box="box",n.Mesh="mesh"})(Xn||(Xn={}));const QT={[fe.OTHER]:qe.Other,[fe.TABLE]:qe.Table,[fe.COUCH]:qe.Couch,[fe.FLOOR]:qe.Floor,[fe.CEILING]:qe.Ceiling,[fe.WALL_FACE]:qe.Wall,[fe.INVISIBLE_WALL_FACE]:qe.Window,[fe.INNER_WALL_FACE]:qe.Wall,[fe.DOOR_FRAME]:qe.Door,[fe.WINDOW_FRAME]:qe.Window,[fe.WALL_ART]:qe.WallArt,[fe.STORAGE]:qe.Shelf,[fe.BED]:qe.Bed,[fe.LAMP]:qe.Lamp,[fe.SCREEN]:qe.Screen,[fe.PLANT]:qe.Plant,[fe.GLOBAL_MESH]:qe.GlobalMesh,[fe.CHAIR]:qe.Couch,[fe.UNKNOWN]:qe.Other,[fe.OTHER_ROOM_FACE]:qe.Other,[fe.OPENING]:qe.Other,[fe.UNRECOGNIZED]:qe.Other};class Xl extends Yn{constructor(e=KT()){super(void 0,new fb({color:16777215*Math.random(),flatShading:!0})),this.name="generic spatial entity",this.isSpatialEntity=!0,this._componentMap=new Map,this._spatialUUID=e}get spatialUUID(){return this._spatialUUID}updateMatrixWorld(e){super.updateMatrixWorld(e)}addComponent(e,t){let i=null;switch(e){case gt.Locatable:i=new $T(this,t);break;case gt.Bounded3D:i=new qT(this,t);break;case gt.Bounded2D:i=new jT(this,t);break;case gt.TriangleMesh:i=new ZT(this,t);break;case gt.SemanticLabel:i=new YT(this,t);break}i&&this._componentMap.set(e,i)}getComponent(e){return this._componentMap.get(e)}duplicate(){const e=new Xl;return this._componentMap.forEach((t,i,r)=>{e.addComponent(t.type,t.initData)}),e}get nativeEntity(){if(!this._nativeEntity){const e=new Qr({x:this.position.x,y:this.position.y,z:this.position.z,w:1},{x:this.quaternion.x,y:this.quaternion.y,z:this.quaternion.z,w:this.quaternion.w}),t=QT[this.getComponent(gt.SemanticLabel).semanticLabel];if(this.entityType===Xn.Plane){const{offset:i,extent:r}=this.getComponent(gt.Bounded2D),s=[new DOMPointReadOnly(i.x,0,i.y),new DOMPointReadOnly(i.x+r.x,0,i.y),new DOMPointReadOnly(i.x+r.x,0,i.y+r.y),new DOMPointReadOnly(i.x,0,i.y+r.y),new DOMPointReadOnly(i.x,0,i.y)];this._nativeEntity=new O5(e,s,t)}else if(this.entityType===Xn.Box||this.entityType===Xn.Mesh){const i=this.geometry.getAttribute("position").array,r=new Uint32Array(this.geometry.index.array);this._nativeEntity=new L5(e,i,r,t)}}return this._nativeEntity}static fromPBJSON(e){const t=ox.fromJSON(e);if(t.locatable_META){const i=new Xl(t.uuid);return i.addComponent(gt.Locatable,t.locatable_META),t.semanticLabel_META&&i.addComponent(gt.SemanticLabel,t.semanticLabel_META),t.bounded2D_META?i.addComponent(gt.Bounded2D,t.bounded2D_META):t.bounded3D_META?i.addComponent(gt.Bounded3D,t.bounded3D_META):t.triangleMesh_META&&i.addComponent(gt.TriangleMesh,t.triangleMesh_META),i}}get entityType(){if(this.getComponent(gt.Bounded2D))return Xn.Plane;if(this.getComponent(gt.Bounded3D))return Xn.Box;if(this.getComponent(gt.TriangleMesh))return Xn.Mesh}static toPBJSON(e){var t,i,r,s,a;return{uuid:e.spatialUUID,locatable_META:(t=e.getComponent(gt.Locatable))===null||t===void 0?void 0:t.pbData,boundary2D_META:void 0,bounded2D_META:(i=e.getComponent(gt.Bounded2D))===null||i===void 0?void 0:i.pbData,bounded3D_META:(r=e.getComponent(gt.Bounded3D))===null||r===void 0?void 0:r.pbData,semanticLabel_META:(s=e.getComponent(gt.SemanticLabel))===null||s===void 0?void 0:s.pbData,roomLayout_META:void 0,spaceContainer_META:void 0,triangleMesh_META:(a=e.getComponent(gt.TriangleMesh))===null||a===void 0?void 0:a.pbData,dynamicObject_META:void 0}}}const JT={living_room:()=>ba(()=>import("./living_room-CVCYIB7e.js"),[]),meeting_room:()=>ba(()=>import("./meeting_room-COtFIOij.js"),[]),music_room:()=>ba(()=>import("./music_room-DAOruTFO.js"),[]),office_large:()=>ba(()=>import("./office_large-DoJFWIAy.js"),[]),office_small:()=>ba(()=>import("./office_small-BStFvcdU.js"),[])},Mm="0.2.4",eA=new k(0,0,-1);class tA extends EventTarget{constructor(e){super(),this.xrDevice=e,this.trackedPlanes=new Set,this.trackedMeshes=new Set,this.version=Mm,this.objectMap=new Map,this.planes=new pi,this.boxes=new pi,this.meshes=new pi,this.tempPosition=new k,this.tempQuaternion=new fr,this.tempDirection=new k,this.tempScale=new k,this.tempMatrix=new Lt,this.raycaster=new db,this.hitTestTarget=new pi,this.hitTestMarker=new on,this.worldNormal=new k,this.normalMatrix=new ke,this.scene=new Tg,this.scene.background=new nt(4079166),this.camera=new bn(50,window.innerWidth/window.innerHeight,.1,40),this.camera.position.set(0,1.6,5);const t=new pb(50,50);this.scene.add(t),this.scene.add(this.planes,this.boxes,this.meshes),this.planes.renderOrder=1,this.boxes.renderOrder=2,this.meshes.renderOrder=3,this.planes.visible=!1,this.boxes.visible=!1,this.renderer=new bg({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.hitTestTarget.add(this.hitTestMarker),this.hitTestMarker.rotateX(Math.PI/2)}get environmentCanvas(){return this.renderer.domElement}get planesVisible(){return this.planes.visible}set planesVisible(e){this.planes.visible=e}get boundingBoxesVisible(){return this.boxes.visible}set boundingBoxesVisible(e){this.boxes.visible=e}get meshesVisible(){return this.meshes.visible}set meshesVisible(e){this.meshes.visible=e}render(){this.camera.position.copy(this.xrDevice.position),this.camera.quaternion.copy(this.xrDevice.quaternion);const e=this.xrDevice.fovy/Math.PI*180;let t=!1;this.camera.fov!==e&&(this.camera.fov=e,t=!0);const i=this.xrDevice.canvasDimensions;if(i){const r=this.renderer.domElement;(r.width!==i.width||r.height!==i.height)&&(this.camera.aspect=i.width/i.height,this.renderer.setSize(i.width,i.height),t=!0)}t&&this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}deleteAll(){[...this.objectMap.values()].forEach(e=>{e.removeFromParent()}),this.objectMap.clear(),this.trackedMeshes.clear(),this.trackedPlanes.clear()}loadEnvironment(e){this.deleteAll(),e.spatialEntities.forEach(t=>{const i=Xl.fromPBJSON(t);if(i){switch(i.entityType){case Xn.Box:this.boxes.add(i),this.trackedMeshes.add(i.nativeEntity);break;case Xn.Plane:this.planes.add(i),this.trackedPlanes.add(i.nativeEntity);break;case Xn.Mesh:this.meshes.add(i),this.trackedMeshes.add(i.nativeEntity);break}const r=this.objectMap.get(t.uuid);r&&r.removeFromParent(),this.objectMap.set(t.uuid,i)}})}loadDefaultEnvironment(e){if(typeof __IS_UMD__<"u"&&__IS_UMD__){const t=`https://www.unpkg.com/@iwer/sem@${Mm}/captures/${e}.json`;fetch(t).then(i=>{if(!i.ok)throw new Error(`Network response was not ok: ${i.statusText}`);return i.json()}).then(i=>{this.loadEnvironment(i)}).catch(i=>{console.error(`Error loading environment ${e} from CDN`,i)})}else{const t=JT[e];if(!t){console.error(`Requested environment ${e} does not exist`);return}t().then(i=>{const r=i.default;this.loadEnvironment(r)}).catch(i=>{console.error(`Error loading environment ${e} locally`,i)})}}computeHitTestResults(e){return this.tempMatrix.fromArray(e),this.tempMatrix.decompose(this.tempPosition,this.tempQuaternion,this.tempScale),this.tempDirection.copy(eA).applyQuaternion(this.tempQuaternion).normalize(),this.raycaster.set(this.tempPosition,this.tempDirection),this.raycaster.intersectObject(this.meshes,!0).map(r=>{var s;const a=r.point;if(this.hitTestTarget.position.copy(a),!((s=r.face)===null||s===void 0)&&s.normal){this.worldNormal.copy(r.face.normal);const o=r.object;this.worldNormal.applyMatrix3(this.normalMatrix.getNormalMatrix(o.matrixWorld)).normalize(),this.hitTestTarget.lookAt(this.tempPosition.addVectors(a,this.worldNormal))}else this.hitTestTarget.quaternion.set(0,0,0,1);return this.hitTestTarget.updateMatrixWorld(!0),this.hitTestMarker.matrixWorld.toArray()})}}const nA={metaQuest3:LT,metaQuest2:PT,metaQuestPro:CT,oculusQuest1:RT},Em=["office_small","meeting_room","living_room","music_room","office_large"],iA=["left","none","right"];function cA(n){const e=typeof n=="string"?n:n.type??"metaQuest3",t=new ET(nA[e],typeof n=="string"?void 0:n);typeof n!="string"&&(lx(t,n.headset),bm(t.hands,n.hand),bm(t.controllers,n.controller),t.primaryInputMode=n.primaryInputMode??"controller"),t.ipd=typeof n=="string"?0:n.ipd??0,t.installRuntime(),t.installDevUI(o5);const i=typeof n=="string"?!0:n.syntheticEnvironment;return i===!1||(t.installSEM(tA),i===null)?t:typeof i=="string"&&Em.includes(i)?(t.sem?.loadDefaultEnvironment(i),t):i===!0||i===void 0?(t.sem?.loadDefaultEnvironment(Em[0]),t):typeof i=="object"?(t.sem?.loadEnvironment(i),t):(fetch(i).then(r=>r.json()).then(r=>t.sem?.loadEnvironment(r)).catch(console.error),t)}const wm=new Et,rA=new xt;function bm(n,e){if(e!=null)for(const t of iA)lx(n[t],e[t])}function lx(n,e){n==null||e==null||(Tm(n.position,e.position),Tm(wm,e.rotation),Am(n.quaternion,rA.setFromEuler(wm)),Am(n.quaternion,e.quaternion))}function Tm(n,e){if(e!=null){if(e instanceof Et&&n instanceof Et&&n.copy(e),Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2];return}n.x=e.x,n.y=e.y,n.z=e.z}}function Am(n,e){if(e!=null){if(Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2],n.w=e[3];return}n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w}}export{cA as emulate};
