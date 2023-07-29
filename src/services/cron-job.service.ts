import cron from "cron";
import UserModel from "../models/user.model";
import TelegramBot from "node-telegram-bot-api";
import jokeHandler, { getRandomJoke } from "../handlers/joke.handler";

const sendMessageToUser = (
	bot: TelegramBot,
	chatId: string,
	message: string
) => {
	bot.sendMessage(chatId, message);
	console.log(message);
};

const sendMessagesToSubscribedUsers = async (bot: TelegramBot) => {
	try {
		const subscribedUsers = await UserModel.find({ subscribed: true });
		const randomJoke = await getRandomJoke();
		if (randomJoke) {
			subscribedUsers.forEach((user) => {
				const chatId = user.user_id.toString();
				bot.sendMessage(chatId, randomJoke.text);
			});
		} else {
			console.error("Error");
		}

		console.log("Messages sent to subscribed users.");
	} catch (error) {
		console.error("Error sending messages:", error);
	}
};

// Schedule the CRON job to run every 20 seconds
const createCronJob = (bot: TelegramBot) => {
	const job = new cron.CronJob("*/5 * * * *", () => {
		sendMessagesToSubscribedUsers(bot);
	});
	// const job = new cron.CronJob("*/5 * * * * *", () => {
	// 	sendMessagesToSubscribedUsers(bot);
	// });

	return job;
};
// const job = new cron.CronJob("0 9 * * *", myFunction);

export default createCronJob;
