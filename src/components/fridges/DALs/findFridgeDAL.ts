import {Fridge} from "..";

export default async function(_id: String) {
  return await Fridge.findById(_id);
}