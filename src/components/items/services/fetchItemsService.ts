import {Request, Response} from 'express';
import {findItemsByIds} from '../DALs';
import {findFridge} from '../../fridges/DALs';

export default class FetchItemsService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {query: {fridgeId}} = req;

      const fridge = await findFridge(fridgeId as string);

      if (!fridge) {
        res.json({userError: 'Could not find fridge'});

        return;
      }

      const items = await findItemsByIds(fridge.itemIds);
      
      res.status(200).json({items});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}