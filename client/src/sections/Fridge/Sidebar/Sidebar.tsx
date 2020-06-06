import React, { useState } from 'react';
import {Card } from '@shopify/polaris';
import {SidebarItem} from './components';

import './Sidebar.css';

export default function Sidebar() {
  const [categories, setCategories] = useState([
    "Meats", "Fruits", "Veggies"
  ])

  const categoriesMarkup = categories.map((category, i) => {
    return (
      <div className="category" key={i}>
        <SidebarItem category={category} buttonPressed={true} />
      </div>
    );
  })

  const handleDeleteCategory = (categoryToDelete: string) => {
    setCategories(categories.filter((category) => {return category !== categoryToDelete}));
  }
  
  const handleAddCategory = (categoryToAdd: string) => {
    if (categoryToAdd !== "") {
      setCategories([...categories, categoryToAdd]);
    }
  }

  return (
      <div className='sidebar'>
        <Card>
          {categoriesMarkup}
          <div className="category">
            <SidebarItem category='Add new category' buttonPressed={false} />
          </div>
        </Card>
      </div>
  );
}

