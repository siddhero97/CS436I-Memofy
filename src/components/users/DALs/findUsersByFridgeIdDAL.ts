import {User} from "..";

export default async function(id: string) {
  return await User.find({
    fridgeIds: id,
  })
}