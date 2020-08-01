import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Popover, ActionList, ButtonGroup, Button} from '@shopify/polaris';
import {selectActiveFridge} from 'store/app/selectors';

import './Filter.css';
import {selectSelectedCategories} from 'store/item/selectors';
import {changeSelectedCategories} from 'store/item/actions';

export default function Filter() {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(selectSelectedCategories);
  const activeFridge = useSelector(selectActiveFridge);
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleCategorySelect = useCallback((categorySelected: string) => {
    if (selectedCategories.includes(categorySelected)) {
      dispatch(changeSelectedCategories(selectedCategories.filter((category) => category !== categorySelected)));
    } else {
      dispatch(changeSelectedCategories([...selectedCategories, categorySelected]));
    }
  }, [selectedCategories, dispatch]);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Filter by
    </Button>
  );


  const categoryButtonsMarkup = activeFridge
    ? activeFridge.categories.map((category) => (
      <Button
        key={category}
        pressed={selectedCategories.indexOf(category) !== -1}
        onClick={() => handleCategorySelect(category)}
      >
        {category}
      </Button>
    )) : null;

  return (
    <div className='filter'>
      <div className='filter-popover'>
        <Popover
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
        >
          <ActionList items={[{content: 'Categories', active: true}]} />
        </Popover>
      </div>
      <ButtonGroup segmented>
        {categoryButtonsMarkup}
      </ButtonGroup>
    </div>
  );
}