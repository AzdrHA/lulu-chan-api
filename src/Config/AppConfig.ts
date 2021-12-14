import { join } from 'path';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

type AppOption = {
  app: {
    port: number;
    routePrefix: string;
    version: string;
  };
  db: ConnectionOptions;
};

export const app_config = {
  app: {
    port: Number(process.env.APP_PORT),
    routePrefix: process.env.APP_ROUTE_PREFIX,
    version: process.env.npm_package_version,
  },
  db: {
    type: 'mariadb',
    host: 'mariadb_api',
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
    entityPrefix: process.env.DB_TABLE_PREFIX,
    migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
    migrationsDir: './migrations',
    cli: {
      migrationsDir: './migrations',
    },
    migrationsTableName: 'migrations_typeorm',
    migrationsRun: true,
  },
} as AppOption;
