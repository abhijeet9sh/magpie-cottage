const { Jimp } = require('jimp');

async function main() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very close to white, make it transparent
      if (red > 200 && green > 200 && blue > 200) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel
      }
    });
    
    await image.write('public/logo-transparent.png');
    console.log('Successfully created logo-transparent.png');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

main();
