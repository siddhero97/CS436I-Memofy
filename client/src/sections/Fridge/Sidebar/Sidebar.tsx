import React, { useState } from 'react';
import { Button, Card } from '@shopify/polaris';
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

