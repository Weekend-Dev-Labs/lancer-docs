"use strict";(self.webpackChunklancer_docs=self.webpackChunklancer_docs||[]).push([[3822],{9575:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"Prerequisites","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/lancer-docs/hi-IN/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/weekend-dev-labs/lancer-docs/docs/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Docker","permalink":"/lancer-docs/hi-IN/docs/installation/docker"},"next":{"title":"Documentation","permalink":"/lancer-docs/hi-IN/docs/category/documentation"}}');var t=s(4848),i=s(8453);const a={sidebar_position:2},c="Quickstart",l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up Lancer",id:"setting-up-lancer",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Start the server",id:"start-the-server",level:3},{value:"Access the dashboard",id:"access-the-dashboard",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, make sure you have the following :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/category/installation",children:"Lancer"})," Installed on your system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"Postgres Database"})," A PostgreSQL instance to store metadata about uploaded files."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," (optional) A Redis server for caching uploaded files and enhancing performance."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-lancer",children:"Setting up Lancer"}),"\n",(0,t.jsx)(n.p,{children:"After a successfull installation you can see the configuration files for Lancer in the following directory :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows"})," : ",(0,t.jsx)(n.code,{children:"C:\\Users\\<username>\\AppData\\Roaming\\Lancer"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux"})," : ",(0,t.jsx)(n.code,{children:"/home/<username>/.config/Lancer"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MacOS"})," : ",(0,t.jsx)(n.code,{children:"/Users/<username>/Library/Application Support/Lancer"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Add a basic configuration file ",(0,t.jsx)(n.code,{children:"lancer.yaml"})," in that folder"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'port: "8080"\ndatabase:\n  address: "localhost:5432"\n  user: "lancer_user"\n  password: "secure_password_123"\n  name: "lancer_db"\n\nuse-redis: true\nredis: "redis://localhost:6379"\n\nserver-auth: false\nwebhook-endpoint: "http://localhost:3000/webhook"\nauth-endpoint: "http://localhost:3000/auth"\n\nstore:\n  local:\n    path: "store"\n    temp-path: "temp"\n  aws:\n    store: true\n    bucket: "my-lancer-bucket"\n    region: "us-east-1"\n    clientId: "" # AWS Client ID\n    clientSecret: "" # AWS Client Secret\n\nadmin-token-secret: "supersecretkey123"\nauth:\n  email: "admin@lancer.com"\n  password: "adminpassword123"\n'})}),"\n",(0,t.jsx)(n.p,{children:"**If using custom configuration : **"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lancer --config=lancer.yaml --database-migrate=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will apply the migration to the database."}),"\n",(0,t.jsx)(n.h3,{id:"start-the-server",children:"Start the server"}),"\n",(0,t.jsxs)(n.p,{children:["You can start the lancer server using the cli or a ",(0,t.jsx)(n.code,{children:"Systemd service"})," in linux ."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows"})," : You can start lancer by running this command :"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"lancer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Just make sure ",(0,t.jsx)(n.code,{children:"lancer"})," is added in your system environment variables."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux"})," : You can start lancer by running this command :"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Systemd Service :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start lancer\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you get any error running this command, make sure you have already setup a service using this command :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lancer setup-service\nsudo systemctl daemon-reload\nsudo systemctl start lancer\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check if the server running using this command :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status lancer\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"By CLI :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lancer\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will start the lancer server."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"access-the-dashboard",children:"Access the dashboard"}),"\n",(0,t.jsxs)(n.p,{children:["Now you can visit and login into the lancer dashboard which is running at port ",(0,t.jsx)(n.code,{children:"8080"})," by default."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://localhost:8080",children:"Visit Dashboard"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);