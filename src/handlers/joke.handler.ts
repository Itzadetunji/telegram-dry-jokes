import TelegramBot, { Message } from "node-telegram-bot-api";
import UserModel from "../models/user.model";

const jokeHandler = async (msg: Message, bot: TelegramBot) => {
	const chatId = msg.chat.id;
	const message =
		"🤖 Beep boop! Attention, all humor enthusiasts! \n\nAre you tired of the same old jokes leaving you feeling as dry as the Sahara desert? Fear not, for I am here to quench your thirst for wit! 🌵🌞 \n\nI proudly present myself as your one and only Dry Jokes Bot, programmed to bring a daily dose of crisp and clever humor straight to your virtual doorstep. 🎉😄 \n\nMy jokes might be drier than a biscuit left in the sun, but trust me, they'll tickle your funny bone like never before!";

	bot.sendMessage(chatId, message);
	console.log(msg);
	const newUser = {
		user_id: msg.chat.id,
		username: msg.chat.username,
		first_name: msg.chat.first_name || "",
		subscribed: true,
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

	setTimeout(() => {
		bot.sendMessage(chatId, message);
	}, 3000);
};

export default jokeHandler;
