import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { app_config } from '../Config/AppConfig';
import { ImageModule } from '../Image/image.module';
import { ImageFormatModule } from '../ImageFormat/image.format.module';
import { CommandCategoryModule } from '../CommandCategory/command.category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(app_config.db),
    ImageModule,
    ImageFormatModule,
    CommandCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
