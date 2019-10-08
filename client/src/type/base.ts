/** @module Types:base */

import { Dispatch } from 'redux';
import { Action } from 'redux';
import { ApplicationState } from './ApplicationType';
import { RestaurantsState } from './RestaurantType';

export interface MemoRappModelState {
  application: ApplicationState;
  restaurants: RestaurantsState;
  mtbTrails: any;
}


