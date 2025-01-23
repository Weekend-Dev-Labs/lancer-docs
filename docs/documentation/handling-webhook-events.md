---
sidebar_position: 7
title: Handling Webhook Events
---


**Info: This documentent primarily focuses on library authors. If you want to integrate Lancer into your application please checkout [SDK & Packages](/docs/quickstart.md) page**

## **Webhook Events**

Below are the webhook events implemented in the system :

- ### Session Events

1. `SESSION_CREATED` : Triggered when a new upload session is created.
2. `SESSION_CANCELLED` : Triggered when an upload session is cancelled.
3. `SESSION_COMPLETED` : Triggered when an upload session completes.

- ### File Events

1. `FILE_UPLOAD` : Triggered when a file is uploaded successfully.
2. `FILE_DELETE` : Triggered when a file is deleted.

### Event Payload

Webhook events sends some `json` as payload to the listening server. The data is in this format :

```json
{
    "event" : "<event-type>", // It can be one of these  (SESSION_CREATED , SESSION_CANCELLED, SESSION_COMPLETED, FILE_UPLOAD, FILE_DELETE)
    "data" : {} // It is the event payload
}
```

### Webhook Payloads

### Payload for Session Events

| Field         | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| `id`          | `string`    | Unique identifier for the session.          |
| `file_size`   | `int64`     | Size of the file being uploaded (in bytes). |
| `chunk_size`  | `int64`     | Size of each chunk (in bytes).              |
| `max_chunk`   | `int64`     | Total number of chunks for the session.     |
| `file_name`   | `string`    | Name of the file being uploaded.            |
| `temp_path`   | `string`    | Temporary storage path for the session.     |
| `owner_id`    | `string`    | ID of the user who owns the session.        |
| `current_chunk`| `int64`    | Current chunk being uploaded.               |
| `provider`    | `string`    | The storage provider for the session.       |

**Example JSON Payload for `SESSION_CREATED`:**

```json
{
  "id": "session-12345",
  "file_size": 10485760,
  "chunk_size": 5242880,
  "max_chunk": 2,
  "file_name": "example.txt",
  "temp_path": "/tmp/session-12345",
  "owner_id": "user-67890",
  "current_chunk": 0,
  "provider": "LOCAL"
}
```


### Payload for File Events

| Field              | Type          | Description                                  |
|--------------------|---------------|----------------------------------------------|
| `id`               | `string`      | Unique identifier for the uploaded file.     |
| `file_name`        | `string`      | Name of the uploaded file.                   |
| `file_path`        | `string`      | Path where the file is stored.               |
| `file_size`        | `int64`       | Size of the uploaded file (in bytes).        |
| `file_type`        | `string`      | MIME type of the uploaded file.              |
| `uploaded_by`      | `string`      | ID of the user who uploaded the file.        |
| `uploaded_at`      | `string` (ISO8601) | Timestamp of when the file was uploaded. |
| `is_deleted`       | `boolean`     | Whether the file has been marked as deleted. |
| `checksum`         | `string`      | SHA-256 checksum of the file.                |
| `description`      | `string`      | Optional description of the file.            |
| `provider`         | `string`      | The storage provider for the file.           |
| `provider_metadata`| `object`      | Additional metadata related to the provider. |

**Example JSON Payload for `FILE_UPLOAD`:**

```json
{
  "id": "file-12345",
  "file_name": "example.txt",
  "file_path": "/storage/files/example.txt",
  "file_size": 10485760,
  "file_type": "text/plain",
  "uploaded_by": "user-67890",
  "uploaded_at": "2025-01-22T15:30:00Z",
  "is_deleted": false,
  "checksum": "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  "description": "Sample text file",
  "provider": "LOCAL",
  "provider_metadata": {}
}
```