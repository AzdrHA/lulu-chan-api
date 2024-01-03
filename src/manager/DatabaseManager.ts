import { IDatabaseAdapter } from '../interface/IDatabaseAdapter';

export class DatabaseManager {
  public init(databaseAdapter: IDatabaseAdapter) {
    return databaseAdapter.connect();
  }
}
