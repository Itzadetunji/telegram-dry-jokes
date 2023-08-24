import TelegramBot, { Message } from "node-telegram-bot-api";
import UserModel from "../models/user.model";

const subscribe = async (message: Message, bot: TelegramBot) => {
	const user_id = message.chat.id.toString();
	const user = await UserModel.findOne({ user_id });
	try {
		if (user) {
			await UserModel.findOneAndUpdate(
				{ user_id },
				{ subscribed: true },
				{ new: false }
			);
			const message = `You are now subscribed to receive a daily dose of dry humor every morning! 🌞\nStarting from tomorrow morning, our bot will send you a witty and hilarious dry joke to brighten up your day. 😂\nBe prepared to laugh out loud every day as you receive your daily joke in the morning. 🎉\nThank you for subscribing! If you ever want to unsubscribe, just use the /unsubscribe command.`;
			bot.sendMessage(user_id, message);
		}
	} catch (error) {
		console.error("User could not be subscribed", error);
	}
};

export default subscribe;
// Still me here
