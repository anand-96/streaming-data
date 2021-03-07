import { streamingCron } from "./streaming";

export const initCronJobs = () => {
  streamingCron.start(); // scheduling cron job to publish call record
};
