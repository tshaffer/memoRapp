import { cloneDeep } from 'lodash';
import { RestaurantVisit, RestaurantVisitsMap } from '../type';
import { MemoRappModelBaseAction, RestaurantVisitAction } from './baseAction';
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
  restaurantVisit: RestaurantVisit;
}

export interface UpdateRestaurantVisitPropertyPayload {
  restaurantVisitId: string;
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
      restaurantVisit,
    },
  };
};

export const updateRestaurantVisitProperty = (
  restaurantVisitId: string,
  data: Partial<RestaurantVisit>
): RestaurantVisitAction<UpdateRestaurantVisitPropertyPayload> => {
  return {
    type: UPDATE_RESTAURANT_VISIT_PROPERTY,
    payload: {
      restaurantVisitId,
      data,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: RestaurantVisitsMap = {};

export const restaurantVisitReducer = (
  state: RestaurantVisitsMap = initialState,
  action: MemoRappModelBaseAction<
    PartialRestaurantVisitDescription & AddRestaurantVisitPayload & UpdateRestaurantVisitPropertyPayload>
): RestaurantVisitsMap => {
  switch (action.type) {
    case ADD_RESTAURANT_VISIT: {
      const newState = cloneDeep(state);
      const { restaurantVisitId, restaurantVisit } = action.payload;
      newState[restaurantVisitId] = restaurantVisit;
      return newState;
    }
    case UPDATE_RESTAURANT_VISIT_PROPERTY: {
      const newState: RestaurantVisitsMap = Object.assign({}, state);
      const restaurantVisitId: string = action.payload.restaurantVisitId;
      const data: PartialRestaurantVisitDescription = action.payload.data;
      const restaurantVisit: RestaurantVisit = newState[restaurantVisitId];
      const keyName: string = Object.keys(data)[0];
      if (data.hasOwnProperty(keyName)) {
        const value: any = (data as any)[keyName];
        (restaurantVisit as any)[keyName] = value;
      }
      return newState;
    }
    default:
      return state;
  }
};
