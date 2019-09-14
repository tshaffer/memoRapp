import { Dispatch } from 'redux';
import { Action } from 'redux';

export interface MemoRappState {
  restaurants: RestaurantMap;
}

/** @internal */
/** @private */
export interface RestaurantState {
  name: string;
  category: number;
  overallRating: number;
  foodRating: number;
  serviceRating: number;
  ambienceRating: number;
  outdoorSeating: boolean;
  comments: string;
  wouldVisitAgain: boolean;
}

export interface RestaurantMap {
  [restaurantId: string]: RestaurantState;
}



export type MemoRappDispatch = Dispatch<MemoRappState>;

export interface MemoRappBaseAction extends Action {
  type: string;
  payload: {} | null;
}

export interface RestaurantAction<T> extends MemoRappBaseAction {
  payload: T;
}

