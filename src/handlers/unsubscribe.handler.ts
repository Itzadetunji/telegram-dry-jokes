import TelegramBot, { Message } from "node-telegram-bot-api";
import UserModel from "../models/user.model";

const unsubscribe = async (message: Message, bot: TelegramBot) => {
	const user_id = message.chat.id.toString();
	const user = await UserModel.findOne({ user_id });
	try {
		if (user) {
			await UserModel.findOneAndUpdate(
				{ user_id },
				{ subscribed: false },
				{ new: false }
			);
			const message = `You have successfully unsubscribed from receiving daily dry humor jokes. 😔\nWe hope you enjoyed the humor while it lasted! If you ever want to resubscribe, simply use the /subscribe command. Have a great day! 😊`;
			bot.sendMessage(user_id, message);
		}
	} catch (error) {
		console.error("User could not be unsubscribed", error);
	}
};

export default unsubscribe;

//an update here
