import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  Button,
  Modal,
  TextField,
  Card,
  DatePicker,
  Select
} from '@shopify/polaris';
import {thunkAddItem} from 'store/item/actions';

const categories = [
  {label: 'Meats', value: 'meats'},
  {label: 'Fruits', value: 'fruits'},
  {label: 'Veggies', value: 'veggies'},
];

export default function AddItemModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [count, setCount] = useState('0');
  const [{month, year}, setDate] = useState({
    month: 8,
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

  const handleSubmit = useCallback(() => {
    // TODO: Add validation
    const newItem = {
      name,
      category,
      count: parseInt(count),
      icon,
      expiryDate: selectedDates.end,
    };

    dispatch(thunkAddItem(newItem));

    toggleShowModal();
    setName('');
    setCategory('');
    setCount('0');
    setDate({month: 8, year: 2020});
    setSelectedDates({start: new Date(), end: new Date()});
    setIcon('');
  }, [name, category, count, icon, selectedDates.end, dispatch, toggleShowModal]);

  const handleNameChange = useCallback((name) => setName(name), []);
  const handleCategoryChange  = useCallback((category) => setCategory(category), []);
  const handleCountChange = useCallback((count) => setCount(count), []);
  const handleIconChange = useCallback((icon) => setIcon(icon), []);
  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );


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
          <Select label="Category" options={categories} value={category} onChange={handleCategoryChange} />
          <TextField label="Count" type="number" value={count} onChange={handleCountChange} />
          <header>Expiry date</header>
          <DatePicker
            month={month}
            year={year}
            onChange={setSelectedDates}
            onMonthChange={handleMonthChange}
            selected={selectedDates}
            allowRange={false}
          />
          <TextField label="Icon" value={icon} onChange={handleIconChange} />
        </Modal.Section>
      </Modal>
    </Card.Section>
  );
}

