import {LOGIN, LOGOUT, User, UserActionTypes} from './types';

export function login(user: User): UserActionTypes {
    return {
        type: LOGIN,
        payload: user,
    };
}

export function logout(userName: string):UserActionTypes {
    return {
        type: LOGOUT,
        payload: userName,
    };
}