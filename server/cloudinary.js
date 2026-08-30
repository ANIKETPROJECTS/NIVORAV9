import { v2 as cloudinary } from 'cloudinary'

const CLOUDINARY_UPLOAD_MARKER = '/image/upload/'

/**
 * Convert a user-facing section or project name into a safe Cloudinary folder
 * segment. The route still controls the top-level `nivora` prefix.
 */
export function slugifyFolderSegment(value, fallback = 'site') {
  const slug = String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || fallback
}

export function uploadBufferToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'image', quality: 'auto', fetch_format: 'auto' },
      (err, result) => (err ? reject(err) : resolve(result.secure_url))
    )
    stream.end(buffer)
  })
}

/**
 * Extract the public ID from a stored Cloudinary delivery URL.
 * URLs saved by this app contain a version segment and may later be displayed
 * with transformation segments, so both are stripped before destroy().
 */
export function cloudinaryPublicIdFromUrl(url) {
  if (typeof url !== 'string' || !url.includes(CLOUDINARY_UPLOAD_MARKER)) return null

  const path = url
    .split(CLOUDINARY_UPLOAD_MARKER)[1]
    ?.split(/[?#]/)[0]
  if (!path) return null

  const segments = path.split('/').filter(Boolean)
  while (segments.length && isTransformationSegment(segments[0])) segments.shift()
  if (segments[0] && /^v\d+$/.test(segments[0])) segments.shift()
  if (!segments.length) return null

  const publicId = segments.join('/')
  return publicId.replace(/\.[^.\/]+$/, '')
}

function isTransformationSegment(segment) {
  // Covers Cloudinary's common named and key-value transformation syntax.
  return segment.includes('_') || /^(?:c|d|e|f|fl|g|h|q|r|w|x|y|z|ar|b|bo|co|du|pg|t)_/.test(segment)
}

export async function deleteCloudinaryUrls(urls) {
  const publicIds = [...new Set(
    (Array.isArray(urls) ? urls : [])
      .map(cloudinaryPublicIdFromUrl)
      .filter(Boolean)
  )]

  if (!publicIds.length) return { deleted: 0, failed: [] }

  const results = await Promise.allSettled(
    publicIds.map(publicId => cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
      invalidate: true,
    }))
  )

  const failed = results
    .map((result, index) => {
      if (result.status === 'rejected') return publicIds[index]
      return ['ok', 'not found'].includes(result.value?.result) ? null : publicIds[index]
    })
    .filter(Boolean)

  if (failed.length) {
    console.error('[Cloudinary] Failed to delete assets:', failed)
  }

  return {
    deleted: results.filter(result =>
      result.status === 'fulfilled' &&
      ['ok', 'not found'].includes(result.value?.result)
    ).length,
    failed,
  }
}

export function collectCloudinaryUrls(value, urls = new Set()) {
  if (typeof value === 'string') {
    if (cloudinaryPublicIdFromUrl(value)) urls.add(value)
    return urls
  }
  if (Array.isArray(value)) {
    value.forEach(item => collectCloudinaryUrls(item, urls))
    return urls
  }
  if (value && typeof value === 'object') {
    Object.values(value).forEach(item => collectCloudinaryUrls(item, urls))
  }
  return urls
}

export async function deleteRemovedCloudinaryUrls(previousValue, nextValue) {
  const previousUrls = collectCloudinaryUrls(previousValue)
  const nextUrls = collectCloudinaryUrls(nextValue)
  const removedUrls = [...previousUrls].filter(url => !nextUrls.has(url))
  return deleteCloudinaryUrls(removedUrls)
}