import { Controller, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post('/:id')
  public create(@Req() request: Request, @Param('id') id: string) {
    return this.userService.get_or_create(request, id);
  }
}
