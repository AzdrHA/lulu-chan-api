import { ApiTags } from '@nestjs/swagger';
import { UserBlacklistService } from './user.blacklist.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserBlacklistDto } from './dto/CreateUserBlacklistDto';

@ApiTags('User blacklist')
@Controller('user/blacklist')
export class UserBlacklistController {
  private userBlacklistService: UserBlacklistService;
  constructor(userBlacklistService: UserBlacklistService) {
    this.userBlacklistService = userBlacklistService;
  }

  @Get('/')
  public getAllBlacklist(@Req() request: Request, @Res() response: Response) {
    return this.userBlacklistService.getAllBlacklist(
      response,
      Number(request.query.page ?? 1),
      Number(request.query.limit ?? 25),
    );
  }

  @Post('/')
  public add(
    @Res() response: Response,
    @Body() blacklist: CreateUserBlacklistDto,
  ) {
    return this.userBlacklistService.add(response, blacklist);
  }

  @Put('/:user')
  public update(
    @Res() response: Response,
    @Param('user') user: string,
    @Body() data: CreateUserBlacklistDto,
  ) {
    return this.userBlacklistService.update(response, user, data);
  }

  @Delete('/:user')
  public delete(@Res() response: Response, @Param('user') user: string) {
    return this.userBlacklistService.delete(response, user);
  }
}
