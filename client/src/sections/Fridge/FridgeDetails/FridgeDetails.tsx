/* eslint-disable react/jsx-key */
import React, {useState, useCallback} from 'react';
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
  const [newName, setNewName] = useState('');
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEdit = useCallback(() => {
    setShowEdit(true);
  }, []);

  const handleNewFridgeName = useCallback((value: string) => {
    setNewName(value);
  }, []);

  const handleSubmitNewName = useCallback(() => {
    if (!newName) {
      return null;
    }

    // TODO: Call dispatch to call updateFridge API
    setNewName('');
    setShowEdit(false);
  }, [newName]);

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

  const nameRow = showEdit
    ? [
      'Name',
      <TextField
        value={newName}
        label='name'
        labelHidden
        onChange={handleNewFridgeName}
      />,
      <Button onClick={handleSubmitNewName}>
        Submit
      </Button>
    ]
    : ['Name', name, <Button onClick={toggleShowEdit}>Change</Button>];

  const rows = [
    // eslint-disable-next-line react/jsx-key
    nameRow,
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