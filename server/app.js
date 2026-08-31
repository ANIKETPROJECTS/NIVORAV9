// Shared Express app — imported by both server/index.js (local dev)
// and netlify/functions/api.js (Netlify serverless).
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { v2 as cloudinary } from 'cloudinary'
import projectRoutes from './routes/projects.js'
import adminLoginRoute from './routes/adminLogin.js'
import siteSettingsRoute from './routes/siteSettings.js'
import contactRoute from './routes/contact.js'
import enquiriesRoute from './routes/enquiries.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDirectory = path.join(projectRoot, 'dist')

// ── Cloudinary config ─────────────────────────────────────────────────────────
// Accept both the canonical names and the shorter aliases used in Replit Secrets.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME || process.env.CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY    || process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET || process.env.CLOUD_API_SECRET,
  secure: true,
})

const app = express()

// ── CORS ──────────────────────────────────────────────────────────────────────
// When running on Netlify the function and the frontend share the same origin,
// so CORS is not needed in production.  We keep it permissive for local dev.
app.use(cors())

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }))

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/admin',         adminLoginRoute)
app.use('/api/projects',      projectRoutes)
app.use('/api/site-settings', siteSettingsRoute)
app.use('/api/contact',       contactRoute)
app.use('/api/enquiries',     enquiriesRoute)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

// Debug endpoint — confirms the function is alive and which env vars are present.
// Does NOT require MongoDB. Visit /api/debug in the browser to diagnose 502s.
app.get('/api/debug', (_req, res) => {
  const vars = [
    'MONGODB_URI', 'CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET', 'ADMIN_USERNAME', 'ADMIN_PASSWORD',
    'SESSION_SECRET', 'EMAIL_USER', 'EMAIL_APP_SECRET', 'EMAIL_TO', 'NODE_ENV',
  ]
  res.json({
    status: 'function alive',
    env: Object.fromEntries(vars.map(k => [k, !!process.env[k]])),
  })
})

// ── VPS static app hosting ────────────────────────────────────────────────────
// Netlify serves dist/ from its CDN. On a VPS, PM2 runs this same process
// behind Nginx, so serve the built React app here too. Keeping the API and
// frontend on one origin prevents /api requests from reaching a static-only
// web server and returning a reverse-proxy 502.
app.use(express.static(distDirectory, { index: false }))
app.get(/^(?!\/api(?:\/|$)).*/, (req, res, next) => {
  if (req.method !== 'GET') return next()
  res.sendFile(path.join(distDirectory, 'index.html'), (err) => {
    if (err) next()
  })
})

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  if (err.code === 'LIMIT_FILE_SIZE')      return res.status(413).json({ error: 'File too large.' })
  if (err.code === 'LIMIT_UNEXPECTED_FILE') return res.status(400).json({ error: 'Unexpected file field.' })
  if (err.name === 'MulterError')           return res.status(400).json({ error: err.message })
  console.error('[Server] Unhandled error:', err)
  res.status(err.status || err.statusCode || 500).json({ error: err.message || 'Internal server error.' })
})

export default app
