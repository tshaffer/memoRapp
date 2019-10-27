import { isNil } from 'lodash';
import { MemoRappModelState, RestaurantVisit, RestaurantsState, RestaurantVisitsMap } from '../type';

export const getRestaurantVisitById = (state: MemoRappModelState, restaurantVisitId: string): RestaurantVisit => {
  return state.restaurants.restaurantVisits[restaurantVisitId];
};

// ------------------------------------
// Selectors
// ------------------------------------
export const getRestaurantVisits = (state: MemoRappModelState): RestaurantVisitsMap => {
  return state.restaurants.restaurantVisits;
};

export const getRestaurantVisitsByRestaurant = (state: MemoRappModelState, restaurantId: string): RestaurantVisit[] => {
  const restaurantVisits: RestaurantVisit[] = [];
  const restaurantVisitsMap: RestaurantVisitsMap = getRestaurantVisits(state);
  for (const key in restaurantVisitsMap) {
    if (restaurantVisitsMap.hasOwnProperty(key)) {
      const restaurantVisit: RestaurantVisit = restaurantVisitsMap[key];
      if (restaurantVisit.restaurantId === restaurantId) {
        restaurantVisits.push(restaurantVisit);
      }
    }
  }
  return restaurantVisits;
};

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


