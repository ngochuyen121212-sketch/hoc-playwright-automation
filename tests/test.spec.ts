import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { Menu } from "../pages/Menu";
import { SignUpLogin } from "../pages/SignupPage";

test ('Test Case 1: Register User', async ({ page }) =>
{   
    const basePage = new BasePage(page);
    const menu = new Menu(page);
    const signUpLogin = new SignUpLogin(page);

    await test.step('Navigate to website', async () => {
        await basePage.navigateToWebsite();
    });

    await test.step('Click on Signup/Login button', async () => {
        await menu.clickSignupLogin();
    });
    await test.step('Verify "New User Signup!" is visible', async () => {
        await signUpLogin.verifyNewUserSignup();
    });
    await test.step('Enter name', async () => {
        await signUpLogin.enterSignupName("huyen1212");
    });
    await test.step('Enter email', async () => {
        await signUpLogin.enterSignupEmail("huyen1212@gmail.com");
    });
    await test.step('Click Signup button', async () => {
        await signUpLogin.clickSignupButton();
    }); 
    await test.step('Verify "Enter Account Information" is visible', async () => {
        await signUpLogin.verifyEnterAccountInformation();
    });
    await test.step('Seclect title', async () => {
        await signUpLogin.selectTitle("Mrs");
    });
    await test.step('Enter password', async () => {
        await signUpLogin.enterPassword("password123");
    });
    await test.step('Select date of birth', async () => {
        await signUpLogin.selectDateOfBirth("10", "May", "1990");
    });
    await test.step('Select newsletter or special offers', async () => {
        await signUpLogin.selectSpecialOffersOrNewsletter("Both");
    });
    await test.step('Enter first name', async () => {
        await signUpLogin.enterFirstName("Huyen");
    });
    await test.step('Enter last name', async () => {
        await signUpLogin.enterLastName("Le");
    });
    await test.step('Enter company', async () => {
        await signUpLogin.enterCompany("ABC Company");
    });
    await test.step('Enter address', async () => {
        await signUpLogin.enterAddress("123 Main St");
    });
    await test.step('Enter country', async () => {
        await signUpLogin.selectCountry("United States");
    });
    await test.step('Enter state', async () => {
        await signUpLogin.enterState("California");
    });
    await test.step('Enter city', async () => {
        await signUpLogin.enterCity("Los Angeles");
    });
    await test.step('Enter zipcode', async () => {
        await signUpLogin.enterZipcode("90001");
    });
    await test.step('Enter mobile number', async () => {
       await signUpLogin.enterMobileNumber("1234567890");
    });
    await test.step('Click Create Account button', async () => {
        await signUpLogin.clickCreateAccountButton();
    });
    await test.step('Verify "Account Created!" is visible', async () => {
        await signUpLogin.verifyAccountCreated();
    });
    await test.step('Click Continue button', async () => {
        await signUpLogin.clickContinueButton();
    });
    await test.step('Verify "Logged in as username" is visible', async () => {
        await signUpLogin.verifyLoggedInAsUsername();
    }); 
    await test.step('Click Delete Account button', async () => {
        await signUpLogin.clickDeleteAccountButton();
    });
    await test.step('Verify "Account Deleted!" is visible', async () => {
        await signUpLogin.verifyAccountDeleted();
    });
    await test.step('Click Continue button', async () => {
        await signUpLogin.clickContinueButton();
    });
    await test.step('Close Page', async () => {
        await basePage.closePage();
    });
   
});
