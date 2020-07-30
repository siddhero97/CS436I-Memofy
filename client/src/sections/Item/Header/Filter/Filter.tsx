import React, {useState, useCallback} from 'react';
import {Popover, ActionList, ButtonGroup, Button} from '@shopify/polaris';

import './Filter.css';

export default function Filter() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Filter by
    </Button>
  );

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
        <Button>Meats</Button>
        <Button>Fruits</Button>
        <Button>Veggies</Button>
        <Button>+</Button>
      </ButtonGroup>
    </div>
  );
}