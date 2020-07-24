import React, {useState, useCallback} from 'react';
import {Card, Button} from '@shopify/polaris';
import {SidebarItem, AddCategoryModal} from './components';

import './Sidebar.css';

const mockCategories = [
  "Meats", "Fruits", "Veggies"
];

export default function Sidebar() {
  const [editMode, setEditMode] = useState(false);
  const [categories, setCategories] = useState(mockCategories);
  const [value, setValue] = useState('');

  const handleEditMode = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  const handleDeleteCategory = useCallback((categoryToDelete: string) => {
    const newCategories = categories.filter((category) => {return category !== categoryToDelete;});

    setCategories(newCategories);
  }, [categories]);

  const handleAddCategory = useCallback((value) => {
    setCategories([...categories, value]);
    setValue('');
  }, [categories]);

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const editMarkup = editMode ? 'Done edit' : 'Edit';

  const categoriesMarkup = categories.map((category, i) => {
    return (
      <div key={i}>
        <SidebarItem category={category} buttonPressed={true} edit={editMode} onDelete={handleDeleteCategory} />
      </div>
    );
  });

  return (
    <div className='sidebar'>
      <Card title='Filter categories'>
        <Card.Section>
          {categoriesMarkup}
        </Card.Section>
        <Card.Section>
          <Button onClick={handleEditMode}>{editMarkup}</Button>
          <AddCategoryModal isEdit={editMode} value={value} onValueChange={handleTextChange} onAdd={handleAddCategory} />
        </Card.Section>
      </Card>
    </div>
  );
}

