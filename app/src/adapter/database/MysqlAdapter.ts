import { IDatabaseAdapter } from '../../interface/IDatabaseAdapter';
import { DataSource } from 'typeorm';
import TypeormConfig from '../../config/typeorm.config';

export class MysqlAdapter implements IDatabaseAdapter {
  public connect(): { provide: string; useFactory: () => Promise<DataSource> } {
    return {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        return TypeormConfig.initialize();
      }
    }
  }
}