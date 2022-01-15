import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { CommandEntity } from './command.entity';
import { CommandService } from './command.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Command')
@Controller('command')
export class CommandController {
  private commandService: CommandService;
  constructor(commandService: CommandService) {
    this.commandService = commandService;
  }

  @Post('/')
  public async createCommand(
    @Req() request: Request,
    @Body() data: CommandEntity,
  ) {
    return this.commandService.createCommand(request, data);
  }
}
