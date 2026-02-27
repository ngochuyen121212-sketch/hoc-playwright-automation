import {Page} from "@playwright/test";

export class PageClass {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateToWebsite() {
        await this.page.goto("https://automationexercise.com/", { waitUntil: "load" });
    }
}
