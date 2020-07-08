import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Card} from '@shopify/polaris';
import {deleteItem} from 'store/item/actions';
import {Item as ItemType} from 'store/item/types';

import notFound from 'icons/not-found.svg';

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
  const {name, icon} = item;

  const handleShowDetails = useCallback(() =>
    onShowDetails(item), [item, onShowDetails]
  );

  const handleDelete = useCallback(() => {
    if (showDetails) {
      onHideDetails();
    }
    console.log(name);
    dispatch(deleteItem(name));
  }, [dispatch, name, showDetails, onHideDetails]);

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
          <img className='item-logo' src={icon || notFound} alt='appleLogo' />
        </div>
      </Card>
    </div>
  );
}
