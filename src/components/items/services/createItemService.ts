import {Request, Response} from 'express';
import {createItem} from '../DALs';

export default class CreateItemService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const item = await createItem(req.body);

      res.status(200).json({item});
    } catch (error) {
      res.status(500).json({error});
    }
  }
}