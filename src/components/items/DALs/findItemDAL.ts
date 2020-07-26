import {Item} from "..";

export default async function(_id: String) {
  return await Item.findById(_id);
}