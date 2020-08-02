import {FeedAlert} from "..";

interface LooseObject {
  [key: string]: any;
}

export default async function(_ids: String[]) {
  let query: LooseObject = {
    '_id': { $in: _ids}
  };

  return await FeedAlert.find(query);
}