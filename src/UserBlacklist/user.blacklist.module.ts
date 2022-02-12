import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBlacklistRepository } from './user.blacklist.repository';
import { UserBlacklistController } from './user.blacklist.controller';
import { UserBlacklistService } from './user.blacklist.service';
import { Module } from '@nestjs/common';
import { UserRepository } from '../User/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBlacklistRepository, UserRepository]),
  ],
  controllers: [UserBlacklistController],
  providers: [UserBlacklistService],
})
export class UserBlacklistModule {}
