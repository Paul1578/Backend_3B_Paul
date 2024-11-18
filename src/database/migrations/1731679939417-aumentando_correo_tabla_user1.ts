import { MigrationInterface, QueryRunner } from "typeorm";

export class AumentandoCorreoTablaUser11731679939417 implements MigrationInterface {
    name = 'AumentandoCorreoTablaUser11731679939417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
