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
  console.log('ids: ' + feedAlertIds);
  const feedAlerts = useSelector(selectFeedAlerts);
  console.log(feedAlerts)
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
    return (
      <div className='alert' key={feedAlert._id}>
        <Banner onDismiss={() => removeFeedAlertFromUser(feedAlert)}>
          <p>
            {feedAlert.message + feedAlert.timestamp}
          </p>
        </Banner>
      </div>
    );
  });

  return (
    <div className='feed'>
      <Card title='Activity Log'>
        {feedAlertMarkup}
      </Card>
    </div>
  );
}