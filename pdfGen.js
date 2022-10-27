const puppeteer = require("puppeteer");
(async() => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://www.coursera.org/learn/programming-with-javascript/supplement/VJhho/creating-classes", {
        waitUntil: "networkidle2",
});

await console.log("Navigated to the page...");

//await page.screenshot ({path: docs/...});
await page.pdf({
    path: "docs/PPT",
    format: "A4",
    printBackground: true,
});

await console.log("saved PDF");
await browser.close();
await console.log("Browser closed");
}) ();
