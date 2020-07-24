import {Item} from "..";

export default async function(id: String) {
  return await Item.deleteOne({_id: id});
}