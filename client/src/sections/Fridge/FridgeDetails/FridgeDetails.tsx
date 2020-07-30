import React from 'react';
import {
  Card,
  EmptyState,
  DataTable,
  ResourceList,
  Avatar,
  ResourceItem,
  TextStyle,
  TextField,
  Button,
  FormLayout
} from '@shopify/polaris';
import {useSelector} from 'react-redux';
import {selectActiveFridge} from 'store/app/selectors';

import './FridgeDetails.css';

export default function FridgeDetails() {
  const activeFridge = useSelector(selectActiveFridge);

  if (!activeFridge) {
    return (
      <div className='fridge-details'>
        <Card title="Fridge Management">
          <EmptyState
            heading="Pick a fridge on the left to get started"
            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          >
            <p className='emptystate-paragraph'>View and edit details about a fridge.</p>
          </EmptyState>
        </Card>
      </div>
    );
  }

  const {name, itemIds} = activeFridge;

  const rows = [
    // eslint-disable-next-line react/jsx-key
    ['Name', name, <Button>Rename</Button>],
    ['# of food items', itemIds.length]
  ];

  return (
    <div className='fridge-details'>
      <Card
        title="Fridge Management"
        primaryFooterAction={{content: 'Delete fridge', destructive: true}}
      >
        <Card.Section title="Summary">
          <DataTable
            columnContentTypes={[
              'text',
              'text'
            ]}
            headings={[]}
            rows={rows}
          />
        </Card.Section>
        <Card.Section title="Shared with">
          <ResourceList
            resourceName={{singular: 'customer', plural: 'customers'}}
            items={[
              {
                id: '341',
                url: '',
                name: 'Mae Jemison'
              },
              {
                id: '256',
                url: '',
                name: 'Ellen Ochoa'
              },
            ]}
            renderItem={(item) => {
              const {id, url, name} = item;
              const media = <Avatar customer size="medium" name={name} />;

              return (
                <ResourceItem
                  id={id}
                  url={url}
                  media={media}
                  accessibilityLabel={`View details for ${name}`}
                >
                  <h3>
                    <TextStyle variation="strong">{name}</TextStyle>
                  </h3>
                </ResourceItem>
              );
            }}
          />
        </Card.Section>
        <Card.Section title='Share'>
          <FormLayout>
            <TextField
              value={''}
              onChange={() => null}
              label="Email"
              type="email"
              helpText={
                <span>
                  We’ll share this fridge with the owner of this email address.
                </span>
              }
            />
            <Button>Add</Button>
          </FormLayout>
        </Card.Section>
      </Card>
    </div>
  );
}