import { isNil } from 'lodash';
import { MemoRappModelState, Restaurant, RestaurantCategory } from '../type';
import { getCurrentRestaurantId } from './application';

export const getRestaurantById = (state: MemoRappModelState, restaurantId: string): Restaurant => {
  return state.restaurants.restaurants[restaurantId];
};

// ------------------------------------
// Selectors
// ------------------------------------
export const getRestaurantName = (state: MemoRappModelState): string => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return '';
  }
  return restaurantState.name;
};

export const getRestaurantCategory = (state: MemoRappModelState): RestaurantCategory => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return RestaurantCategory.other;
  }
  return restaurantState.category;
};

export const getRestaurantOverallRating = (state: MemoRappModelState): number => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return 0;
  }
  return restaurantState.overallRating;
};

export const getRestaurantFoodRating = (state: MemoRappModelState): number => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return 0;
  }
  return restaurantState.foodRating;
};

export const getRestaurantServiceRating = (state: MemoRappModelState): number => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return 0;
  }
  return restaurantState.serviceRating;
};

export const getRestaurantAmbienceRating = (state: MemoRappModelState): number => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return 0;
  }
  return restaurantState.ambienceRating;
};

export const getRestaurantOutdoorSeating = (state: MemoRappModelState): boolean => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return false;
  }
  return restaurantState.outdoorSeating;
};

export const getRestaurantComments = (state: MemoRappModelState): string => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return '';
  }
  return restaurantState.comments;
};

export const getRestaurantWouldVisitAgain = (state: MemoRappModelState): boolean => {
  const restaurantState: Restaurant = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return false;
  }
  return restaurantState.wouldVisitAgain;
};
