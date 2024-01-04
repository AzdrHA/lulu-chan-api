import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { CommandCategoryModel } from '../model/command.category.model';
import { UtilsStr } from '../utils/UtilsStr';

@EventSubscriber()
export class CommandCategorySubscriber
  implements EntitySubscriberInterface<CommandCategoryModel>
{
  listenTo() {
    return CommandCategoryModel;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<CommandCategoryModel>) {
    event.entity.slug = UtilsStr.slugify(event.entity.name);
  }

  beforeUpdate(event: UpdateEvent<CommandCategoryModel>) {
    event.entity.slug = UtilsStr.slugify(event.entity.name);
  }
}
