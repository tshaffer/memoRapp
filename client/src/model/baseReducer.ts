/** @module Model:base */

import {
  combineReducers
} from 'redux';
import {
  MemoRappModelState,
} from '../type';

import {
  restaurantReducer
} from './restaurant';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<MemoRappModelState>({
  restaurants: restaurantReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

