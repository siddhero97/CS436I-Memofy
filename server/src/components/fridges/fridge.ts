import {Document, Schema, Model, model} from 'mongoose';

export interface IFridge extends Document {
  userIds: String[];
  categories: String[];
  filters: String[];
}

export const FridgeSchema = new Schema({
    userIds: {
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

const Fridge: Model<IFridge> = model<IFridge>("fridges", FridgeSchema);

export default Fridge;