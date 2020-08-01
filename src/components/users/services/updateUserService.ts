import {Request, Response} from 'express';
import {updateUser} from '../DALs';

export default class UpdateUserService {
  public async execute(req: Request, res: Response): Promise<void> {
    const {body} = req;

    const user = await updateUser(body);

    if (!user) {
      res.status(200).json({message: 'No user found with given id or email', id: body._id});
    } else {
      res.status(200).json({message: 'User updated', user});
    }
  }
}