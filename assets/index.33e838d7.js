import{I as w}from"./index.37744189.js";import{B as y}from"./index.0eaab664.js";import{A as b}from"./index.58243c2d.js";import{A as B}from"./AppType.6775b756.js";import{S as F}from"./index.110a76cd.js";import{d as D}from"./index.9b1139e6.js";import{u as U,a as f,_ as $,b as A,c as I}from"./en-US.628e0d34.js";import{w as N,a as V}from"./utils.3a4595f4.js";import{I as P}from"./index.8ccfa1b5.js";import{_ as j}from"./elevation.229458c1.js";import{d as z,b as L,r as l,e as p,o as T,c as H,a as g,i as a,j as n,F as M,m as s,t as i}from"./vendor.49f89f0d.js";import"./index.bef32d81.js";import"./provide.78f62b24.js";import"./components.38f1d302.js";import"./shared.506a394a.js";import"./elements.92736b4e.js";import"./index.0b755aaa.js";import"./index.67e4e0e5.js";import"./lock.c5636ec8.js";import"./index.48ee5316.js";import"./zIndex.8c13fd4c.js";import"./index.f8492b74.js";import"./index.9e43ebc8.js";var O={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},q={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"Operate"};const{add:k,use:G,pack:m,packs:ge,merge:fe}=U(),J=e=>{I(e),G(e)};f("zh-CN",$);f("en-US",A);k("zh-CN",O);k("en-US",q);const K=z({name:"ImagePreviewExample",components:{VarImagePreview:w.Component,AppType:B,VarButton:y,VarIcon:P,VarActionSheet:b.Component},setup(){const e=["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"],o=["https://varlet.gitee.io/varlet-ui/cat.jpg"],v=L(()=>[{name:m.value.operate,icon:"wrench"},{name:m.value.operate,icon:"wrench"}]),d=()=>{F({content:m.value.shutdownEvent,duration:1e3})},c=()=>{w({images:e,onChange:C=>{console.log("index",C)}})};return N(J),V(D),{preview(){w(o)},previewCallback:c,pack:m,show:l(!1),currentShow:l(!1),closeShow:l(!1),closeEventShow:l(!1),extraSlotsShow:l(!1),menuShow:l(!1),images:l(e),image:l(o),actions:v,handleCloseEvent:d}}}),Q={class:"image-preview-demo"},R={class:"image-preview-demo"};function W(e,o,v,d,c,C){const h=p("app-type"),r=p("var-button"),u=p("var-image-preview"),S=p("var-icon"),E=p("var-action-sheet");return T(),H(M,null,[g("div",Q,[a(h,null,{default:n(()=>[s(i(e.pack.functionCall),1)]),_:1}),a(r,{type:"primary",block:"",onClick:e.preview},{default:n(()=>[s(i(e.pack.preview),1)]),_:1},8,["onClick"]),a(r,{type:"primary",block:"",onClick:e.previewCallback},{default:n(()=>[s(i(e.pack.callBack),1)]),_:1},8,["onClick"])]),g("div",R,[a(h,null,{default:n(()=>[s(i(e.pack.componentCall),1)]),_:1}),a(r,{type:"warning",block:"",onClick:o[0]||(o[0]=t=>e.show=!0)},{default:n(()=>[s(i(e.pack.basicUse),1)]),_:1}),a(u,{images:e.image,show:e.show,"onUpdate:show":o[1]||(o[1]=t=>e.show=t)},null,8,["images","show"]),a(r,{type:"warning",block:"",onClick:o[2]||(o[2]=t=>e.currentShow=!0)},{default:n(()=>[s(i(e.pack.specifyInitialPosition),1)]),_:1}),a(u,{images:e.images,show:e.currentShow,"onUpdate:show":o[3]||(o[3]=t=>e.currentShow=t),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),a(r,{type:"warning",block:"",onClick:o[4]||(o[4]=t=>e.closeShow=!0)},{default:n(()=>[s(i(e.pack.displayCloseButton),1)]),_:1}),a(u,{images:e.images,show:e.closeShow,"onUpdate:show":o[5]||(o[5]=t=>e.closeShow=t),closeable:!0},null,8,["images","show"]),a(r,{type:"warning",block:"",onClick:o[6]||(o[6]=t=>e.closeEventShow=!0)},{default:n(()=>[s(i(e.pack.listenCloseEvents),1)]),_:1}),a(u,{images:e.images,show:e.closeEventShow,"onUpdate:show":o[7]||(o[7]=t=>e.closeEventShow=t),onClose:e.handleCloseEvent},null,8,["images","show","onClose"]),a(r,{type:"warning",block:"",onClick:o[8]||(o[8]=t=>e.extraSlotsShow=!0)},{default:n(()=>[s(i(e.pack.showExtraSlots),1)]),_:1}),a(u,{images:e.images,show:e.extraSlotsShow,"onUpdate:show":o[11]||(o[11]=t=>e.extraSlotsShow=t)},{extra:n(()=>[a(S,{name:"menu",size:22,color:"#fff",onClick:o[9]||(o[9]=t=>e.menuShow=!0)}),a(E,{actions:e.actions,show:e.menuShow,"onUpdate:show":o[10]||(o[10]=t=>e.menuShow=t)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64)}var ke=j(K,[["render",W],["__scopeId","data-v-26744060"]]);export{ke as default};
