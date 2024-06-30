import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test/',
  use: {
    baseURL: 'http://localhost:5173',
    // browserName: 'firefox',
    headless: true,
  },
  projects: [
    {
        name: 'Desktop Firefox',
        use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});
