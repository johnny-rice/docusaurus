"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17490],{18142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>x,default:()=>f,frontMatter:()=>u,metadata:()=>j,toc:()=>b});var s=n(24246),a=n(71670);const i=[{value:"Partial",id:"partial",level:2},{value:"Partial Sub Heading 1",id:"partial-sub-heading-1",level:3},{value:"Partial Sub Sub Heading 1",id:"partial-sub-sub-heading-1",level:4},{value:"Partial Sub Heading 2",id:"partial-sub-heading-2",level:3},{value:"Partial Sub Sub Heading 2",id:"partial-sub-sub-heading-2",level:4}];function r(e){const t={h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"partial",children:"Partial"}),"\n",(0,s.jsx)(t.p,{children:"Partial intro"}),"\n",(0,s.jsx)(t.h3,{id:"partial-sub-heading-1",children:"Partial Sub Heading 1"}),"\n",(0,s.jsx)(t.p,{children:"Partial Sub Heading 1 content"}),"\n",(0,s.jsx)(t.h4,{id:"partial-sub-sub-heading-1",children:"Partial Sub Sub Heading 1"}),"\n",(0,s.jsx)(t.p,{children:"Partial Sub Sub Heading 1 content"}),"\n",(0,s.jsx)(t.h3,{id:"partial-sub-heading-2",children:"Partial Sub Heading 2"}),"\n",(0,s.jsx)(t.p,{children:"Partial Sub Heading 2 content"}),"\n",(0,s.jsx)(t.h4,{id:"partial-sub-sub-heading-2",children:"Partial Sub Sub Heading 2"}),"\n",(0,s.jsx)(t.p,{children:"Partial Sub Sub Heading 2 content"})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}l.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/_partial.mdx)";function o(e){const t={h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"2nd-level-partial",children:"2nd level partial"}),"\n",(0,s.jsx)(t.p,{children:"I'm 2 levels deep."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}d.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/_second-level-partial.mdx)";const c=[{value:"1st level partial",id:"1st-level-partial",level:2},{value:"2nd level partial",id:"2nd-level-partial",level:3}];function p(e){const t={h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"1st-level-partial",children:"1st level partial"}),"\n",(0,s.jsx)(t.p,{children:"I'm 1 level deep."}),"\n",(0,s.jsx)(d,{})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/_first-level-partial.mdx)";const u={},x="TOC partial test",j={id:"tests/toc-partials/index",title:"TOC partial test",description:"This page tests that MDX-imported content appears correctly in the table-of-contents",source:"@site/_dogfooding/_docs tests/tests/toc-partials/index.mdx",sourceDirName:"tests/toc-partials",slug:"/tests/toc-partials/",permalink:"/tests/docs/tests/toc-partials/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1723562595e3,frontMatter:{},sidebar:"sidebar",previous:{title:"Test links",permalink:"/tests/docs/tests/links/test-markdown-links"},next:{title:"Visibility",permalink:"/tests/docs/tests/visibility/"}},g={},b=[...i,...i,...c,...c];function m(e){const t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"toc-partial-test",children:"TOC partial test"})}),"\n",(0,s.jsx)(t.p,{children:"This page tests that MDX-imported content appears correctly in the table-of-contents"}),"\n",(0,s.jsx)(t.p,{children:"See also:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3915",children:"https://github.com/facebook/docusaurus/issues/3915"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/9684",children:"https://github.com/facebook/docusaurus/pull/9684"})}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"The table of contents should include headings of this partial"}),":"]}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"We can import the same partial using a different name and it still works"}),":"]}),"\n","\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"We can import a partial and not use it, the TOC remains unaffected"}),":"]}),"\n","\n",(0,s.jsx)(t.hr,{}),"\n","\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"It also works for partials importing other partials"})}),"\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"And we can even use the same partial twice!"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"(although it's useless and not particularly recommended because headings will have the same ids)"})}),"\n",(0,s.jsx)(h,{})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/index.mdx)"},71670:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(27378);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);