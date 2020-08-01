import React, {useState, useCallback, useEffect} from 'react';
import {Heading, Scrollable, Button, Card, TextField, Select, DatePicker, Spinner, FormLayout} from '@shopify/polaris';
import {Item} from 'store/item/types';

import './ItemSummaryLayout.css';
import {ItemSummaryContent, ItemSummaryFooter} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {thunkEditItem} from 'store/item/actions';
import {searchIcons, useDebounce} from 'utils';
import {selectActiveFridge} from 'store/app/selectors';

interface Props {
  item: Item;
  onClose: () => void;
}

export default function ItemSummaryLayout({item, onClose}: Props) {
  const oldExpiry = new Date(item.expiryDate);

  const dispatch = useDispatch();
  const activeFridge = useSelector(selectActiveFridge);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isChangeIcon, setIsChangeIcon] = useState(false);
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [count, setCount] = useState(item.count.toString());
  const [{month, year}, setDate] = useState({
    month: oldExpiry.getMonth(),
    year: oldExpiry.getFullYear(),
  });
  const [selectedDates, setSelectedDates] = useState({
    start: oldExpiry,
    end: oldExpiry,
  });
  const [iconUrl, setIconUrl] = useState(item.icon);
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
  const handleChangeIconMode = useCallback(() => setIsChangeIcon(true), []);
  const handleSelectIconUrl = useCallback((iconUrl) => {
    setIconUrl(iconUrl);
    setIsChangeIcon(false);
    setIconSearchTerm('');
  }, []);
  const handleRevertIcon = useCallback(() => {
    setIconUrl(item.icon);
    setIsChangeIcon(false);
    setIconSearchTerm('');
  }, [item.icon]);

  const toggleEditMode = useCallback(() => {
    if (isEditMode) {
      setName(item.name);
      setCategory(item.category);
      setCount(item.count.toString());
      setDate({
        month: oldExpiry.getMonth(),
        year: oldExpiry.getFullYear(),
      });
      setSelectedDates({
        start: oldExpiry,
        end: oldExpiry,
      });
      setIconUrl(item.icon);
    }

    setIsEditMode(!isEditMode);
  }, [isEditMode, item, oldExpiry]);

  const handleSaveEdit = useCallback(() => {
    const newItem: Item = {
      _id: item._id,
      name: name,
      category: category,
      count: parseInt(count),
      icon: iconUrl === '' ? item.icon : iconUrl,
      expiryDate: selectedDates.end
    };

    dispatch(thunkEditItem(newItem));
    setIsEditMode(false);
    onClose();
  }, [item._id, name, category, count, iconUrl, item.icon, selectedDates.end, dispatch, onClose]);

  const buildIconResultCards = iconResults.map((iconResult) => (
    <Card.Section key={iconResult}>
      <div className='icon-result-card'>
        <img src={iconResult} alt={'Invalid icon'} />
        <Button onClick={() => handleSelectIconUrl(iconResult)}>Pick</Button>
      </div>
    </Card.Section>
  ));

  const categories = activeFridge ? activeFridge.categories : [];

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

  const iconSearchMarkup = !isChangeIcon ? (
    <Card.Section>
      <Card.Section title='Icon' >
        <div className='current-icon'>
          <img className='item-logo' src={iconUrl} alt='appleLogo' />
        </div>
      </Card.Section>
      <TextField label="Icon search" value={iconUrl} disabled />
      <div className='icon-buttons'>
        <Button primary onClick={handleChangeIconMode}>
          Change
        </Button>
      </div>
    </Card.Section>
  ) : (
    <>
      <Card.Section>
        <Card.Section title='Icon' >
          <div className='current-icon'>
            <div>
              <img className='item-logo' src={iconUrl} alt='appleLogo' />
            </div>
          </div>
        </Card.Section>
        <TextField label="Icon search" value={iconSearchTerm} placeholder={'Search for an icon...'} onChange={handleIconChange} />
        <div className='icon-buttons'>
          <Button onClick={handleRevertIcon}>
            Cancel
          </Button>
        </div>
        {iconResultsMarkup}
      </Card.Section>
    </>
  );

  const contentMarkup = isEditMode ?
    <Card>
      <Card.Section>
        <FormLayout>
          <TextField label="Food name" value={name} onChange={handleNameChange} />
          <Select label="Category" options={categories} value={category} onChange={handleCategoryChange} />
          <TextField label="Count" type="number" value={count} onChange={handleCountChange} />
        </FormLayout>
      </Card.Section>
      <Card.Section title='Expiry date'>
        <DatePicker month={month} year={year} onChange={setSelectedDates} onMonthChange={handleMonthChange}
          selected={selectedDates} allowRange={false} />
      </Card.Section>
      {iconSearchMarkup}
    </Card> :
    <ItemSummaryContent {...item} />;

  const footerMarkup = isEditMode ?
    <div className='project-summary-footer'>
      <Button onClick={toggleEditMode}>Cancel</Button>
      <Button primary onClick={handleSaveEdit}>
        Save
      </Button>
    </div> :
    <ItemSummaryFooter onClose={onClose} onEdit={toggleEditMode} />;

  return (
    <div className='item-summary-layout'>
      <div className='item-summary-heading'>
        <Heading>{item.name}</Heading>
      </div>
      <Scrollable>
        {contentMarkup}
      </Scrollable>
      {footerMarkup}
    </div>
  );
}