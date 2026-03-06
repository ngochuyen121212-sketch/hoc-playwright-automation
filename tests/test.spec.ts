import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { Menu } from "../pages/Menu";
import { SignUpPage } from "../pages/SignupPage";

test ('Test Case 1: Register User', async ({ page }) =>
{   
    const basePage = new BasePage(page);
    const menu = new Menu(page);
    const signUpPage = new SignUpPage(page);

    await test.step('Navigate to website', async () => {
        await basePage.navigateToWebsite();
    });

    await test.step('Click on Signup/Login button', async () => {
        await menu.clickSignupLogin();
    });
    await test.step('Verify "New User Signup!" is visible', async () => {
        await signUpPage.verifyNewUserSignup();
    });
    await test.step('Enter name', async () => {
        await signUpPage.enterSignupName("huyen1212");
    });
    await test.step('Enter email', async () => {
        await signUpPage.enterSignupEmail("huyen1212@gmail.com");
    });
    await test.step('Click Signup button', async () => {
        await signUpPage.clickSignupButton();
    }); 
    await test.step('Verify "Enter Account Information" is visible', async () => {
        await signUpPage.verifyEnterAccountInformation();
    });
    await test.step('Seclect title', async () => {
        await signUpPage.selectTitle("Mrs");
    });
    await test.step('Enter password', async () => {
        await signUpPage.enterPassword("password123");
    });
    await test.step('Select date of birth', async () => {
        await signUpPage.selectDateOfBirth("10", "May", "1990");
    });
    await test.step('Select newsletter or special offers', async () => {
        await signUpPage.selectSpecialOffersOrNewsletter("Both");
    });
    await test.step('Enter first name', async () => {
        await signUpPage.enterFirstName("Huyen");
    });
    await test.step('Enter last name', async () => {
        await signUpPage.enterLastName("Le");
    });
    await test.step('Enter company', async () => {
        await signUpPage.enterCompany("ABC Company");
    });
    await test.step('Enter address', async () => {
        await signUpPage.enterAddress("123 Main St");
    });
    await test.step('Enter country', async () => {
        await signUpPage.selectCountry("United States");
    });
    await test.step('Enter state', async () => {
        await signUpPage.enterState("California");
    });
    await test.step('Enter city', async () => {
        await signUpPage.enterCity("Los Angeles");
    });
    await test.step('Enter zipcode', async () => {
        await signUpPage.enterZipcode("90001");
    });
    await test.step('Enter mobile number', async () => {
       await signUpPage.enterMobileNumber("1234567890");
    });
    await test.step('Click Create Account button', async () => {
        await signUpPage.clickCreateAccountButton();
    });
    await test.step('Verify "Account Created!" is visible', async () => {
        await signUpPage.verifyAccountCreated();
    });
    await test.step('Click Continue button', async () => {
        await signUpPage.clickContinueButton();
    });
    await test.step('Verify "Logged in as username" is visible', async () => {
        await signUpPage.verifyLoggedInAsUsername();
    }); 
    await test.step('Click Delete Account button', async () => {
        await signUpPage.clickDeleteAccountButton();
    });
    await test.step('Verify "Account Deleted!" is visible', async () => {
        await signUpPage.verifyAccountDeleted();
    });
    await test.step('Click Continue button', async () => {
        await signUpPage.clickContinueButton();
    });
    await test.step('Close Page', async () => {
        await basePage.closePage();
    });
   
});
