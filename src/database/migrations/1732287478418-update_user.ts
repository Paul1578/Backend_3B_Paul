import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1732287478418 implements MigrationInterface {
    name = 'UpdateUser1732287478418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "personaId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_92f09d8f74b60402513dbbc6d57" UNIQUE ("personaId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_92f09d8f74b60402513dbbc6d57" FOREIGN KEY ("personaId") REFERENCES "persona"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_92f09d8f74b60402513dbbc6d57"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_92f09d8f74b60402513dbbc6d57"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "personaId"`);
    }

}
