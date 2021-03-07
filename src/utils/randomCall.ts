import faker from "faker";
import moment from "moment";
import { AnsweredBy, Direction, Status } from "../entity/call";

export const getRandomCall = () => {
  const startTime = moment.utc().toDate();
  const endTime = moment()
    .add(10, "minutes")
    .utc()
    .toDate();

  return {
    sid: faker.random.uuid(),
    accountSid: "Exotel",
    to: faker.phone.phoneNumber(),
    from: faker.phone.phoneNumber(),
    phoneNumberSid: faker.phone.phoneNumber(),
    status: Status.COMPLETED,
    startTime,
    endTime,
    duration: moment(endTime).diff(moment(startTime), "minutes"),
    price: faker.random.number(20),
    direction: Direction.OUTBOUND_API,
    answeredBy: AnsweredBy.HUMAN,
    forwardedFrom: faker.name.firstName(),
    callerName: faker.name.firstName(),
    uri: faker.internet.url(),
    recordingUrl: faker.internet.url()
  };
};
