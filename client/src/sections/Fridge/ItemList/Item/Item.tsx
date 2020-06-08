import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Card, ComplexAction} from '@shopify/polaris';
import {deleteItem} from 'store/item/actions';
import {Item as ItemType} from 'store/item/types';

import notFound from 'icons/not-found.svg';

import './Item.css';
interface Props {
  item: ItemType;
}

export default function Item({item: {name, icon}}: Props) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteItem(name));
  }, [name]);

  const secondaryFooterActions: ComplexAction[] | undefined =
  [
    {
      content: 'Details',
      onAction: handleDelete
    },
    {
      content: 'Delete',
      onAction: handleDelete,
      destructive: true
    }
  ];

  return (
    <div className='item'>
      <Card
        title={name}
        sectioned
        secondaryFooterActions={secondaryFooterActions}
      >
        <div className='item-section'>
          <img className='item-logo' src={icon || notFound} alt='appleLogo' />
        </div>
      </Card>
    </div>
  );
}
