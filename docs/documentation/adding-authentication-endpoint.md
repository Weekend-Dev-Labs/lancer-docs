---
sidebar_position: 6
title: Adding authentication endpoint
---

**Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout [SDK & Packages](/docs/quickstart.md) page**

## Authentication Endpoint

The `/auth` endpoint verifies the Authorization header using a JWT secret. 
If the token is valid, it allows the request to proceed.

```javascript
import jwt from "jsonwebtoken";

const jwtSecret = "a token to sign & verify the jwt token";

app.post("/webhook/auth", async (req, res) => {
  try {
    const authorization = req.headers.authorization?.split(" ")[1];

    if (!authorization) {
      return res.status(403).send("Forbidden: No authorization token provided");
    }

    const decoded = jwt.verify(authorization, jwtSecret);
    console.log("Decoded JWT:", decoded);

    return res.status(200).send({ownerId: decoded?.id});
  } catch (error) {
    console.error("Authorization error:", error);
    return res.status(403).send("Forbidden: Invalid token");
  }
});
```

You can also validate and grant access to client based upon the session info.

`req.body` contains the session payload which is something like this :

```json
{
  "file_size": 10485760,     // File size in bytes
  "file_name": "example.txt", // Name of the file
  "max_chunk": 2,            // Total number of chunks
  "chunk_size": 5242880,     // Size of each chunk in bytes
  "provider": "LOCAL"        // Storage provider ("LOCAL" or "AWS")
}
```

You can verify the mimetype , file size and provider and based on that you can either return a `200` response or a `403` .

If you sent a `200` response lancer will grant the user with a `sessionToken` using which user can upload file to the server.