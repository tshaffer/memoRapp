/** @module Types:base */

import { Dispatch } from 'redux';
import { Action } from 'redux';
import { ApplicationState } from './ApplicationType';
import { RestaurantsState, RestaurantState } from './RestaurantType';

export interface MemoRappModelState {
  application: ApplicationState;
  restaurants: RestaurantsState;
  pastRestaurants: RestaurantsState;
  mtbTrails: any;
}


