import { cloneDeep } from 'lodash';
import { RestaurantCategory, Restaurant, RestaurantsMap } from '../type';
import { MemoRappModelBaseAction, RestaurantAction } from './baseAction';
import { guid } from '../utilities';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_RESTAURANT_PROPERTY = 'UPDATE_RESTAURANT_PROPERTY';

// ------------------------------------
// Actions
// ------------------------------------

export type PartialRestaurantDescription = Partial<Restaurant>;

export interface AddRestaurantPayload {
  restaurantId: string;
  restaurant: Restaurant;
}

export interface UpdateRestaurantPropertyPayload {
  id: string;
  data: PartialRestaurantDescription;
}

export const addDefaultRestaurant = (
):  RestaurantAction<AddRestaurantPayload> => {
  const restaurantId: string = guid();
  const restaurant: Restaurant = {
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
  return {
    type: ADD_RESTAURANT,
    payload: {
      restaurantId,
      restaurant,
    },
  };
};

export const addRestaurant = (
  restaurantId: string,
  restaurant: Restaurant
): RestaurantAction<AddRestaurantPayload> => {

  return {
    type: ADD_RESTAURANT,
    payload: {
      restaurantId,
      restaurant,
    },
  };
};

export const updateRestaurantProperty = (
  id: string,
  data: Partial<Restaurant>
): RestaurantAction<UpdateRestaurantPropertyPayload> => {
  return {
    type: UPDATE_RESTAURANT_PROPERTY,
    payload: {
      id,
      data,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: RestaurantsMap = {};

export const restaurantReducer = (
  state: RestaurantsMap = initialState,
  action: MemoRappModelBaseAction<PartialRestaurantDescription & AddRestaurantPayload & UpdateRestaurantPropertyPayload>
): RestaurantsMap => {
  switch (action.type) {
    case ADD_RESTAURANT: {
      const newState = cloneDeep(state);
      const { restaurantId, restaurant } = action.payload;
      newState[restaurantId] = restaurant;
      return newState;
    }
    case UPDATE_RESTAURANT_PROPERTY: {
      const newState: RestaurantsMap = Object.assign({}, state);
      const id: string = action.payload.id;
      const data: PartialRestaurantDescription = action.payload.data;
      const restaurant: Restaurant = newState[id];
      const keyName: string = Object.keys(data)[0];
      if (data.hasOwnProperty(keyName)) {
        const value: any = (data as any)[keyName];
        (restaurant as any)[keyName] = value;
      }
      return newState;
    }
    default:
      return state;
  }
};

