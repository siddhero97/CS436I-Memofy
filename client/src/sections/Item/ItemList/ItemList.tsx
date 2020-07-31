import React, {useState, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card} from '@shopify/polaris';
import {Item, AddItemModal, ItemSummary} from './components';
import {thunkInitialItemListLoad, thunkFetchItems} from 'store/item/actions';
import {selectFridges} from 'store/fridge/selectors';
import {selectActiveFridge} from 'store/app/selectors';
import {selectItems, selectIsLoading} from 'store/item/selectors';
import {Item as ItemType} from 'store/item/types';

import './ItemList.css';
import {setActiveFridge} from 'store/app/actions';

export default function ItemList() {
  const dispatch = useDispatch();
  const activeFridge = useSelector(selectActiveFridge);
  const fridges = useSelector(selectFridges);
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  useEffect(() => {
    if (fridges.length) {
      dispatch(thunkInitialItemListLoad(fridges[0]));
    }

    return () => {
      if (fridges.length) {
        dispatch(setActiveFridge(undefined));
      }
    };
  }, [fridges, dispatch]);

  useEffect(() => {
    if (activeFridge) {
      dispatch(thunkFetchItems(activeFridge._id));
    }
  }, [activeFridge, dispatch]);

  const handleShowItem = useCallback((item) =>
    setSelectedItem(item)
  , []);

  const handleHideItem = useCallback(() =>
    setSelectedItem(null)
  , []);

  if (isLoading) {
    return null;
  }

  if (!activeFridge) {
    return (
      <div>
        You have no fridges!
      </div>
    );
  }

  const isOpen = selectedItem !== null;

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
