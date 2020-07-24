import {Request, Response} from 'express';
import {findUser} from '../DALs';

export default class FetchUserService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {user: expressUser} = req;

    if (!expressUser) {
      res.json({userError: 'Coult not find user'});

      return;
    }

    const {email} = expressUser as any;

    const user = await findUser(email);

    res.json({user});
  }
}