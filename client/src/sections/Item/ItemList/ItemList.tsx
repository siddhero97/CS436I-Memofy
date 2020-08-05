import React, {useState, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, EmptyState} from '@shopify/polaris';
import {Item, AddItemModal, ItemSummary} from './components';
import {thunkInitialItemListLoad, thunkFetchItems, clearSelectedCategories} from 'store/item/actions';
import {selectFridges} from 'store/fridge/selectors';
import {selectActiveFridge} from 'store/app/selectors';
import {selectItems, selectIsLoading, selectSelectedCategories} from 'store/item/selectors';
import {Item as ItemType} from 'store/item/types';
import {setActiveFridge} from 'store/app/actions';

import './ItemList.css';

export default function ItemList() {
  const dispatch = useDispatch();
  const activeFridge = useSelector(selectActiveFridge);
  const fridges = useSelector(selectFridges);
  const items = useSelector(selectItems);
  const selectedCategories = useSelector(selectSelectedCategories);
  const isLoading = useSelector(selectIsLoading);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  useEffect(() => {
    if (fridges.length) {
      dispatch(thunkInitialItemListLoad(activeFridge || fridges[0]));
    }

    return () => {
      if (fridges.length) {
        dispatch(setActiveFridge(undefined));
        dispatch(clearSelectedCategories());
      }
    };
  }, [fridges, activeFridge, dispatch]);

  useEffect(() => {
    if (activeFridge) {
      dispatch(thunkFetchItems(activeFridge._id, selectedCategories));
    }
  }, [activeFridge, selectedCategories, dispatch]);

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
      <div className='item-emptystate'>
        <Card>
          <EmptyState
            heading="Oops! You have no fridges"
            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          >
            <p>Create a new fridge by clicking the "+" button on the left bar.</p>
          </EmptyState>
        </Card>
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
        <Card sectioned title="Getting started">
          <AddItemModal />
        </Card>
      </div>
      {itemListMarkup}
      {itemSummaryMarkup}
    </div>
  );
}
