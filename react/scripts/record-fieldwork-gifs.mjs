/**
 * Record Fieldwork demo interactions as WebM, then convert to GIF via ffmpeg.
 * Run: node scripts/record-fieldwork-gifs.mjs [name ...]
 */
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/img/fieldwork');
const TMP_DIR = path.resolve(__dirname, '../.recordings');
const APP_URL = 'https://w0436300.github.io/request/app.html';
const PASSWORD = 'claire2026';
const VIEWPORT = { width: 1440, height: 900 };

mkdirSync(TMP_DIR, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

const SCENARIOS = {
  'projects-dashboard': async (page) => {
    await page.waitForSelector('text=Projects', { timeout: 15000 });
    await pause(page, 500);
    await moveCursor(page, 720, 280);
    await moveCursor(page, 980, 420);
    await page.mouse.wheel(0, 180);
    await pause(page, 700);
  },
  enquiries: async (page) => {
    const link = page.getByRole('link', { name: /^Enquiries/ });
    const box = await link.boundingBox();
    await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    await pause(page, 700);
    await moveCursor(page, 760, 360);
    await page.mouse.wheel(0, 140);
    await pause(page, 700);
  },
  'delivery-standards': async (page) => {
    const link = page.getByRole('link', { name: 'Delivery Standards' });
    const box = await link.boundingBox();
    await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    await pause(page, 700);
    await moveCursor(page, 700, 320);
    await page.mouse.wheel(0, 220);
    await pause(page, 700);
  },
  'project-peek': async (page) => {
    await pause(page, 400);
    const row = page.locator('table tbody tr').first();
    await row.scrollIntoViewIfNeeded();
    const box = await row.boundingBox();
    await clickAt(page, box.x + 180, box.y + box.height / 2);
    await pause(page, 900);
    await moveCursor(page, 1180, 420);
    await pause(page, 600);
  },
  milestones: async (page) => {
    const link = page.getByRole('link', { name: /^Milestones/ });
    const box = await link.boundingBox();
    await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    await pause(page, 700);
    await moveCursor(page, 720, 340);
    await page.mouse.wheel(0, 160);
    await pause(page, 700);
  },
  'milestones-timeline': async (page) => {
    const link = page.getByRole('link', { name: /^Milestones/ });
    const box = await link.boundingBox();
    await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    await pause(page, 700);
    await moveCursor(page, 640, 300);
    await moveCursor(page, 920, 480);
    await page.mouse.wheel(0, 200);
    await pause(page, 700);
  },
  'project-delivery': async (page) => {
    await openFirstProject(page);
    const tab = page.getByRole('tab', { name: /Delivery/i });
    if (await tab.count()) {
      const box = await tab.first().boundingBox();
      await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    }
    await pause(page, 800);
    await moveCursor(page, 760, 380);
    await page.mouse.wheel(0, 180);
    await pause(page, 700);
  },
  'project-brief': async (page) => {
    await openFirstProject(page);
    const tab = page.getByRole('tab', { name: /Brief/i });
    if (await tab.count()) {
      const box = await tab.first().boundingBox();
      await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    }
    await pause(page, 800);
    await moveCursor(page, 700, 360);
    await page.mouse.wheel(0, 200);
    await pause(page, 700);
  },
  'project-activity': async (page) => {
    await openFirstProject(page);
    const tab = page.getByRole('tab', { name: /Activity/i });
    if (await tab.count()) {
      const box = await tab.first().boundingBox();
      await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    }
    await pause(page, 800);
    await moveCursor(page, 720, 420);
    await page.mouse.wheel(0, 180);
    await pause(page, 700);
  },
  'weekly-reports': async (page) => {
    const link = page.getByRole('link', { name: 'Weekly reports' });
    const box = await link.boundingBox();
    await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    await pause(page, 700);
    await moveCursor(page, 680, 320);
    await page.mouse.wheel(0, 180);
    await pause(page, 700);
  },
  'new-enquiry': async (page) => {
    const btn = page.getByRole('button', { name: /New enquiry/i });
    const box = await btn.boundingBox();
    await clickAt(page, box.x + box.width / 2, box.y + box.height / 2);
    await pause(page, 800);
    await moveCursor(page, 720, 340);
    await moveCursor(page, 720, 520);
    await pause(page, 600);
  },
};

async function pause(page, ms) {
  await page.waitForTimeout(ms);
}

async function installDemoCursor(page) {
  await page.evaluate(() => {
    if (document.getElementById('demo-cursor')) return;
    const style = document.createElement('style');
    style.textContent = `
      #demo-cursor {
        position: fixed;
        z-index: 2147483646;
        width: 0;
        height: 0;
        pointer-events: none;
      }
      #demo-cursor::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 14px;
        height: 20px;
        transform: translate(-2px, -2px);
        background:
          linear-gradient(135deg, #111 0 48%, transparent 48% 100%),
          linear-gradient(225deg, #fff 0 52%, transparent 52% 100%);
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.35));
      }
      #demo-cursor-ring {
        position: fixed;
        z-index: 2147483645;
        width: 44px;
        height: 44px;
        margin: -22px 0 0 -22px;
        border-radius: 999px;
        border: 3px solid rgba(250, 204, 21, .95);
        background: rgba(250, 204, 21, .18);
        pointer-events: none;
        opacity: 0;
        transform: scale(.55);
        transition: opacity .12s ease, transform .22s ease;
      }
      #demo-cursor-ring.is-active {
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);
    const ring = document.createElement('div');
    ring.id = 'demo-cursor-ring';
    const cursor = document.createElement('div');
    cursor.id = 'demo-cursor';
    document.body.append(ring, cursor);
    window.__setDemoCursor = (x, y, click = false) => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      if (click) {
        ring.classList.add('is-active');
        window.setTimeout(() => ring.classList.remove('is-active'), 280);
      }
    };
  });
}

async function moveCursor(page, x, y, click = false) {
  await page.mouse.move(x, y);
  await page.evaluate(({ x, y, click }) => window.__setDemoCursor?.(x, y, click), { x, y, click });
  if (click) await pause(page, 280);
  else await pause(page, 120);
}

async function clickAt(page, x, y) {
  await moveCursor(page, x, y);
  await moveCursor(page, x, y, true);
  await page.mouse.click(x, y);
  await pause(page, 350);
}

async function unlock(page) {
  await page.goto('https://w0436300.github.io/request/index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    sessionStorage.setItem('fs_intake_unlocked_v1', '1');
  });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('table tbody tr', { timeout: 20000 });
  await pause(page, 1800);
}

async function openFirstProject(page) {
  const row = page.locator('table tbody tr').first();
  await row.scrollIntoViewIfNeeded();
  const rowBox = await row.boundingBox();
  await clickAt(page, rowBox.x + 180, rowBox.y + rowBox.height / 2);
  await pause(page, 700);
  const openFull = page.getByRole('button', { name: /Open full project/i });
  if (await openFull.count()) {
    const fullBox = await openFull.first().boundingBox();
    await clickAt(page, fullBox.x + fullBox.width / 2, fullBox.y + fullBox.height / 2);
    await pause(page, 900);
  }
}

function webmToGif(webmPath, gifPath) {
  execFileSync('ffmpeg', [
    '-y', '-ss', '1.2', '-i', webmPath,
    '-vf', 'fps=10,scale=1280:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=full[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3',
    '-loop', '0', gifPath,
  ], { stdio: 'pipe' });
}

async function recordOne(browser, name) {
  const scenario = SCENARIOS[name];
  if (!scenario) throw new Error(`Unknown scenario: ${name}`);

  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: { dir: TMP_DIR, size: VIEWPORT },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await unlock(page);
  await installDemoCursor(page);
  await pause(page, 500);
  await scenario(page);
  await pause(page, 500);
  const video = page.video();
  await context.close();
  const webmPath = await video.path();
  const gifPath = path.join(OUT_DIR, `${name}.gif`);
  webmToGif(webmPath, gifPath);
  console.log(`✓ ${name}.gif`);
}

async function main() {
  const names = process.argv.slice(2);
  const targets = names.length ? names : Object.keys(SCENARIOS);

  const browser = await chromium.launch({
    headless: false,
    args: ['--window-size=1440,900'],
  });

  for (const name of targets) {
    try {
      await recordOne(browser, name);
    } catch (err) {
      console.error(`✗ ${name}:`, err.message);
    }
  }

  await browser.close();
}

main();
