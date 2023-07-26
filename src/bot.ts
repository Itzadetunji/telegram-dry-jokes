// bot.ts
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

import startHandler from "./handlers/start";
import helpHandler from "./handlers/help";

const botToken = process.env.TELEGRAM_BOT_TOKEN;
if (!botToken) {
	throw new Error(
		"Telegram bot token is not defined. Make sure it is set in the .env file."
	);
}

console.log("%cBot is running!", "color: green");

const bot = new TelegramBot(botToken, { polling: true });

bot.onText(/\/start/, (message) => startHandler(message, bot));
bot.onText(/\/help/, (message) => helpHandler(message, bot));

bot.on("message", (msg: any) => {
	// General message handling logic
});

// Error handling
bot.on("polling_error", (error) => {
	console.error("Polling error:", error.message);
});
