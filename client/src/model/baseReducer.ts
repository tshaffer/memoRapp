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
  application: applicationReducer,
  restaurants: restaurantReducer,
  mtbTrails: mtbTrailReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

