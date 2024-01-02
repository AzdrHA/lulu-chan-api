import AbstractController from '../abstract/AbstractController';
import { ICRUDController } from '../interface/ICRUDController';
import { CommandCategoryModel } from '../model/command.category.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import CommandCategoryService from '../service/command.category.service';

@Controller('/command/category')
export class CommandCategoryController
  extends AbstractController
  implements ICRUDController<CommandCategoryModel>
{
  public constructor(
    private readonly commandCategoryService: CommandCategoryService,
  ) {
    super();
  }
  @Post()
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  public create(@Res() response: Response, @Body() body: CommandCategoryModel) {
    return this.handleRequest(response, {
      service: this.commandCategoryService,
      fn: 'createOrUpdate',
      args: [body],
    });
  }

  @Delete('/:id')
  public delete(@Res() response: Response, @Param('id') id: number) {
    return this.handleRequest(response, {
      service: this.commandCategoryService,
      fn: 'delete',
      args: [id],
    });
  }

  @Get('/:id')
  public read(@Res() response: Response, @Param('id') id: number) {
    return this.handleRequest(response, {
      service: this.commandCategoryService,
      fn: 'read',
      args: [id],
    });
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ groups: ['update'] }))
  public update(
    @Res() response: Response,
    @Param('id') id: number,
    @Body() body: CommandCategoryModel,
  ) {
    return this.handleRequest(response, {
      service: this.commandCategoryService,
      fn: 'createOrUpdate',
      args: [body, id],
    });
  }
}
