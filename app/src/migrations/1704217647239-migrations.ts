import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1704217647239 implements MigrationInterface {
  name = 'Migrations1704217647239';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`path\` varchar(255) NOT NULL, \`md5\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`commandId\` int NULL, UNIQUE INDEX \`IDX_0324ce618f42c5797e63d65ce0\` (\`name\`, \`md5\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`image\` ADD CONSTRAINT \`FK_d2a21ab4db5743ecf933f5d8a2b\` FOREIGN KEY (\`commandId\`) REFERENCES \`command\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_d2a21ab4db5743ecf933f5d8a2b\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_0324ce618f42c5797e63d65ce0\` ON \`image\``,
    );
    await queryRunner.query(`DROP TABLE \`image\``);
  }
}
