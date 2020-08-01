/* eslint-disable react/jsx-key */
import React, {useState, useCallback, useEffect} from 'react';
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
  FormLayout,
  ButtonGroup
} from '@shopify/polaris';
import {useSelector, useDispatch} from 'react-redux';
import {selectActiveFridge} from 'store/app/selectors';
import {thunkEditFridge, thunkDeleteFridge, thunkFetchUsersSharedWith, thunkAddUsersSharedWith} from 'store/fridge/actions';
import {selectUsersSharedWith} from 'store/fridge/selectors';

import './FridgeDetails.css';

export default function FridgeDetails() {
  const dispatch = useDispatch();
  const activeFridge = useSelector(selectActiveFridge);
  const usersSharedWith = useSelector(selectUsersSharedWith);
  const [newName, setNewName] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [newSharedUserEmail, setNewSharedUserEmail] = useState('');

  useEffect(() => {
    setShowEdit(false);

    if (activeFridge) {
      dispatch(thunkFetchUsersSharedWith(activeFridge._id));
    }
  }, [activeFridge, dispatch]);

  const toggleShowEdit = useCallback(() => {
    setShowEdit(!showEdit);
  }, [showEdit]);

  const handleNewFridgeName = useCallback((value: string) => {
    setNewName(value);
  }, []);

  const handleNewSharedUserChange = useCallback((value: string) => {
    setNewSharedUserEmail(value);
  }, []);

  const handleSubmitNewName = useCallback(() => {
    const newFridge = {
      ...activeFridge,
      name: newName,
    };

    dispatch(thunkEditFridge(newFridge));
    setNewName('');
    setShowEdit(false);
  }, [newName, activeFridge, dispatch]);

  const handleSubmitNewSharedUser = useCallback(() => {
    dispatch(thunkAddUsersSharedWith(newSharedUserEmail));
    setNewSharedUserEmail('');
  }, [newSharedUserEmail, dispatch]);

  const handleDeleteFridge = useCallback(() => {
    if (activeFridge) {
      dispatch(thunkDeleteFridge(activeFridge._id));
    }
  }, [activeFridge, dispatch]);

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
      <ButtonGroup segmented>
        <Button onClick={toggleShowEdit}>
          Cancel
        </Button>
        <Button onClick={handleSubmitNewName} disabled={newName.length === 0}>
          Submit
        </Button>
      </ButtonGroup>
    ]
    : ['Name', name, <Button onClick={toggleShowEdit}>Change</Button>];

  const rows = [
    nameRow,
    ['# of food items', itemIds.length]
  ];

  const userResourceList = usersSharedWith.map(({_id, firstName, lastName}) => {
    return {
      id: _id,
      url: '',
      name: `${firstName} ${lastName}`
    };
  });

  return (
    <div className='fridge-details'>
      <Card
        title="Fridge Management"
        primaryFooterAction={{
          content: 'Delete fridge',
          onAction: handleDeleteFridge,
          disabled: !activeFridge,
          destructive: true
        }}
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
            items={userResourceList}
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
              value={newSharedUserEmail}
              onChange={handleNewSharedUserChange}
              label="Email"
              type="email"
              helpText={
                <span>
                  We’ll share this fridge with the owner of this email address.
                </span>
              }
            />
            <Button onClick={handleSubmitNewSharedUser}>Add</Button>
          </FormLayout>
        </Card.Section>
      </Card>
    </div>
  );
}