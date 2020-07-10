import {Modal, TextField, Banner} from '@shopify/polaris';
import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from 'store/user/actions';

interface Props {
  active: boolean;
  handleChange: () => void;
}

export default function RegisterModal({active, handleChange}: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      setShowWarning(true);
    } else {
      dispatch(login({email}));
      history.push('/home');
    }
  };

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
      <Modal
        open={active}
        onClose={handleChange}
        title="Register"
        primaryAction={{
          content: 'Register',
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