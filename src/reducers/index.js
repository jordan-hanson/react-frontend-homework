import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { hotelReducer } from './hotelReducer';

export const rootReducer = combineReducers({
    searchReducer,
    hotelReducer
})