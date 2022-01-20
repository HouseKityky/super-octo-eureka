import telegramConfig from '../telegram.config';
import {TestCase, TestResult, FullResult, Reporter } from '@playwright/test/reporter';
import { Bot } from 'grammy';

class TelegramBot {
    private apiToken = telegramConfig.TelegramBotToken;
    private groupId = telegramConfig.ChatId;
    private bot = new Bot(this.apiToken);

    async sendTestStatus({ title }: TestCase, { status }: TestResult): Promise<void> {
        const isFailed = this.isFailedTest(status)
        if (isFailed) {
          await this.bot.api.sendMessage(this.groupId, `Test ${title} run with ${status} result`);
        }
    }

    async sendFullResult({ status }: FullResult): Promise<void> {
        const isFailed = this.isFailedTest(status)
        if (isFailed) {
            await this.bot.api.sendMessage(this.groupId, `Test run test ${status}`);
        }
    }

    private isFailedTest(status: string): boolean {
        return status === 'failed';
    }
}

class TelegramReporter implements Reporter {

    private bot = new TelegramBot();

    async onTestEnd(testCase: TestCase, testResult: TestResult): Promise<void> {
        await this.bot.sendTestStatus(testCase, testResult);
    }

    async onEnd(result: FullResult): Promise<void> {
        await this.bot.sendFullResult(result);
    }
}
export default TelegramReporter;
