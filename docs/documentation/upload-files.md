---
sidebar_position: 4
title: Upload files in chunks
---

**Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout [SDK & Packages](/docs/quickstart.md) page**

**Important: Please follow the [step one](/docs/documentation/creating-upload-session.md) before moving forward**

### API Endpoint

**POST** `/api/upload`

#### Request Payload

Each chunk is uploaded using a `FormData` object, which contains:

- `checksum` : The SHA-156 checksum of the chunk.
- `chunk` : The chunk index (starting from 1).
- `file` : The file chunk.

### Chunk Calculation Logic

Files are divided into chunks based on a base chunk size (e.g., 5 MB). Each chunk is uploaded individually.

#### Example Code

```javascript
/**
 * Calculates the SHA-256 checksum of a file chunk.
 * @param {Blob} chunk - The file chunk.
 * @returns {Promise<string>} - The hexadecimal checksum.
 */
async function calculateChecksum(chunk) {
  const buffer = await chunk.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
```

#### Upload Code

```javascript
const UploadEndpoint = API + "/api/upload";

/**
 * Uploads a file in chunks.
 * @param {File} file - The file to upload.
 * @param {string} sessionToken - The session token from the server.
 */
async function uploadFile(file, sessionToken) {
  const baseChunkSize = 5 * 1024 * 1024; // Default chunk size: 5 MB
  const chunks = [];
  let start = 0;

  // Divide file into chunks
  while (start < file.size) {
    const end = Math.min(start + baseChunkSize, file.size);
    chunks.push({ start, end });
    start = end;
  }

  console.log(`Total chunks: ${chunks.length}`);

  // Upload each chunk
  for (let i = 0; i < chunks.length; i++) {
    const { start, end } = chunks[i];
    const chunk = file.slice(start, end);

    const checksum = await calculateChecksum(chunk);

    const formData = new FormData();
    formData.append("checksum", checksum);
    formData.append("chunk", i + 1); // 1-based index
    formData.append("file", chunk);

    console.log(`Uploading chunk ${i + 1} (${end - start} bytes)`);

    const response = await axios.post(UploadEndpoint, formData, {
      headers: {
        "x-session-token": sessionToken,
      },
    });

    console.log(`Uploaded chunk ${i + 1}:`, response.data);
  }

  console.log("All chunks uploaded successfully!");
}
```

### Full Example: Upload a File

Here's how the two steps come together:

```javascript
async function upload(file) {
  try {
    // Step 1: Create a session
    const sessionToken = await createUploadSession(file);
    console.log("Session token:", sessionToken);

    // Step 2: Upload the file in chunks
    await uploadFile(file, sessionToken);

    console.log("File upload complete!");
  } catch (error) {
    console.error("Upload failed:", error.response?.data || error.message);
  }
}
```
