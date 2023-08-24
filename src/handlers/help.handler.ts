import TelegramBot, { Message } from "node-telegram-bot-api";

const helpHandler = (msg: Message, bot: TelegramBot) => {
	const chatId = msg.chat.id;
	const message = `🤖 Welcome to the Dry Jokes Bot Help Center! 🤖\nTo use this bot, you can use the following commands:\n\n📬 /subscribe - Subscribe to receive a daily random dry joke from the bot. 😄\n🔕 /unsubscribe - Unsubscribe from receiving daily jokes. 😢\n😄 /joke - Get a single random dry joke right away! 😂\n📚 /categories - View a list of joke categories available in the bot. You can also use /joke [category] to get a joke from a specific category. 🗂️\n❓ /help - You are already here! Use this command to see the list of available commands and how to use them. 🆘\nEnjoy the jokes and don't forget to share a laugh with your friends! 😄🎉`;
	bot.sendMessage(chatId, message);
};

export default helpHandler;
//how far