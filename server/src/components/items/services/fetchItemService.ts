import {Request, Response} from 'express';
import {findItem} from '../DALs';

export default class FetchItemService {
  public async execute(_req: Request, res: Response): Promise<void> {
    try {
      const items = await findItem();

      res.status(200).json(items);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}