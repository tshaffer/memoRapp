import { MemoRappState, RestaurantState } from '../type';

/** @internal */
/** @private */
export const getRestaurantById = (state: MemoRappState, restaurantId: string): RestaurantState => {
  return state.restaurants[restaurantId];
};

