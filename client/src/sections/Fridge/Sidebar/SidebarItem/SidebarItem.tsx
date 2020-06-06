import React, { useState } from 'react';
import {Button} from '@shopify/polaris';

import './SidebarItem.css';

interface Props {
  category: string;
  buttonPressed: boolean;
}

export default function SidebarItem({
  category,
  buttonPressed = false
}: Props) {
  const [pressed, setPressed] = useState<boolean>(buttonPressed);

  const handleClick = () => {
    setPressed(!pressed);
  }

  return (
    <Button pressed={pressed} onClick={handleClick}>{category}</Button>
  );
}

