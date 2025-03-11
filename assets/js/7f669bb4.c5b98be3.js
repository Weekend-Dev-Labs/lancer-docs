"use strict";(self.webpackChunklancer_docs=self.webpackChunklancer_docs||[]).push([[7475],{9581:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"libraries and sdk/client-side-sdk","title":"Client Side SDK","description":"Installation","source":"@site/docs/libraries and sdk/client-side-sdk.md","sourceDirName":"libraries and sdk","slug":"/libraries and sdk/client-side-sdk","permalink":"/lancer-docs/docs/libraries and sdk/client-side-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/weekend-dev-labs/lancer-docs/docs/libraries and sdk/client-side-sdk.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Client Side SDK"},"sidebar":"tutorialSidebar","previous":{"title":"Libraries & SDK","permalink":"/lancer-docs/docs/category/libraries--sdk"},"next":{"title":"Next.js Server SDK","permalink":"/lancer-docs/docs/libraries and sdk/next-js-server-sdk"}}');var i=s(4848),t=s(8453);const l={sidebar_position:1,title:"Client Side SDK"},d=void 0,c={},a=[{value:"<strong>Installation</strong>",id:"installation",level:2},{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"<strong>1. Initialize the Lancer Uploader</strong>",id:"1-initialize-the-lancer-uploader",level:3},{value:"<strong>2. Create an Upload Session</strong>",id:"2-create-an-upload-session",level:3},{value:"<strong>3. Upload the File</strong>",id:"3-upload-the-file",level:3},{value:"<strong>Error Handling</strong>",id:"error-handling",level:2},{value:"<strong>Security Best Practices</strong>",id:"security-best-practices",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation",children:(0,i.jsx)(n.strong,{children:"Installation"})}),"\n",(0,i.jsx)(n.p,{children:"Install the SDK via npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install lancer-client\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:(0,i.jsx)(n.strong,{children:"Getting Started"})}),"\n",(0,i.jsx)(n.h3,{id:"1-initialize-the-lancer-uploader",children:(0,i.jsx)(n.strong,{children:"1. Initialize the Lancer Uploader"})}),"\n",(0,i.jsxs)(n.p,{children:["Create an instance of the ",(0,i.jsx)(n.code,{children:"lancer"})," function with your server URL for managing file upload sessions and chunks."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { lancer } from "lancer-client";\n\nconst lancerClient = lancer("<your-server-url>");\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"serverUrl"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"URL of your upload server"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"2-create-an-upload-session",children:(0,i.jsx)(n.strong,{children:"2. Create an Upload Session"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"createSession"})," method to start an upload session for a file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const session = await lancerClient.createSession(file, {\n  baseChunkSize: 1024 * 1024, // 1MB chunks\n  authToken: "<your-auth-token>",\n  provider: "AWS", // Storage provider\n});\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:"File"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"File object to be uploaded"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"baseChunkSize"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Size of each file chunk (bytes)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authToken"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Authorization token"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"provider"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Storage provider name"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "sessionToken": "abc123",\n  "file": {},\n  "chunkSize": 1048576,\n  "max_chunk": 10\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"3-upload-the-file",children:(0,i.jsx)(n.strong,{children:"3. Upload the File"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"uploadFile"})," method to upload file chunks."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'await lancerClient.uploadFile(session, {\n  onPartUpload: async (data) => {\n    console.log("Chunk uploaded:", data);\n    return true; // Continue upload\n  },\n  onCompeteUpload: async (data) => {\n    console.log("Upload completed:", data);\n    return true;\n  },\n});\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"session"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Upload session object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onPartUpload"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Callback for each chunk upload"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onCompeteUpload"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Callback for upload completion"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Chunk Upload Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "serverChecksum": "abc123",\n  "chunk": 1,\n  "remainingChunk": 9,\n  "isUploadCompleted": false\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Final Upload Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "remainingChunk": 0,\n  "isUploadCompleted": true,\n  "uploadId": 456,\n  "file": {}\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"error-handling",children:(0,i.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,i.jsxs)(n.p,{children:["The SDK throws a ",(0,i.jsx)(n.code,{children:"LancerUploadStopError"})," if an upload is stopped by a callback returning ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'try {\n  await lancerClient.uploadFile(session, uploadOptions);\n} catch (error) {\n  if (error instanceof LancerUploadStopError) {\n    console.error("Upload stopped:", error.message);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"security-best-practices",children:(0,i.jsx)(n.strong,{children:"Security Best Practices"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Protect Your Auth Token"}),": Store your ",(0,i.jsx)(n.code,{children:"authToken"})," securely in environment variables."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verify Checksums"}),": Ensure server verifies chunk checksums."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Limit Upload Size"}),": Set appropriate file size limits on the server."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);