import { MigrationInterface, QueryRunner } from "typeorm";

export class BorrandoCampoTablaUser1731678411848 implements MigrationInterface {
    name = 'BorrandoCampoTablaUser1731678411848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
