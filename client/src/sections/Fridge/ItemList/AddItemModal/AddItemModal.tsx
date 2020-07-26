import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  Button,
  Modal,
  TextField,
  Card,
  DatePicker,
  Select,
  Spinner
} from '@shopify/polaris';
import {thunkAddItem} from 'store/item/actions';
import {searchIcons, useDebounce} from 'utils';

import './AddItemModal.css';

// TODO: Should be based off of fridge
const categories = [
  {label: 'Meats', value: 'meats'},
  {label: 'Fruits', value: 'fruits'},
  {label: 'Veggies', value: 'veggies'},
];

export default function AddItemModal() {
  const today = new Date();

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('meats');
  const [count, setCount] = useState('0');
  const [{month, year}, setDate] = useState({
    month: 6,
    year: 2020,
  });
  const [selectedDates, setSelectedDates] = useState({
    start: today,
    end: today,
  });
  const [iconUrl, setIconUrl] = useState('');
  const [iconSearchTerm, setIconSearchTerm] = useState('');
  const [iconResults, setIconResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedIconSearchTerm = useDebounce(iconSearchTerm, 1000);

  const handleSearchIcons = useCallback(async () => {
    const {icons} = await searchIcons(debouncedIconSearchTerm);
    const iconUrls = icons.map((icon => icon.raster_sizes[6].formats[0].preview_url));

    setIconResults(iconUrls);
    setIsSearching(false);
  }, [debouncedIconSearchTerm]);

  useEffect(() => {
    if (debouncedIconSearchTerm) {
      setIsSearching(true);
      handleSearchIcons();
    } else {
      setIconResults([]);
    }
  }, [debouncedIconSearchTerm, handleSearchIcons]);

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSubmit = useCallback(() => {
    const newItem = {
      name,
      category,
      count: parseInt(count),
      icon: iconUrl,
      expiryDate: selectedDates.end,
    };

    dispatch(thunkAddItem(newItem));

    toggleShowModal();
    setName('');
    setCategory('');
    setCount('0');
    setDate({month: 8, year: 2020});
    setSelectedDates({start: today, end: today});
    setIconUrl('');
    setIconSearchTerm('');
    setIconResults([]);
    setIsSearching(false);
  }, [name, category, count, selectedDates.end, iconUrl, today, dispatch, toggleShowModal]);

  const handleNameChange = useCallback((name) => setName(name), []);
  const handleCategoryChange  = useCallback((category) => setCategory(category), []);
  const handleCountChange = useCallback((count) => setCount(count), []);
  const handleIconChange = useCallback((searchTerm) => {
    setIconSearchTerm(searchTerm);
  }, []);
  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );
  const handleSelectIconUrl = useCallback((iconUrl) => setIconUrl(iconUrl), []);

  const disabled = name === ''
    || category === ''
    || count === '0'
    || iconUrl === '';

  const buildIconResultCards = iconResults.map((iconResult) => (
    <Card.Section key={iconResult}>
      <div className='icon-result-card'>
        <img src={iconResult} alt={'Invalid icon'} />
        <Button onClick={() => handleSelectIconUrl(iconResult)}>Pick</Button>
      </div>
    </Card.Section>
  ));

  const iconResultsMarkup = isSearching
    ? (
      <div className='spinner'>
        <Spinner accessibilityLabel="Searching icons" size="large" color="teal" />
      </div>
    ) : (
      <div className='icon-results'>
        {buildIconResultCards}
      </div>
    );

  const iconSearchMarkup = iconUrl ? (
    <TextField label="Icon search" value={iconUrl} disabled />
  ) : (
    <>
      <TextField label="Icon search" value={iconSearchTerm} placeholder={'apple'} onChange={handleIconChange} />
      {iconResultsMarkup}
    </>
  );

  return (
    <Card.Section title="Can't find your item?">
      <Button fullWidth primary onClick={toggleShowModal}>Add Item</Button>
      <Modal
        open={showModal}
        onClose={toggleShowModal}
        title='Add an item'
        primaryAction={{
          content: 'Add',
          disabled,
          onAction: handleSubmit,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: toggleShowModal,
          }
        ]}
      >
        <Modal.Section>
          <TextField label="Name of food" value={name} placeholder={'Apples'} onChange={handleNameChange} autoFocus />
          <Select label="What type of food is it?" options={categories} value={category} onChange={handleCategoryChange} />
          <TextField label="How many do you want to add?" type="number" value={count} onChange={handleCountChange} />
        </Modal.Section>
        <Modal.Section>
          <header>Pick expiry date:</header>
          <DatePicker
            month={month}
            year={year}
            onChange={setSelectedDates}
            onMonthChange={handleMonthChange}
            selected={selectedDates}
            allowRange={false}
            disableDatesBefore={today}
          />
        </Modal.Section>
        <Modal.Section>
          {iconSearchMarkup}
        </Modal.Section>
      </Modal>
    </Card.Section>
  );
}

