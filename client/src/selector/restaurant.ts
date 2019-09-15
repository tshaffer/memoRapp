import { MemoRappModelState, RestaurantDescription } from '../type';

/** @internal */
/** @private */
export const getRestaurantById = (state: MemoRappModelState, restaurantId: string): RestaurantDescription => {
  return state.restaurants[restaurantId];
};

