import { MemoRappModelState, RestaurantDataState } from '../type';

/** @internal */
/** @private */
export const getRestaurantById = (state: MemoRappModelState, restaurantId: string): RestaurantDataState => {
  return state.restaurants[restaurantId];
};

