import {
  FeedAlertActionTypes,
  ADD_FEED_ALERT,
  FETCH_FEED_ALERTS,
  WILL_FETCH_FEED_ALERTS,
  DID_FETCH_FEED_ALERTS,
  WILL_ADD_FEED_ALERT,
  DID_ADD_FEED_ALERT,
} from './types';
import {FeedAlertState} from 'store/types';

const initialState: FeedAlertState = {
  feedAlerts: [],
  isLoading: false,
};

export function feedAlertReducer(
  state = initialState,
  action: FeedAlertActionTypes,
): FeedAlertState {
  switch (action.type) {
    case ADD_FEED_ALERT:
      return {
        ...state,
        feedAlerts: [...state.feedAlerts, action.payload.feedAlert],
      };
    case FETCH_FEED_ALERTS:
      return {
        ...state,
        feedAlerts: action.payload,
      };
    case WILL_FETCH_FEED_ALERTS || WILL_ADD_FEED_ALERT:
      return {
        ...state,
        isLoading: true,
      };
    case DID_FETCH_FEED_ALERTS || DID_ADD_FEED_ALERT:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}