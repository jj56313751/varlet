import{S as d,g as b}from"./components.8b8d5d8f.js";import{R as k}from"./index.11528d9a.js";import{S as x}from"./index.8a90e8cf.js";import{B as j}from"./index.4ed44b36.js";import{A as F}from"./AppType.4c4506cb.js";import{c as v}from"./index.429bff9e.js";import{w as V,b as S,g as w}from"./utils.38ecee47.js";import{u as R,a as _,_ as U,b as B,c as N}from"./en-US.948dca5c.js";import{_ as z}from"./elevation.37915be7.js";import{p as D,r as E,H as C,d as r,o as P,c as A,h as t,i as s,F as L,l as c,t as m}from"./vendor.17911535.js";import"./elements.364c0c9c.js";import"./shared.def6a7f6.js";import"./index.c9a54be7.js";import"./provide.49cd7fc4.js";import"./index.13155186.js";import"./index.343b597d.js";var H={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},q={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:y,use:G,pack:I,packs:me,merge:ie}=R(),J=a=>{N(a),G(a)};_("zh-CN",U);_("en-US",B);y("zh-CN",H);y("en-US",q);const K={name:"StyleProviderExample",components:{VarStyleProvider:d.Component,VarRate:k,VarSwitch:x,VarButton:j,AppType:F},setup(){const a=D({score:5,license:!0}),o=E(null),f={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},e=()=>{o.value=o.value?null:f};let l=null;const g={"--color-primary":"#3f51b5"},n=()=>{l=l?null:g,d(l)};V(J);const i=v.touchmoveForbid;return S(u=>{u==="pc"&&(v.touchmoveForbid=!1)}),C(()=>{v.touchmoveForbid=i}),C(()=>{d(w()==="darkThemes"?b:null)}),{pack:I,state:a,styleVars:o,toggleTheme:e,toggleRootTheme:n}}};function M(a,o,f,e,l,g){const n=r("app-type"),i=r("var-rate"),u=r("var-switch"),h=r("var-button"),T=r("var-style-provider");return P(),A(L,null,[t(n,null,{default:s(()=>[c(m(e.pack.componentCall),1)]),_:1}),t(T,{"style-vars":e.styleVars},{default:s(()=>[t(i,{modelValue:e.state.score,"onUpdate:modelValue":o[0]||(o[0]=p=>e.state.score=p)},null,8,["modelValue"]),t(u,{modelValue:e.state.license,"onUpdate:modelValue":o[1]||(o[1]=p=>e.state.license=p)},null,8,["modelValue"]),t(h,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:e.toggleTheme},{default:s(()=>[c(m(e.pack.toggleTheme),1)]),_:1},8,["onClick"])]),_:1},8,["style-vars"]),t(n,null,{default:s(()=>[c(m(e.pack.functionCall),1)]),_:1}),t(h,{type:"primary",block:"",onClick:e.toggleRootTheme},{default:s(()=>[c(m(e.pack.toggleRootTheme),1)]),_:1},8,["onClick"])],64)}var ue=z(K,[["render",M]]);export{ue as default};