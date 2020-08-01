import {Modal, TextField, Banner, EventListener} from '@shopify/polaris';
import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {thunkLogin} from 'store/user/actions';

interface Props {
  active: boolean;
  handleChange: () => void;
}

export default function LoginModal({active, handleChange}: Props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleLogin = useCallback(() => {
    if (email === "" || password === "") {
      setShowWarning(true);
    } else {
      try {
        dispatch(thunkLogin(email, password));
      } catch (error) {
        setShowWarning(true);
      }
    }
  }, [email, password, dispatch]);

  const handleEnterKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  }, [handleLogin]);

  const handleEmailChange  = useCallback((value) => setEmail(value), []);
  const handlePasswordChange = useCallback((value) => setPassword(value), []);

  const warningMarkup = showWarning ? (
    <Banner status="warning">
      <p>
        Sorry, an error occured. Please enter all fields and try again.
      </p>
    </Banner>
  ) : null;

  return (
    <div className='login-modal'>
      <EventListener capture event="keypress" handler={handleEnterKey} />
      <Modal
        open={active}
        onClose={handleChange}
        title="Login"
        primaryAction={{
          content: 'Login',
          onAction: handleLogin,
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