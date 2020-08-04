import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {MediaCard} from '@shopify/polaris';

import './PageSelection.css';

interface MediaCardItem {
  title: string;
  description: string;
  path: string;
  imgPath: string;
}
const mediaCardItems: MediaCardItem[] = [
  {
    title: 'Food Overview',
    description: "Check out what's sitting in your fridges.",
    path: '/items',
    imgPath: "https://burst.shopifycdn.com/photos/colorful-fresh-vegetables-flatlay.jpg?width=1850"
  },
  {
    title: 'Fridge Management',
    description: "Manage your fridges here.",
    path: '/fridges',
    imgPath: "https://burst.shopifycdn.com/photos/modern-updated-kitchen-interior-home.jpg?width=1850"
  },
  {
    title: 'Profile',
    description: "View and edit your profile details here.",
    path: '/profile',
    imgPath: "https://burst.shopifycdn.com/photos/bearded-young-man.jpg?width=1850"
  }
];

export default function PageSelection() {
  const history = useHistory();

  const handleEnter = useCallback((path: string) => {
    history.push(path);
  }, [history]);

  const mediaCardMarkup = mediaCardItems.map(({title, description, path, imgPath}) => {
    return (
      <MediaCard
        key={path}
        title={title}
        primaryAction={{
          content: 'Enter',
          onAction: () => handleEnter(path),
        }}
        description={description}
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          src={imgPath}
        />
      </MediaCard>
    );
  });

  return (
    <div className='page-selection'>
      {mediaCardMarkup}
    </div>
  );
}