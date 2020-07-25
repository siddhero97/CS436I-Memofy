import {Request, Response} from 'express';
import {findFridge} from '../DALs';


export default class FetchFridgeService {
  public async execute(_req: Request, res: Response): Promise<void> {
    try {
      const fridges = await findFridge(_req.query.userId);

      res.status(200).json({fridges});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}