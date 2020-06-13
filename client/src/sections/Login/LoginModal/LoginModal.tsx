import {Modal, TextField} from '@shopify/polaris';
import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

interface Props {
  active: boolean;
  handleChange: () => void;
}

export default function LoginModal({active, handleChange}: Props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    history.push('/home');
  };

  const handleEmailChange  = useCallback((value) => setEmail(value), []);
  const handlePasswordChange = useCallback((value) => setPassword(value), []);

  return (
    <div className='login-modal'>
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
      </Modal>
    </div>
  );
}