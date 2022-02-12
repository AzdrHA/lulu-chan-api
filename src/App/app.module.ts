import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { app_config } from '../Config/AppConfig';
import { ImageModule } from '../Image/image.module';
import { ImageFormatModule } from '../ImageFormat/image.format.module';
import { CommandCategoryModule } from '../CommandCategory/command.category.module';
import { CommandModule } from '../Command/command.module';
import { GuildModule } from '../Guild/guild.module';
import { GuildSettingModule } from '../GuildSetting/guild.setting.module';
import { TokenMiddleware } from '../Token/token.middleware';
import { TokenModule } from '../Token/token.module';
import { UserModule } from '../User/user.module';
import { ClientModule } from '../Client/client.module';
import { UserBlacklistModule } from '../UserBlacklist/user.blacklist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(app_config.db),
    ImageModule,
    ImageFormatModule,
    CommandModule,
    CommandCategoryModule,
    GuildModule,
    GuildSettingModule,
    TokenModule,
    UserBlacklistModule,
    UserModule,
    ClientModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(TokenMiddleware).forRoutes('*');
  }
}
