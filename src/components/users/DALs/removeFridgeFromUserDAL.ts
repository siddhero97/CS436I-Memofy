import {User, IUser} from "..";

export default async function(
  {id: userId, fridgeIds}: IUser,
  fridgeId: String,
) {
  return await User.updateMany(
    {
      _id: userId,
    },
    {
      fridgeIds: [...fridgeIds].filter((id) => id.toString() !== fridgeId),
    },
    {
      new: true
    }
  );
}