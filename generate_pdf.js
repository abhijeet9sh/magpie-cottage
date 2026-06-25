const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const htmlPath = 'file:///C:/Users/abhij/.gemini/antigravity-ide/brain/df1970c0-fb1a-42fc-a9d5-b71ffc47942e/scratch/client_report.html';
  
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  
  await page.pdf({
    path: 'Client_Report_From_HTML.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  await browser.close();
  console.log("PDF generated successfully.");
})();
