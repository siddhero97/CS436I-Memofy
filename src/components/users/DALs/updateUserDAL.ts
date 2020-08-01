import {User, IUser} from "..";

export default async function({
  _id,
  ...updatedValues
}: IUser) {
  return await User.findOneAndUpdate(
    {
      _id,
    },
    {
      ...updatedValues,
    },
    {
      new: true
    },
  );
}