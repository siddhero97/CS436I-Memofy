import {RootState, UserState} from '../types';
import {createSelector} from 'reselect';

const selectUserState = (state: RootState) => state.user;

export const selectUserEmail = createSelector(
  selectUserState,
  (user: UserState) => user.email,
);