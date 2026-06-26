import { test, expect } from '@playwright/test';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
// We'll save screenshots directly into the artifacts directory
const ARTIFACTS_DIR = 'C:\\Users\\abhij\\.gemini\\antigravity-ide\\brain\\04dbcbac-36b1-423d-bc68-7897e236b8e9\\.tempmediaStorage';

const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'mobile', width: 375, height: 812 }
];

test.describe('Parity Verification Tests', () => {
  
  for (const vp of viewports) {
    test.describe(`Viewport: ${vp.name}`, () => {
      
      test.use({ viewport: { width: vp.width, height: vp.height } });

      test('Testimonials Section on Home Page', async ({ page }) => {
        await page.goto(`${BASE_URL}/#testimonials`);
        // Wait for animation or rendering
        await page.waitForTimeout(2000);
        
        const section = page.locator('#testimonials').first();
        if (await section.isVisible()) {
          await section.screenshot({ 
            path: path.join(ARTIFACTS_DIR, `media_04dbcbac-36b1-423d-bc68-7897e236b8e9_${Date.now()}_home_testimonials_${vp.name}.png`) 
          });
        }
      });

      test('Our Story Page - Meet Malini', async ({ page }) => {
        await page.goto(`${BASE_URL}/our-story`);
        await page.waitForTimeout(2000);
        
        // Take full page screenshot to capture all updated headers
        await page.screenshot({ 
          path: path.join(ARTIFACTS_DIR, `media_04dbcbac-36b1-423d-bc68-7897e236b8e9_${Date.now()}_our_story_${vp.name}.png`),
          fullPage: true 
        });
      });

      test('Contact Page - House Rules', async ({ page }) => {
        await page.goto(`${BASE_URL}/contact`);
        await page.waitForTimeout(2000);
        
        await page.screenshot({ 
          path: path.join(ARTIFACTS_DIR, `media_04dbcbac-36b1-423d-bc68-7897e236b8e9_${Date.now()}_contact_${vp.name}.png`),
          fullPage: true 
        });
      });

      test('Experiences Page - Activities', async ({ page }) => {
        await page.goto(`${BASE_URL}/experiences`);
        await page.waitForTimeout(2000);
        
        await page.screenshot({ 
          path: path.join(ARTIFACTS_DIR, `media_04dbcbac-36b1-423d-bc68-7897e236b8e9_${Date.now()}_experiences_${vp.name}.png`),
          fullPage: true 
        });
      });

    });
  }
});
