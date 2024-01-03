import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import AbstractController from '../abstract/AbstractController';
import CommandService from '../service/command.service';
import { Response } from 'express';
import { CommandModel } from '../model/command.model';
import { ICRUDController } from '../interface/ICRUDController';
import { AuthGuard } from '../guard/auth.guard';

@Controller('/command')
@UseGuards(AuthGuard)
export class CommandController
  extends AbstractController
  implements ICRUDController<CommandModel>
{
  constructor(private readonly commandService: CommandService) {
    super();
  }

  @Post()
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  public create(@Res() response: Response, @Body() body: CommandModel) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'createOrUpdate',
      args: [body],
    });
  }

  @Get('/:id')
  public read(@Res() response: Response, @Param('id') id: number) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'read',
      args: [id],
    });
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ groups: ['update'] }))
  public update(
    @Res() response: Response,
    @Param('id') id: number,
    @Body() data: CommandModel,
  ) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'createOrUpdate',
      args: [data, id],
    });
  }

  @Delete('/:id')
  public delete(@Res() response: Response, @Param('id') id: number) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'delete',
      args: [id],
    });
  }

  @Get('/:name/image')
  public getOneCommandImageByName(
    @Res() response: Response,
    @Param('name') name: string,
  ) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'getOneCommandImageByName',
      args: [name],
    });
  }

  @Get()
  public getAllCommands(@Res() response: Response) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'getAllCommands',
    });
  }
}
