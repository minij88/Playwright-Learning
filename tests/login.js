import{test,expect} from '@playwright/test';
test('user can login',async({page})=>{
await page.goto('https://example.com/login');
await page.getByLabel('Username').fill('testuser');
await page.getByLabel('Password').fill('password123');
await page.getByRole('button',{name:Login}).click()
await expect(page).toHaveURL(/dashboard/);
});