import {Request, Response} from 'express';
import {findFeedAlerts} from '../DALs';
import {findUserById} from '../../users/DALs';

export default class FetchFeedAlertsService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {query: {userId, feedAlertIds}} = req;

      const user = await findUserById(userId as string);

      if (!user) {
        res.json({userError: 'Could not find user'});

        return;
      }

      const feedAlerts = await findFeedAlerts(feedAlertIds as string[]);

      res.status(200).json({feedAlerts});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}