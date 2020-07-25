import {Item} from "..";

export default async function(_ids: String[]) {
  // return await Item.find({id: _id});
  return await Item.find({
    '_id': { $in: _ids}
  });
}