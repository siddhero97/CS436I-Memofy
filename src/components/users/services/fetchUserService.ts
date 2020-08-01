import {Request, Response} from 'express';
import {findUserByEmail} from '../DALs';

export default class FetchUserService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {query: {email}} = req;

    const user = await findUserByEmail(email as string);

    res.json({user});
  }
}