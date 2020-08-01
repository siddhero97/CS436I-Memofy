import {Item} from "..";

export default async function(ids: String[]) {
  return await Item.deleteMany({
    _id: ids,
  });
}