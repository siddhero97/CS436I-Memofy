import {Request, Response} from 'express';
import {createFeedAlert} from '../DALs';
import {addFeedAlertToUser, findUserById} from '../../users/DALs';

export default class CreateFeedAlertService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {body: {userId, newFeedAlert}} = req;

      const feedAlert = await createFeedAlert(newFeedAlert);

      if (!feedAlert) {
        res.json({userError: 'Failed to create feed alert'});

        return;
      }

      const user = await findUserById(userId);

      if (!user) {
        res.json({userError: 'Failed to find user'});

        return;
      }

      const newUser = await addFeedAlertToUser(user, feedAlert._id);

      res.status(200).json({feedAlert, user: newUser});
    } catch (error) {
      res.status(500).json({error});
    }
  }
}