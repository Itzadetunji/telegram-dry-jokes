import job from "../services/cron-job.service";

const subscribe = () => {
	job.start();
};

export default subscribe;
