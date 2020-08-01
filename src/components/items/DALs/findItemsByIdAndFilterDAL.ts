import {Item} from "..";

interface LooseObject {
  [key: string]: any;
}

export default async function(_ids: String[], categoriesSelected: String[]) {
  let query: LooseObject = {
    '_id': { $in: _ids}
  };

  if (categoriesSelected) {
    query['category'] = { $in: categoriesSelected}
  }
  return await Item.find(query);
}