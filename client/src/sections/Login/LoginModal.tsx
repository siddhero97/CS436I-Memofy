import {Button, Card, Heading, ButtonGroup, Modal, TextField} from '@shopify/polaris';
import React, {useState, useCallback} from 'react';

export default function LoginModal(props: any) {

    return (
        <div className='loginModal'>
            <Modal
                open={props.active}
                onClose={props.handleChange}
                title="Login"
                primaryAction={{
                    content: 'Login',
                    onAction: props.handleLogin,
                }}
                secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: props.handleChange,
                },
            ]}
            >
                <Modal.Section>
                <TextField
                    value={props.email}
                    onChange={props.handleEmailLogin}
                    label="Email"
                    type="email"
                />
                <TextField
                    value={props.password}
                    onChange={props.handlePasswordLogin}
                    label="Password"
                    type="password"
                />
                </Modal.Section>
            </Modal>
        </div>
    );
}