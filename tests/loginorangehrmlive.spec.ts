import { test, expect } from '@playwright/test';

test( "Login success test case" , async ({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('username').click();
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})

test( "Login failed test case" , async ({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('username').click();
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin000');
    await page.getByRole('button', { name: 'Login' }).click();
    const errorMessage = await page.locator('.oxd-alert-content-text');
    expect(await errorMessage.textContent()).toContain('Invalid credentials');

})