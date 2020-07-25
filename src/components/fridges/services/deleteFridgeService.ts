import {Request, Response} from 'express';
import {deleteFridge} from '../DALs';

export default class DeleteFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body: {id}} = req;

    try {
      const {deletedCount} = await deleteFridge(id);

      // TODO: remove fridgeId from user

      if (deletedCount) {
        res.status(200).json({message: 'Fridge deleted', id});
    } else {
        res.status(200).json({message: 'No Fridge found with given id', id});
    }
    } catch (error) {
      res.status(500).send({message: 'Invalid id', id});
    }
  }
}