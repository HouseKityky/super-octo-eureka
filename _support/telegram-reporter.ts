import telegramConfig from '../telegram.config';
import { TestCase, TestResult, FullResult, Reporter } from '@playwright/test/reporter';
import { Bot } from 'grammy';

class TelegramBot {
    apiToken: string;
    groupId: string | number;

    constructor() {
        this.apiToken = telegramConfig.TelegramBotToken;
        this.groupId = telegramConfig.ChatId;
    }

    async sendTestStatus(status: string ): Promise<void> {
        if (status == 'passed') {
            return;
        }

        if (status == 'failed' || status == 'timedout') {
            const bot = new Bot(this.apiToken);
            await bot.api.sendMessage(this.groupId, `Test run status: ${status}`);

            return;
        }

        return;
    }
}

class TelegramReporter implements Reporter {

    onTestBegin?({ title }: TestCase, { startTime }: TestResult): void {
        console.log(`Starting test ${ title }, ${ startTime }`);
    }

    onTestEnd?({title}: TestCase, { status }: TestResult): void {
        console.log(`Finished test ${ title }: ${ status }`);
    }

    async onEnd?({ status }: FullResult): Promise<void> {

        const bot = new TelegramBot();
        await bot.sendTestStatus(status);

        console.log(`Finished the run: ${status}`);
    }
}
export default TelegramReporter;
