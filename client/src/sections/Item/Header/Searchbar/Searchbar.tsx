import React, {useState, useCallback} from 'react';
import {TextField, Button} from '@shopify/polaris';
import './Searchbar.css';

export default function Searchbar() {
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const handleClearButtonClick = useCallback(() => setTextFieldValue(''), []);

  const handleSubmit = () => console.log('searching');
  // useCallback(() => )


  return (
    <div className='search-box'>
      <TextField 
        label=''
        placeholder="Search an item..."
        value={textFieldValue}
        onChange={handleTextFieldChange}
        clearButton
        onClearButtonClick={handleClearButtonClick}
      />
      <Button 
        onClick={handleSubmit}
      >Search</Button>
    </div>
  )
}

