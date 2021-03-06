import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    readonly notAvailableMark: Locator

    constructor(page: Page) {
        this.page = page;
        this.notAvailableMark = page.locator('text=Наша діяльність наразі призупинена');
    }

    async checkAvailabilty(){
        await expect(this.notAvailableMark).toBeVisible();
    }
}

