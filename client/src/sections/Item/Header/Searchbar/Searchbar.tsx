import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectActiveFridge} from 'store/app/selectors';
import {TextField, Button, EventListener} from '@shopify/polaris';
import {thunkFetchItems} from 'store/item/actions';
import {selectSelectedCategories} from 'store/item/selectors';

import './Searchbar.css';

export default function Searchbar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const activeFridge = useSelector(selectActiveFridge);
  const selectedCategories = useSelector(selectSelectedCategories);

  const handleTextFieldChange = useCallback(
    (value) => setSearchValue(value),
    [],
  );

  const handleClearButtonClick = useCallback(() => setSearchValue(''), []);

  const handleSubmit = useCallback(() => {
    if (activeFridge) {
      dispatch(thunkFetchItems(activeFridge._id, selectedCategories, searchValue));
    }
  }, [activeFridge, selectedCategories, searchValue, dispatch]);

  const handleEnterKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className='search-box'>
      <EventListener capture event="keypress" handler={handleEnterKey} />
      <TextField
        label=''
        placeholder="Search an item..."
        value={searchValue}
        onChange={handleTextFieldChange}
        clearButton
        onClearButtonClick={handleClearButtonClick}
      />
      <div className='search-button'>
        <Button primary onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
}
