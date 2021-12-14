import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
import { app_config } from './Config/AppConfig';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './Config/SwaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(app_config.app.routePrefix);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const documentBuilder = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, document, swaggerConfig);
  await app.listen(app_config.app.port);
}

bootstrap().then(() => {
  console.log(
    'App start on http://localhost:%s',
    app_config.app.port + app_config.app.routePrefix,
  );
  console.log(
    'Api docs open on this url http://localhost:%s/docs',
    app_config.app.port,
  );
});
