const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const htmlPath = 'file:///C:/Users/abhij/Desktop/Website%20work/Magpie%20Cottage/magpie-cottage/client-report.html';
  
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  
  await page.pdf({
    path: 'Magpie_Cottage_Feedback_Update_Report.pdf',
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
