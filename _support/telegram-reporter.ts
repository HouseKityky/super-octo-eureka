import telegramConfig from '../telegram.config';
import { TestCase, TestResult, FullResult, Reporter } from '@playwright/test/reporter';
import { Bot } from 'grammy';

class TelegramBot {
    private readonly apiToken: string;
    private readonly groupId: string | number;

    constructor() {
        this.apiToken = telegramConfig.TelegramBotToken;
        this.groupId = telegramConfig.ChatId;
    }

    async sendTestStatus(testCase: TestCase, testResult: TestResult): Promise<void> {
        const { title } = testCase;
        const { status } = testResult;
        if (status === 'failed') {
          const bot = new Bot(this.apiToken);
          await bot.api.sendMessage(this.groupId, `Test ${title} run with ${status} result`);

          return;
        }

        return;
    }
}

class TelegramReporter implements Reporter {

    async onTestEnd?(testCase: TestCase, testResult: TestResult): Promise<void> {
        const bot = new TelegramBot();
        await bot.sendTestStatus(testCase, testResult);

        return;
    }
}
export default TelegramReporter;
