import {Request, Response} from 'express';
import {deleteItem} from '../DALs';

export default class DeleteItemService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body: {id}} = req;

    try {
      const {deletedCount} = await deleteItem(id);

      // TODO: Create transcation that also removes item from fridge

      if (deletedCount) {
        res.status(200).json({message: 'Item deleted', id});
    } else {
        res.status(200).json({message: 'No item found with given id', id});
    }
    } catch (error) {
      res.status(500).send({message: 'Invalid id', id});
    }
  }
}