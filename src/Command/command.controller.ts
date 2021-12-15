import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { CommandEntity } from './command.entity';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  private commandService: CommandService;
  constructor(commandService: CommandService) {
    this.commandService = commandService;
  }

  @Post('/')
  public async createCommand(
    @Res() res: Response,
    @Body() data: CommandEntity,
    @Req() request: Request,
  ) {
    return this.commandService.createCommand(request, data);
  }
}
