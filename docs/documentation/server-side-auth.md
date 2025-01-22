---
sidebar_position: 5
title: Setting up Backend for Lancer Integration
---

# Setting up Backend for Lancer Integration

**Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout [SDK & Packages](/docs/quickstart.md) page**

In this section we'll use express js to setup a basic server and endpoints required for lancer to get start with file upload.

## Prerequisites

Before proceeding, ensure you have the following installed:

- **Node.js** : Version 14 or above.
- **Express** : For building the server.
- **jsonwebtoken (JWT)** : For handling token-based authentication.

### Install Required Dependencies

Install the necessary packages using npm:

```bash
npm install express jsonwebtoken
```

## Overview

Remeber we have two endpoint defined in our [config file](/docs/documentation/configuration#webhook-configuration) , so we have to add two endpoints as well into our server.

- **Authentication Endpoint** : `/auth` Authenticates incoming requests from Lancer clients.
- **Webhook Events Endpoint** : `/webhook` Handles the events sent from the Lancer .

## Setup the server

Create a new file `server.js` and set up the basic Express server:

```javascript
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```