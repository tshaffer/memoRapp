/** @module Types:base */

import { Dispatch } from 'redux';
import { Action } from 'redux';
import { RestaurantsState } from './RestaurantType';

export interface MemoRappModelState {
  restaurants: RestaurantsState;
  mtbTrails: any;
}

