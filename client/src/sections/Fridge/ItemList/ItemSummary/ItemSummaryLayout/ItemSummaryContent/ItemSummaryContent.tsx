import React from 'react';
import {DataTable} from '@shopify/polaris';

import './ItemSummaryContent.css';

interface Props {
  category: string;
  count: number;
  expiry: string;
}

export default function ItemSummaryContent({
  category,
  count,
  expiry
}: Props) {
  const rows = [
    ['Category', category],
    ['Count', count],
    ['Expiry date', expiry]
  ];

  return (
    <div className='item-summary-content'>
      <DataTable
        columnContentTypes={[
          'text',
          'text'
        ]}
        headings={[]}
        rows={rows}
      />
    </div>
  );
}