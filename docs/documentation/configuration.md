---
sidebar_position: 3
title: Configuration
---

Configuration file allows you to set up and customize the Lancer server. It defines key settings such as the database connection, file storage locations, and webhook endpoints. Below is a breakdown of each configuration parameter:

## Network Configuration

This section contains the settings for running the Lancer at a port

```yaml title="lancer.yaml"
port: "8080" # port for the lancer server
```

## Database Configuration

This section contains the settings for connecting Lancer to your PostgreSQL database.

```yaml title="lancer.yaml"
database:
  address: "localhost:5432" # The address of your PostgreSQL database
  user: "<database-username>" # The username to connect to the database
  password: "<database-password>" # The password associated with the database username
  name: "<database-name>" # The name of the database to use for storing file upload metadata
```

- **address** : This is the host and port of the PostgreSQL database. By default, PostgreSQL runs on port `5432` on the local machine. If your database is running on a remote server, replace localhost with the IP address or domain of the server.

- **user** : The username used to authenticate against the PostgreSQL database. Replace `<database-username>` with the appropriate username configured in your PostgreSQL instance.

- **password** : The password for the database user. Replace `<database-password>` with the correct password. Ensure this is secure to prevent unauthorized access.

- **name** : The name of the database where Lancer will store metadata about uploaded files, including file names, sizes, and paths. Replace `<database-name>` with the actual database name.

## Redis Configuration (Optional)

Redis can be used to cache file metadata and improve performance, particularly for high-traffic applications. This section enables or disables Redis caching.

```yaml title="lancer.yaml"
use-redis: false # Set to 'true' if Redis is to be used for caching
redis: "" # The connection URL to the Redis server
```

- **use-redis** : This flag determines whether Redis will be used or not. If set to `true`, Redis caching will be enabled; if `false`, Redis will be disabled.

- **redis** : The connection URL for the Redis server. Typically, this would be something like `redis://localhost:6379`. If Redis is not used, leave this value empty.

## Webhook Configuration

Webhooks allow external systems to be notified about file events (e.g., file uploads, deletions). These endpoints can be used to trigger actions in other systems when specific file events occur.

```yaml title="lancer.yaml"
server-auth: false # Whether to authenticate session with server or not
webhook-endpoint: "" # URL where webhook events will be sent
auth-endpoint: "" # URL used to authenticate users before uploading files
```

- **server-auth** : This is the option which tells Lancer whether to authenticate session with your authentication server which is provided as `auth-endpoint`.

- **webhook-endpoint** : This is the endpoint URL where Lancer will send notifications when file events occur. For example, a successful upload or deletion of files will trigger a webhook. You can specify a URL for your backend to handle these events.

- **auth-endpoint** : This is an authentication endpoint that ensures only authorized users can upload files to the server. You can configure this to point to an authentication service where user credentials are verified before allowing uploads.

## File Storage Configuration

This section defines the storage settings for uploaded files. Lancer supports both local storage and cloud-based storage options like AWS S3.

- ### Local Storage

```yaml title="lancer.yaml"
store:
  local:
    path: "store" # Path where files will be stored locally
    temp-path: "temp" # Path for temporary file storage during uploads
```

- **local.path**: This is the local directory where uploaded files will be stored on your server. If this directory doesn't exist, Lancer will create it.
- **local.temp-path** : This is the directory used for temporary file storage while files are being uploaded. This allows Lancer to temporarily store the file before moving it to the main storage directory.

- ### AWS S3 Storage (optional)

```yaml title="lancer.yaml"
aws:
  store: false # Set to 'true' to enable AWS S3 storage for uploaded files
  bucket: "" # AWS S3 bucket name
  region: "" # AWS region where the bucket is located
  config: "" # Path to the AWS configuration file (credentials and settings)
  clientId: "" # AWS Client ID
  clientSecret: "" # AWS Client Secret
```

- **aws.store**: Set this to true if you want to use AWS S3 for file storage. If set to false, Lancer will use local storage instead.

- **bucket** : The name of the AWS S3 bucket where files will be uploaded. You can create a new bucket in AWS S3 or use an existing one.

- **region** : The AWS region where your S3 bucket is located (e.g., us-east-1, eu-west-1).

- **clientId** : The AWS Client ID use to upload media to S3 bucket.

- **clientSecret** : The AWS Client Secret use to upload media to S3 bucket.

## Admin Configuration

This section defines the settings for administrative access to the Lancer system, including the secret token for generating JWT tokens and the authentication credentials for the admin dashboard.

```yaml title="lancer.yaml"
admin-token-secret: "" # Secret key used to sign admin JWT tokens
auth:
  email: "lancer@email.com" # Default email for logging into the admin dashboard
  password: "password" # Default password for logging into the admin dashboard
```

- **admin-token-secret**: This is the secret key used to sign JWT tokens for admin access. It's essential for securing the admin dashboard and ensuring that only authorized users can access it. Choose a strong and unique secret.

- **auth.email**: The default email address for logging into the admin dashboard. You can change this to a custom admin email if needed.

- **auth.password**: The default password for logging into the admin dashboard. Again, you should change this to a secure password to prevent unauthorized access.

## Example Configuration

Here’s an example configuration with actual values to give you an idea of how to structure your file:

```yaml title="lancer.yaml"
port: "8080"
database:
  address: "localhost:5432"
  user: "lancer_user"
  password: "secure_password_123"
  name: "lancer_db"

use-redis: true
redis: "redis://localhost:6379"

server-auth: false
webhook-endpoint: "http://localhost:3000/webhook"
auth-endpoint: "http://localhost:3000/auth"

store:
  local:
    path: "store"
    temp-path: "temp"
  aws:
    store: true
    bucket: "my-lancer-bucket"
    region: "us-east-1"
    clientId: "" # AWS Client ID
    clientSecret: "" # AWS Client Secret

admin-token-secret: "supersecretkey123"
auth:
  email: "admin@lancer.com"
  password: "adminpassword123"
```

## Conclusion

This configuration file is a key part of setting up Lancer. It allows you to customize your file upload system by specifying database connections, storage paths, authentication endpoints, and more. Ensure all sensitive information, such as passwords and API keys, is kept secure and stored properly.

Once you’ve edited the configuration file according to your setup, save it and restart the Lancer server to apply the changes.
