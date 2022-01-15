import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CommandCategoryEntity } from './command.category.entity';
import { Request } from 'express';
import { CommandCategoryService } from './command.category.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Command')
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

  @Get('/commands')
  public async getCategoryCommandList() {
    return this.commandCategoryService.getCategoryCommandList();
  }

  @Get('/:id/commands')
  public getCommandListByCategory(
    @Req() request: Request,
    @Param('id') id: number,
  ) {
    return this.commandCategoryService.getCommandListByCategory(request, id);
  }
}
