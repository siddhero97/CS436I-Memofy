import React, { useState, useCallback } from 'react';
import {Card, Button, Modal, TextField } from '@shopify/polaris';
import {SidebarItem} from './components';

import './Sidebar.css';

const mockCategories = [
  "Meats", "Fruits", "Veggies"
]

// NEED TO REFACTOR
export default function Sidebar() {
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');
  const [categories, setCategories] = useState(mockCategories);

  const handleEditMode = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  const toggleShowModal = useCallback(() => {
    setValue('');
    setShowModal(!showModal);
  }, [showModal]);

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const handleDeleteCategory = useCallback((categoryToDelete: string) => {
    const newCategories = categories.filter((category) => {return category !== categoryToDelete});

    setCategories(newCategories);
  }, [categories]);
  
  const handleAddCategory = useCallback(() => {
    setCategories([...categories, value]);
    toggleShowModal();
  }, [categories, value, toggleShowModal]);

  const actionContent = editMode ? 'Close edit' : 'Edit';

  const categoriesMarkup = categories.map((category, i) => {
    return (
      <div key={i}>
        <SidebarItem category={category} buttonPressed={true} edit={editMode} onDelete={handleDeleteCategory} />
      </div>
    );
  })

  return (
      <div className='sidebar'>
        <Card
          actions={[
            {
              content: actionContent,
              onAction: handleEditMode,
            }
          ]}
        >
          {categoriesMarkup}
          <div className="modal-button">
            <Button primary onClick={toggleShowModal}>+</Button>
            <Modal
              open={showModal}
              onClose={toggleShowModal}
              title='Add new category'
              primaryAction={{
                content: 'Add',
                onAction: handleAddCategory,
              }}
              secondaryActions={[
                {
                  content: 'Cancel',
                  onAction: toggleShowModal,
                }
              ]}
            >
              <Modal.Section>
                <TextField label="Category name" value={value} onChange={handleTextChange} />
              </Modal.Section>
            </Modal>
          </div>
        </Card>
      </div>
  );
}

