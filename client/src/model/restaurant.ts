import { cloneDeep } from 'lodash';
import { RestaurantSummary, RestaurantsState, RestaurantState, RestaurantCategory } from '../type';
import { ActionWithPayload, MemoRappModelBaseAction, RestaurantAction } from './baseAction';
import { guid } from '../utilities';
import { Action } from 'redux';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_RESTAURANT_PROPERTY = 'UPDATE_RESTAURANT_PROPERTY';
export const SNAPSHOT_RESTAURANTS = 'SNAPSHOT_RESTAURANTS';
export const RESET_TO_SNAPSHOT = 'RESET_TO_SNAPSHOT';

// ------------------------------------
// Actions
// ------------------------------------

export type PartialRestaurantDescription = Partial<RestaurantSummary>;

export interface AddRestaurantPayload {
  restaurantId: string;
  restaurantData: RestaurantState;
}

export interface UpdateRestaurantPropertyPayload {
  id: string;
  data: PartialRestaurantDescription;
}

export const addDefaultRestaurant = (
):  RestaurantAction<AddRestaurantPayload> => {
  const restaurantId: string = guid();
  const restaurantSummary: RestaurantSummary = {
    restaurantId,
    name: '',
    category: RestaurantCategory.other,
    overallRating: 5,
    foodRating: 5,
    serviceRating: 5,
    ambienceRating: 5,
    outdoorSeating: false,
    comments: '',
    wouldVisitAgain: false,
  };
  const restaurantData: RestaurantState = {
    restaurantSummary,
    visits: {},
    menuItems: {},
  };
  return {
    type: ADD_RESTAURANT,
    payload: {
      restaurantId,
      restaurantData,
    },
  };
}

export const addRestaurant = (
  restaurantId: string,
  restaurantData: RestaurantState
): RestaurantAction<AddRestaurantPayload> => {

  return {
    type: ADD_RESTAURANT,
    payload: {
      restaurantId,
      restaurantData,
    },
  };
};

export const updateRestaurantProperty = (
  id: string,
  data: Partial<RestaurantSummary>
): RestaurantAction<UpdateRestaurantPropertyPayload> => {
  return {
    type: UPDATE_RESTAURANT_PROPERTY,
    payload: {
      id,
      data,
    },
  };
};

export const snapshotRestaurants = (): Action => {
  return {
    type: SNAPSHOT_RESTAURANTS,
  };
};

export const resetToSnapshot = (): Action => {
  return {
    type: RESET_TO_SNAPSHOT,
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: RestaurantsState = {
  restaurants: {},
  pastRestaurants: {},
};

export const restaurantReducer = (
  state: RestaurantsState = initialState,
  action: MemoRappModelBaseAction<PartialRestaurantDescription & AddRestaurantPayload & UpdateRestaurantPropertyPayload>
): RestaurantsState => {
  switch (action.type) {
    case ADD_RESTAURANT: {
      const newState = cloneDeep(state);
      const { restaurantId, restaurantData } = action.payload;
      newState.restaurants[restaurantId] = restaurantData;
      return newState;
    }
    case UPDATE_RESTAURANT_PROPERTY: {
      const newState: RestaurantsState = Object.assign({}, state);
      const id: string = action.payload.id;
      const data: PartialRestaurantDescription = action.payload.data;
      const restaurantSummary: RestaurantSummary = newState.restaurants[id].restaurantSummary;
      const keyName: string = Object.keys(data)[0];
      if (data.hasOwnProperty(keyName)) {
        const value: any = (data as any)[keyName];
        (restaurantSummary as any)[keyName] = value;
      }
      return newState;
    }
    case SNAPSHOT_RESTAURANTS: {
      const newState = cloneDeep(state);
      newState.pastRestaurants = cloneDeep(state.restaurants);
      return newState;
    }
    case RESET_TO_SNAPSHOT: {
      const newState = cloneDeep(state);
      newState.restaurants = state.pastRestaurants;
      newState.pastRestaurants = {};
      return newState;
    }
    default:
      return state;
  }
};

