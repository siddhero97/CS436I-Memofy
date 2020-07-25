import {Fridge} from "..";

export default async function(userId: any) {
  return await Fridge.find({userIds: userId});
}