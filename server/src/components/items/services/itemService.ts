import {Request, Response, NextFunction} from 'express';

let itemSchema = require('../../../models/itemSchema');
let {v4: uuidv4} = require('uuid');

export default class ItemService {
  public async getItem(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await itemSchema.find();
      return res.json(items);
    } catch (err) {
        return res.status(500).send(err);
    }
  }

  public async postItem(req: Request, res: Response, next: NextFunction) {
    try {
      const item = new itemSchema({
        _id: uuidv4(),
        user_id: req.body.user_id,
        count: req.body.count,
        name: req.body.name,
        category: req.body.category,
        icon: req.body.icon,
        expiryDate: req.body.expiryDate
      })
      await item.save();
      return res.status(200).json({item: 'Item created'});
    } catch (err) {
      console.log(err)
      return res.status(500).json({item: err});
    }
  }

  public async putItem(req: Request, res: Response, next: NextFunction) {
    try {
      await itemSchema.findOneAndUpdate(
        {
          _id: req.body._id
        }, 
        {
            count: req.body.count
        },
        {
            new: true
        });
      return res.status(200).json({item: 'Item updated'});
    } catch (err) {
      return res.status(500).json({item: err});
    }
  }

  public async deleteItem(req: Request, res: Response, next: NextFunction) {
    try {
      const itemDelete = await itemSchema.deleteOne({name: req.body.name});
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