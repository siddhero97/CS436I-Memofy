import {Item} from "..";

export default async function(_ids: String[], categories: String[]) {

  return await Item.find({
    '_id': { $in: _ids},
    category: { $in: categories}
  });
}