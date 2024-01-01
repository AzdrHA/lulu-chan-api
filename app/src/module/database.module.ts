import { MysqlAdapter } from '../adapter/database/MysqlAdapter';
import { DatabaseManager } from '../manager/DatabaseManager';
import { Module } from '@nestjs/common';

@Module({
  providers: [new DatabaseManager().init(new MysqlAdapter())],
  exports: [new DatabaseManager().init(new MysqlAdapter())],
})
export class DatabaseModule {}