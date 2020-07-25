import React from 'react';
import {Modal} from '@shopify/polaris';
interface Props {
    active: boolean;
    handleChange: () => void;
}
export default function ChangePasswordModal({active, handleChange}: Props){
  // const password = useSelector(select);

  return (
    <div className='change-password'>
      <Modal
        open={active}
        onClose={handleChange}
        title="Change Password"
        primaryAction={{
          content: 'Change Password',
          //   onAction: handleLogin,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
          // onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          {/* <TextField
          value={firstName}
          onChange={handleFirstNameChange}
          label="First Name"
          type="text"
          /> */}
        </Modal.Section>
      </Modal>
    </div>
  );
}