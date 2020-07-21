import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Modal, TextField, Card, DatePicker, Select} from '@shopify/polaris';
import {thunkAddItem} from 'store/item/actions';

export default function AddItemModal() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [fridge, setFridge] = useState('My fridge');
  const fridges = [
    {label: 'My fridge', value: 'today'},
    {label: 'Home fridge', value: 'yesterday'},
    {label: 'Dorm fridge', value: 'lastWeek'},
  ];
  const [category, setCategory] = useState('Categories');
  const categories = [
    {label: 'Meats', value: 'today'},
    {label: 'Fruits', value: 'yesterday'},
    {label: 'Veggies', value: 'lastWeek'},
  ];
  const [count, setCount] = useState('0');
  const [{month, year}, setDate] = useState({
    month: 6,
    year: 2020,
  });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Tues Jul 22 2020 00:00:00 GMT-0500 (EST)'),
    end: new Date('Tues Jul 22 2020 00:00:00 GMT-0500 (EST)'),
  });
  const [icon, setIcon] = useState('');

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSubmit = useCallback(() => {
    const newItem = {
      fridgeId: 1234,
      count: +count,
      name: name,
      // this will come from the database once setup
      category: 'Fruits',
      icon: 'url',
      expiryDate: new Date(),
    };

    dispatch(thunkAddItem(newItem));
    toggleShowModal();
  }, [dispatch, value, toggleShowModal]);

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);
  const handleNameChange = useCallback((name) => setName(name), []);
  const handleFridgeChange = useCallback((fridge) => setFridge(fridge), []);
  const handleCategoryChange  = useCallback((category) => setCategory(category), []);
  const handleCountChange = useCallback((count) => setCount(count), []);
  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );
  const handleIconChange = useCallback((icon) => setIcon(icon), []);

  return (
    <Card.Section title="Can't find your item?">
      <Button fullWidth primary onClick={toggleShowModal}>Add Item</Button>
      <Modal
        open={showModal}
        onClose={toggleShowModal}
        title='Add new food item'
        primaryAction={{
          content: 'Add',
          disabled: value === '',
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
          <TextField label="Food name" value={name} onChange={handleNameChange} />
          <Select label="Fridge" options={fridges} onChange={handleFridgeChange} value={fridge} />
          <Select label="Category" options={categories} value={category} onChange={handleCategoryChange} />
          <TextField label="Count" type="number" value={count} onChange={handleCountChange} />
          <header>Expiry date</header>
          <DatePicker month={month} year={year} onChange={setSelectedDates} onMonthChange={handleMonthChange}
          selected={selectedDates} />
          <TextField label="Icon" value={icon} onChange={handleIconChange} />
        </Modal.Section>
      </Modal>
    </Card.Section>
  );
}

