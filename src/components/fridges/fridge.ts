import {Document, Schema, Model, model} from 'mongoose';

export interface IFridge extends Document {
  name: String;
  itemIds: String[];
  categories: String[];
  filters: String[];
}

export const FridgeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  userIds: {
      type: [String],
      required: true
  },
  categories: {
      type: [String],
      required: true
  },
  filters: {
      type: [String],
      required: true
  }
})

// temporary name to newFridges
const Fridge: Model<IFridge> = model<IFridge>("newFridges", FridgeSchema);

export default Fridge;