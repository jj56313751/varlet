import{S as f}from"./index.46574dfe.js";import{u as w}from"./provide.bd3151a0.js";import{_ as I}from"./IconSfc.2f05a1db.js";import{q as C,r as S,y as p,d as g,o as y,k as T,w as x,O as $}from"./vendor.bac705d4.js";const j={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};const B=C({name:"VarTabsItems",components:{[f.name]:f},props:j,setup(e){const r=S(null),{tabItemList:n,bindTabItem:l,length:d}=w(),u=t=>n.find(({name:a})=>t===a.value),c=t=>n.find(({index:a})=>t===a.value),b=t=>u(t)||c(t),m=t=>{var o;const a=b(t);!a||(n.forEach(({setCurrent:s})=>s(!1)),a.setCurrent(!0),(o=r.value)==null||o.to(a.index.value))},h=t=>{var s,v;const a=n.find(({index:_})=>_.value===t),o=(s=a.name.value)!=null?s:a.index.value;(v=e["onUpdate:active"])==null||v.call(e,o)};return l({}),p(()=>e.active,m),p(()=>d.value,()=>m(e.active)),{swipe:r,handleSwipeChange:h}}});function k(e,r,n,l,d,u){const c=g("var-swipe");return y(),T(c,{class:"var-tabs-items",ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:x(()=>[$(e.$slots,"default")]),_:3},8,["loop","touchable","onChange"])}var i=I(B,[["render",k]]);i.install=function(e){e.component(i.name,i)};export{i as T};