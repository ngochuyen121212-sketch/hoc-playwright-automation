import {Page} from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateToWebsite() {
        await this.page.goto("https://automationexercise.com/", { waitUntil: "load" });
    }
    async closePage() {
        await this.page.close();
    }   
}
