import{C as E}from"./index.3ef9e403.js";import{R as y}from"./index.f8492b74.js";import{d as N,r as P,b as r,y as T,e as w,f as V,w as g,o as v,c as I,a as m,p as f,n as C,l as B,R as D,h as $,G as K,m as L,t as Y}from"./vendor.49f89f0d.js";import{c as R,d as U,b as z,f as A}from"./components.38f1d302.js";import{_ as W}from"./elevation.229458c1.js";const b=Symbol("SELECT_BIND_OPTION_KEY"),h=Symbol("SELECT_COUNT_OPTION_KEY");function ee(){const{bindChildren:e,childProviders:o}=R(b),{length:n}=U(h);return{length:n,options:o,bindOptions:e}}function G(){const{bindParent:e,parentProvider:o}=z(b),{index:n}=A(h);if(!e||!o)throw Error("<var-option/> must in <var-select/>");return{index:n,select:o,bindSelect:e}}const M={label:{},value:{}};const j=N({name:"VarOption",directives:{Ripple:y},components:{VarCheckbox:E},props:M,setup(e){const o=P(!1),n=r(()=>o.value),c=r(()=>e.label),d=r(()=>e.value),{select:u,bindSelect:l}=G(),{wrapWidth:s,multiple:t,focusColor:S,onSelect:p}=u,k=()=>{o.value=!o.value,p(a)},_=()=>p(a),a={label:c,value:d,selected:n,sync:O=>{o.value=O}};return T([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),l(a),{optionSelected:o,wrapWidth:s,multiple:t,focusColor:S,handleClick:k,handleSelect:_}}}),q={class:"var-option__text var--ellipsis"};function F(e,o,n,c,d,u){const l=w("var-checkbox"),s=V("ripple");return g((v(),I("div",{class:f(["var-option var--box",[e.optionSelected?"var-option--selected-color":null]]),style:C({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...t)=>e.handleClick&&e.handleClick(...t))},[m("div",{class:f(["var-option__cover",[e.optionSelected?"var-option--selected-background":null]]),style:C({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(v(),B(l,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=t=>e.optionSelected=t),onClick:o[1]||(o[1]=D(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):$("v-if",!0),m("div",q,[K(e.$slots,"default",{},()=>[L(Y(e.label),1)])])],6)),[[s]])}var i=W(j,[["render",F]]);i.install=function(e){e.component(i.name,i)};export{i as O,ee as u};
