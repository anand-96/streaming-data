import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCall1615044165000 implements MigrationInterface {
  public name = "addedCall1615044165000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "call_status_enum" AS ENUM('queued', 'ringing', 'in-progress', 'completed', 'failed', 'busy', 'no-answer')`
    );
    await queryRunner.query(
      `CREATE TYPE "call_direction_enum" AS ENUM('inbound', 'outbound-api', 'outbound-dial')`
    );
    await queryRunner.query(
      `CREATE TYPE "call_answeredby_enum" AS ENUM('human', 'machine')`
    );
    await queryRunner.query(
      `CREATE TABLE "call" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sid" character varying, "accountSid" character varying NOT NULL, "to" character varying NOT NULL, "from" character varying NOT NULL, "phoneNumberSid" character varying NOT NULL, "status" "call_status_enum" NOT NULL, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "duration" integer DEFAULT null, "price" numeric DEFAULT null, "direction" "call_direction_enum" NOT NULL, "answeredBy" "call_answeredby_enum" NOT NULL, "forwardedFrom" character varying DEFAULT null, "callerName" character varying DEFAULT null, "uri" character varying DEFAULT null, "recordingUrl" character varying DEFAULT null, "dateCreated" TIMESTAMP NOT NULL DEFAULT now(), "dateUpdated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2098af0169792a34f9cfdd39c47" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4371d163f10bf8b9f8b5495a5e" ON "call" ("status") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_132d9aac3abbfc0b44d0f15fc2" ON "call" ("direction") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0995a6570e37f15ca2a45f0062" ON "call" ("answeredBy") `
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_6941c9866c6bce3174fac06603" ON "call" ("sid", "dateCreated") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_6941c9866c6bce3174fac06603"`);
    await queryRunner.query(`DROP INDEX "IDX_0995a6570e37f15ca2a45f0062"`);
    await queryRunner.query(`DROP INDEX "IDX_132d9aac3abbfc0b44d0f15fc2"`);
    await queryRunner.query(`DROP INDEX "IDX_4371d163f10bf8b9f8b5495a5e"`);
    await queryRunner.query(`DROP TABLE "call"`);
    await queryRunner.query(`DROP TYPE "call_answeredby_enum"`);
    await queryRunner.query(`DROP TYPE "call_direction_enum"`);
    await queryRunner.query(`DROP TYPE "call_status_enum"`);
  }
}
