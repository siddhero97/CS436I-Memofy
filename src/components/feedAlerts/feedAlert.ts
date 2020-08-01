import {Document, Schema, Model, model} from 'mongoose';

export interface IFeedAlert extends Document {
  message: String;
  timestamp: Date;
}

export const FeedAlertSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  timestamp: {
      type: Date,
      required: true
  }
})

const FeedAlert: Model<IFeedAlert> = model<IFeedAlert>("feedalerts", FeedAlertSchema);

export default FeedAlert;