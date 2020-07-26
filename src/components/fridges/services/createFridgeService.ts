import {Request, Response} from 'express';
import {createFridge} from '../DALs';
import {findUserById, addFridgeToUser} from '../../users/DALs';

export default class CreateFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Refactor to use transactions
      const {body: {name}, user: expressUser} = req;

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

      const fridge = await createFridge(name);

      if (!fridge) {
        res.json({userError: 'Failed to create fridge'});

        return;
      }

      const newUser = await addFridgeToUser(user, fridge._id);

      res.status(200).json({fridge, user: newUser});
    } catch (error) {
      res.status(500).json({error});
    }
  }
}