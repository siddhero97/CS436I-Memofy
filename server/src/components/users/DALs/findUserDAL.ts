import {User} from "..";

export default async function(email: String) {
  return await User.findOne({email});
}