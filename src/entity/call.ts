import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Index,
  BaseEntity
} from "typeorm";

export enum Status {
  QUEUED = "queued",
  RINGING = "ringing",
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
  FAILED = "failed",
  BUSY = "busy",
  NO_ANSWER = "no-answer"
}

export enum Direction {
  INBOUND = "inbound",
  OUTBOUND_API = "outbound-api",
  OUTBOUND_DIAL = "outbound-dial"
}

export enum AnsweredBy {
  HUMAN = "human",
  MACHINE = "machine"
}

@Entity({ name: "call" })
@Index(["sid", "dateCreated"], { unique: true })
export class Call extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ type: "varchar", nullable: true })
  public sid: string;

  @Column({ type: "varchar" })
  public accountSid: string;

  @Column({ type: "varchar" })
  public to: string;

  @Column({ type: "varchar" })
  public from: string;

  @Column({ type: "varchar" })
  public phoneNumberSid: string;

  @Index()
  @Column({ type: "enum", enum: Status })
  public status: Status;

  @Column({ type: "timestamp" })
  public startTime: Date;

  @Column({ type: "timestamp" })
  public endTime: Date;

  @Column({ type: "int", default: null })
  public duration: number;

  @Column({ type: "decimal", default: null })
  public price: number;

  @Index()
  @Column({ type: "enum", enum: Direction })
  public direction: Direction;

  @Index()
  @Column({ type: "enum", enum: AnsweredBy })
  public answeredBy: AnsweredBy;

  @Column({ type: "varchar", default: null })
  public forwardedFrom: string;

  @Column({ type: "varchar", default: null })
  public callerName: string;

  @Column({ type: "varchar", default: null })
  public uri: string;

  @Column({ type: "varchar", default: null })
  public recordingUrl: string;

  @CreateDateColumn()
  public dateCreated: Date;

  @UpdateDateColumn()
  public dateUpdated: Date;
}
