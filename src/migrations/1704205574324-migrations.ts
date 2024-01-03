import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1704205574324 implements MigrationInterface {
  name = 'Migrations1704205574324';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`command\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` int NULL, UNIQUE INDEX \`IDX_949ab891561d1338e4e08235b9\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`command_category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`nsfw\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_f1631bcb2ae2d64516b512c169\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`command\` ADD CONSTRAINT \`FK_46c8c25116beff7bf2dee56313a\` FOREIGN KEY (\`categoryId\`) REFERENCES \`command_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`command\` DROP FOREIGN KEY \`FK_46c8c25116beff7bf2dee56313a\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_f1631bcb2ae2d64516b512c169\` ON \`command_category\``,
    );
    await queryRunner.query(`DROP TABLE \`command_category\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_949ab891561d1338e4e08235b9\` ON \`command\``,
    );
    await queryRunner.query(`DROP TABLE \`command\``);
  }
}
