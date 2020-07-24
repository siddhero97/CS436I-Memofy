import {Document, Schema, Model, model} from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  isValidPassword(password: String): Promise<boolean>;
}

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre<IUser>('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
})

UserSchema.methods.isValidPassword = async function(password: String) {
  const user = this;

  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

const User: Model<IUser> = model<IUser>("user", UserSchema);

export default User;