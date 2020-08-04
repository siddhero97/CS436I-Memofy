/* eslint-disable react/jsx-key */
import React, {useState, useCallback} from 'react';
import {Card, DataTable, TextField} from '@shopify/polaris';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectUserFirstName,
  selectUserLastName,
  selectUserEmail,
  selectUserId
} from 'store/user/selectors';

import './PersonalInfo.css';
import {thunkEditUser} from 'store/user/actions';

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const id = useSelector(selectUserId);
  const firstName = useSelector(selectUserFirstName);
  const lastName = useSelector(selectUserLastName);
  const email = useSelector(selectUserEmail);
  const [newName, setNewName] = useState(`${firstName} ${lastName}`);
  const [newEmail, setNewEmail] = useState(email);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  const handleNewNameChange = useCallback((value: string) => {
    setNewName(value);
  }, []);

  const handleNewEmailChange = useCallback((value: string) => {
    setNewEmail(value);
  }, []);

  const handleCancel = useCallback(() => {
    setNewName('');
    setNewEmail('');
    toggleEditMode();
  }, [toggleEditMode]);

  const handleSubmit = useCallback(() => {
    const [firstName, lastName] = newName.split(' ');

    const newUser = {
      _id: id,
      firstName,
      lastName: lastName ? lastName : '',
      email: newEmail
    };

    dispatch(thunkEditUser(newUser));

    setNewName(`${firstName} ${lastName ? lastName : ''}`);
    setNewEmail(newEmail);
    toggleEditMode();
  }, [newName, newEmail, id, toggleEditMode, dispatch]);

  const rows = editMode ? [
    [
      'Name',
      <TextField
        value={newName}
        label='name'
        labelHidden
        onChange={handleNewNameChange}
      />
    ],
    [
      'Email',
      <TextField
        value={newEmail}
        label='email'
        labelHidden
        onChange={handleNewEmailChange}
      />
    ]
  ] : [
    ['Name', `${firstName} ${lastName}`],
    ['Email', email]
  ];

  const actions = editMode ? [
    {
      content: 'Cancel',
      onAction: handleCancel,
    },
    {
      content: 'Done',
      onAction: handleSubmit,
    }
  ] : [{
    content: 'Edit',
    onAction: toggleEditMode,
  }];

  return (
    <div className='personal-info'>
      <Card
        title='Personal Info'
        sectioned
        actions={actions}
      >
        <Card.Section title="Summary">
          <DataTable
            columnContentTypes={[
              'text',
              'text',
            ]}
            headings={[]}
            rows={rows}
          />
        </Card.Section>
      </Card>
    </div>
  );
}