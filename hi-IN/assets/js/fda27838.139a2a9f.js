"use strict";(self.webpackChunklancer_docs=self.webpackChunklancer_docs||[]).push([[5348],{1896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"documentation/configuration","title":"Configuration","description":"Configuration file allows you to set up and customize the Lancer server. It defines key settings such as the database connection, file storage locations, and webhook endpoints. Below is a breakdown of each configuration parameter:","source":"@site/docs/documentation/configuration.md","sourceDirName":"documentation","slug":"/documentation/configuration","permalink":"/lancer-docs/hi-IN/docs/documentation/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/weekend-dev-labs/lancer-docs/docs/documentation/configuration.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Configuration"},"sidebar":"tutorialSidebar","previous":{"title":"Upload Flow","permalink":"/lancer-docs/hi-IN/docs/documentation/upload"},"next":{"title":"Create an upload session","permalink":"/lancer-docs/hi-IN/docs/documentation/creating-upload-session"}}');var i=s(4848),a=s(8453);const o={sidebar_position:3,title:"Configuration"},r=void 0,l={},c=[{value:"Network Configuration",id:"network-configuration",level:2},{value:"Database Configuration",id:"database-configuration",level:2},{value:"Redis Configuration (Optional)",id:"redis-configuration-optional",level:2},{value:"Webhook Configuration",id:"webhook-configuration",level:2},{value:"File Storage Configuration",id:"file-storage-configuration",level:2},{value:"Local Storage",id:"local-storage",level:3},{value:"AWS S3 Storage (optional)",id:"aws-s3-storage-optional",level:3},{value:"Admin Configuration",id:"admin-configuration",level:2},{value:"Example Configuration",id:"example-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Configuration file allows you to set up and customize the Lancer server. It defines key settings such as the database connection, file storage locations, and webhook endpoints. Below is a breakdown of each configuration parameter:"}),"\n",(0,i.jsx)(n.h2,{id:"network-configuration",children:"Network Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This section contains the settings for running the Lancer at a port"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'port: "8080" # port for the lancer server\n'})}),"\n",(0,i.jsx)(n.h2,{id:"database-configuration",children:"Database Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This section contains the settings for connecting Lancer to your PostgreSQL database."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'database:\n  address: "localhost:5432" # The address of your PostgreSQL database\n  user: "<database-username>" # The username to connect to the database\n  password: "<database-password>" # The password associated with the database username\n  name: "<database-name>" # The name of the database to use for storing file upload metadata\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"address"})," : This is the host and port of the PostgreSQL database. By default, PostgreSQL runs on port ",(0,i.jsx)(n.code,{children:"5432"})," on the local machine. If your database is running on a remote server, replace localhost with the IP address or domain of the server."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"user"})," : The username used to authenticate against the PostgreSQL database. Replace ",(0,i.jsx)(n.code,{children:"<database-username>"})," with the appropriate username configured in your PostgreSQL instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"password"})," : The password for the database user. Replace ",(0,i.jsx)(n.code,{children:"<database-password>"})," with the correct password. Ensure this is secure to prevent unauthorized access."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"name"})," : The name of the database where Lancer will store metadata about uploaded files, including file names, sizes, and paths. Replace ",(0,i.jsx)(n.code,{children:"<database-name>"})," with the actual database name."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"redis-configuration-optional",children:"Redis Configuration (Optional)"}),"\n",(0,i.jsx)(n.p,{children:"Redis can be used to cache file metadata and improve performance, particularly for high-traffic applications. This section enables or disables Redis caching."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:"use-redis: false # Set to 'true' if Redis is to be used for caching\nredis: \"\" # The connection URL to the Redis server\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"use-redis"})," : This flag determines whether Redis will be used or not. If set to ",(0,i.jsx)(n.code,{children:"true"}),", Redis caching will be enabled; if ",(0,i.jsx)(n.code,{children:"false"}),", Redis will be disabled."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"redis"})," : The connection URL for the Redis server. Typically, this would be something like ",(0,i.jsx)(n.code,{children:"redis://localhost:6379"}),". If Redis is not used, leave this value empty."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webhook-configuration",children:"Webhook Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Webhooks allow external systems to be notified about file events (e.g., file uploads, deletions). These endpoints can be used to trigger actions in other systems when specific file events occur."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'server-auth: false # Whether to authenticate session with server or not\nwebhook-endpoint: "" # URL where webhook events will be sent\nauth-endpoint: "" # URL used to authenticate users before uploading files\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"server-auth"})," : This is the option which tells Lancer whether to authenticate session with your authentication server which is provided as ",(0,i.jsx)(n.code,{children:"auth-endpoint"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"webhook-endpoint"})," : This is the endpoint URL where Lancer will send notifications when file events occur. For example, a successful upload or deletion of files will trigger a webhook. You can specify a URL for your backend to handle these events."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"auth-endpoint"})," : This is an authentication endpoint that ensures only authorized users can upload files to the server. You can configure this to point to an authentication service where user credentials are verified before allowing uploads."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"file-storage-configuration",children:"File Storage Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This section defines the storage settings for uploaded files. Lancer supports both local storage and cloud-based storage options like AWS S3."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"local-storage",children:"Local Storage"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'store:\n  local:\n    path: "store" # Path where files will be stored locally\n    temp-path: "temp" # Path for temporary file storage during uploads\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"local.path"}),": This is the local directory where uploaded files will be stored on your server. If this directory doesn't exist, Lancer will create it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"local.temp-path"})," : This is the directory used for temporary file storage while files are being uploaded. This allows Lancer to temporarily store the file before moving it to the main storage directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"aws-s3-storage-optional",children:"AWS S3 Storage (optional)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'aws:\n  store: false # Set to \'true\' to enable AWS S3 storage for uploaded files\n  bucket: "" # AWS S3 bucket name\n  region: "" # AWS region where the bucket is located\n  config: "" # Path to the AWS configuration file (credentials and settings)\n  clientId: "" # AWS Client ID\n  clientSecret: "" # AWS Client Secret\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"aws.store"}),": Set this to true if you want to use AWS S3 for file storage. If set to false, Lancer will use local storage instead."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"bucket"})," : The name of the AWS S3 bucket where files will be uploaded. You can create a new bucket in AWS S3 or use an existing one."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"region"})," : The AWS region where your S3 bucket is located (e.g., us-east-1, eu-west-1)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"clientId"})," : The AWS Client ID use to upload media to S3 bucket."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"clientSecret"})," : The AWS Client Secret use to upload media to S3 bucket."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"admin-configuration",children:"Admin Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This section defines the settings for administrative access to the Lancer system, including the secret token for generating JWT tokens and the authentication credentials for the admin dashboard."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'admin-token-secret: "" # Secret key used to sign admin JWT tokens\nauth:\n  email: "lancer@email.com" # Default email for logging into the admin dashboard\n  password: "password" # Default password for logging into the admin dashboard\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"admin-token-secret"}),": This is the secret key used to sign JWT tokens for admin access. It's essential for securing the admin dashboard and ensuring that only authorized users can access it. Choose a strong and unique secret."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"auth.email"}),": The default email address for logging into the admin dashboard. You can change this to a custom admin email if needed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"auth.password"}),": The default password for logging into the admin dashboard. Again, you should change this to a secure password to prevent unauthorized access."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s an example configuration with actual values to give you an idea of how to structure your file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="lancer.yaml"',children:'port: "8080"\ndatabase:\n  address: "localhost:5432"\n  user: "lancer_user"\n  password: "secure_password_123"\n  name: "lancer_db"\n\nuse-redis: true\nredis: "redis://localhost:6379"\n\nserver-auth: false\nwebhook-endpoint: "http://localhost:3000/webhook"\nauth-endpoint: "http://localhost:3000/auth"\n\nstore:\n  local:\n    path: "store"\n    temp-path: "temp"\n  aws:\n    store: true\n    bucket: "my-lancer-bucket"\n    region: "us-east-1"\n    clientId: "" # AWS Client ID\n    clientSecret: "" # AWS Client Secret\n\nadmin-token-secret: "supersecretkey123"\nauth:\n  email: "admin@lancer.com"\n  password: "adminpassword123"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"This configuration file is a key part of setting up Lancer. It allows you to customize your file upload system by specifying database connections, storage paths, authentication endpoints, and more. Ensure all sensitive information, such as passwords and API keys, is kept secure and stored properly."}),"\n",(0,i.jsx)(n.p,{children:"Once you\u2019ve edited the configuration file according to your setup, save it and restart the Lancer server to apply the changes."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(6540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);