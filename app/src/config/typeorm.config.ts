import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { PROJECT_DIR } from './constant.config';

const configService = new ConfigService();
const config: MysqlConnectionOptions = {
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('MYSQL_PORT'),
  username: configService.get('MYSQL_USER'),
  password: configService.get('MYSQL_PASSWORD'),
  database: configService.get('MYSQL_DATABASE'),
  entities: ['dist/model/**/*{.js,.ts}'],
  migrations: [PROJECT_DIR + '/migrations/*.ts'],
};

export default new DataSource(config);
