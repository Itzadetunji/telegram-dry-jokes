import connectDB from "../db/connect";

const start = async () => {
	const mongoURI = process.env.MONGO_URI;
	if (!mongoURI) {
		throw new Error(
			"Mongo URI is not set. Make sure it is set in the .env file."
		);
	}
	try {
		connectDB(mongoURI).then(() => {
			console.log("Database connection succesful");
		});
	} catch (error) {
		console.log(error);
	}
};

export default start;
