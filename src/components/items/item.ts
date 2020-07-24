import {Document, Schema, Model, model} from 'mongoose';

export interface IItem extends Document {
  fridgeId: String;
  count: String;
  name: String;
  category: String;
  icon: String;
  expiryDate: Date;
}

export const ItemSchema = new Schema({
  fridgeId: {
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
    type: Date,
    required: true
  }
})

const Item: Model<IItem> = model<IItem>("items", ItemSchema);

export default Item;