const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const srcDir = 'C:\\Users\\abhij\\Desktop\\Website work\\Magpie Cottage\\Resources\\Activities\\Bonefire';
const destDir = 'c:\\Users\\abhij\\Desktop\\Website work\\Magpie Cottage\\magpie-cottage\\public\\images\\experiences\\bonfire';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

(async () => {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const srcPath = path.join(srcDir, file);
    
    if (ext === '.heic') {
      console.log(`Converting ${file}...`);
      const inputBuffer = fs.readFileSync(srcPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.8
      });
      const destPath = path.join(destDir, file.replace(/.heic$/i, '.jpg'));
      fs.writeFileSync(destPath, outputBuffer);
      console.log(`Saved ${destPath}`);
    } else {
      console.log(`Copying ${file}...`);
      const destPath = path.join(destDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${destPath}`);
    }
  }
  console.log('Done!');
})();
