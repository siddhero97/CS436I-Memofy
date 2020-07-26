import {Request, Response} from 'express';
import {findFridges} from '../DALs';
import {findUserById} from '../../users/DALs';

export default class FetchFridgesService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Refactor to use transactions
      const {user: expressUser} = req;

      if (!expressUser) {
        res.json({userError: 'Coult not find user'});

        return;
      }

      const {_id} = expressUser as any;

      const user = await findUserById(_id);

      if (!user) {
        res.json({userError: 'Coult not find user'});

        return;
      }

      const fridges = await findFridges(user.fridgeIds);

      res.status(200).json({fridges});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}