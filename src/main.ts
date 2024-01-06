import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
(async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(configService.get('APP_PORT'));
})();
