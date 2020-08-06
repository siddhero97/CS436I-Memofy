import {Request, Response} from 'express';
import {deleteItem} from '../DALs';
import {findFridge, removeItemFromFridge} from '../../fridges/DALs';

export default class DeleteItemService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body: {fridgeId, id}} = req;

    try {
      const fridge = await findFridge(fridgeId);

      if (!fridge) {
        res.json({userError: 'Failed to find fridge'});

        return;
      }

      const {deletedCount} = await deleteItem(id);

      const newFridge = await removeItemFromFridge(fridge, id);

      if (deletedCount) {
        res.status(200).json({message: 'Item deleted', id, fridge: newFridge});
    } else {
        res.status(200).json({message: 'No item found with given id', id});
    }
    } catch (error) {
      res.status(500).send({message: 'Invalid id', id});
    }
  }
}