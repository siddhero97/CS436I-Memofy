import {Request, Response} from 'express';
import {findFeedAlertsByIdAndFilter} from '../DALs';
import {findUserById} from '../../users/DALs';

export default class FetchFeedAlertsService {
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      const {query: {userId}} = req;

      const user = await findUserById(userId as string);

      if (!user) {
        res.json({userError: 'Could not find user'});

        return;
      }

      const feedAlerts = await findFeedAlertsByIdAndFilter(user.feedAlertIds);

      res.status(200).json({feedAlerts});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}