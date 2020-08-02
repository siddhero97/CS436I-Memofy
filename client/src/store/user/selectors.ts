import {RootState, UserState} from '../types';
import {createSelector} from 'reselect';

const selectUserState = (state: RootState) => state.user;

export const selectUserId = createSelector(
  selectUserState,
  (user: UserState) => user._id,
);

export const selectUserEmail = createSelector(
  selectUserState,
  (user: UserState) => user.email,
);

export const selectUserFirstName = createSelector(
  selectUserState,
  (user: UserState) => user.firstName,
);

export const selectUserLastName = createSelector(
  selectUserState,
  (user: UserState) => user.lastName,
);

export const selectUserFeedAlerts = createSelector(
  selectUserState,
  (user: UserState) => user.feedAlertIds,
)