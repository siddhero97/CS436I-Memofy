import React, {useEffect, useCallback}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Feed.css';
import {Card, Banner} from '@shopify/polaris';
import {selectUserFeedAlerts, selectActiveUser} from 'store/user/selectors';
import {selectFeedAlerts} from 'store/feedAlert/selectors';
import {thunkFetchFeedAlerts} from 'store/feedAlert/actions';
import {thunkEditUser} from 'store/user/actions';
import {FeedAlert} from 'store/feedAlert/types';

export default function Feed() {
  const dispatch = useDispatch();
  const feedAlertIds = useSelector(selectUserFeedAlerts);
  const feedAlerts = useSelector(selectFeedAlerts);
  const activeUser = useSelector(selectActiveUser);

  useEffect(() => {
    dispatch(thunkFetchFeedAlerts(feedAlertIds));
  }, [feedAlertIds, dispatch]);

  const removeFeedAlertFromUser = useCallback((feedAlert: FeedAlert) => {
    const userFeedAlerts = feedAlertIds?.filter(id => id !== feedAlert._id);
    const editedActiveUser = {
      ...activeUser,
      feedAlertIds: userFeedAlerts
    };

    dispatch(thunkEditUser(editedActiveUser));
  }, [activeUser, dispatch, feedAlertIds]);

  const feedAlertMarkup = feedAlerts.map((feedAlert) => {
    const readableTimestamp = new Date(feedAlert.timestamp).toDateString();
    const splitFeedAlert = feedAlert.message.split("was", 2);

    return (
      <div className='alert' key={feedAlert._id}>
        <Banner onDismiss={() => removeFeedAlertFromUser(feedAlert)}>
          <p>
            <b>{splitFeedAlert[0]}</b> was {splitFeedAlert[1]} <i>{readableTimestamp}</i>
          </p>
        </Banner>
      </div>
    );
  });

  return (
    <div className='feed'>
      <Card title='Activity Log' sectioned>
        {feedAlertMarkup && "You are up to date."}
      </Card>
    </div>
  );
}