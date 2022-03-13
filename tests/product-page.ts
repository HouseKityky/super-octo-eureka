import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    readonly notAvailableMark: Locator

    constructor(page: Page) {
        this.page = page;
        this.notAvailableMark = page.locator('text=Шановні покупці! Наразі немає можливості сплатити замовлення на сайті. Магазин IKEA та пункти видачі замовлень зачинені. Просимо вибачити за незручності.');
    }

    async checkAvailabilty(){
        await expect(this.notAvailableMark).toBeVisible();
    }
}

