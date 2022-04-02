import{t as F}from"./elements.92736b4e.js";import{t as N}from"./shared.506a394a.js";import{_ as k}from"./elevation.229458c1.js";import{d as b,o as s,c as i,G as D,h as c,n as p,a as u,F as y,k as z,r as m,e as g,i as t,j as o,m as l,t as n}from"./vendor.49f89f0d.js";import{B}from"./index.0eaab664.js";import{A as U}from"./AppType.6775b756.js";import{d as E}from"./index.9b1139e6.js";import{w as M,a as T}from"./utils.3a4595f4.js";import{u as V,a as h,_ as H,b as L,c as I}from"./en-US.628e0d34.js";import"./index.f8492b74.js";import"./index.48ee5316.js";import"./index.9e43ebc8.js";import"./components.38f1d302.js";const R={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};const W=b({name:"VarSkeleton",props:R,setup(){return{toSizeUnit:F,toNumber:N}}}),Z={class:"var--box var-skeleton"},j={key:0,class:"var-skeleton__data"},G={key:1,class:"var-skeleton__content"},q=u("div",{class:"var-skeleton--animation"},null,-1),J=[q],K={class:"var-skeleton__article"},O=u("div",{class:"var-skeleton--animation"},null,-1),P=[O],Q={class:"var-skeleton__section"},X=u("div",{class:"var-skeleton--animation"},null,-1),Y=[X],x=u("div",{class:"var-skeleton--animation"},null,-1),$=[x],ee=u("div",{class:"var-skeleton--animation"},null,-1),ae=[ee];function te(e,_,v,a,w,C){return s(),i("div",Z,[e.loading?c("v-if",!0):(s(),i("div",j,[D(e.$slots,"default")])),e.loading&&!e.fullscreen?(s(),i("div",G,[e.card?(s(),i("div",{key:0,class:"var-skeleton__card",style:p({height:e.toSizeUnit(e.cardHeight)})},J,4)):c("v-if",!0),u("div",K,[e.avatar?(s(),i("div",{key:0,class:"var-skeleton__avatar",style:p({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},P,4)):c("v-if",!0),u("div",Q,[e.title?(s(),i("div",{key:0,class:"var-skeleton__title",style:p({width:e.toSizeUnit(e.titleWidth)})},Y,4)):c("v-if",!0),(s(!0),i(y,null,z(e.toNumber(e.rows),(r,d)=>(s(),i("div",{class:"var-skeleton__row",key:r,style:p({width:e.toSizeUnit(e.rowsWidth[d])})},$,4))),128))])])])):c("v-if",!0),e.loading&&e.fullscreen?(s(),i("div",{key:2,class:"var-skeleton__fullscreen",style:p({zIndex:e.toNumber(e.fullscreenZIndex)})},ae,4)):c("v-if",!0)])}var f=k(W,[["render",te]]);f.install=function(e){e.component(f.name,f)};var oe={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},le={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"};const{add:S,use:ne,pack:se,packs:Ce,merge:Ae}=V(),ie=e=>{I(e),ne(e)};h("zh-CN",H);h("en-US",L);S("zh-CN",oe);S("en-US",le);const re={name:"SkeletonExample",components:{VarSkeleton:f,VarButton:B,AppType:U},setup(){const e=m(!0),_=m(!1),v=()=>{_.value=!0,setTimeout(()=>{_.value=!1},2e3)};return M(ie),T(E),{pack:se,loading:e,fullscreenLoading:_,fullscreen:v}}};function de(e,_,v,a,w,C){const r=g("app-type"),d=g("var-skeleton"),A=g("var-button");return s(),i(y,null,[t(r,null,{default:o(()=>[l(n(a.pack.basicUsage),1)]),_:1}),t(d,{loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.displayTitle),1)]),_:1}),t(d,{title:"",loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.customRowsHeight),1)]),_:1}),t(d,{title:"",rows:3,loading:a.loading,"rows-width":["200px","100px","50px"]},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.displayAvatar),1)]),_:1}),t(d,{title:"",avatar:"",rows:3,loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.displayCard),1)]),_:1}),t(d,{title:"",avatar:"",card:"",rows:3,loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.fullscreenMode),1)]),_:1}),t(A,{type:"danger",class:"button",onClick:a.fullscreen},{default:o(()=>[l(n(a.pack.toggleFullscreenMode),1)]),_:1},8,["onClick"]),t(d,{fullscreen:"",loading:a.fullscreenLoading},null,8,["loading"])],64)}var Fe=k(re,[["render",de],["__scopeId","data-v-77792966"]]);export{Fe as default};
