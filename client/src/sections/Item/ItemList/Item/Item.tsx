import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from '@shopify/polaris';
import {thunkDeleteItem} from 'store/item/actions';
import {selectActiveFridge} from 'store/app/selectors';
import {Item as ItemType} from 'store/item/types';

import './Item.css';
interface Props {
  item: ItemType;
  showDetails: boolean;
  onShowDetails: (item: ItemType) => void;
  onHideDetails: () => void;
}

export default function Item({
  item,
  showDetails,
  onShowDetails,
  onHideDetails
}: Props) {
  const dispatch = useDispatch();
  const {_id, name, icon} = item;
  const activeFridge = useSelector(selectActiveFridge);

  const handleShowDetails = useCallback(() =>
    onShowDetails(item), [item, onShowDetails]
  );

  const handleDelete = useCallback(() => {
    if (showDetails) {
      onHideDetails();
    }

    const newFeedAlert = {
      message: name + " was deleted in your fridge: " + activeFridge?.name + " on ",
      timestamp: new Date(),
    };

    dispatch(thunkDeleteItem(_id, newFeedAlert));
  }, [dispatch, showDetails, _id, activeFridge, name, onHideDetails]);

  return (
    <div className='item'>
      <Card
        title={name}
        sectioned
        secondaryFooterActions={[
          {
            content: 'Details',
            onAction: () => handleShowDetails()
          },
          {
            content: 'Delete',
            onAction: handleDelete,
            destructive: true
          }
        ]}
      >
        <div className='item-section'>
          <img className='item-logo' src={icon} alt='appleLogo' />
        </div>
      </Card>
    </div>
  );
}
