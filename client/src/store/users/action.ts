import {LOGIN, LOGOUT, User, UserActionTypes} from './types';

export function login(user: User): UserActionTypes {
    return {
        type: LOGIN,
        payload: user,
    };
}

export function logout():UserActionTypes {
    return {
        type: LOGOUT,
        payload: null
    };
}