import {
  KafkaClient as Client,
  Consumer,
  Message,
  Offset,
  OffsetFetchRequest,
  ConsumerOptions
} from "kafka-node";

import { config } from "../config/app";

const kafkaHost: string = config.get("kafka.host");

export function kafkaSubscribe(
  topic: string,
  send: (message: Message) => void
): void {
  const client = new Client({ kafkaHost });
  const topics: OffsetFetchRequest[] = [{ topic, partition: 0 }];
  const options: ConsumerOptions = {
    autoCommit: false,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024
  };

  const consumer = new Consumer(client, topics, options);

  consumer.on("error", (err: Error): void => {
    console.log("error", err);
  });

  client.refreshMetadata([topic], (err: Error): void => {
    const offset = new Offset(client);

    if (err) {
      throw err;
    }

    consumer.on("message", (message: Message): void => {
      send(message);
    });
  });
}
