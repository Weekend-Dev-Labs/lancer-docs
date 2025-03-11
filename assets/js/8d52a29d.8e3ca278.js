"use strict";(self.webpackChunklancer_docs=self.webpackChunklancer_docs||[]).push([[8524],{4866:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"documentation/upload-files","title":"Upload files in chunks","description":"Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout SDK & Packages page","source":"@site/docs/documentation/upload-files.md","sourceDirName":"documentation","slug":"/documentation/upload-files","permalink":"/lancer-docs/docs/documentation/upload-files","draft":false,"unlisted":false,"editUrl":"https://github.com/weekend-dev-labs/lancer-docs/docs/documentation/upload-files.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Upload files in chunks"},"sidebar":"tutorialSidebar","previous":{"title":"Create an upload session","permalink":"/lancer-docs/docs/documentation/creating-upload-session"},"next":{"title":"Setting up Backend for Lancer Integration","permalink":"/lancer-docs/docs/documentation/server-side-auth"}}');var a=o(4848),i=o(8453);const t={sidebar_position:4,title:"Upload files in chunks"},l=void 0,c={},r=[{value:"API Endpoint",id:"api-endpoint",level:3},{value:"Request Payload",id:"request-payload",level:4},{value:"Chunk Calculation Logic",id:"chunk-calculation-logic",level:3},{value:"Example Code",id:"example-code",level:4},{value:"Upload Code",id:"upload-code",level:4},{value:"Full Example: Upload a File",id:"full-example-upload-a-file",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout ",(0,a.jsx)(n.a,{href:"/lancer-docs/docs/quickstart",children:"SDK & Packages"})," page"]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Important: Please follow the ",(0,a.jsx)(n.a,{href:"/lancer-docs/docs/documentation/creating-upload-session",children:"step one"})," before moving forward"]})}),"\n",(0,a.jsx)(n.h3,{id:"api-endpoint",children:"API Endpoint"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"/api/upload"})]}),"\n",(0,a.jsx)(n.h4,{id:"request-payload",children:"Request Payload"}),"\n",(0,a.jsxs)(n.p,{children:["Each chunk is uploaded using a ",(0,a.jsx)(n.code,{children:"FormData"})," object, which contains:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"checksum"})," : The SHA-156 checksum of the chunk."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"chunk"})," : The chunk index (starting from 1)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"file"})," : The file chunk."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"chunk-calculation-logic",children:"Chunk Calculation Logic"}),"\n",(0,a.jsx)(n.p,{children:"Files are divided into chunks based on a base chunk size (e.g., 5 MB). Each chunk is uploaded individually."}),"\n",(0,a.jsx)(n.h4,{id:"example-code",children:"Example Code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'/**\n * Calculates the SHA-256 checksum of a file chunk.\n * @param {Blob} chunk - The file chunk.\n * @returns {Promise<string>} - The hexadecimal checksum.\n */\nasync function calculateChecksum(chunk) {\n  const buffer = await chunk.arrayBuffer();\n  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);\n  const hashArray = Array.from(new Uint8Array(hashBuffer));\n\n  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"upload-code",children:"Upload Code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const UploadEndpoint = API + "/api/upload";\n\n/**\n * Uploads a file in chunks.\n * @param {File} file - The file to upload.\n * @param {string} sessionToken - The session token from the server.\n */\nasync function uploadFile(file, sessionToken) {\n  const baseChunkSize = 5 * 1024 * 1024; // Default chunk size: 5 MB\n  const chunks = [];\n  let start = 0;\n\n  // Divide file into chunks\n  while (start < file.size) {\n    const end = Math.min(start + baseChunkSize, file.size);\n    chunks.push({ start, end });\n    start = end;\n  }\n\n  console.log(`Total chunks: ${chunks.length}`);\n\n  // Upload each chunk\n  for (let i = 0; i < chunks.length; i++) {\n    const { start, end } = chunks[i];\n    const chunk = file.slice(start, end);\n\n    const checksum = await calculateChecksum(chunk);\n\n    const formData = new FormData();\n    formData.append("checksum", checksum);\n    formData.append("chunk", i + 1); // 1-based index\n    formData.append("file", chunk);\n\n    console.log(`Uploading chunk ${i + 1} (${end - start} bytes)`);\n\n    const response = await axios.post(UploadEndpoint, formData, {\n      headers: {\n        "x-session-token": sessionToken,\n      },\n    });\n\n    console.log(`Uploaded chunk ${i + 1}:`, response.data);\n  }\n\n  console.log("All chunks uploaded successfully!");\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"full-example-upload-a-file",children:"Full Example: Upload a File"}),"\n",(0,a.jsx)(n.p,{children:"Here's how the two steps come together:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function upload(file) {\n  try {\n    // Step 1: Create a session\n    const sessionToken = await createUploadSession(file);\n    console.log("Session token:", sessionToken);\n\n    // Step 2: Upload the file in chunks\n    await uploadFile(file, sessionToken);\n\n    console.log("File upload complete!");\n  } catch (error) {\n    console.error("Upload failed:", error.response?.data || error.message);\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(6540);const a={},i=s.createContext(a);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);