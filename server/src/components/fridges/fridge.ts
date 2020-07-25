import {Document, Schema, Model, model} from 'mongoose';

export interface IFridge extends Document {
  name: String;
  userIds: String[];
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

const Fridge: Model<IFridge> = model<IFridge>("fridges", FridgeSchema);

export default Fridge;