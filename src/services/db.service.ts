import connectDB from "../db/connect";

const dbConnect = async () => {
	const mongoURI = process.env.MONGO_URI;
	if (!mongoURI) {
		console.log("Mongo URI is not set. Make sure it is set in the .env file.");
		return false;
	} else {
		try {
			await connectDB(mongoURI);
			console.log("Database connection successful");
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
};

export default dbConnect;
