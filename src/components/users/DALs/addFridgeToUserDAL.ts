import {User, IUser} from "..";

export default async function(
  {id, fridgeIds}: IUser,
  fridgeId: String,
) {
  return await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      fridgeIds: [...fridgeIds, fridgeId],
    },
    {
      new: true
    }
  );
}