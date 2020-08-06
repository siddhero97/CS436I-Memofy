import {Item} from "..";

interface LooseObject {
  [key: string]: any;
}

export default async function(_ids: String[], categoriesSelected: String[], search: string) {
  let query: LooseObject = {
    '_id': { $in: _ids}
  };

  if (categoriesSelected) {
    query['category'] = { $in: categoriesSelected}
  }
  
  if (search) {
      
      query['name'] = new RegExp(search, 'i');
  }
  return await Item.find(query);
}