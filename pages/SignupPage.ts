import {Page} from "@playwright/test";
export class SignUpLogin 
{
    readonly page: Page;

    textNewUserSignup: string = "//h2[text()='New User Signup!']";
    signupName: string = "//input[@data-qa='signup-name']";
    signupEmail: string = "//input[@data-qa='signup-email']";
    signupbutton: string = "//button[@data-qa='signup-button']";
    
    textEnterAccountInformation: string = "//b[text()='Enter Account Information']";
    titleMrs: string = "//input[@id='id_gender2']";
    titleMr: string = "//input[@id='id_gender1']";
    password: string = "//input[@data-qa='password']";
    days: string = "//select[@data-qa='days']";
    months: string = "//select[@data-qa='months']";
    years: string = "//select[@data-qa='years']";
    newsletter: string = "//input[@id='newsletter']";
    offers: string = "//input[@id='optin']";
    firstName: string = "//input[@data-qa='first_name']";
    lastName: string = "//input[@data-qa='last_name']";
    company: string = "//input[@data-qa='company']";
    address: string = "//input[@data-qa='address']";
    address2: string = "//input[@data-qa='address2']";
    country: string = "//select[@data-qa='country']";
    state: string = "//input[@data-qa='state']";
    city: string = "//input[@data-qa='city']";
    zipcode: string = "//input[@data-qa='zipcode']";
    mobileNumber: string = "//input[@data-qa='mobile_number']";
    createAccountButton: string = "//button[@data-qa='create-account']";
    textAccountCreated: string = "//b[text()='Account Created!']";
    continueButton: string = "//a[@data-qa='continue-button']";
    textLoggedInAsUsername: string = "//a[text()=' Logged in as ']";
    deleteAccountButton: string = "//a[text()=' Delete Account']";
    textAccountDeleted: string = "//b[text()='Account Deleted!']";

    textLoginToYourAccount: string = "//h2[text()='Login to your account']";
    loginEmail: string = "//input[@data-qa='login-email']";
    loginPassword: string = "//input[@data-qa='login-password']";
    loginButton: string = "//button[@data-qa='login-button']";

    constructor(page: Page) {
        this.page = page;
    }

    async verifyNewUserSignup() {
        await this.page.locator(this.textNewUserSignup).isVisible();
    }
    async enterSignupName(name: string) {
        await this.page.locator(this.signupName).fill(name);
    }
    async enterSignupEmail(email: string) {
        await this.page.locator(this.signupEmail).fill(email);
    }
    async clickSignupButton() {
        await this.page.locator(this.signupbutton).click(); 
    }
    async verifyEnterAccountInformation() {
        await this.page.locator(this.textEnterAccountInformation).isVisible();
    }
    async selectTitle(title: string) {
        if (title === "Mr") {   
            await this.page.locator(this.titleMr).check();
        } else if (title === "Mrs") {
            await this.page.locator(this.titleMrs).check();
        } else {
            throw new Error("Invalid title. Please choose 'Mr' or 'Mrs'.");
        }
    }
    async enterPassword(password: string) {
        await this.page.locator(this.password).fill(password);
    }
    async selectDateOfBirth(day: string, month: string, year: string) {
        await this.page.locator(this.days).selectOption(day);
        await this.page.locator(this.months).selectOption(month);
        await this.page.locator(this.years).selectOption(year);
    }
    async subscribeToNewsletter() {
        await this.page.locator(this.newsletter).check();
    }
    async selectSpecialOffersOrNewsletter(title: string) {
        if (title === "Newsletter") {
            await this.page.locator(this.newsletter).click();
        } else if (title === "Special Offers") {
            await this.page.locator(this.offers).check();
        } else if (title === "Both") {
            await this.page.locator(this.newsletter).check();
            await this.page.locator(this.offers).check();
        } else {
            throw new Error("Invalid option. Please choose 'Newsletter', 'Special Offers', or 'Both'.");
        }   
        }
    async enterFirstName(firstName: string) {
        await this.page.locator(this.firstName).fill(firstName);
    }
    async enterLastName(lastName: string) {
        await this.page.locator(this.lastName).fill(lastName);
    }
    async enterCompany(company: string) {
        await this.page.locator(this.company).fill(company);
    }
    async enterAddress(address: string) {
        await this.page.locator(this.address).fill(address);
    }   
    async enterAddress2(address2: string) {
        await this.page.locator(this.address2).fill(address2);
    }
    async selectCountry(country: string) {
        await this.page.locator(this.country).selectOption(country);
    }
    async enterState(state: string) {
        await this.page.locator(this.state).fill(state);
    }
    async enterCity(city: string) {
        await this.page.locator(this.city).fill(city);
    }
    async enterZipcode(zipcode: string) {
        await this.page.locator(this.zipcode).fill(zipcode);
    }
    async enterMobileNumber(mobileNumber: string) {
        await this.page.locator(this.mobileNumber).fill(mobileNumber);
    }
    async clickCreateAccountButton() {
        await this.page.locator(this.createAccountButton).click();
    }
    async verifyAccountCreated() {
        await this.page.locator(this.textAccountCreated).isVisible();
    }
    async clickContinueButton() {
        await this.page.locator(this.continueButton).click();
    }
    async verifyLoggedInAsUsername() {
        await this.page.locator(this.textLoggedInAsUsername).isVisible();
    }
    async clickDeleteAccountButton() {
        await this.page.locator(this.deleteAccountButton).click();
    }
    async verifyAccountDeleted() {
        await this.page.locator(this.textAccountDeleted).isVisible();
    }
    
    
}