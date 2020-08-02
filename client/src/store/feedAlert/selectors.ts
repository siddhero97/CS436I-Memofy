import {RootState, FeedAlertState} from '../types';
import {createSelector} from 'reselect';

const selectFeedAlertState = (state: RootState) => state.feedAlert;

export const selectIsLoading = createSelector(
  selectFeedAlertState,
  (feedAlert: FeedAlertState) => feedAlert.isLoading
);

export const selectFeedAlerts = createSelector(
  selectFeedAlertState,
  (feedAlert: FeedAlertState) => feedAlert.feedAlerts
);