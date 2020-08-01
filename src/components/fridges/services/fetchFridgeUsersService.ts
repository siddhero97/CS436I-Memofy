import {Request, Response} from 'express';
import {findUsersByFridgeId} from '../../users/DALs';

export default class FetchFridgeUsersService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {query: {id}} = req;

    const users = await findUsersByFridgeId(id as string);

    res.status(200).json({users});
  }
}