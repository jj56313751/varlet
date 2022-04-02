import{_ as o}from"./elevation.229458c1.js";import{e as c,o as n,c as l,a as t,i as d,j as a,m as s,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=t("h1",null,"Snackbar",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Used to display a quick message to a user.")],-1),b={class:"card"},u=t("h3",null,"Install",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Snackbar)
`)])],-1),k={class:"card"},j=t("h3",null,"Scoped Install",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-attr"},"components"),s(`: {
    [Snackbar.Component.name]: Snackbar
  }
}
`)])],-1),v=t("h2",null,"Component Call",-1),f={class:"card"},S=t("h3",null,"Basic Usage",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Basic Usage"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-snackbar"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s(` "Hello, I'm a snackbar" `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`)])],-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` {
      show
    }
  }
}
`)])],-1),C={class:"card"},x=t("h3",null,"Multi-Line",-1),I=t("p",null,[s("Use "),t("code",null,"vertical"),s(" prop to change arrangement of "),t("code",null,"snackbar"),s(". Use "),t("code",null,"Custom slot"),s(" create action of right.")],-1),D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-snackbar"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},":vertical"),s("="),t("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
  "Hello, I'm a snackbar"
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"action"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Close"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`)])],-1),T={class:"card"},H=t("h3",null,"Bottom Display",-1),U=t("p",null,[s("Use "),t("code",null,"position"),s(" prop to change position of "),t("code",null,"snackbar"),s(".")],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-snackbar"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},"position"),s("="),t("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
  "Hello, I'm a snackbar"
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"action"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = false"'),s(">")]),s("Close"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`)])],-1),B={class:"card"},O=t("h3",null,"Display Duration",-1),W=t("p",null,[s("Use "),t("code",null,"duration"),s(" prop to change display duration of "),t("code",null,"snackbar"),s(".")],-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-snackbar"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},":duration"),s("="),t("span",{class:"hljs-string"},'"1000"'),s(">")]),s(` "Hello, I'm a snackbar" `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`)])],-1),P={class:"card"},V=t("h3",null,"Forbid Click",-1),N=t("p",null,[s("Use "),t("code",null,"forbid-click"),s(" prop to control whether penetrating clicks are forbidden.")],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-snackbar"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(),t("span",{class:"hljs-attr"},":forbid-click"),s("="),t("span",{class:"hljs-string"},'"true"'),s(">")]),s(` "Hello, I'm a snackbar" `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`)])],-1),A=t("h2",null,"Function Call",-1),$={class:"card"},E=t("h3",null,"Basic Usage",-1),F=t("pre",{class:"hljs"},[t("code",null,[s("Snackbar("),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
`)])],-1),q={class:"card"},R=t("h3",null,"Display Duration",-1),G=t("pre",{class:"hljs"},[t("code",null,[s(`Snackbar({
 `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`,
 `),t("span",{class:"hljs-attr"},"duration"),s(": "),t("span",{class:"hljs-number"},"1000"),s(`
})
`)])],-1),J={class:"card"},K=t("h3",null,"Bottom Display",-1),Q=t("pre",{class:"hljs"},[t("code",null,[s(`Snackbar({
 `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`,
 `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'bottom'"),s(`
})
`)])],-1),X={class:"card"},Y=t("h3",null,"Snackbar Type",-1),Z=t("pre",{class:"hljs"},[t("code",null,[s("Snackbar.success("),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
Snackbar.warning(`),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
Snackbar.info(`),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
Snackbar.error(`),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
Snackbar.loading(`),t("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
`)])],-1),tt={class:"card"},st=t("h3",null,"Singleton",-1),et=t("p",null,"When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:",-1),dt=t("pre",{class:"hljs"},[t("code",null,[s("Snackbar.allowMultiple("),t("span",{class:"hljs-literal"},"true"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(" snackbar1 = Snackbar("),t("span",{class:"hljs-string"},"'First Snackbar'"),s(`);
`),t("span",{class:"hljs-keyword"},"const"),s(" snackbar1 = Snackbar.success("),t("span",{class:"hljs-string"},"'Second Snackbar'"),s(`);

snackbar1.clear();
snackbar1.clear();
`)])],-1),at=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>whether to penetrating clicks are forbidden</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Snackbar to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> content message</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> action of right</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>The <code>clear</code> method on the instance can close the current instance, and the <code>clear</code> method on the Snackbar can close all message bars.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return value</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>Show snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.success</code></td><td>Show success snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.info</code></td><td>Show info snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>Show warning snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.error</code></td><td>Show error snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>Show loading snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>Close snackbar</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>Whether to allow multi instance patterns</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Snackbar Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration (Need to be closed manually when the <code>type</code> prop is <code>loading</code>)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>whether to penetrating clicks are forbidden (Value is <code>true</code> when the <code>type</code> prop is <code>loading</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 16px 0 0</code></td></tr></tbody></table></div>',7);function ot(ct,nt,lt,rt,it,ht){const e=c("var-site-code-example");return n(),l("div",h,[p,m,t("div",b,[u,d(e,null,{default:a(()=>[g]),_:1})]),t("div",k,[j,d(e,null,{default:a(()=>[_]),_:1})]),v,t("div",f,[S,d(e,null,{default:a(()=>[w]),_:1}),d(e,null,{default:a(()=>[y]),_:1})]),t("div",C,[x,I,d(e,null,{default:a(()=>[D]),_:1})]),t("div",T,[H,U,d(e,null,{default:a(()=>[L]),_:1})]),t("div",B,[O,W,d(e,null,{default:a(()=>[z]),_:1})]),t("div",P,[V,N,d(e,null,{default:a(()=>[M]),_:1})]),A,t("div",$,[E,d(e,null,{default:a(()=>[F]),_:1})]),t("div",q,[R,d(e,null,{default:a(()=>[G]),_:1})]),t("div",J,[K,d(e,null,{default:a(()=>[Q]),_:1})]),t("div",X,[Y,d(e,null,{default:a(()=>[Z]),_:1})]),t("div",tt,[st,et,d(e,null,{default:a(()=>[dt]),_:1})]),at])}var bt=o(i,[["render",ot]]);export{bt as default};
