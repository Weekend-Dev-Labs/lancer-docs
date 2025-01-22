---
sidebar_position: 1
---

# Overview

## What is Lancer ?

The word lancer means "to throw," and it has been adopted here as a metaphor for the ability to launch and manage file uploads. Lancer allows you to set up a server in just a few minutes and integrate it seamlessly with your backend system to handle file uploads, store metadata, and provide event-driven notifications through webhooks.

You can quickly start a Lancer server in less than 5 minutes by following the instructions in the Configuration section, making it a great tool for efficient file management and upload handling.

## Technology 

### Language 

- **Go (Go Lang)** : Lancer is primarily developed using Go (Golang), a statically typed, compiled programming language known for its simplicity and performance, which is ideal for the tasks of file uploads and backend processing that Lancer handles.

### Database

- **Postgres (PostgreSQL)** : Lancer uses Postgres as its primary relational database for storing metadata related to uploaded files.
- **Redis** : For enhancing performance, Lancer optionally integrates with Redis, an in-memory data store that is often used as a caching mechanism

## Features

Lancer is designed to efficiently handle file uploads and provide a flexible, scalable solution for file storage.

#### 1. Handle Large File Uploads

        Lancer is built to efficiently handle large file uploads. Whether you're dealing with images, videos, documents, or any other type of large files

#### 2. Local and Cloud Storage Options

Lancer provides flexible storage options for uploaded files, allowing you to choose between storing files locally or on a cloud provider.

#### 3. Seamless Integration With Your Backend

Lancer seamlessly integrates with your existing backend server, providing an easy way to manage file uploads. It uses webhooks to notify your backend system whenever an event occurs, such as when a file is uploaded or deleted, enabling you to automate workflows or trigger additional actions based on file events.

#### 4. File Metadata Management

In addition to handling the file upload itself, Lancer also stores metadata about each file in a PostgreSQL database. This metadata includes information such as the file's name, size, upload timestamp, and other relevant details, making it easy to manage and query file data.

#### 5. Simple Setup and Configuration

Setting up Lancer is straightforward. With a few configuration options (such as database settings, storage paths, and webhook endpoints), you can quickly get Lancer up and running to start handling file uploads in your application.

Whether you’re storing files locally or leveraging the cloud, Lancer simplifies the process while giving you the power to manage and scale your file uploads efficiently

## Platform Support

Lancer is designed to be cross-platform, offering flexibility and ease of use across a variety of operating systems. Below are the platforms where Lancer can be run:

1. **Linux**
2. **MacOS**
3. **Windows**
