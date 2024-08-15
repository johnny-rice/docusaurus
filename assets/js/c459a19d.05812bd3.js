"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53498],{61132:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(24246),a=(t(27378),t(40624));const i={tabItem:"tabItem_pnkT"};function l({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(24246),a=t(27378),i=t(40624),l=t(75527),s=t(3620),o=t(44479),c=t(62821),u=t(52196),d=t(53589);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function f(e){var n,t;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,u.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const t=(0,s.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(r),l=(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(h(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[i,l]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=b(e),[l,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:r}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:p;return g({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var y=t(29088);const j={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:a,tabValues:s}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),i=s[r].value;i!==t&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[o.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:s.map((({value:e,label:n,attributes:a})=>(0,r.jsx)("li",O(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},a),{className:(0,i.Z)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:t}){const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function E(e){const n=v(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,r.jsx)(k,w({},n,e)),(0,r.jsx)(P,w({},n,e))]})}function I(e){const n=(0,y.Z)();return(0,r.jsx)(E,O(w({},e),{children:f(e.children)}),String(n))}},52605:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(24246),a=t(27378),i=t(80474),l=t(3620);const s={apiTable:"apiTable_e8hp"};function o({name:e,children:n},t){const s=function(e){let n=e;for(;(0,a.isValidElement)(n);)[n]=a.Children.toArray(n.props.children);if("string"!=typeof n)throw new Error(`Could not extract APITable row name from JSX tree:\n${JSON.stringify(e,null,2)}`);return n}(n),o=e?`${e}-${s}`:s,c=`#${o}`,u=(0,l.k6)();return(0,i.Z)().collectAnchor(o),(0,r.jsx)("tr",{id:o,tabIndex:0,ref:u.location.hash===c?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||u.push(c)},onKeyDown:e=>{"Enter"===e.key&&u.push(c)},children:n.props.children})}const c=a.forwardRef(o);function u({children:e,name:n}){if("table"!==e.type)throw new Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");const[t,i]=a.Children.toArray(e.props.children),l=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const o=a.Children.map(i.props.children,(e=>(0,r.jsx)(c,{name:n,ref:l,children:e})));return(0,r.jsxs)("table",{className:s.apiTable,children:[t,(0,r.jsx)("tbody",{children:o})]})}},99086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(24246),a=t(71670),i=t(97555),l=t(61132),s=t(52605);const o={sidebar_position:11,slug:"/api/plugins/@docusaurus/plugin-vercel-analytics"},c="\ud83d\udce6 plugin-vercel-analytics",u={id:"api/plugins/plugin-vercel-analytics",title:"\ud83d\udce6 plugin-vercel-analytics",description:"Vercel Analytics provides comprehensive insights into your website's visitors, tracking top pages, referrers, and demographics like location, operating systems, and browser info.",source:"@site/docs/api/plugins/plugin-vercel-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-vercel-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-vercel-analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-vercel-analytics.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1723562595e3,sidebarPosition:11,frontMatter:{sidebar_position:11,slug:"/api/plugins/@docusaurus/plugin-vercel-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/docs/api/plugins/@docusaurus/plugin-sitemap"},next:{title:"Themes overview",permalink:"/docs/api/themes"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-plugin-vercel-analytics",children:"\ud83d\udce6 plugin-vercel-analytics"})}),"\n","\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://vercel.com/docs/analytics",children:"Vercel Analytics"})," provides comprehensive insights into your website's visitors, tracking top pages, referrers, and demographics like location, operating systems, and browser info."]}),"\n",(0,r.jsx)(n.admonition,{title:"production only",type:"warning",children:(0,r.jsxs)(n.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(n.strong,{children:"only active in production"})," (",(0,r.jsx)(n.code,{children:"docusaurus build"}),") to avoid polluting the analytics statistics."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-vercel-analytics\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-vercel-analytics\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-vercel-analytics\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(s.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mode"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'auto'"})}),(0,r.jsxs)(n.td,{children:["Override the automatic environment detection. Read the ",(0,r.jsx)(n.a,{href:"https://vercel.com/docs/analytics/package#mode",children:"official docs"})," for details."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"debug"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsxs)(n.td,{children:["Enable browser console logging of analytics events. Read the ",(0,r.jsx)(n.a,{href:"https://vercel.com/docs/analytics/package#debug",children:"official docs"})," for details."]})]})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"You can configure this plugin through plugin options."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      'vercel-analytics',\n      {\n        debug: true,\n        mode: 'auto',\n      },\n    ],\n  ],\n};\n"})})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var r=t(27378);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);