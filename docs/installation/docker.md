---
sidebar_position: 3
title: Docker
---

# Install Lancer using Docker

## Running Lancer using `docker compose`

You can run Lancer app using the following command :

### Steps

1. Start by createing a directory where your lancer server will sit, for example Desktop/lancer
2. In this folder create a `docker-compose.yml` file and open it using any preferred text editor.
3. You've two YML files for use: using either PostgreSQL or PostgreSQL with Redis

4. `docker-compose.yml` for PostgreSQL only :

```yaml
version: '3'
services:
  postgres:
    container_name: postgres
    image: postgres:latest
    environment:
      - POSTGRES_DB=my_db
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password 
    volumes:
      - postgres_data:/var/lib/postgresql/data
    expose:
      - "5432"
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "user", "-d", "my_db"]
      interval: 1m30s
      timeout: 30s
      retries: 5
      start_period: 30s
  
  app:
    container_name: app
    image: weekenddevlabs/lancer:latest
    build: .
    volumes:
      - ./uploads:/uploads
      - ./config.yaml:/root/config.yaml
    depends_on:
      postgres:
        condition: service_healthy
    ports:
      - "8080:8080"
    entrypoint:
      - sh
      - -c
      - >
        ./lancer --config=/root/config.yaml --database-migrate=true &&
        exec ./lancer --config=/root/config.yaml
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
  uploads:
```

5. Make sure to have a config.yaml file in the same directory of your compose file with database and other configuration checkout this section for configuration: [Configuration](/docs/documentation/configuration.md)

6. `docker-compose.yml` for PostgreSQL & Redis :

```yaml
version: '3'
services:
  postgres:
    container_name: postgres
    image: postgres:latest
    environment:
      - POSTGRES_DB=my_db
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password 
    volumes:
      - postgres_data:/var/lib/postgresql/data
    expose:
      - "5432"
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "user", "-d", "my_db"]
      interval: 1m30s
      timeout: 30s
      retries: 5
      start_period: 30s
    
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
  
  app:
    container_name: app
    image: weekenddevlabs/lancer:latest
    build: .
    volumes:
      - ./uploads:/uploads
      - ./config.yaml:/root/config.yaml
    depends_on:
      - postgres
      - redis
    ports:
      - "8080:8080"
    entrypoint:
      - sh
      - -c
      - >
        ./lancer --config=/root/config.yaml --database-migrate=true &&
        exec ./lancer --config=/root/config.yaml
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
  uploads:
```

7. Now run `docker compose up`

8. Now you can checkout the lancer dashboard at `localhost:8080`

