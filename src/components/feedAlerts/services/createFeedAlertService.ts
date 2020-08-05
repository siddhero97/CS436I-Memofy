import {Request, Response} from 'express';
import {createFeedAlert} from '../DALs';
import {addFeedAlertToUser, findUserById, findUsersByFridgeId} from '../../users/DALs';

export default class CreateFeedAlertService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {body: {userId, fridgeId, newFeedAlert}} = req;
      const feedAlert = await createFeedAlert(newFeedAlert);

      if (!feedAlert) {
        res.json({userError: 'Failed to create feed alert'});

        return;
      }

      const usersWithFridge = await findUsersByFridgeId(fridgeId);

      for (let user of usersWithFridge) {
        await addFeedAlertToUser(user, feedAlert._id);
      }

      const user = await findUserById(userId);

      if (!user) {
        res.json({userError: 'Failed to find user'});

        return;
      }

      res.status(200).json({feedAlert, user: user});
    } catch (error) {
      res.status(500).json({error});
    }
  }
}