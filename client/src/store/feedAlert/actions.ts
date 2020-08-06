import axios from 'axios';
import {
  FeedAlertActionTypes,
  DID_ADD_FEED_ALERT,
  ADD_FEED_ALERT,
  FeedAlert,
  WILL_ADD_FEED_ALERT,
  DID_FETCH_FEED_ALERTS,
  FETCH_FEED_ALERTS,
  WILL_FETCH_FEED_ALERTS
} from './types';
import {AppThunk} from '..';
import {selectToken} from 'store/app/selectors';
import {User} from 'store/user/types';
import {selectUserId} from 'store/user/selectors';
import {selectActiveFridge} from 'store/app/selectors';
import {thunkEditUser} from 'store/user/actions';

interface FetchFeedAlertsResponse {
  feedAlerts: FeedAlert[];
}

interface AddFeedAlertResponse {
  feedAlert: FeedAlert;
  user: User;
}

function willFetchFeedAlerts(): FeedAlertActionTypes {
  return {
    type: WILL_FETCH_FEED_ALERTS,
  };
}

function fetchFeedAlerts(feedAlerts: FeedAlert[]): FeedAlertActionTypes {
  return {
    type: FETCH_FEED_ALERTS,
    payload: feedAlerts,
  };
}

function didFetchFeedAlerts(): FeedAlertActionTypes {
  return {
    type: DID_FETCH_FEED_ALERTS,
  };
}

function willAddFeedAlert(): FeedAlertActionTypes {
  return {
    type: WILL_ADD_FEED_ALERT,
  };
}

function addFeedAlert(feedAlert: FeedAlert, user: User): FeedAlertActionTypes {
  return {
    type: ADD_FEED_ALERT,
    payload: {feedAlert, user},
  };
}

function didAddFeedAlert(): FeedAlertActionTypes {
  return {
    type: DID_ADD_FEED_ALERT,
  };
}

export const thunkFetchFeedAlerts = (
  feedAlertIds: string[] | undefined
): AppThunk => async (dispatch, getState) => {
  dispatch(willFetchFeedAlerts());

  const token = selectToken(getState());
  const _id = selectUserId(getState());

  const {data: {feedAlerts}} = await axios.get<FetchFeedAlertsResponse>('/api/feedalert/get', {
    params: {
      token,
      userId: _id,
      feedAlertIds,
    }
  });

  dispatch(fetchFeedAlerts(feedAlerts));
  dispatch(didFetchFeedAlerts());
};

export const thunkAddFeedAlert = (newFeedAlert: Partial<FeedAlert>): AppThunk => async (dispatch, getState) => {
  dispatch(willAddFeedAlert());

  const token = selectToken(getState());
  const _id = selectUserId(getState());
  const fridge = selectActiveFridge(getState());
  console.log(fridge);

  const {data: {feedAlert, user}} = await axios.post<AddFeedAlertResponse>('/api/feedalert/post',
    {
      userId: _id,
      fridgeId: fridge?._id,
      newFeedAlert
    },
    {
      params: {
        token
      }
    }
  );

  dispatch(addFeedAlert(feedAlert, user));
  dispatch(thunkEditUser(user));
  dispatch(didAddFeedAlert());
};