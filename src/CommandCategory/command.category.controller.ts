import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CommandCategoryEntity } from './command.category.entity';
import { Request } from 'express';
import { CommandCategoryService } from './command.category.service';

@Controller('command/category')
export class CommandCategoryController {
  private commandCategoryService: CommandCategoryService;
  constructor(commandCategoryService: CommandCategoryService) {
    this.commandCategoryService = commandCategoryService;
  }

  @Post('/')
  public async createCategory(
    @Req() request: Request,
    @Body() data: CommandCategoryEntity,
  ) {
    return this.commandCategoryService.createCategory(request, data);
  }

  @Get('/')
  public async getList() {
    return this.commandCategoryService.getList();
  }

  @Get('/:id/commands')
  public async getCommandListByCategory(
    @Param('id') id: number,
    @Req() request: Request,
  ) {
    return this.commandCategoryService.getCommandListByCategory(request, id);
  }
}
