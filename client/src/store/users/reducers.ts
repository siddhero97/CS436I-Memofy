import {LOGIN, LOGOUT, User, UserActionTypes} from './types';
import {ItemState, UserState} from "../types";

const initialUsers: User[] = [
    {
        name: 'Siddhartha Gupta',
        userName: "siddhero97",
        isLoggedIn: false
    },
    {
        name: 'Kwan Lam',
        userName: "masterKwan",
        isLoggedIn: false
    }
];

export const initialState: UserState = {
   users: initialUsers,
    isLoggedIn: false,
    currUser: null,
};

export function userReducer(
    state = initialState,
    action: UserActionTypes,
): UserState {
    switch (action.type) {
        case LOGIN:
            return {
                users: [...state.users, action.payload],
                isLoggedIn: true,
                currUser: action.payload
            };
        case LOGOUT:
            console.log("Inside Logout");
            return {
                users: [...state.users].filter(({userName}) => userName !== action.payload),
                isLoggedIn: isLoggedIn(state.users),
                currUser: null
            };
        default:
            return state;
    }
}

function isLoggedIn(users: User[]): boolean {
    let isLoggedIn = false;
    for(let user of users) {
        if(user.isLoggedIn) {
            isLoggedIn = true;
            return  isLoggedIn;
        }
    }
    return  isLoggedIn;
}