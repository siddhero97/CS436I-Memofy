import {Request, Response} from 'express';
import {updateItem} from '../DALs';

export default class UpdateItemService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body} = req;

    const item = await updateItem(body);

    if (!item) {
      res.status(200).json({message: 'No item found with given id', id: body.id});
    } else {
      res.status(200).json({message: 'Item updated', item});
    }
  }
}