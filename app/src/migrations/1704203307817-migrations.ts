import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1704203307817 implements MigrationInterface {
  name = 'Migrations1704203307817';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`command\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` int NULL, UNIQUE INDEX \`IDX_949ab891561d1338e4e08235b9\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`category_command\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`nsfw\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_bd5e9f0299f275d7b9cc1cfc58\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`command\` ADD CONSTRAINT \`FK_46c8c25116beff7bf2dee56313a\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_command\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`command\` DROP FOREIGN KEY \`FK_46c8c25116beff7bf2dee56313a\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_bd5e9f0299f275d7b9cc1cfc58\` ON \`category_command\``,
    );
    await queryRunner.query(`DROP TABLE \`category_command\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_949ab891561d1338e4e08235b9\` ON \`command\``,
    );
    await queryRunner.query(`DROP TABLE \`command\``);
  }
}
