import {createStore, combineReducers} from 'redux';
import {reducerOrders, reducerProduct, reducerClicked} from './reducer';

export let store = createStore(combineReducers({reducerOrders, reducerProduct, reducerClicked}))