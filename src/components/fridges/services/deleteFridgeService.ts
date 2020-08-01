import {Request, Response} from 'express';
import {deleteFridge, findFridge} from '../DALs';
import {removeFridgeFromUser, findUserById, findUsersByFridgeId} from '../../users/DALs';
import {deleteItems} from '../../items/DALs';

export default class DeleteFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body: {id}, user: expressUser} = req;

    try {
      const {_id} = expressUser as any;

      const user = await findUserById(_id);

      if (!user) {
        res.json({userError: 'Coult not find user'});

        return;
      }

      const fridge = await findFridge(id);

      if (!fridge) {
        res.json({userError: 'Coult not find fridge'});

        return;
      }
      const sharedUsers = await findUsersByFridgeId(id);
      const {deletedCount: deletedFridgeCount} = await deleteFridge(id);

      const newUser = await removeFridgeFromUser(user, id);

      for (const sharedUser of sharedUsers) {
        await removeFridgeFromUser(sharedUser, id);
      }

      const {deletedCount: deletedItemsCount} = await deleteItems(fridge.itemIds);

      if (deletedFridgeCount) {
        res.status(200).json({message: `Fridge deleted, ${deletedItemsCount} food items deleted`, id, user: newUser});
    } else {
        res.status(200).json({message: 'No Fridge found with given id', id});
    }
    } catch (error) {
      res.status(500).send({message: 'Invalid id', id});
    }
  }
}