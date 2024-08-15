"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9900],{24239:(e,r,n)=>{n.d(r,{Z:()=>v});var t=n(24246),o=(n(27378),n(40624)),a=n(97298),s=n(41428),l=n(7812),c=n(64149),i=n(36712),u=n(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function p({href:e,children:r}){return(0,t.jsx)(s.Z,{href:e,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function h({href:e,icon:r,title:n,description:a}){return(0,t.jsxs)(p,{href:e,children:[(0,t.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:n,children:[r," ",n]}),a&&(0,t.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function m({item:e}){const r=(0,a.LM)(e),n=function(){const{selectMessage:e}=(0,l.c)();return r=>e(r,(0,i.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return r?(0,t.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(o=e.description)&&void 0!==o?o:n(e.items.length)}):null;var o}function f({item:e}){const r=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,a.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var s;return(0,t.jsx)(h,{href:e.href,icon:r,title:e.label,description:null!==(s=e.description)&&void 0!==s?s:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return(0,t.jsx)(f,{item:e});case"category":return(0,t.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function j({className:e}){const r=(0,a.jA)();return(0,t.jsx)(v,{items:r.items,className:e})}function v(e){const{items:r,className:n}=e;if(!r)return(0,t.jsx)(j,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){b(e,r,n[r])}))}return e}({},e));const s=(0,a.MN)(r);return(0,t.jsx)("section",{className:(0,o.Z)("row",n),children:s.map(((e,r)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(g,{item:e})},r)))})}},61132:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(24246),o=(n(27378),n(40624));const a={tabItem:"tabItem_pnkT"};function s({children:e,hidden:r,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,n),hidden:r,children:e})}},97555:(e,r,n)=>{n.d(r,{Z:()=>N});var t=n(24246),o=n(27378),a=n(40624),s=n(75527),l=n(3620),c=n(44479),i=n(62821),u=n(52196),d=n(53589);function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function h(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function m(e){var r,n;return null!==(n=null===(r=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function f(e){const{values:r,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=r?r:function(e){return m(e).map((({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t})))}(n);return function(e){const r=(0,u.lx)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function g({value:e,tabValues:r}){return r.some((r=>r.value===e))}function b({queryString:e=!1,groupId:r}){const n=(0,l.k6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),a=(0,i._X)(t),s=(0,o.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace(h(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){p(e,r,n[r])}))}return e}({},n.location),{search:r.toString()}))}),[t,n]);return[a,s]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,a=f(e),[s,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const t=null!==(n=r.find((e=>e.default)))&&void 0!==n?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[i,u]=b({queryString:n,groupId:t}),[p,h]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,t]=(0,d.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:t}),m=(()=>{const e=null!=i?i:p;return g({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var v=n(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function x(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function w(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){x(e,r,n[r])}))}return e}function O(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function k({className:e,block:r,selectedValue:n,selectValue:o,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),a=l[t].value;a!==n&&(i(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;var n;r=null!==(n=c[t])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;var t;r=null!==(t=c[n])&&void 0!==t?t:c[c.length-1];break}}null==r||r.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},e),children:l.map((({value:e,label:r,attributes:o})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>c.push(e),onKeyDown:d,onClick:u},o),{className:(0,a.Z)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e)))})}function P({lazy:e,children:r,selectedValue:n}){const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function D(e){const r=j(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,t.jsx)(k,w({},r,e)),(0,t.jsx)(P,w({},r,e))]})}function N(e){const r=(0,v.Z)();return(0,t.jsx)(D,O(w({},e),{children:m(e.children)}),String(r))}},7812:(e,r,n)=>{n.d(r,{c:()=>i});var t=n(27378),o=n(4423);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((r=>e.includes(r)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,t.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:s(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),l}}),[e])}function i(){const e=c();return{selectMessage:(r,n)=>function(e,r,n){const t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const o=n.select(r),a=n.pluralForms.indexOf(o);return t[Math.min(a,t.length-1)]}(n,r,e)}}},47577:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=n(24246),o=n(71670),a=n(97555),s=n(61132),l=n(24239);const c={slug:"/migration"},i="Upgrading Docusaurus",u={id:"migration/index",title:"Upgrading Docusaurus",description:"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.",source:"@site/docs/migration/index.mdx",sourceDirName:"migration",slug:"/migration",permalink:"/docs/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/index.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1723562595e3,frontMatter:{slug:"/migration"},sidebar:"docs",previous:{title:"Client architecture",permalink:"/docs/advanced/client"},next:{title:"To Docusaurus v3",permalink:"/docs/migration/v3"}},d={},p=[{value:"Troubleshooting upgrades",id:"troubleshooting-upgrades",level:2},{value:"Run the <code>clear</code> command",id:"run-the-clear-command",level:3},{value:"Remove <code>node_modules</code> and your lock file(s)",id:"remove-node_modules-and-your-lock-files",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"})}),"\n",(0,t.jsxs)(r.p,{children:["Docusaurus versioning is based on the ",(0,t.jsx)(r.code,{children:"major.minor.patch"})," scheme and respects ",(0,t.jsx)(r.a,{href:"https://semver.org/",children:(0,t.jsx)(r.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n",(0,t.jsx)(l.Z,{}),"\n",(0,t.jsx)(r.h2,{id:"troubleshooting-upgrades",children:"Troubleshooting upgrades"}),"\n",(0,t.jsx)(r.p,{children:"When upgrading Docusaurus you may experience issues caused by mismatching cached dependencies - there are a few troubleshooting steps you should perform to resolve these common issues before reporting a bug or seeking support."}),"\n",(0,t.jsxs)(r.h3,{id:"run-the-clear-command",children:["Run the ",(0,t.jsx)(r.code,{children:"clear"})," command"]}),"\n",(0,t.jsx)(r.p,{children:"This CLI command is used to clear a Docusaurus site's generated assets, caches and build artifacts."}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm run clear\n"})})})]}),"\n",(0,t.jsxs)(r.h3,{id:"remove-node_modules-and-your-lock-files",children:["Remove ",(0,t.jsx)(r.code,{children:"node_modules"})," and your lock file(s)"]}),"\n",(0,t.jsxs)(r.p,{children:["Remove the ",(0,t.jsx)(r.code,{children:"node_modules"})," folder and your package manager's lock file using the following:"]}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{label:"Bash",value:"bash",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,t.jsx)(s.Z,{label:"PowerShell",value:"powershell",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-powershell",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["Then reinstall packages and regenerate the ",(0,t.jsx)(r.code,{children:"lock"})," file using:"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn install\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm install\n"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71670:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var t=n(27378);const o={},a=t.createContext(o);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);