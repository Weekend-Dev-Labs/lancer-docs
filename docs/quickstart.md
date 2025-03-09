---
sidebar_position: 2
---

# Quickstart

## Prerequisites

Before you begin, make sure you have the following :

1. [Lancer](/docs/installation/) Installed on your system.
2. [Postgres Database](https://www.postgresql.org/) A PostgreSQL instance to store metadata about uploaded files.
3. [Redis](https://redis.io/) (optional) A Redis server for caching uploaded files and enhancing performance.

## Setting up Lancer

After a successfull installation you can see the configuration files for Lancer in the following directory :

1. **Windows** : `C:\Users\<username>\AppData\Roaming\Lancer`
2. **Linux** : `/home/<username>/.config/Lancer`
3. **MacOS** : `/Users/<username>/Library/Application Support/Lancer`

### Configuration

Add a basic configuration file `lancer.yaml` in that folder

```yaml
database:
  address: "localhost:5432"
  user: "<database-username>"
  password: "<database-password>"
  name: "<database-name>"
use-redis: false
redis: ""
webhook-endpoint: ""
auth-endpoint: ""
store:
  local:
    path: "store"
    temp-path: "temp"
  aws:
    store: false
    bucket: ""
    region: ""
    config: ""
admin-token-secret: ""
auth:
  email: "lancer@email.com"
  password: "password"
```

This is the basic configuration which you need to have to run your application. See more info about [configuration](/docs/overview.md)

### Apply Migration

Now apply migration to database using this command. Make sure you have provided a correct connection details for the database.

```bash
lancer --database-migrate=true
```

**If using custom configuration : **

```bash
lancer --config=lancer.yaml --database-migrate=true
```

This will apply the migration to the database.

### Start the server

You can start the lancer server using the cli or a `Systemd service` in linux .

1. **Windows** : You can start lancer by running this command :

```
lancer
```
Just make sure `lancer` is added in your system environment variables.

1. **Linux** : You can start lancer by running this command :

- Systemd Service :

    ```bash
    sudo systemctl start lancer
    ```

    If you get any error running this command, make sure you have already setup a service using this command :

    ```bash
    lancer setup-service
    sudo systemctl daemon-reload
    sudo systemctl start lancer
    ```

    Check if the server running using this command :

    ```bash
    sudo systemctl status lancer
    ```

- By CLI :

    ```bash
    lancer
    ```

    This will start the lancer server.

### Access the dashboard

Now you can visit and login into the lancer dashboard which is running at port `8080` by default.

[Visit Dashboard](http://localhost:8080)