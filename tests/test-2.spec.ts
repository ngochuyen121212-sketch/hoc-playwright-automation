import { test, expect } from '@playwright/test';

test('Open automation exercise website', async ({ page }) => {
    // Lấy độ phân giải thực tế của màn hình và gán cho trình duyệt
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com/');
    
    await page.click('a:has-text("Signup / Login")');
    await expect(page.locator('text=New user signup')).toBeVisible();

    await page.fill('input[name="name"]', 'Huyenltn');
    await page.fill('input[data-qa="signup-email"]', 'Huyenltn@gmail.com');
    await page.click('button[data-qa="signup-button"]');


     //await page.close();
});
