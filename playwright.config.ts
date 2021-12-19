import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'FireFox Desktop',
            use: {
                browserName: 'firefox',
                viewport: { width: 1200, height: 750 },
            }
        },
        {
            name: 'FireFox Desktop Headed',
            use: {
                headless: false,
                browserName: 'firefox',
                viewport: { width: 1200, height: 750 },
                launchOptions: {
                    slowMo: 100
                }
            }
        }
    ],
    testDir: './tests',
}
export default config;
