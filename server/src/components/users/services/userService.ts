import {Request, Response, NextFunction} from 'express';

let userSchema = require('../../../models/userSchema');
let {v4: uuidv4} = require('uuid');

export default class UserService {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await userSchema.find();
      return res.json(items);
    } catch (err) {
        return res.status(500).send(err);
    }
  }

  public async postUser(req: Request, res: Response, next: NextFunction) {
    try {
      const item = new userSchema({
        _id: uuidv4(),
        email: req.body.email,
        password: req.body.password,
        item_ids: req.body.item_ids
      })
      await item.save();
      return res.status(200).json({item: 'Item created'});
    } catch (err) {
      return res.status(500).json({item: err});
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const itemDelete = await userSchema.deleteOne({_id: req.body._id});
      console.log(itemDelete);
      if(itemDelete) {
          return res.status(200).json({item: 'Successfully deleted'});
      } else {
          return res.status(500).json({item: 'Could not delete'});
      }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err);
    }
  };
}