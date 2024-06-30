import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page and display the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Home Page/);
  });

  test('should display a welcome message', async ({ page }) => {
    await page.goto('/');
    const welcomeMessage = page.locator('text=Welcome to the Dashboard');
    await expect(welcomeMessage).toBeVisible();
  });

//   test('should navigate to the dashboard page when clicking the dashboard link', async ({ page }) => {
//     await page.goto('/');
//     await page.click('text=Dashboard');
//     await expect(page).toHaveURL(/.*dashboard/);
//     const dashboardTitle = page.locator('text=Dashboard');
//     await expect(dashboardTitle).toBeVisible();
//   });
});
