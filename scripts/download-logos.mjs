/**
 * Run once to download all company logos into public/images/logos/
 * Usage: node scripts/download-logos.mjs
 */
import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images', 'logos')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const logos = [
  { domain: 'klarna.com',        file: 'klarna.png' },
  { domain: 'morganstanley.com', file: 'morgan-stanley.png' },
  { domain: 'walmart.com',       file: 'walmart.png' },
  { domain: 'duolingo.com',      file: 'duolingo.png' },
  { domain: 'coca-cola.com',     file: 'coca-cola.png' },
  { domain: 'goldmansachs.com',  file: 'goldman-sachs.png' },
  { domain: 'ibm.com',           file: 'ibm.png' },
  { domain: 'microsoft.com',     file: 'microsoft.png' },
]

function download(domain, filename) {
  return new Promise((resolve) => {
    const dest = path.join(outDir, filename)
    const file = fs.createWriteStream(dest)

    const get = (url) => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          get(res.headers.location)
          return
        }
        res.pipe(file)
        file.on('finish', () => {
          file.close()
          console.log(`✓  ${filename}`)
          resolve()
        })
      }).on('error', (e) => {
        console.error(`✗  ${filename}: ${e.message}`)
        resolve()
      })
    }

    get(`https://logo.clearbit.com/${domain}`)
  })
}

console.log('Downloading logos to public/images/logos/ ...\n')
await Promise.all(logos.map(l => download(l.domain, l.file)))
console.log('\nDone. Restart the dev server if it is running.')
