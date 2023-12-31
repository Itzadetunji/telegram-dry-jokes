import { Schema, model, Document } from "mongoose";

enum JokeLength {
	Short = "short",
	Long = "long",
}

interface IJoke extends Document {
	text: string;
	author?: string;
	category?: string;
	length: JokeLength;
	isDark: boolean;
}

const jokeSchema = new Schema<IJoke>({
	text: { type: String, required: true },
	author: { type: String },
	length: { type: String, enum: Object.values(JokeLength), required: true },
	isDark: { type: Boolean, default: false },
	category: { type: String, required: true },
});

const JokeModel = model<IJoke>("Joke", jokeSchema);

export default JokeModel;
// Joke model
