import {Request, Response} from 'express';
import {deleteFridge} from '../DALs';
import {removeFridgeFromUser, findUser} from '../../users/DALs';

export default class DeleteFridgeService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body: {id}, user: expressUser} = req;

    try {
      // TODO: Refactor to use transactions
      if (!expressUser) {
        res.json({userError: 'Coult not find user'});

        return;
      }

      const {_id} = expressUser as any;

      const user = await findUser(_id);

      if (!user) {
        res.json({userError: 'Coult not find user'});

        return;
      }

      const {deletedCount} = await deleteFridge(id);

      const newUser = await removeFridgeFromUser(user, id);

      if (deletedCount) {
        res.status(200).json({message: 'Fridge deleted', id, user: newUser});
    } else {
        res.status(200).json({message: 'No Fridge found with given id', id});
    }
    } catch (error) {
      res.status(500).send({message: 'Invalid id', id});
    }
  }
}