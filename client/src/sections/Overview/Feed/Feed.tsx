import React from 'react';
import './Feed.css';
import {Card, TextContainer} from '@shopify/polaris';

export default function Feed() {
  return (
    <div className='feed'>
      <Card title='Feed'>
        <TextContainer>
          This is where the feed goes.
        </TextContainer>
      </Card>
    </div>
  );
}