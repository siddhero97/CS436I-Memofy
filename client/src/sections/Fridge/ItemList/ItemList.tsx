import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Card} from '@shopify/polaris';
import {selectItems} from 'store/item/selectors';
import {Item as ItemType} from 'store/item/types';
import {Item, AddItemModal} from './components';

import './ItemList.css';
import ItemSummary from './ItemSummary';

export default function ItemList() {
  const items = useSelector(selectItems);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const isOpen = selectedItem !== null;

  const handleShowItem = useCallback((item) =>
    setSelectedItem(item)
  , []);

  const handleHideItem = useCallback(() =>
    setSelectedItem(null)
  , []);

  const itemListMarkup = items.map((item) => {
    return (
      <div key={item.name}>
        <Item item={item} showDetails={isOpen} onShowDetails={handleShowItem} onHideDetails={handleHideItem} />
      </div>
    );
  });

  const itemSummaryMarkup = selectedItem !== null
    ? <ItemSummary item={selectedItem} isOpen={isOpen} onClose={handleHideItem} />
    : null;

  return (
    <div className='item-list'>
      <div className='item-add'>
        <Card sectioned>
          <AddItemModal />
        </Card>
      </div>
      {itemListMarkup}
      {itemSummaryMarkup}
    </div>
  );
}
