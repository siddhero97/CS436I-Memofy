import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal, TextField, Card, DatePicker, Select} from '@shopify/polaris';
import {thunkAddItem} from 'store/item/actions';
import {selectActiveFridge} from 'store/app/selectors';

export default function AddItemModal() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const fridges = [
    {label: 'My fridge', value: '0'},
    {label: 'Home fridge', value: '1'},
    {label: 'Dorm fridge', value: '2'},
  ];
  const [category, setCategory] = useState('meats');
  const categories = [
    {label: 'Meats', value: 'meats'},
    {label: 'Fruits', value: 'fruits'},
    {label: 'Veggies', value: 'veggies'},
  ];
  const [count, setCount] = useState('0');
  const [{month, year}, setDate] = useState({
    month: 6,
    year: 2020,
  });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  });
  const [icon, setIcon] = useState('');

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const activeFridge = useSelector(selectActiveFridge);

  const handleSubmit = useCallback(() => {
    const newItem = {
      fridgeId: activeFridge,
      count: +count,
      name: name,
      // this will come from the database once setup
      category: category,
      icon: icon,
      expiryDate: selectedDates.end,
    };

    dispatch(thunkAddItem(newItem));
    toggleShowModal();
    setName('');
    setFridge('0');
    setCategory('meats');
    setCount('0');
    setDate({month: 6, year: 2020});
    setSelectedDates({start: new Date(), end: new Date()});
    setIcon('');
  }, [dispatch, name, fridge, category, count, month, year, selectedDates, icon, toggleShowModal]);

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
          disabled: name === '',
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
          selected={selectedDates} allowRange={false} />
          <TextField label="Icon" value={icon} onChange={handleIconChange} />
        </Modal.Section>
      </Modal>
    </Card.Section>
  );
}

