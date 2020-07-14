import {Document, Schema, Model, model} from 'mongoose';

export interface IItem extends Document {
  fridge_id: String;
  count: String;
  name: String;
  category: String;
  icon: String;
  expiryDate: Date;
}

export const ItemSchema = new Schema({
  fridge_id: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
      type: String,
      required: true
  },
  icon: {
    type: String,
    required: true
  },
  expiryDate: {
    type: String,
    required: true
  }
})

const Item: Model<IItem> = model<IItem>("user", ItemSchema);

export default Item;