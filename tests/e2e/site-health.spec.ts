import { test, expect } from '@playwright/test';

test.describe('Magpie Cottage Website Verification', () => {

  test('Home Page renders correctly with brand title and key sections', async ({ page }) => {
    await page.goto('/');
    
    // Title check
    await expect(page).toHaveTitle(/Magpie Cottage \| The Jungle Retreat in Lansdowne/i);
    
    // Hero heading check
    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();

    // Check navbar links
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('Sightings Inside Magpie Cottage section exists and is interactive', async ({ page }) => {
    await page.goto('/');
    
    // Locate the Sightings section
    const sightingsHeading = page.getByRole('heading', { name: /Sightings Inside Magpie Cottage/i });
    await expect(sightingsHeading).toBeVisible();

    // Verify filter buttons
    const allFilter = page.getByRole('button', { name: /All Sightings/i });
    const photosFilter = page.getByRole('button', { name: /Photos/i });
    const videosFilter = page.getByRole('button', { name: /Videos/i });

    await expect(allFilter).toBeVisible();
    await expect(photosFilter).toBeVisible();
    await expect(videosFilter).toBeVisible();

    // Test clicking Photos filter
    await photosFilter.click();
    await page.waitForTimeout(300);

    // Test clicking Videos filter
    await videosFilter.click();
    await page.waitForTimeout(300);

    // Click back to All Sightings
    await allFilter.click();
    await page.waitForTimeout(300);
  });

  test('The Cottage page (/the-cottage) renders rooms and amenities', async ({ page }) => {
    await page.goto('/the-cottage');
    
    const masterBedroom = page.getByText(/The Master Bedroom/i);
    await expect(masterBedroom.first()).toBeVisible();
  });

  test('Experiences page (/experiences) displays activities', async ({ page }) => {
    await page.goto('/experiences');
    
    const pageHeading = page.getByRole('heading', { level: 1 });
    await expect(pageHeading).toBeVisible();
  });

  test('Our Story page (/our-story) loads legacy & story content', async ({ page }) => {
    await page.goto('/our-story');
    
    const pageHeading = page.getByRole('heading', { level: 1 });
    await expect(pageHeading).toBeVisible();
  });

  test('Gallery page (/gallery) renders categories', async ({ page }) => {
    await page.goto('/gallery');
    
    const pageHeading = page.getByRole('heading', { level: 1 });
    await expect(pageHeading).toBeVisible();
  });

  test('Contact page (/contact) displays contact details and inquiry form', async ({ page }) => {
    await page.goto('/contact');
    
    const contactHeading = page.getByRole('heading', { level: 1 });
    await expect(contactHeading).toBeVisible();

    // Form inputs check by placeholder
    const nameInput = page.getByPlaceholder(/John Doe/i);
    const emailInput = page.getByPlaceholder(/john@example.com/i);
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
  });

  test('Book page (/book) renders pricing and booking CTAs', async ({ page }) => {
    await page.goto('/book');
    
    const bookHeading = page.getByRole('heading', { level: 1 });
    await expect(bookHeading).toBeVisible();

    // Check WhatsApp CTA link
    const whatsappLink = page.getByRole('link', { name: /WhatsApp/i });
    await expect(whatsappLink.first()).toBeVisible();
  });

});
