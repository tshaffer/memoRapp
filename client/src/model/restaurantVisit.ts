import { RestaurantVisit } from '../type';
import { RestaurantVisitAction } from './baseAction';
import { guid } from '../utilities';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT_VISIT = 'ADD_RESTAURANT_VISIT';
export const UPDATE_RESTAURANT_VISIT_PROPERTY = 'UPDATE_RESTAURANT_VISIT_PROPERTY';

// ------------------------------------
// Actions
// ------------------------------------

export type PartialRestaurantVisitDescription = Partial<RestaurantVisit>;

export interface AddRestaurantVisitPayload {
  restaurantVisitId: string;
  restaurantId: string;
  restaurantVisit: RestaurantVisit;
}

export interface UpdateRestaurantVisitPropertyPayload {
  id: string;
  data: PartialRestaurantVisitDescription;
}

export const addDefaultRestaurantVisit = (
  restaurantId: string,
): RestaurantVisitAction<AddRestaurantVisitPayload> => {
  const restaurantVisitId: string = guid();
  const restaurantVisit: RestaurantVisit = {
    restaurantId,
    restaurantVisitId,
    visitDate: new Date(),
    comments: '',
  };
  return {
    type: ADD_RESTAURANT_VISIT,
    payload: {
      restaurantVisitId,
      restaurantId,
      restaurantVisit,
    },
  };
};

export const addRestaurantVisit = (
  restaurantVisitId: string,
  restaurantId: string,
  restaurantVisit: RestaurantVisit,
): RestaurantVisitAction<AddRestaurantVisitPayload> => {
  return {
    type: ADD_RESTAURANT_VISIT,
    payload: {
      restaurantVisitId,
      restaurantId,
      restaurantVisit,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: any = {};

export const restaurantVisitReducer = (
  state: any = initialState,
  action: any
): any => {
  return state;
};
