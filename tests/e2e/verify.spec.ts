import { test, expect } from '@playwright/test';

test.setTimeout(120000); // Increase timeout to 120s

const outDir = 'C:\\\\Users\\\\abhij\\\\.gemini\\\\antigravity-ide\\\\brain\\\\04dbcbac-36b1-423d-bc68-7897e236b8e9';

const pagesToCapture = [
  { path: '/contact', name: 'contact' },
  { path: '/book', name: 'book' }
];

test('capture remaining mobile screenshots', async ({ page }) => {
  await page.setViewportSize({ width: 412, height: 915 });
  
  for (const item of pagesToCapture) {
    console.log(`Navigating to ${item.name}...`);
    await page.goto(`http://localhost:3000${item.path}`, { waitUntil: 'domcontentloaded' });
    
    // Wait a bit for animations to settle
    await page.waitForTimeout(3000);
    
    const screenshotPath = `${outDir}\\\\${item.name}_pixel7.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot to ${screenshotPath}`);
  }
});
