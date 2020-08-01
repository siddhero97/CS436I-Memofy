import {Request, Response} from 'express';
import {updateFridge} from '../DALs';

export default class UpdateFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body} = req;

    const fridge = await updateFridge(body);

    if (!fridge) {
      res.status(200).json({message: 'No Fridge found with given id', id: body._id});
    } else {
      res.status(200).json({message: 'Fridge updated', fridge});
    }
  }
}