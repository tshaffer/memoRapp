import { isNil } from 'lodash';
import { MemoRappModelState, RestaurantVisit } from '../type';

export const getRestaurantVisitById = (state: MemoRappModelState, restaurantId: string): RestaurantVisit => {
  return state.restaurants.restaurantVisits[restaurantId];
};

// ------------------------------------
// Selectors
// ------------------------------------
export const getRestaurantVisitComments = (state: MemoRappModelState, restaurantVisitId: string): string => {
  const restaurantVisit: RestaurantVisit = getRestaurantVisitById(state, restaurantVisitId);
  if (isNil(restaurantVisit)) {
    return '';
  }
  return restaurantVisit.comments;
};

export const getRestaurantVisitDate = (state: MemoRappModelState, restaurantVisitId: string): Date => {
  const restaurantVisit: RestaurantVisit = getRestaurantVisitById(state, restaurantVisitId);
  if (isNil(restaurantVisit)) {
    return new Date();
  }
  return restaurantVisit.visitDate;
};


