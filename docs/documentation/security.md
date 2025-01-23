---
sidebar_position: 8
title: Secure webhook handling
---

**Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout [SDK & Packages](/docs/quickstart.md) page**

The webhook verification endpoint is critical for ensuring that the events sent by the server are valid and originate from a trusted source. This involves verifying the payload, timestamp, and signature.

### Steps to Get Your Signing Secret

1. **Access the Admin Dashboard**:  
   Log in to your Lancer admin dashboard with your admin credentials.

2. **Navigate to Webhook Settings**:  
   In the dashboard, go to the **Settings** section and select **Webhooks**.

3. **Generate a Signing Secret**:  
   If a signing secret is not already generated, you can create one by clicking the **Generate Secret** button.

4. **Copy the Secret**:  
   Once generated, the signing secret will be displayed. **Copy it immediately**, as it will not be shown again for security reasons.

5. **Use the Secret in Your Code**:  
   Add the signing secret to your backend server's configuration. This will be used to validate incoming webhook requests.

## Verification Logic

The Lancer server sends the following headers and payload:

### Headers

| Header           | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `Content-Type`    | Specifies the type of content (e.g., `application/json`).                  |
| `x-signature`     | HMAC-SHA256 signature of the payload, used to verify its authenticity.     |
| `x-timestamp`     | The UNIX timestamp when the payload was generated.                        |

#### Payload Structure

The payload contains the event type and its associated data. Example:

```json
{
  "event": "SESSION_CREATED",
  "data": {
    "id": "session_id_123",
    "file_size": 10485760,
    "chunk_size": 5242880,
    "max_chunk": 2,
    "file_name": "example_file.txt",
    "temp_path": "/tmp/session_id_123",
    "owner_id": "user_456",
    "current_chunk": 0,
    "provider": "LOCAL"
  }
}
```

### Steps to Verify the Webhook

1. Recompute the HMAC Signature

    Use the following formula to recompute the HMAC signature:

    ```json
    signature = HMAC-SHA256(timestamp + "." + payload, signing_secret)
    ```

2. Compare Signatures

    The computed signature must match the `x-signature` header provided in the request.

3. Validate the Timestamp

    Ensure the `x-timestamp` header is recent. You can reject requests where the timestamp is older than a certain threshold (e.g., 5 minutes) to prevent replay attacks.


### Example Code

Here’s an example implementation of the Webhook Verification Endpoint in Node.js:

```javascript
import express from "express";
import crypto from "crypto";

const app = express();
const SIGNING_SECRET = "your-signing-secret"; // Replace with your secret key

app.use(express.json());

function verifySignature(payload, timestamp, signature, secret) {
  const message = `${timestamp}.${payload}`;
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(message);
  const expectedSignature = hmac.digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

app.post("/webhook", (req, res) => {
  const sig = req.headers["x-signature"];
  const timestamp = req.headers["x-timestamp"];
  const payload = JSON.stringify(req.body);

  if (!sig || !timestamp) {
    return res.status(400).send("Missing required headers.");
  }

  const isValid = verifySignature(payload, timestamp, sig, SIGNING_SECRET);

  if (isValid) {
    console.log("Webhook verified successfully:", req.body);
    return res.status(200).send("Webhook verified.");
  } else {
    console.log("Webhook verification failed.");
    return res.status(403).send("Invalid signature.");
  }
});

app.listen(3000, () => {
  console.log("Webhook verification server running on port 3000.");
});
```