/** @module Types:base */

import { Dispatch } from 'redux';
import { Action } from 'redux';
import { RestaurantsState } from './RestaurantType';

export interface MemoRappModelState {
  restaurants: RestaurantsState;
  mtbTrails: any;
}

export type MemoRappDispatch = Dispatch<MemoRappModelState>;

export interface MemoRappBaseAction extends Action {
  type: string;
  payload: {} | null;
}

export interface RestaurantAction<T> extends MemoRappBaseAction {
  payload: T;
}

