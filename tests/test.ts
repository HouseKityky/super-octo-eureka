import { test } from '@playwright/test';
import { ProductPage } from "./product-page";

// npx playwright test -g "Покрывала нет" --project="FireFox Desktop Headed"
test('Покрывала нет', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto(
    '/ua/uk/p/indira-indira-pokrivalo-biliy-30396245/'
  );

  await productPage.checkAvailabilty();

});

// npx playwright test -g "Скамейки нет" --project="FireFox Desktop Headed"
test('Скамейки нет', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto(
      '/ua/uk/p/hemnes-hemnes-lavka-biliy-50223625/'
  );

  await productPage.checkAvailabilty();

});

// npx playwright test -g "Скамейки нет" --project="FireFox Desktop Headed"
test('Коврика нет', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto(
      '/ua/uk/p/baggmuck-baggmukk-kilimok-dlya-vzuttya-dlya-primishchennya-vulici-siriy-60329711/'
  );

  await productPage.checkAvailabilty();

});
