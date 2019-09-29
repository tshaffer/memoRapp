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

import {
  mtbTrailReducer
} from './mtbTrail';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<MemoRappModelState>({
  restaurants: restaurantReducer,
  mtbTrails: mtbTrailReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

