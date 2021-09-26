var A=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(e,a,n)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,u=(e,a)=>{for(var n in a||(a={}))z.call(a,n)&&b(e,n,a[n]);if(F)for(var n of F(a))V.call(a,n)&&b(e,n,a[n]);return e},m=(e,a)=>E(e,I(a));import{A as $}from"./AppType.911198e7.js";import{t as _}from"./elements.f945da86.js";import{j as k,t as L}from"./shared.6d6b25a1.js";import{_ as C,w as M}from"./IconSfc.2f05a1db.js";import{q,p as H,b as S,x as O,a1 as R,a2 as W,o as B,c as D,O as G,m as J,n as K,t as o,f as P,d as w,a as d,h as t,w as l,F as Q,l as c}from"./vendor.bac705d4.js";import{A as T}from"./index.d28c91c4.js";import{I as U}from"./index.1f46c5f6.js";import{u as X,a as N,_ as Y,b as Z,c as ee}from"./en-US.41252e02.js";const ae={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const te=q({name:"VarDivider",props:ae,setup(e,{slots:a}){const n=H({withText:!1}),i=S(()=>k(e.inset)?e.inset:!0),f=S(()=>{const{inset:s,vertical:r,margin:h}=e,x={margin:h};if(k(s)||s===0)return u({},x);const y=L(s),g=Math.abs(y)+(s+"").replace(y+"","");return r?m(u({},x),{height:`calc(80% - ${_(g)})`}):m(u({},x),{width:`calc(100% - ${_(g)})`,left:y>0?_(g):_(0)})}),v=()=>{var s;n.withText=Boolean((s=a.default)==null?void 0:s.call(a).length)||Boolean(e.description)};return O(()=>{v()}),R(()=>{v()}),m(u({},W(n)),{style:f,isInset:i})}}),ne={key:0,class:"var-divider__text"};function se(e,a,n,i,f,v){return B(),D("div",{class:J(["var-divider var--box",[e.vertical?"var-divider--vertical":null,e.withText?"var-divider--with-text":null,e.isInset?"var-divider--inset":null,e.dashed?"var-divider--dashed":null]]),style:K(e.style)},[G(e.$slots,"default",{},()=>[e.description?(B(),D("span",ne,o(e.description),1)):P("v-if",!0)])],6)}var p=C(te,[["render",se]]);p.install=function(e){e.component(p.name,p)};var ie={basicUsage:"\u57FA\u672C\u4F7F\u7528",dashed:"\u865A\u7EBF",inset:"\u7F29\u8FDB",vertical:"\u5782\u76F4\u5206\u5272\u7EBF",text:"\u6587\u5B57",withDesc:"\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF",withDescText:"\u6587\u5B57\u63CF\u8FF0",custom:"\u81EA\u5B9A\u4E49"},re={basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"};const{add:j,use:oe,pack:de,packs:De,merge:we}=X(),le=e=>{ee(e),oe(e)};N("zh-CN",Y);N("en-US",Z);j("zh-CN",ie);j("en-US",re);const ce={name:"DividerExample",components:{[U.name]:U,[T.name]:T,[p.name]:p,AppType:$},setup(){return M(le),{pack:de}}},ue={class:"vertical-divider-wrapper"};function pe(e,a,n,i,f,v){const s=w("app-type"),r=w("var-divider"),h=w("var-icon");return B(),D(Q,null,[d("div",null,[t(s,null,{default:l(()=>[c(o(i.pack.basicUsage),1)]),_:1}),t(r)]),d("div",null,[t(s,null,{default:l(()=>[c(o(i.pack.dashed),1)]),_:1}),t(r,{dashed:""})]),d("div",null,[t(s,null,{default:l(()=>[c(o(i.pack.inset),1)]),_:1}),t(r,{inset:""}),t(r,{inset:36,margin:"36px 0"}),t(r,{inset:"-36px"})]),d("div",null,[t(s,null,{default:l(()=>[c(o(i.pack.vertical),1)]),_:1}),d("div",ue,[d("span",null,o(i.pack.text),1),t(r,{vertical:""}),d("span",null,o(i.pack.text),1),t(r,{vertical:""}),d("span",null,o(i.pack.text),1)])]),d("div",null,[t(s,null,{default:l(()=>[c(o(i.pack.withDesc),1)]),_:1}),t(r,{description:i.pack.withDescText},null,8,["description"])]),d("div",null,[t(s,null,{default:l(()=>[c(o(i.pack.custom),1)]),_:1}),t(r,null,{default:l(()=>[t(h,{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]),_:1})])],64)}var Fe=C(ce,[["render",pe],["__scopeId","data-v-6ab042d9"]]);export{Fe as default};