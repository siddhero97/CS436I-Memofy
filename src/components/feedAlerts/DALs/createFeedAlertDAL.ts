import {FeedAlert, IFeedAlert} from "..";

export default async function(feedAlert: IFeedAlert) {
  return await FeedAlert.create({...feedAlert});
}