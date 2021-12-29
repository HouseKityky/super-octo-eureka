import telegramConfig from '../telegram.config';
import { Reporter } from '@playwright/test/reporter';
import { Bot } from 'grammy'

class TelegramBot {
    apiToken: string;
    groupId: string | number;

    constructor() {
        this.apiToken = telegramConfig.TelegramBotToken;
        this.groupId = telegramConfig.ChatId;
    }

    async sendTestStatus(text: string) {
        const bot = new Bot(this.apiToken);
        await bot.api.sendMessage(this.groupId, text)
    }
}

class TelegramReporter implements Reporter {

    onTestBegin(test: { title: any; }) {
        console.log(`Starting test ${test.title}`);
    }

    onTestEnd(test: { title: any; }, result: { status: any; }) {
        console.log(`Finished test ${test.title}: ${result.status}`);
    }

    async onEnd(result: { status: any; }) {
        console.log(`Finished the run: ${result.status}`);
        const bot = new TelegramBot();
        await bot.sendTestStatus(`${result.status}`);
    }
}
export default TelegramReporter;
