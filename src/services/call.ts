import { getConnection } from "../lib/typeorm";
import { Call } from "../entity/call";

export const createCall = async (call: any) => {
  try {
    const connection = await getConnection();
    const repository = await connection.getRepository(Call);
    const parsedCall = JSON.parse(call);
    await repository.save(parsedCall);
    console.log(
      `Call saved successfully, ${parsedCall.sid}: ${parsedCall.dateCreated}`
    );
  } catch (error) {
    console.error(`Error in creating call record`, error);
  }
};
