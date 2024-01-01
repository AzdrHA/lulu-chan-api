import { DataSource } from 'typeorm';

export interface IDatabaseAdapter {
  connect(): { provide: string; useFactory: () => Promise<DataSource> };
}
