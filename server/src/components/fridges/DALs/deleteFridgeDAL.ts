import {Fridge} from "..";

export default async function(id: String) {
  return await Fridge.deleteOne({_id: id});
}