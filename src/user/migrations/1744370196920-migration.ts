import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1744370196920 implements MigrationInterface {
    name = 'Migration1744370196920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isDeleted"`);
    }

}
