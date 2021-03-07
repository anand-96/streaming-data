import { Status, AnsweredBy, Direction } from "../entity/call";

export interface ICall {
  sid: string;
  accountSid: string;
  to: string;
  from: string;
  phoneNumberSid: string;
  status: Status;
  startTime: Date;
  endTime: Date;
  duration: number;
  price: number;
  direction: Direction;
  answeredBy: AnsweredBy;
  forwardedFrom: string;
  callerName: string;
  uri: string;
  recordingUrl: string;
}
