import { MemoRappModelState, RestaurantsState } from '../type';

export const getSnapshot = (state: MemoRappModelState): RestaurantsState => {
  return state.pastRestaurants;
};
