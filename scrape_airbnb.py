o-import asyncio
from playwright.async_api import async_playwright
import json
import os
import aiohttp

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()
        print("Navigating...")
        await page.goto("https://www.airbnb.co.uk/rooms/1646990107600437661?modal=PHOTO_TOUR_SCROLLABLE")
        
        print("Waiting for photos to load...")
        try:
            await page.wait_for_selector('h2', timeout=10000)
        except:
            print("Could not find h2 elements. The page might be blocking headless requests or rendering differently.")
            print(await page.content())
            await browser.close()
            return
            
        print("Scrolling to load lazy images...")
        for _ in range(15):
            await page.evaluate("window.scrollBy(0, 1000)")
            await page.wait_for_timeout(1500)
            
        print("Extracting images...")
        h2s = await page.query_selector_all('h2')
        
        data = []
        for h2 in h2s:
            category_name = await h2.inner_text()
            if not category_name or len(category_name) > 50:
                continue
                
            parent = await h2.evaluate_handle('el => el.closest("section") || el.parentElement.parentElement')
            if not parent:
                continue
                
            images = await parent.query_selector_all('picture img')
            img_urls = []
            for img in images:
                src = await img.get_attribute('src')
                if src and 'muscache.com' in src:
                    src = src.replace('im_w=720', 'im_w=1200')
                    if src not in img_urls:
                        img_urls.append(src)
            
            if img_urls:
                data.append({
                    "category": category_name.strip(),
                    "images": img_urls
                })
        
        with open("airbnb_photos.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        total_imgs = sum(len(c['images']) for c in data)
        print(f"Found {total_imgs} images across {len(data)} categories.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
