import {Item} from "..";

export default async function(_ids: String[], categories: String[], search: string) {
  if(search) {
    return await Item.find({
      '_id': { $in: _ids},
      category: { $in: categories},
      name: new RegExp(search, "i")
    });
  } else {
    return await Item.find({
      '_id': { $in: _ids},
      category: { $in: categories},
    });
  }
}