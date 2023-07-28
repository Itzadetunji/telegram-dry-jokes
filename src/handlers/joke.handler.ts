import TelegramBot, { Message } from "node-telegram-bot-api";
import JokeModel from "../models/joke.model";

// Function to fetch a random joke
const getRandomJoke = async (): Promise<any> => {
	try {
		const randomJoke = await JokeModel.aggregate([{ $sample: { size: 1 } }]);
		return randomJoke[0] || null;
	} catch (error) {
		console.error("Error fetching random joke:", error);
		return null;
	}
};

const jokeHandler = async (msg: Message, bot: TelegramBot) => {
	const chatId = msg.chat.id;
	// Get a random joke
	try {
		const randomJoke = await getRandomJoke();
		if (randomJoke) {
			const jokeText = randomJoke.text + "\n\nFor another joke send /joke";
			bot.sendMessage(chatId, jokeText);
		} else {
			bot.sendMessage(chatId, "No jokes found.");
		}
	} catch (error) {
		console.error("Error:", error);
		bot.sendMessage(chatId, "I could not find a joke 😭.");
	}
};

export default jokeHandler;

// ... rest of the code remains the same ...
