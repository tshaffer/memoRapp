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
  restaurantId: string;
  restaurantVisitData: RestaurantVisit;
}

export interface UpdateRestaurantVisitPropertyPayload {
  id: string;
  data: PartialRestaurantVisitDescription;
}

export const addDefaultRestaurantVisit = (restaurantId: string,
): RestaurantVisitAction<AddRestaurantVisitPayload> => {
  const restaurantVisitId: string = guid();
  const restaurantVisitData: RestaurantVisit = {
    restaurantId,
    restaurantVisitId,
    visitDate: new Date(),
    comments: '',
  };
  return {
    type: ADD_RESTAURANT_VISIT,
    payload: {
      restaurantId,
      restaurantVisitData,
    },
  };
};

export const addRestaurantVisit = (
  restaurantVisit: RestaurantVisit,
): RestaurantVisitAction<AddRestaurantVisitPayload> => {
  return {
    type: ADD_RESTAURANT_VISIT,
    payload: {
      restaurantId: restaurantVisit.restaurantId,
      restaurantVisitData: {
        restaurantId: restaurantVisit.restaurantId,
        restaurantVisitId: restaurantVisit.restaurantVisitId,
        visitDate: restaurantVisit.visitDate,
        comments: restaurantVisit.comments,
      }
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

