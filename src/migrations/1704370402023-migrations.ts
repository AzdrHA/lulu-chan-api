import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1704370402023 implements MigrationInterface {
  name = 'Migrations1704370402023';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`command_category\` ADD \`slug\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`command_category\` DROP COLUMN \`slug\``,
    );
  }
}
