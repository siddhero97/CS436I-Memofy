import React from 'react';
import './FridgeIcon.css';

export default function FridgeIcon() {
  // going to add some ui features to show active icon later
  const handleClick = () => {
    // console.log('click');
  };

  return (
    <div className='icon-box' onClick={handleClick}>
      <div className='icon'>
        <h2>A</h2>
      </div>
    </div>
  );
}

