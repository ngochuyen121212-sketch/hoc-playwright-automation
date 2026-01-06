import { test, expect } from '@playwright/test';

test('Register account', async ({ page }) => {
    // Lấy độ phân giải thực tế của màn hình và gán cho trình duyệt
    await page.setViewportSize({ width: 1440, height: 900 });
    // Navigate to website
    await page.goto('https://automationexercise.com/');
    // Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');
   // Click on 'Signup / Login' button
    await page.getByText('Signup / Login').click();
    // Verify 'New User Signup!' is visible
    await expect(page.getByText('New user signup')).toBeVisible();
    // Enter name and email address
    await page.getByPlaceholder('Name').fill('Huyenltn');
    await page.locator('[data-qa="signup-email"]').fill('Huyenltn5@gmail.com');
    // Click 'Signup' button 
    await page.locator('[data-qa="signup-button"]').click();
    // Verify Enter Account Information is displayed
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    // Click title 'Mrs'
    await page.locator('[for="id_gender2"]').click();
    //Fill Password
    await page.locator('[data-qa="password"]').fill('Huyenltn');
    // Select Date of birth: Day, Month, Year
    await page.locator('[data-qa="days"]').selectOption('12');
    await page.locator('[data-qa="months"]').selectOption('12');
    await page.locator('[data-qa="years"]').selectOption('1999');
    // Select checkbox 'Sign up for our newsletter!'
    await page.getByLabel('Sign up for our newsletter!').check();
    // Select checkbox 'Receive special offers from our partners!'
    await page.getByLabel('Receive special offers from our partners!').check();
    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.locator('[data-qa="first_name"]').fill('Huyen');
    await page.locator('[data-qa="last_name"]').fill('Le');
    await page.locator('[data-qa="company"]').fill('ABC');
    await page.locator('[data-qa="address"]').fill('HCM');
    await page.locator('[data-qa="address2"]').fill('HCM');
    await page.locator('[data-qa="country"]').selectOption('Canada');
    await page.locator('[data-qa="state"]').fill('Q7');
    await page.locator('[data-qa="city"]').fill('HCM');
    await page.locator('[data-qa="zipcode"]').fill('3134');
    await page.locator('[data-qa="mobile_number"]').fill('0359317942');
    // Click 'Create Account' button
    await page.locator('[data-qa="create-account"]').click();
    //Account Created!
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
    //click 'Continue' button
    await page.locator('[data-qa="continue-button"]').click();
    // Verify that 'Logged in as username' is visible
    await expect(page.getByText('Logged in as Huyenltn')).toBeVisible();
    // Click 'Delete Account' button
    await page.getByText('Delete Account').click();
    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
    await page.close();
});
