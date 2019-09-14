import { RestaurantState, RestaurantMap } from '../type';
import { ActionWithPayload } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_RESTAURANT_NAME = 'UPDATE_RESTAURANT_NAME';

// ------------------------------------
// Actions
// ------------------------------------
export function addRestaurant(restaurantId: string, restaurant: RestaurantState) {
  
  return {
    type: ADD_RESTAURANT,
    payload: {
      restaurantId,
      restaurant,
    },
  };
}

export function updateRestaurantName(restaurantId: string, restaurantName: string) {
  
  return {
    type: UPDATE_RESTAURANT_NAME,
    payload: {
      restaurantId,
      restaurantName,
    },
  };
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: RestaurantMap = {};

export const restaurantReducer = (
  state: RestaurantMap = initialState,
  action: ActionWithPayload) => {
  switch (action.type) {
    case ADD_RESTAURANT: {
      const newState: RestaurantMap = Object.assign({}, state);
      const { restaurantId, restaurant } = action.payload;
      newState[restaurantId] = restaurant;
      return newState;
    }
    case UPDATE_RESTAURANT_NAME: {
      const newState: RestaurantMap = Object.assign({}, state);
      const { restaurantId, restaurantName } = action.payload;
      newState[restaurantId].name = restaurantName;
      return newState;
    }
    default:
      return state;
  }
};



