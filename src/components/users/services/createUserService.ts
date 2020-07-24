import {Request, Response} from 'express';

export default class CreateUserService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {user} = req;

    res.json({user});
  }
}