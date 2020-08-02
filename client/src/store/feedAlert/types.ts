import {User} from "store/user/types";

export interface FeedAlert {
  _id: string;
  message: string;
  timestamp: Date;
}

interface AddFeedAlertPayload {
  feedAlert: FeedAlert;
  user: User;
}

export const WILL_ADD_FEED_ALERT = 'WILL_ADD_FEED_ALERT';
export const ADD_FEED_ALERT = 'ADD_FEED_ALERT';
export const DID_ADD_FEED_ALERT = 'DID_ADD_FEED_ALERT';

export const WILL_FETCH_FEED_ALERTS = 'WILL_FETCH_FEED_ALERTS';
export const FETCH_FEED_ALERTS = 'FETCH_FEED_ALERTS';
export const DID_FETCH_FEED_ALERTS = 'DID_FETCH_FEED_ALERTS';

interface AddFeedAlertAction {
  type: typeof ADD_FEED_ALERT;
  payload: AddFeedAlertPayload;
}

interface FetchFeedAlertsAction {
  type: typeof FETCH_FEED_ALERTS;
  payload: FeedAlert[];
}

interface WillAction {
  type: typeof WILL_ADD_FEED_ALERT | typeof WILL_FETCH_FEED_ALERTS;
}

interface DidAction {
  type: typeof DID_ADD_FEED_ALERT | typeof DID_FETCH_FEED_ALERTS;
}

export type FeedAlertActionTypes = AddFeedAlertAction | FetchFeedAlertsAction | WillAction | DidAction;