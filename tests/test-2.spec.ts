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
    await page.locator('[data-qa="signup-email"]').fill('Huyenltn3@gmail.com');
    // Click 'Signup' button 
    await page.locator('[data-qa="signup-button"]').click();
    // Verify Enter Account Information is displayed
    await expect(page.getByText('Enter Account Information')).toBeVisible();

    await page.click('label:has-text("Mrs")');
    await page.fill('input[name="password"]', 'Huyenltn');
    await page.selectOption('select#days', '12');
    await page.selectOption('select[name="months"]', '12');
    await page.selectOption('select[name="years"]', '1992');
    await page.click('label:has-text("Sign up for our newsletter")');
    await page.click('label:has-text("Receive special offers from our partners")');
    await page.fill('input[id="first_name"]', 'Huyen');
    await page.fill('input[id="last_name"]', 'Le');
    await page.fill('input[id="company"]', 'ABC');
    await page.fill('input[id="address1"]', 'HCM');
    await page.selectOption('select[name="country"]', { label: 'Canada' });
    await page.fill('input[id="state"]', 'Q7');
    await page.fill('input[id="city"]', 'HCM');
    await page.fill('input[id="zipcode"]', '3134');
    await page.fill('input[id="mobile_number"]', '0359317942');
    //click 'Create Account' button
    await page.click('button[type="submit"]');
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
