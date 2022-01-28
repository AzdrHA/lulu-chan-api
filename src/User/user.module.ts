import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TokenService } from '../Token/token.service';

@Module({
  controllers: [UserController],
  providers: [TokenService],
})
export class UserModule {}
