import cron from "cron";

// Your function to be run every 20 seconds
const myFunction = () => {
	console.log("This function will be run every 20 seconds.");
};

// Schedule the CRON job to run every 20 seconds
const job = new cron.CronJob("*/5 * * * * *", myFunction);

// Start the CRON job
export default job;
