/* eslint-disable react/jsx-key */
import React, {useEffect, useCallback} from 'react';
import {Card, DataTable, Button} from '@shopify/polaris';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {thunkInitialFridgeLoad} from 'store/fridge/actions';
import {selectFridges} from 'store/fridge/selectors';

import './AccountDetails.css';

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const fridges = useSelector(selectFridges);

  useEffect(() => {
    dispatch(thunkInitialFridgeLoad());
  }, [dispatch]);

  const handleFridgeManagementClick = useCallback(() => {
    history.push('/fridges');
  }, [history]);

  const handleFoodOverviewClick = useCallback(() => {
    history.push('/items');
  }, [history]);

  const rows = [
    [
      '# of Fridges',
      fridges.length,
      <Button onClick={handleFridgeManagementClick}>Go to Fridge Management</Button>
    ],
    [
      '# of Items',
      fridges.reduce((itemsSoFar, {itemIds}) => {
        return itemsSoFar + itemIds.length;
      }, 0),
      <Button onClick={handleFoodOverviewClick}>Go to Food Overview</Button>
    ],
    [
      'Subscription',
      'Free Tier'
    ]
  ];

  return (
    <div className='account-details'>
      <Card title='Account Details' sectioned>
        <Card.Section>
          <DataTable
            columnContentTypes={[
              'text',
              'text',
            ]}
            headings={[]}
            rows={rows}
          />
        </Card.Section>
      </Card>
    </div>
  );
}