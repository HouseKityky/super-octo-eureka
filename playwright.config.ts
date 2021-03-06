import { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'FireFox Desktop',
            use: {
                baseURL: 'https://www.ikea.com',
                browserName: 'firefox',
                viewport: { width: 1200, height: 750 },
            }
        },
        {
            name: 'FireFox Desktop Headed',
            use: {
                baseURL: 'https://www.ikea.com',
                headless: false,
                browserName: 'firefox',
                viewport: { width: 1200, height: 750 },
                launchOptions: {
                    slowMo: 100
                }
            }
        }
    ],
    reporter: [[process.env.CI ? 'github' : 'list'], ['./_support/telegram-reporter.ts']],
    testDir: './tests',
}
export default config;
