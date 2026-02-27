import { test, expect } from "@playwright/test";
import { PageClass } from "../pages/PageClass";
import { Menu } from "../pages/Menu";
import { SignUpLogin } from "../pages/SignupLoginPage";

test ('Test Case 1: Register User', async ({ page }) =>
{   
    const pageClass = new PageClass(page);
    const menu = new Menu(page);
    const signUpLogin = new SignUpLogin(page);

    await test.step('Navigate to website', async () => {
        await pageClass.navigateToWebsite();
    });

    await test.step('Click on Signup/Login button', async () => {
        await menu.clickSignupLogin();
    });
    await test.step('Verify "New User Signup!" is visible', async () => {
        await signUpLogin.verifyNewUserSignup();
    });
    await test.step('Enter name', async () => {
        await signUpLogin.enterSignupName("Huyen Le");
    });
   
});
