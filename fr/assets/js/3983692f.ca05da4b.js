"use strict";(self.webpackChunklancer_docs=self.webpackChunklancer_docs||[]).push([[1711],{3433:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"documentation/handling-webhook-events","title":"Handling Webhook Events","description":"Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout SDK & Packages page","source":"@site/docs/documentation/handling-webhook-events.md","sourceDirName":"documentation","slug":"/documentation/handling-webhook-events","permalink":"/lancer-docs/fr/docs/documentation/handling-webhook-events","draft":false,"unlisted":false,"editUrl":"https://github.com/weekend-dev-labs/lancer-docs/docs/documentation/handling-webhook-events.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Handling Webhook Events"},"sidebar":"tutorialSidebar","previous":{"title":"Adding authentication endpoint","permalink":"/lancer-docs/fr/docs/documentation/adding-authentication-endpoint"},"next":{"title":"Secure webhook handling","permalink":"/lancer-docs/fr/docs/documentation/security"}}');var i=d(4848),t=d(8453);const r={sidebar_position:7,title:"Handling Webhook Events"},l=void 0,c={},o=[{value:"<strong>Webhook Events</strong>",id:"webhook-events",level:2},{value:"Session Events",id:"session-events",level:3},{value:"File Events",id:"file-events",level:3},{value:"Event Payload",id:"event-payload",level:3},{value:"Webhook Payloads",id:"webhook-payloads",level:3},{value:"Payload for Session Events",id:"payload-for-session-events",level:3},{value:"Payload for File Events",id:"payload-for-file-events",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout ",(0,i.jsx)(n.a,{href:"/lancer-docs/fr/docs/quickstart",children:"SDK & Packages"})," page"]})}),"\n",(0,i.jsx)(n.h2,{id:"webhook-events",children:(0,i.jsx)(n.strong,{children:"Webhook Events"})}),"\n",(0,i.jsx)(n.p,{children:"Below are the webhook events implemented in the system :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"session-events",children:"Session Events"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SESSION_CREATED"})," : Triggered when a new upload session is created."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SESSION_CANCELLED"})," : Triggered when an upload session is cancelled."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SESSION_COMPLETED"})," : Triggered when an upload session completes."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"file-events",children:"File Events"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FILE_UPLOAD"})," : Triggered when a file is uploaded successfully."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FILE_DELETE"})," : Triggered when a file is deleted."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"event-payload",children:"Event Payload"}),"\n",(0,i.jsxs)(n.p,{children:["Webhook events sends some ",(0,i.jsx)(n.code,{children:"json"})," as payload to the listening server. The data is in this format :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "event" : "<event-type>", // It can be one of these  (SESSION_CREATED , SESSION_CANCELLED, SESSION_COMPLETED, FILE_UPLOAD, FILE_DELETE)\n    "data" : {} // It is the event payload\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"webhook-payloads",children:"Webhook Payloads"}),"\n",(0,i.jsx)(n.h3,{id:"payload-for-session-events",children:"Payload for Session Events"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Unique identifier for the session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"file_size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int64"})}),(0,i.jsx)(n.td,{children:"Size of the file being uploaded (in bytes)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"chunk_size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int64"})}),(0,i.jsx)(n.td,{children:"Size of each chunk (in bytes)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"max_chunk"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int64"})}),(0,i.jsx)(n.td,{children:"Total number of chunks for the session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"file_name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Name of the file being uploaded."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"temp_path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Temporary storage path for the session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"owner_id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"ID of the user who owns the session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"current_chunk"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int64"})}),(0,i.jsx)(n.td,{children:"Current chunk being uploaded."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"provider"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The storage provider for the session."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Example JSON Payload for ",(0,i.jsx)(n.code,{children:"SESSION_CREATED"}),":"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "session-12345",\n  "file_size": 10485760,\n  "chunk_size": 5242880,\n  "max_chunk": 2,\n  "file_name": "example.txt",\n  "temp_path": "/tmp/session-12345",\n  "owner_id": "user-67890",\n  "current_chunk": 0,\n  "provider": "LOCAL"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"payload-for-file-events",children:"Payload for File Events"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Unique identifier for the uploaded file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"file_name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Name of the uploaded file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"file_path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Path where the file is stored."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"file_size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int64"})}),(0,i.jsx)(n.td,{children:"Size of the uploaded file (in bytes)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"file_type"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"MIME type of the uploaded file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uploaded_by"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"ID of the user who uploaded the file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uploaded_at"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," (ISO8601)"]}),(0,i.jsx)(n.td,{children:"Timestamp of when the file was uploaded."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"is_deleted"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Whether the file has been marked as deleted."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"checksum"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"SHA-256 checksum of the file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"description"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Optional description of the file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"provider"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The storage provider for the file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"provider_metadata"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"Additional metadata related to the provider."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Example JSON Payload for ",(0,i.jsx)(n.code,{children:"FILE_UPLOAD"}),":"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "file-12345",\n  "file_name": "example.txt",\n  "file_path": "/storage/files/example.txt",\n  "file_size": 10485760,\n  "file_type": "text/plain",\n  "uploaded_by": "user-67890",\n  "uploaded_at": "2025-01-22T15:30:00Z",\n  "is_deleted": false,\n  "checksum": "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",\n  "description": "Sample text file",\n  "provider": "LOCAL",\n  "provider_metadata": {}\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>l});var s=d(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);