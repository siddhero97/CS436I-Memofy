import {useState, useCallback} from "react";
import {Card, Button} from '@shopify/polaris';
import React from "react";
import {Header} from "sections/Fridge/components";
import {selectUserEmail, selectUserFirstName, selectUserLastName} from "store/user/selectors";
import {useSelector} from "react-redux";
import ChangePasswordModal from "./ChangePasswordModal";
export default function Profile() {
  const userEmail = useSelector(selectUserEmail);
  //   console.log("userEmail ", userEmail);
  const firstName = useSelector(selectUserFirstName);
  const lastName = useSelector(selectUserLastName);
  const [showChangePasswordModal, setChangePasswordModal] = useState(false);
  const toggleShowChangePasswordModal = useCallback(() => setChangePasswordModal (!showChangePasswordModal), [showChangePasswordModal]);
  // console.log("userEmail ", userEmail);
  return (
    <div className='profile-page'>
      <Header />
      <Card title="Welcome To The Profile" sectioned>
      </Card>
      <Card title="Email" sectioned>
        <p>{userEmail}</p>
      </Card>
      <Card title="First Name" sectioned>
        <p>{firstName}</p>
      </Card>
      <Card title="Last Name" sectioned>
        <p>{lastName}</p>
      </Card>
      <Card title ="Password" sectioned>
        <Button onClick={toggleShowChangePasswordModal}>Change Password
        </Button>
      </Card>
      <ChangePasswordModal active={showChangePasswordModal} handleChange={toggleShowChangePasswordModal} />
    </div>
  );}