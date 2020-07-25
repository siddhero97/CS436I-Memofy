import {Request, Response} from 'express';
import {findItems} from '../DALs';
import {findFridge} from '../../fridges/DALs';

export default class FetchItemsService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {body: {fridgeId}} = req;

      const fridge = await findFridge(fridgeId);

      if (!fridge) {
        res.json({userError: 'Coult not find fridge'});

        return;
      }

      const items = await findItems(fridge.itemIds);

      res.status(200).json({items});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}