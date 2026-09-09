/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'nivora-api',
      script: 'server/index.js',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      env: {
        NODE_ENV: 'production',
        // Port 3002 is used by the Nivora VPS Nginx upstream. Port 3001 is
        // already occupied by another service on this VPS.
        API_PORT: 3002,

        // All credentials are loaded by dotenv from the VPS-only .env file.
        // Keep secrets out of this tracked PM2 configuration.
      },
    },
  ],
}
