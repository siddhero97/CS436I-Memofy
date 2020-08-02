import {FeedAlert} from "..";

interface LooseObject {
  [key: string]: any;
}

export default async function(feedAlertIds: String[]) {
  let query: LooseObject = {
    '_id': { $in: feedAlertIds}
  };

  return await FeedAlert.find(query);
}