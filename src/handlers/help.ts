import TelegramBot, { Message } from "node-telegram-bot-api";

const startHandler = (msg: Message, bot: TelegramBot) => {
	const chatId = msg.chat.id;
	const message = "Hello! Welcome to your Telegram bot.";

	bot.sendMessage(chatId, message);
};

export default startHandler;
