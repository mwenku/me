import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const executablePath = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((candidate) => candidate && existsSync(candidate));

if (!executablePath) throw new Error("Set CHROME_PATH to your Chrome executable.");

const directory = new URL("./public/captures/", import.meta.url);
const siteUrl = process.env.SITE_URL || "http://localhost:5173";
const browser = await puppeteer.launch({ executablePath, headless: true });

await mkdir(directory, { recursive: true });

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
  await page.goto(siteUrl, { waitUntil: "networkidle0" });
  await page.addStyleTag({ content: "*, *::before, *::after { scroll-behavior: auto !important; transition: none !important; animation: none !important; } ::-webkit-scrollbar { display: none; }" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.querySelectorAll(".section-shell, .contact").forEach((section) => section.classList.add("is-visible"));
    await Promise.all(Array.from(document.images, async (image) => {
      image.loading = "eager";
      await image.decode().catch(() => undefined);
    }));
  });

  const capture = async (name, selector, offset = 110) => {
    await page.evaluate((target, topOffset) => {
      const element = document.querySelector(target);
      if (!element) throw new Error(`Missing capture target: ${target}`);
      window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY - topOffset);
    }, selector, offset);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await page.screenshot({ path: new URL(`${name}.png`, directory).pathname });
    console.log(`Captured ${name}`);
  };

  await capture("experience", "#companies");
  await capture("backend", "#backend");
  await capture("reporting", "#reporting");
  await capture("projects", "#projects");
  await capture("projects-first", ".project-1", 140);
  await capture("projects-second", ".project-3", 140);
  await capture("integrations", "#integrations");
  await capture("expertise", "#skills");
  await capture("contact", "#contact", 0);
  await capture("home", "#home", 0);
  await page.click("button[aria-label='Open command menu']");
  await page.screenshot({ path: new URL("command.png", directory).pathname });
  await page.type("input[aria-label='Search commands']", "Projects");
  await page.screenshot({ path: new URL("command-search.png", directory).pathname });
  await page.keyboard.press("Escape");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await capture("mobile-home", "#home", 0);
  await writeFile(new URL("capture.json", directory), `${JSON.stringify({ siteUrl, desktop: { width: 1440, height: 1000 }, mobile: { width: 390, height: 844 } }, null, 2)}\n`);
} finally {
  await browser.close();
}
