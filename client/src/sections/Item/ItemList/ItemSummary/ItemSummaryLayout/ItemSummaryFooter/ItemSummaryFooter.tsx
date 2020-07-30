import React from 'react';
import {Button} from '@shopify/polaris';

import './ItemSummaryFooter.css';

interface Props {
  onClose: () => void;
  onEdit: () => void;
}

export default function ItemSummaryFooter({onClose, onEdit}: Props) {
  return (
    <div className='project-summary-footer'>
      <Button onClick={onClose}>Close</Button>
      <Button primary onClick={onEdit}>
        Edit
      </Button>
    </div>
  );
}