import React from 'react';
import {Card, List} from '@shopify/polaris';

import './Item.css';

interface Props {
  name: string;
  expiry: string;
}

export default function Item({name, expiry}: Props) {
  return (
    <div className='item'>
      <Card 
          sectioned
          primaryFooterAction={{
          content: 'Details',
          onAction: () => console.log('Remove!'),
          }}
      >
        <Card.Section title={name}>
          <List>
            <List.Item>Expiry date: {expiry}</List.Item>
          </List>
        </Card.Section>
      </Card>
    </div>
  );
}
