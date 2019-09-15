import { MemoRappModelState, RestaurantsState } from '../type';

/** @internal */
/** @private */
export const getRestaurants = (state: MemoRappModelState): RestaurantsState => {
  return state.restaurants;
};

