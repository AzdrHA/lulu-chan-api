import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { app_config } from '../Config/AppConfig';
import { ImageModule } from '../Image/image.module';
import { ImageFormatModule } from '../ImageFormat/image.format.module';
import { CommandCategoryModule } from '../CommandCategory/command.category.module';
import { CommandModule } from '../Command/command.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(app_config.db),
    ImageModule,
    ImageFormatModule,
    CommandModule,
    CommandCategoryModule,
  ],
})
export class AppModule {}
