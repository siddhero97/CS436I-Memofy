import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import {rootReducer} from './index';

export default function configureStore() { 
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}