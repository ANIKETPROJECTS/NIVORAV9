---
name: Cloudinary deletion caching
description: Why a deleted Cloudinary image can still load briefly from its delivery URL.
---

Cloudinary asset deletion and delivery-cache invalidation are separate timing events. A destroy call can successfully remove the asset from the account while the old versioned delivery URL still returns cached bytes for a short period.

**Why:** End-to-end deletion checks can falsely report failure if they rely only on an immediate GET of the old URL.

**How to apply:** Treat the Cloudinary destroy response as authoritative for account cleanup, request invalidation, and allow for cache delay before using a delivery URL status as a secondary check.