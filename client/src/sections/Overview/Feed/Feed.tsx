import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Feed.css';
import {Card, Banner} from '@shopify/polaris';
import {selectUserFeedAlerts} from 'store/user/selectors';
import {selectFeedAlerts} from 'store/feedAlert/selectors';
import {thunkFetchFeedAlerts} from 'store/feedAlert/actions';

export default function Feed() {
  const dispatch = useDispatch();
  const feedAlertIds = useSelector(selectUserFeedAlerts);
  const feedAlerts = useSelector(selectFeedAlerts);

  useEffect(() => {
    dispatch(thunkFetchFeedAlerts(feedAlertIds));
  });

  const closeFeedAlert = () => {
    // TODO: add thunk to close the feedalert from user
  };

  const feedMarkup = feedAlerts.map((feedAlert) => {
    return (
      <div key={feedAlert._id}>
        <Banner onDismiss={closeFeedAlert}>
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
        {feedMarkup}
      </Card>
    </div>
  );
}