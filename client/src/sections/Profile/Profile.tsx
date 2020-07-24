import {Component} from "react";
import {Page, Form, Card} from '@shopify/polaris';
import React from "react";
import { Header } from "sections/Fridge/components";
import { selectUserEmail} from "store/user/selectors";
export default function Profile() {
  
    // constructor(props: any) {
    //     super(props);
    //     console.log(props)
    // }
    // console.log("inside profile ");
    const userEmail = selectUserEmail.userEmail;
    console.log("userEmail ", userEmail);
        return (
            <div className='profile-page'>
                <Header />
                <Page>
           <Card title="Email" sectioned>
              
           <p>{userEmail}</p>
         </Card>
            </Page>
                </div>
            
        );
}

// export const selectUserEmail = createSelector(
//     selectUserState,
//     (user: UserState) => user.email,
//   );
  
//   export const selectUserFirstName = createSelector(
//     selectUserState,
//     (user: UserState) => user.firstName,
//   );
  
//   export const selectUserLastName = createSelector(
//     selectUserState,
//     (user: UserState) => user.lastName,
//   );