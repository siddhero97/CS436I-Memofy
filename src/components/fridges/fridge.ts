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
  itemIds: {
      type: [],
      required: true
  },
  categories: {
      type: [],
      required: true
  },
  filters: {
      type: [],
      required: true
  }
})

// temporary name to newFridges
const Fridge: Model<IFridge> = model<IFridge>("newFridges", FridgeSchema);

export default Fridge;