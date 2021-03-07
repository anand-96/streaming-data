import { ICall } from "../interfaces/call";
import { KafkaClient as Client, Producer, ProduceRequest } from "kafka-node";
import { config } from "../config/app";

const kafkaHost: string = config.get("kafka.host");

export function publish(topic: string, call: ICall): void {
  const client = new Client({ kafkaHost });
  const producer = new Producer(client);

  producer.on("ready", (): void => {
    client.refreshMetadata([topic], (error: Error): void => {
      if (error) {
        throw error;
      }

      console.log(`Public call details to topic: ${topic}`);

      producer.send(
        [{ topic, messages: [JSON.stringify(call)] }],
        (err: Error, result: ProduceRequest): void => {
          if (err) {
            console.error(err);
          }
        }
      );
    });
  });

  producer.on("error", (err: Error): void => {
    console.log("error", err);
  });
}
