import { test, expect } from '@playwright/test';

test('My first Playwright test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});