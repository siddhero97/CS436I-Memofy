import {Request, Response, NextFunction} from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

export default class LoginUserService {
  public async execute(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('login', async (error, user, info) => {
      try {
        if(error || !user) {
          const userError = info.message;
          return res.json({userError});
        }

        req.login(user, {session: false}, async (error) => {
          if (error) {
            return res.json({userError: error});
          }

          const body = {_id: user._id, email: user.email};
          const token = jwt.sign({user: body}, 'top_secret');

          return res.json({user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            feedAlertIds: user.feedAlertIds
          }, token});
        })
      } catch (error) {
        return res.json({userError: error});
      }
    })(req, res, next);
  }
}