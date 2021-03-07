import { CronJob } from "cron";

import { config } from "../config/app";
import { ICall } from "../interfaces/call";
import { publish } from "../server/producer";
import { getRandomCall } from "../utils/randomCall";

const streamingTimePattern = config.get("cron.streamingTimePattern");

export const streamingCron = new CronJob(streamingTimePattern, () => {
  try {
    const topic = "topic"; // we can make topic dynamic depending on requirement
    const call: ICall = getRandomCall();
    publish(topic, call);
  } catch (error) {
    console.log(error);
  }
});
