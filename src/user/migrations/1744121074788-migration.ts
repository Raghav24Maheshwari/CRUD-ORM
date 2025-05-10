import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1744121074788 implements MigrationInterface {
  name = "Migration1744121074788";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_otp" ("id" SERIAL NOT NULL, "otp" character varying NOT NULL, "userId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, CONSTRAINT "PK_494c022ed33e6ee19a2bbb11b22" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_otp" ADD CONSTRAINT "FK__user_otp" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_otp" DROP CONSTRAINT "FK__user_otp"`,
    );
    await queryRunner.query(`DROP TABLE "user_otp"`);
  }
}
