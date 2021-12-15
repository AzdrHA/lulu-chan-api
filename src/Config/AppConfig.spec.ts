import { app_config, AppOption } from './AppConfig';

describe('AppConfig', () => {
  let appOption: AppOption;

  beforeAll(async () => {
    appOption = app_config;
  });

  test('test app_config is 100% equal', () => {
    const config: AppOption = {
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
      },
    };
    expect(config).toStrictEqual(appOption);
  });
});
