// bot.ts
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

import startHandler from "./handlers/start.handler";
import helpHandler from "./handlers/help.handler";
import dbConnect from "./services/db.service";
import subscribe from "./handlers/subscribe.handler";
import jokeHandler from "./handlers/joke.handler";
import createCronJob from "./services/cron-job.service";
import unsubscribe from "./handlers/unsubscribe.handler";
import createKeepServerUpJob from "./services/keep-server-cron-job";

const botToken = process.env.TELEGRAM_BOT_TOKEN;
if (!botToken) {
	throw new Error(
		"Telegram bot token is not defined. Make sure it is set in the .env file."
	);
}

console.log("%cBot is running!", "color: green");

const bot = new TelegramBot(botToken, { polling: true });
dbConnect();
const job = createCronJob(bot); // Pass the bot object to the cron job
job.start();
createKeepServerUpJob.start();

bot.onText(/\/start/, (message) => startHandler(message, bot));
bot.onText(/\/subscribe/, (message) => subscribe(message, bot));
bot.onText(/\/unsubscribe/, (message) => unsubscribe(message, bot));
bot.onText(/\/joke/, (message) => jokeHandler(message, bot));
bot.onText(/\/help/, (message) => helpHandler(message, bot));

bot.on("message", (msg: any) => {
	// General message handling logic
});

// Error handling
bot.on("polling_error", (error) => {
	console.error("Polling error:", error.message);
});
