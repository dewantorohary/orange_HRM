import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
 
  testMatch: "tests/loginorangehrmlive.spec.ts",

  use: {

    baseURL: 'https://reqres.in/api/login',

    screenshot: 'only-on-failure',
    video: {
      mode: "on",
      size: { width: 1280  , height: 720 },
    },
    headless: false,
    // viewport: { width: 1920, height: 1080 },
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
      slowMo: 3000,
      channel: "chrome",
    }
  },

  timeout: 5 * 60 * 60 * 1000,
  reporter: [
    ['list'],
    ['html'],
  ],
};

export default config;