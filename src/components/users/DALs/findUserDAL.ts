import {User} from "..";

export default async function(_id: String) {
  return await User.findOne({_id});
}