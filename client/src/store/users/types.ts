import {Item} from "../item/types";

export interface User {
    name: string;
    userName: string;
    isLoggedIn: boolean;
}

export const LOGIN = 'LOGIN';
export const IS_LOGIN = 'IS_LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
    type: typeof LOGIN;
    payload: User;
}
interface LogoutAction {
    type: typeof LOGOUT;
    payload: string;
}

export type UserActionTypes = LoginAction  | LogoutAction;