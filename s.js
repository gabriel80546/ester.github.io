(function(w,d){zaraz.debug=(eT="")=>{document.cookie=`zarazDebug=${eT}; path=/`;location.reload()};window.zaraz._al=function(eU,eV,eW){w.zaraz.listeners.push({item:eU,type:eV,callback:eW});eU.addEventListener(eV,eW)};zaraz.preview=(fq="")=>{document.cookie=`zarazPreview=${fq}; path=/`;location.reload()};zaraz.i=function(cQ){const cR=d.createElement("div");cR.innerHTML=unescape(cQ);const cS=cR.querySelectorAll("script");for(let cT=0;cT<cS.length;cT++){const cU=d.createElement("script");cS[cT].innerHTML&&(cU.innerHTML=cS[cT].innerHTML);for(const cV of cS[cT].attributes)cU.setAttribute(cV.name,cV.value);d.head.appendChild(cU);cS[cT].remove()}d.body.appendChild(cR)};zaraz.f=async function(eQ,eR){const eS={credentials:"include",keepalive:!0,mode:"no-cors"};if(eR){eS.method="POST";eS.body=new URLSearchParams(eR);eS.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(eQ,eS)};!function(eX,eY,eZ,e_,fa,fb){function fc(fe,ff){fb?e_(fe,ff||32):fa.push(fe,ff)}function fd(fg,fh,fi,fj){return fh&&eY.getElementById(fh)||(fj=eY.createElement(fg||"SCRIPT"),fh&&(fj.id=fh),fi&&(fj.onload=fi),eY.head.appendChild(fj)),fj||{}}fb=/p/.test(eY.readyState),eX.addEventListener("on"+eZ in eX?eZ:"load",(function(){for(fb=1;fa[0];)fc(fa.shift(),fa.shift())})),fc._=fd,eX.defer=fc,eX.deferscript=function(fk,fl,fm,fn){fc((function(){fd("",fl,fn).src=fk}),fm)}}(this,d,"pageshow",setTimeout,[]);defer((function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()();Object.defineProperty(zaraz.deferred,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...fo){let fp=Array.prototype.push.apply(this,fo);for(;zaraz.deferred.length;)zaraz.deferred.pop()();return fp}})}),5500);addEventListener("visibilitychange",(function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()()}));window.zaraz._p=async a=>new Promise((b=>{if(a){a.e&&a.e.forEach((c=>{try{new Function(c)()}catch(d){console.error(`Error executing script: ${c}\n`,d)}}));Promise.allSettled((a.f||[]).map((e=>fetch(e[0],e[1]))))}b()}));zaraz.pageVariables={};zaraz.__zcl={};zaraz.track=async function(cp,cq,cr){return new Promise(((cs,ct)=>{const cu={name:cp,data:{}};for(const cv of[localStorage,sessionStorage])Object.keys(cv||{}).filter((cx=>cx.startsWith("_zaraz_"))).forEach((cw=>{try{cu.data[cw.slice(7)]=JSON.parse(cv.getItem(cw))}catch{cu.data[cw.slice(7)]=cv.getItem(cw)}}));Object.keys(zaraz.pageVariables).forEach((cy=>cu.data[cy]=JSON.parse(zaraz.pageVariables[cy])));Object.keys(zaraz.__zcl).forEach((cz=>cu.data[`__zcl_${cz}`]=zaraz.__zcl[cz]));cu.data.mcListeners=zaraz.mcListeners;
//
zarazData.c=d.cookie;
//
cu.data={...cu.data,...cq};cu.zarazData=zarazData;fetch("https://preview.colorlib.com/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cu)}).catch((()=>fetch("https://preview.colorlib.com/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cu)}).catch((()=>{console.warn("2nd fetch to Cloudflare Zaraz failed")})))).then((function(cB){zarazData._let=(new Date).getTime();cB.ok||ct();return 204!==cB.status&&cB.json()})).then((async cA=>{await zaraz._p(cA);"function"==typeof cr&&cr()})).finally((()=>cs()))}))};zaraz.set=function(cC,cD,cE){try{cD=JSON.stringify(cD)}catch(cF){return}prefixedKey="_zaraz_"+cC;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[cC];if(void 0!==cD){cE&&"session"==cE.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,cD):cE&&"page"==cE.scope?zaraz.pageVariables[cC]=cD:localStorage&&localStorage.setItem(prefixedKey,cD);zaraz.__watchVar={key:cC,value:cD}}};for(const{m:cG,a:cH}of zarazData.q.filter((({m:cI})=>["debug","set"].includes(cI))))zaraz[cG](...cH);for(const{m:cJ,a:cK}of zaraz.q)zaraz[cJ](...cK);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(cl,cm,cn,co){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[cl]||(zaraz.__zarazTriggerMap[cl]="");zaraz.__zarazTriggerMap[cl]+="*"+cm+"*";zaraz.track("__zarazEmpty",{...cn,__zarazClientTriggers:zaraz.__zarazTriggerMap[cl]},co)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=fu=>{for(const fv of Object.entries(fu))zaraz.set(fv[0],fv[1],{scope:"page"});if(fu.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(fu.event))return;let fw={};for(let fx of dataLayer.slice(0,dataLayer.indexOf(fu)+1))fw={...fw,...fx};delete fw.event;fu.event.startsWith("gtm.")||zaraz.track(fu.event,fw)}};const ft=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...fy){let fz=ft.apply(this,fy);zaraz._processDataLayer(fy[0]);return fz}});dataLayer.forEach((fA=>zaraz._processDataLayer(fA)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((bP=>clearTimeout(bP)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((bQ=>bQ.item.removeEventListener(bQ.type,bQ.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.mcListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=es=>{const{event:et,...eu}=es;zaraz.track(et,{...eu,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(da=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.mcListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","(function(w,d){;d.cookie=unescape('google-analytics_v4_20ac__engagementStart%3D1680639508391%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__counter%3D52%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__ga4sid%3D296818751%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D1800');d.cookie=unescape('google-analytics_v4_20ac__session_counter%3D1%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__ga4%3Ddc77a854-5f26-4f12-b0e0-7496803db47b%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__let%3D1680639508391%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000')})(window, document)"],"f":[["https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=dc77a854-5f26-4f12-b0e0-7496803db47b&_u=KGDAAEADQAAAAC%7E&z=499600758",{}]]})})(window,document);