import {Request, Response} from 'express';
import {findFridge, addCategory} from '../DALs/';

export default class AddCategoryToFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
        try {
          const {body: {fridgeId, newCategory}} = req;

          const fridge = await findFridge(fridgeId);

          if (!fridge) {
            res.json({userError: 'Failed to find fridge'});

            return;
          }

          const updatedFridgeCategory = await addCategory(fridge, newCategory);

          res.status(200).json({updatedFridgeCategory});
        } catch (error) {
          res.status(500).json({error});
        }
      }
}