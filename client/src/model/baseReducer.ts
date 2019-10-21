/** @module Model:base */

import {
  combineReducers
} from 'redux';
import {
  MemoRappModelState,
} from '../type';

import {
  applicationReducer
} from './application';

import restaurantStateReducer from './restaurantState';

import {
  mtbTrailReducer
} from './mtbTrail';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<MemoRappModelState>({
  application: applicationReducer,
  restaurants: restaurantStateReducer,
  mtbTrails: mtbTrailReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

