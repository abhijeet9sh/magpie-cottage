const fs = require('fs');
const path = require('path');

function findLargeFiles(dir, maxSize = 5 * 1024 * 1024) {
  const results = [];
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        results.push(...findLargeFiles(fullPath, maxSize));
      } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
        const stat = fs.statSync(fullPath);
        if (stat.size > maxSize) {
          results.push({ path: fullPath, size: stat.size, sizeMB: (stat.size / 1024 / 1024).toFixed(1) });
        }
      }
    }
  } catch (e) {}
  return results;
}

const publicImages = path.join(__dirname, 'public', 'images');
const largeFiles = findLargeFiles(publicImages);

console.log(`Found ${largeFiles.length} files larger than 5MB:`);
largeFiles.forEach(f => console.log(`  ${f.sizeMB}MB - ${path.relative(__dirname, f.path)}`));

async function compressImages() {
  const sharp = require('sharp');

  for (const file of largeFiles) {
    try {
      console.log(`Compressing ${path.basename(file.path)} (${file.sizeMB}MB)...`);
      
      // Read entire file into buffer first to avoid file lock issues
      const inputBuffer = fs.readFileSync(file.path);
      const metadata = await sharp(inputBuffer).metadata();
      const maxDim = 2400;
      
      let pipeline = sharp(inputBuffer);
      if (metadata.width > maxDim || metadata.height > maxDim) {
        pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true });
      }
      
      const outputBuffer = await pipeline.jpeg({ quality: 82, progressive: true }).toBuffer();
      
      if (outputBuffer.length < file.size) {
        // Write to temp file, then rename
        const tmpPath = file.path + '.tmp';
        fs.writeFileSync(tmpPath, outputBuffer);
        fs.unlinkSync(file.path);
        fs.renameSync(tmpPath, file.path);
        const newSize = (outputBuffer.length / 1024 / 1024).toFixed(1);
        console.log(`  Done: ${file.sizeMB}MB -> ${newSize}MB`);
      } else {
        console.log(`  Skipped (already optimized)`);
      }
    } catch (err) {
      console.log(`  Error: ${err.message}`);
    }
  }
  console.log('\nAll done!');
}

compressImages().catch(console.error);
