const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Simple ICO file generator
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // Each image entry: 16 bytes
  // Then image data
  
  const numImages = pngBuffers.length;
  const headerSize = 6 + (16 * numImages);
  
  let totalSize = headerSize;
  const imageOffsets = [];
  
  for (const buf of pngBuffers) {
    imageOffsets.push(totalSize);
    totalSize += buf.length;
  }
  
  const ico = Buffer.alloc(totalSize);
  
  // ICO Header
  ico.writeUInt16LE(0, 0);      // Reserved
  ico.writeUInt16LE(1, 2);      // Type: 1 = ICO
  ico.writeUInt16LE(numImages, 4); // Number of images
  
  // Image directory entries
  const sizes = [16, 32, 48];
  for (let i = 0; i < numImages; i++) {
    const offset = 6 + (i * 16);
    ico.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], offset);     // Width
    ico.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], offset + 1); // Height
    ico.writeUInt8(0, offset + 2);                                // Color palette
    ico.writeUInt8(0, offset + 3);                                // Reserved
    ico.writeUInt16LE(1, offset + 4);                             // Color planes
    ico.writeUInt16LE(32, offset + 6);                            // Bits per pixel
    ico.writeUInt32LE(pngBuffers[i].length, offset + 8);          // Size of image data
    ico.writeUInt32LE(imageOffsets[i], offset + 12);              // Offset to image data
  }
  
  // Image data
  for (let i = 0; i < numImages; i++) {
    pngBuffers[i].copy(ico, imageOffsets[i]);
  }
  
  return ico;
}

const publicDir = path.join(__dirname, '..', 'public');

// SVG content with proper rendering for rasterization
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="512" height="512">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="#0f172a"/>
  <text x="16" y="23" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="url(#gradient)" text-anchor="middle">DL</text>
</svg>`;

// Apple Touch Icon needs opaque background (no transparency) and square corners
const appleIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="180" height="180" fill="#0f172a"/>
  <text x="90" y="120" font-family="Arial, Helvetica, sans-serif" font-size="90" font-weight="700" fill="url(#gradient)" text-anchor="middle">DL</text>
</svg>`;

// Web manifest icons (can have rounded corners, will be masked by Android)
const webManifestSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.1875)}" fill="#0f172a"/>
  <text x="${size/2}" y="${size * 0.71875}" font-family="Arial, Helvetica, sans-serif" font-size="${size/2}" font-weight="700" fill="url(#gradient)" text-anchor="middle">DL</text>
</svg>`;

async function generateFavicons() {
  console.log('Generating favicon assets...');

  // Generate favicon-96x96.png (for Google search results)
  await sharp(Buffer.from(svgContent))
    .resize(96, 96)
    .png()
    .toFile(path.join(publicDir, 'favicon-96x96.png'));
  console.log('✓ favicon-96x96.png');

  // Generate favicon-48x48.png (for ICO)
  await sharp(Buffer.from(svgContent))
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('✓ favicon-48x48.png');

  // Generate favicon-32x32.png (for ICO)
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png');

  // Generate favicon-16x16.png (for ICO)
  await sharp(Buffer.from(svgContent))
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png');

  // Generate apple-touch-icon.png (180x180, opaque)
  await sharp(Buffer.from(appleIconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // Generate web-app-manifest-192x192.png
  await sharp(Buffer.from(webManifestSvg(192)))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-192x192.png'));
  console.log('✓ web-app-manifest-192x192.png');

  // Generate web-app-manifest-512x512.png
  await sharp(Buffer.from(webManifestSvg(512)))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-512x512.png'));
  console.log('✓ web-app-manifest-512x512.png');

  // Generate mstile-150x150.png for Windows
  await sharp(Buffer.from(webManifestSvg(150)))
    .resize(150, 150)
    .png()
    .toFile(path.join(publicDir, 'mstile-150x150.png'));
  console.log('✓ mstile-150x150.png');

  // Generate favicon.ico (multi-resolution)
  const png16 = fs.readFileSync(path.join(publicDir, 'favicon-16x16.png'));
  const png32 = fs.readFileSync(path.join(publicDir, 'favicon-32x32.png'));
  const png48 = fs.readFileSync(path.join(publicDir, 'favicon-48x48.png'));
  const icoBuffer = createIco([png16, png32, png48]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ favicon.ico');

  console.log('\nAll favicon assets generated successfully!');
}

generateFavicons().catch(console.error);
