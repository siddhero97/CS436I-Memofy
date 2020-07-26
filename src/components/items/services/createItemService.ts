import {Request, Response} from 'express';
import {createItem} from '../DALs';
import {addItemToFridge, findFridge} from '../../fridges/DALs';

export default class CreateItemService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Refactor to use transaction
      const {body: {fridgeId, newItem}} = req;

      const item = await createItem(newItem);

      if (!item) {
        res.json({userError: 'Failed to create item'});

        return;
      }

      const fridge = await findFridge(fridgeId);

      if (!fridge) {
        res.json({userError: 'Failed to find fridge'});

        return;
      }

      const newFridge = await addItemToFridge(fridge, item._id);

      res.status(200).json({item, fridge: newFridge});
    } catch (error) {
      res.status(500).json({error});
    }
  }
}