import{t as v}from"./shared.61f3a471.js";import{_ as f}from"./elevation.8f12812c.js";import{q as y,b as $,o as r,c as i,a as o,n as d,f as u,F as t,j as p,m}from"./vendor.8a125dba.js";function b(e){return["circle","wave","cube","rect","disappear"].includes(e)}function h(e){return["normal","mini","small","large"].includes(e)}const z={type:{type:String,default:"circle",validator:b},radius:{type:[String,Number]},size:{type:String,default:"normal",validator:h},color:{type:String,default:"currentColor"}};const C=y({name:"VarLoading",props:z,setup(e){const s={wave:5,cube:4,rect:8,disappear:3},l={mini:9,small:12,normal:15,large:18},c=$(()=>e.radius?v(e.radius):l[e.size]);return{loadingTypeDict:s,getRadius:c}}}),L={class:"var--box var-loading"},S={key:0,class:"var-loading__circle"},V=o("svg",{viewBox:"25 25 50 50"},[o("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),j=[V];function w(e,s,l,c,B,N){return r(),i("div",L,[e.type==="circle"?(r(),i("div",S,[o("span",{class:"var-loading__circle-block",style:d({width:e.getRadius*2+"px",height:e.getRadius*2+"px",color:e.color})},j,4)])):u("v-if",!0),(r(!0),i(t,null,p(e.loadingTypeDict,(_,a)=>(r(),i(t,{key:a},[e.type===a?(r(),i("div",{key:0,class:m(`var-loading__${a} var-loading__${a}-${e.size}`)},[(r(!0),i(t,null,p(_,g=>(r(),i("div",{key:g+a,style:d({backgroundColor:e.color}),class:m(`var-loading__${a}-item var-loading__${a}-item-${e.size}`)},null,6))),128))],2)):u("v-if",!0)],64))),128))])}var n=f(C,[["render",w]]);n.install=function(e){e.component(n.name,n)};export{n as L,z as p};