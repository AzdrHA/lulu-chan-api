import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const configService = new ConfigService();

const config: MysqlConnectionOptions = {
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME')
}

export default new DataSource(config)