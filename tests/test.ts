import { test } from '@playwright/test';
import { ProductPage } from "./product-page";

// npx playwright test -g "Покрывала нет" --project="FireFox Desktop Headed"
test('Покрывала нет', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto(
    '/ua/uk/'
  );

  await productPage.checkAvailabilty();

});

test('Коробки нет', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto(
      '/ua/uk/'
  );

  await productPage.checkAvailabilty();

});

