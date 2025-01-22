---
sidebar_position: 1
title: Windows
---

# Install Lancer on Windows

## Install Using Powershell

You can install Lancer using the following powershell command :

### Steps

1. Open Powershell
2. Copy the command 

    ```ps
    Invoke-Expression (Invoke-WebRequest -Uri "https://raw.githubusercontent.com/Weekend-Dev-Labs/lancer/refs/heads/main/scripts/install/install.ps1").Content
    ```
3. Paste and run

### Validate Installation

You can validate installation by simply running this command :

```bash
lancer version
```

## Download Binary

You can also install Lancer by downloading binary itself. You can find the latest release binary from our github release section.

[Download Latest Release](https://github.com/Weekend-Dev-Labs/lancer/releases)