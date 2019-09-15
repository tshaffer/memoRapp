/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
import {
  MemoRappModelState,
  RestaurantDescription,
  MemoRappBaseAction,
  RestaurantAction,
} from '../type';

import {
  restaurantReducer
} from './restaurant';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers({
  restaurants: restaurantReducer,
});

// export default rootReducer;
