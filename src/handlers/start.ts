import TelegramBot, { Message } from "node-telegram-bot-api";

const startHandler = (msg: Message, bot: TelegramBot) => {
	const chatId = msg.chat.id;
	const message =
		"🤖 Beep boop! Attention, all humor enthusiasts! \n\nAre you tired of the same old jokes leaving you feeling as dry as the Sahara desert? Fear not, for I am here to quench your thirst for wit! 🌵🌞 \n\nI proudly present myself as your one and only Dry Jokes Bot, programmed to bring a daily dose of crisp and clever humor straight to your virtual doorstep. 🎉😄 \n\nMy jokes might be drier than a biscuit left in the sun, but trust me, they'll tickle your funny bone like never before!";

	bot.sendMessage(chatId, message);

	setTimeout(() => {
		bot.sendMessage(chatId, message);
	}, 3000);
};

export default startHandler;
