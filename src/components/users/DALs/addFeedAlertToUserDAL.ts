import {User, IUser} from "..";

export default async function(
  {id, feedAlertIds}: IUser,
  feedAlertId: String,
) {

  return await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      feedAlertIds: [...feedAlertIds, feedAlertId],
    },
    {
      new: true
    }
  );
}