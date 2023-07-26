import mongoose, { Schema, model, Document } from "mongoose";

interface IUser extends Document {
	user_id: string;
	username?: string;
	first_name?: string;
	subscribed: boolean;
	last_joke_received?: Date;
}

const userSchema = new Schema<IUser>({
	user_id: { type: String, required: true, unique: true },
	username: { type: String, required: true },
	first_name: { type: String },
	subscribed: { type: Boolean, required: true },
	last_joke_received: { type: Date },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
