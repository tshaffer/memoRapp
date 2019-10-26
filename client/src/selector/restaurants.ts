import { MemoRappModelState, RestaurantsState } from '../type';

export const getRestaurants = (state: MemoRappModelState): RestaurantsState => {
  return state.restaurants;
};

