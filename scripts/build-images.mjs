// Builds the portrait images and the social-share image into public/assets/.
//
// Put your photo in the project root as  photo.jpg  (or .jpeg / .png).
//   • Optional: also add  photo-cutout.png  — the same photo with the background removed
//     (any free background remover works). The result is sharpest with it.
//   • Without a cutout, the photo is blended into the dark page with a soft oval fade.
//   • With no photo at all, a neutral silhouette placeholder is generated so the site still builds.
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
const NAME = 'HARIKA';
mkdirSync(OUT, { recursive: true });

const firstExisting = (list) => list.find((f) => existsSync(f));
const photoFile = firstExisting(['photo.jpg', 'photo.jpeg', 'photo.png', 'photo.webp']);
const cutoutFile = firstExisting(['photo-cutout.png']);

async function buildCutout() {
  if (!photoFile) {
    console.log('No photo found — generating a placeholder silhouette. Add photo.jpg and run `npm run images` again.');
    const svg = `<svg width="1100" height="1400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a1a22"/><stop offset="1" stop-color="#17090d"/></linearGradient>
        <radialGradient id="h" cx="50%" cy="35%" r="65%"><stop offset="0" stop-color="#5a2a35"/><stop offset="1" stop-color="#2a1017"/></radialGradient>
      </defs>
      <path d="M90 1400 C90 1020 300 930 550 930 C800 930 1010 1020 1010 1400 Z" fill="url(#b)"/>
      <rect x="470" y="780" width="160" height="190" rx="60" fill="#2a1017"/>
      <ellipse cx="550" cy="500" rx="235" ry="290" fill="url(#h)"/>
    </svg>`;
    return sharp(Buffer.from(svg)).png().toBuffer();
  }

  const hi = sharp(photoFile).rotate();
  const { width, height } = await hi.metadata();
  const rgb = await sharp(photoFile).rotate().removeAlpha().raw().toBuffer();

  let alpha;
  if (cutoutFile) {
    // Use the background-removed image's alpha, applied to the full-resolution photo.
    alpha = await sharp(cutoutFile).ensureAlpha().extractChannel('alpha').resize(width, height, { kernel: 'lanczos3' }).blur(0.8).raw().toBuffer();
  } else {
    // Soft oval fade, so a plain photo melts into the dark background.
    const mask = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="m" cx="50%" cy="46%" r="62%"><stop offset="0.5" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient></defs>
      <rect width="100%" height="100%" fill="url(#m)"/></svg>`;
    alpha = await sharp(Buffer.from(mask)).removeAlpha().extractChannel(0).raw().toBuffer();
  }

  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = rgb[i * 3];
    rgba[i * 4 + 1] = rgb[i * 3 + 1];
    rgba[i * 4 + 2] = rgb[i * 3 + 2];
    rgba[i * 4 + 3] = alpha[i];
  }
  return sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

const cutout = await buildCutout();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">${NAME}</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">JAVA BACKEND • DISTRIBUTED SYSTEMS • PERFORMANCE</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
