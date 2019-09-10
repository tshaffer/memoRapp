import { RestaurantState, RestaurantMap } from '../type';
import { ActionWithPayload } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

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
    default:
      return state;
  }
};



