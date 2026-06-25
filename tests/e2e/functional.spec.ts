import { test, expect } from '@playwright/test';

test.describe('Website Functional Flow', () => {


  test('Booking Page functional check', async ({ page }) => {
    await page.goto('/book');
    
    // Ensure "Pricing & Availability" renders
    const pricingHeading = page.getByRole('heading', { name: /Pricing & Availability/i });
    await expect(pricingHeading).toBeVisible();

    // Check WhatsApp CTA exists
    const whatsappBtn = page.getByRole('link', { name: /Message us on WhatsApp/i });
    await expect(whatsappBtn).toBeVisible();
    
    // Check Airbnb / Goibibo links
    const airbnbLink = page.getByRole('link', { name: /Airbnb/i });
    const goibiboLink = page.getByRole('link', { name: /Goibibo/i });
    await expect(airbnbLink).toBeVisible();
    await expect(goibiboLink).toBeVisible();
  });
});
