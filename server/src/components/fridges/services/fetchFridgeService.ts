import {Request, Response} from 'express';
import {findFridge} from '../DALs';

export default class FetchFridgeService {
  public async execute(_req: Request, res: Response): Promise<void> {
    try {
      const items = await findFridge();

      res.status(200).json({items});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}