import {Document, Schema, Model, model} from 'mongoose';

export interface IItem extends Document {
  name: String;
  count: String;
  category: String;
  icon: String;
  expiryDate: Date;
}

export const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
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

const Item: Model<IItem> = model<IItem>("newitems", ItemSchema);

export default Item;