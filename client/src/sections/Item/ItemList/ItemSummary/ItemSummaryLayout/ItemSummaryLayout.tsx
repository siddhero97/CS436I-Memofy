import React, {useState, useCallback} from 'react';
import {Heading, Scrollable} from '@shopify/polaris';
import {Item} from '../../../../../store/item/types';

import './ItemSummaryLayout.css';
import {ItemSummaryContent, ItemSummaryFooter} from './components';

interface Props {
  item: Item;
  onClose: () => void;
}

export default function ItemSummaryLayout({item, onClose}: Props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = useCallback(() => {
    setShowEdit(true);
  }, []);

  const {name} = item;

  const contentMarkup = showEdit ? (
    <div>
      Edit page
    </div>
  ) : <ItemSummaryContent {...item} />;

  const footerMarkup = showEdit ? (
    <div>
      Edit footer
    </div>
  ) : <ItemSummaryFooter onClose={onClose} onEdit={handleShowEdit} />;

  return (
    <div className='item-summary-layout'>
      <div className='item-summary-heading'>
        <Heading>{name}</Heading>
      </div>
      <Scrollable>
        {contentMarkup}
      </Scrollable>
      {footerMarkup}
    </div>
  );
}