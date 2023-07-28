import cron from "cron";
import UserModel from "../models/user.model";
import TelegramBot from "node-telegram-bot-api";

const sendMessageToUser = (
	bot: TelegramBot,
	chatId: string,
	message: string
) => {
	// bot.sendMessage(chatId, message);
	// console.log(message);
};

const sendMessagesToSubscribedUsers = async (bot: TelegramBot) => {
	try {
		const subscribedUsers = await UserModel.find({ subscribed: true });

		subscribedUsers.forEach((user) => {
			const chatId = user.user_id.toString();
			const message = `You are now subscribed to receive a daily dose of dry humor every morning! 🌞\nStarting from tomorrow morning, our bot will send you a witty and hilarious dry joke to brighten up your day. 😂\nBe prepared to laugh out loud every day as you receive your daily joke in the morning. 🎉\nThank you for subscribing! If you ever want to unsubscribe, just use the /unsubscribe command.`;
			sendMessageToUser(bot, chatId, message);
		});

		console.log("Messages sent to subscribed users.");
	} catch (error) {
		console.error("Error sending messages:", error);
	}
};

// Schedule the CRON job to run every 20 seconds
const createCronJob = (bot: TelegramBot) => {
	const job = new cron.CronJob("*/5 * * * * *", () => {
		sendMessagesToSubscribedUsers(bot);
	});

	return job;
};
// const job = new cron.CronJob("0 9 * * *", myFunction);

export default createCronJob;
