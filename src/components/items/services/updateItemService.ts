import {Request, Response} from 'express';
import {updateItem} from '../DALs';

export default class UpdateItemService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body} = req;

    try {
      const item = await updateItem(body);

      res.status(200).json({message: 'Item updated', item});
    } catch (error) {
      res.status(200).json({message: 'No item found with given id', id: body.id});
    }
  }
}