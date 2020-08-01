import {Request, Response} from 'express';
import {findItemsByIdAndFilter} from '../DALs';
import {findFridge} from '../../fridges/DALs';

export default class FetchItemsService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {query: {fridgeId, categoriesSelected}} = req;

      const fridge = await findFridge(fridgeId as string);

      if (!fridge) {
        res.json({userError: 'Could not find fridge'});

        return;
      }

      const items = await findItemsByIdAndFilter(fridge.itemIds, categoriesSelected as string[]);

      res.status(200).json({items});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}