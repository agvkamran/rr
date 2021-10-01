import { combineReducers, createStore } from 'redux';
import homeReducer from './homeReducer';

// const reducers = combineReducers({
//     homePage: homeReducer
// });

const store = createStore(homeReducer);

export default store;