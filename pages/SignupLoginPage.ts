import {Page} from "@playwright/test";
export class SignUpLogin {
    readonly page: Page;

    textNewUserSignup: string = "//h2[text()='New User Signup!']";
    signupName: string = "//input[@data-qa='signup-name']";
    signupEmail: string = "//input[@data-qa='signup-email']";
    signupbutton: string = "//button[@data-qa='signup-button']";
    
    textEnterAccountInformation: string = "//b[text()='Enter Account Information']";
    titleMrs: string = "//input[@id='id_gender2']";
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
    

    
    
}