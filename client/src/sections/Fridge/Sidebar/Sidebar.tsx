import React, { useState } from 'react';
 

import './Sidebar.css';

export default function Sidebar() {

  const [categories, setCategories] = useState([
    "Meats", "Fruits", "Veggies"
  ])

  return (
      <div className='sidebar'>
        {categories.map( i => (
          <div className="category" key={i}>{i}</div>
          )
        )}
        <div className="category" onClick={() => setCategories(categories => [...categories, "apple"])}>+</div>
      </div>
  );
}

