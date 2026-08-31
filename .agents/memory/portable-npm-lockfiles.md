---
name: Portable npm lockfiles
description: Prevent Replit-internal package download URLs from breaking installs on external servers.
---

Dependency lockfiles must use URLs reachable from every deployment environment, especially when the same repository is installed on a VPS.

**Why:** Replit can generate lockfiles whose `resolved` tarball URLs point to its private package firewall. Those URLs work inside Replit but cause `403 Forbidden` errors on external servers.

**How to apply:** Before external deployment, scan `package-lock.json` for private or environment-local hosts. Keep the locked versions and integrity hashes unchanged while using the public npm registry URLs, and verify with a lockfile dry-run.