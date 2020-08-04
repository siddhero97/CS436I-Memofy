import {Modal, TextField, Banner, EventListener} from '@shopify/polaris';
import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {thunkCreateUser} from 'store/user/actions';

interface Props {
  active: boolean;
  handleChange: () => void;
}

export default function RegisterModal({active, handleChange}: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleRegister = useCallback(() => {
    if (email === "" || password === "") {
      setShowWarning(true);
    } else {
      dispatch(thunkCreateUser(
        firstName,
        lastName,
        email,
        password,
      ));
      history.push('/home');
    }
  }, [firstName, lastName, email, password, history, dispatch]);

  const handleEnterKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleRegister();
    }
  }, [handleRegister]);

  const handleFirstNameChange = useCallback((value) => setFirstName(value), []);
  const handleLastNameChange = useCallback((value) => setLastName(value), []);
  const handleEmailChange  = useCallback((value) => setEmail(value), []);
  const handlePasswordChange = useCallback((value) => setPassword(value), []);

  const warningMarkup = showWarning ? (
    <Banner status="warning">
      <p>
        Please enter all fields.
      </p>
    </Banner>
  ) : null;

  return (
    <div className='login-modal'>
      <EventListener capture event="keypress" handler={handleEnterKey} />
      <Modal
        open={active}
        onClose={handleChange}
        title="Register"
        primaryAction={{
          content: 'Register',
          onAction: handleRegister,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextField
            value={firstName}
            onChange={handleFirstNameChange}
            label="First Name"
            type="text"
          />
          <TextField
            value={lastName}
            onChange={handleLastNameChange}
            label="Last Name"
            type="text"
          />
          <TextField
            value={email}
            onChange={handleEmailChange}
            label="Email"
            type="email"
          />
          <TextField
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            type="password"
          />
        </Modal.Section>
        {warningMarkup}
      </Modal>
    </div>
  );
}