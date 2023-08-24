import TelegramBot, { Message } from "node-telegram-bot-api";
import UserModel from "../models/user.model";

const startHandler = async (msg: Message, bot: TelegramBot) => {
	const chatId = msg.chat.id;
	const message = `Hello! Welcome to the Dry Jokes Bot! 😄\n\nHere are the main commands you can use:\n🤖 /help - Get information on how to use the bot and a list of available commands.\n📬 /subscribe - Subscribe to receive a daily random dry joke from the bot. 😄\n🔕 /unsubscribe - Unsubscribe from receiving daily jokes. 😢\n😄 /joke - Get a single random dry joke right away! 😂\nFeel free to use any of these commands to enjoy some witty and humorous jokes. Happy laughing! 🎉`;

	const newUser = {
		user_id: msg.chat.id,
		username: msg.chat.username,
		first_name: msg.chat.first_name || "",
		subscribed: false,
		last_joke_received: new Date(),
	};

	const userExists = await UserModel.findOne({ user_id: msg.chat.id });
	if (!userExists)
		UserModel.create(newUser)
			.then((user) => {
				console.log("New user created");
			})
			.catch((error) => {
				console.error("Error creating user:", error);
			});
	bot.sendMessage(chatId, message);
};

export default startHandler;
// Me here