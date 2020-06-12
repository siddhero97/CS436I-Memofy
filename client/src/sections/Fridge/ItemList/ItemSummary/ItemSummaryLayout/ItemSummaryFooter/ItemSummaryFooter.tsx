import React from 'react';
import {Button} from '@shopify/polaris';

import './ItemSummaryFooter.css';

interface Props {
  onClose: () => void;
}

export default function ItemSummaryFooter({onClose}: Props) {
  return (
    <div className='project-summary-footer'>
      <Button onClick={onClose}>Close</Button>
      <Button primary>
        Edit
      </Button>
    </div>
  );
}