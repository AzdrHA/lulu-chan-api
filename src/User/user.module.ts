import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TokenService } from '../Token/token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [TokenService, UserService],
})
export class UserModule {}
