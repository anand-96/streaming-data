import { createCall } from "./services/call";
import { kafkaSubscribe } from "./server/consumer";

kafkaSubscribe("topic", async message => {
  const call = message.value;
  await createCall(call);
});
