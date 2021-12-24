import { test, expect } from '@playwright/test';

// npx playwright test -g "Покрывала нет" --project="FireFox Desktop Headed"
test('Покрывала нет', async ({ page }) => {
  await page.goto(
    'https://www.ikea.com/ua/uk/p/indira-indira-pokrivalo-biliy-30396245/'
  );

  const locator = page.locator('text=Немає в наявності');

  await expect(locator).toBeVisible();

});

// npx playwright test -g "Скамейки нет" --project="FireFox Desktop Headed"
test('Скамейки нет', async ({ page }) => {
  await page.goto(
      'https://www.ikea.com/ua/uk/p/hemnes-hemnes-lavka-biliy-50223625/'
  );

  const locator = page.locator('text=Немає в наявності');

  await expect(locator).toBeVisible();

});

// npx playwright test -g "Скамейки нет" --project="FireFox Desktop Headed"
test('Коврика нет', async ({ page }) => {
  await page.goto(
      'https://www.ikea.com/ua/uk/p/baggmuck-baggmukk-kilimok-dlya-vzuttya-dlya-primishchennya-vulici-siriy-60329711/'
  );

  const locator = page.locator('text=Немає в наявності');

  await expect(locator).toBeVisible();

});
