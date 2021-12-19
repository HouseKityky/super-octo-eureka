import { test, expect } from '@playwright/test';

// npx playwright test -g "Покрывала нет" --project="FireFox Desktop Headed"
test('Покрывала нет', async ({ page }) => {
  await page.goto(
    'https://www.ikea.com/ua/uk/p/indira-indira-pokrivalo-biliy-30396245/'
  );

  const locator = page.locator('text=Немає в наявності');

  await expect(locator).toBeVisible();

});