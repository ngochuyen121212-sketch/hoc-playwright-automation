import {Page} from "@playwright/test";

export class Menu {
    readonly page: Page;
    textHome: string = "//a[text()=' Home']";
    textProducts: string = "//a[text()=' Products']";
    textCart: string = "//a[text()=' Cart']";
    textSignupLogin: string = "//a[text()=' Signup / Login']";
    textTestCases: string = "//a[text()=' Test Cases']";
    textAPITesting: string = "//a[text()=' API Testing']";
    textContactUs: string = "//a[text()=' Contact us']";

    constructor(page: Page) {
        this.page = page;
    }

    async clickSignupLogin() {
        await this.page.locator(this.textSignupLogin).click();
    }
}