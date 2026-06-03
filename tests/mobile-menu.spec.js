const path = require('path');
const { test, expect } = require('@playwright/test');

function pageUrl(file) {
  return `file:///${path.join(process.cwd(), file).replace(/\\/g, '/')}`;
}

test.describe('mobile menu', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });

  test('opens the main menu without expanding dropdowns immediately', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    const nav = page.locator('#navLinks');
    const toggle = page.locator('#navToggle');
    const services = page.getByRole('button', { name: 'Leistungen' });
    const servicesLink = page.getByRole('link', { name: 'Barrierefreiheit & Leichte Sprache' });

    await expect(nav).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    const bars = await toggle.locator('span').evaluateAll((spans) =>
      spans.map((span) => {
        const rect = span.getBoundingClientRect();
        return { x: rect.x, y: rect.y, width: rect.width };
      })
    );

    expect(bars).toHaveLength(3);
    expect(Math.abs(bars[0].x - bars[1].x)).toBeLessThan(1);
    expect(Math.abs(bars[1].x - bars[2].x)).toBeLessThan(1);
    expect(bars[1].y).toBeGreaterThan(bars[0].y);
    expect(bars[2].y).toBeGreaterThan(bars[1].y);
    expect(bars[0].width).toBeGreaterThan(20);

    await toggle.click();

    await expect(nav).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(services).toBeVisible();
    await expect(page.getByRole('link', { name: 'Referenzen' })).toBeVisible();
    await expect(servicesLink).toBeHidden();

    await services.click();

    await expect(services).toHaveAttribute('aria-expanded', 'true');
    await expect(servicesLink).toBeVisible();

    await page.keyboard.press('Escape');

    await expect(services).toHaveAttribute('aria-expanded', 'false');
    await expect(servicesLink).toBeHidden();

    await page.keyboard.press('Escape');

    await expect(nav).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
