import React from 'react';
import {Heading, Scrollable} from '@shopify/polaris';
import {Item} from 'store/item/types';

import './ItemSummaryLayout.css';
import {ItemSummaryContent, ItemSummaryFooter} from './components';

interface Props {
  item: Item;
  onClose: () => void;
}

export default function ItemSummaryLayout({item, onClose}: Props) {
  const {name} = item;

  return (
    <div className='item-summary-layout'>
      <div className='item-summary-heading'>
        <Heading>{name}</Heading>
      </div>
      <Scrollable>
        <ItemSummaryContent {...item} />
      </Scrollable>
      <ItemSummaryFooter onClose={onClose} />
    </div>
  );
}