import React, { useState } from 'react';
import {Button} from '@shopify/polaris';

import './SidebarItem.css';

interface Props {
  category: string;
  buttonPressed: boolean;
  edit: boolean;
  onDelete: (category: string) => void;
}

export default function SidebarItem({
  category,
  buttonPressed = false,
  edit,
  onDelete,
}: Props) {
  const [pressed, setPressed] = useState<boolean>(buttonPressed);

  const handleClick = () => {
    setPressed(!pressed);
  }

  const destructiveButtonMarkup = edit 
    ? <Button onClick={() => onDelete(category)} destructive>{category} X</Button>
    : <Button pressed={pressed && !edit} disabled={edit} onClick={handleClick}>{category}</Button>;

  return (
    <div className='sidebar-item'>
      {destructiveButtonMarkup}
    </div>
  );
}

