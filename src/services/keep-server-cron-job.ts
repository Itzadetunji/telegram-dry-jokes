import cron from "cron";
import UserModel from "../models/user.model";
import TelegramBot from "node-telegram-bot-api";
import jokeHandler, { getRandomJoke } from "../handlers/joke.handler";

// Schedule the CRON job to run every 20 seconds

const createKeepServerUpJob = new cron.CronJob("*/5 * * * * *", () => {
	const randomNumber = Math.floor(Math.random() * 101);
	console.log("Random Number: ", randomNumber);
});


export default createKeepServerUpJob;
