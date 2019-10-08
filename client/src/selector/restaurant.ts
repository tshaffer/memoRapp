import { isNil } from 'lodash';
import { MemoRappModelState, RestaurantState, RestaurantsState } from '../type';
import { getCurrentRestaurantId } from './application';

export const getRestaurantById = (state: MemoRappModelState, restaurantId: string): RestaurantState => {
  return state.restaurants[restaurantId];
};

// ------------------------------------
// Selectors
// ------------------------------------
export const getRestaurantName = (state: MemoRappModelState): string => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return '';
  }
  return restaurantState.restaurantSummary.name;
};

export const getRestaurantCategory = (state: MemoRappModelState): number => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return null;
  }
  return restaurantState.restaurantSummary.category;
};

export const getRestaurantOverallRating = (state: MemoRappModelState): number => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return null;
  }
  return restaurantState.restaurantSummary.overallRating;
};

export const getRestaurantFoodRating = (state: MemoRappModelState): number => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return null;
  }
  return restaurantState.restaurantSummary.foodRating;
};

export const getRestaurantServiceRating = (state: MemoRappModelState): number => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return null;
  }
  return restaurantState.restaurantSummary.serviceRating;
};

export const getRestaurantAmbienceRating = (state: MemoRappModelState): number => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return null;
  }
  return restaurantState.restaurantSummary.ambienceRating;
};

export const getRestaurantOutdoorSeating = (state: MemoRappModelState): boolean => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return false;
  }
  return restaurantState.restaurantSummary.outdoorSeating;
};

export const getRestaurantComments = (state: MemoRappModelState): string => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return '';
  }
  return restaurantState.restaurantSummary.comments;
};

export const getRestaurantWouldVisitAgain = (state: MemoRappModelState): boolean => {
  const restaurantState: RestaurantState = getRestaurantById(state, getCurrentRestaurantId(state));
  if (isNil(restaurantState)) {
    return false;
  }
  return restaurantState.restaurantSummary.wouldVisitAgain;
};
