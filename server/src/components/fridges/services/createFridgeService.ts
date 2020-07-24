import {Request, Response} from 'express';
import {createFridge} from '../DALs';

export default class CreateFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body)
      const fridge = await createFridge(req.body);

      res.status(200).json({fridge});
    } catch (error) {
      console.log(error);
      res.status(500).json({error});
    } 
  }
}