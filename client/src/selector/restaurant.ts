import { MemoRappModelState, RestaurantState } from '../type';

/** @internal */
/** @private */
export const getRestaurantById = (state: MemoRappModelState, restaurantId: string): RestaurantState => {
  return state.restaurants[restaurantId];
};

