import { RestaurantDescription, RestaurantsState, RestaurantDataState } from '../type';
import { ActionWithPayload, MemoRappModelBaseAction, RestaurantAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_RESTAURANT_PROPERTY = 'UPDATE_RESTAURANT_PROPERTY';

// ------------------------------------
// Actions
// ------------------------------------

/** @internal */
/** @private */

export type PartialRestaurantDescription = Partial<RestaurantDescription>;

export interface AddRestaurantPayload {
  id: string;
  restaurantData: RestaurantDataState;
}

export interface UpdateRestaurantPropertyPayload {
  id: string;
  data: PartialRestaurantDescription;
}

export const addRestaurant = (
  id: string,
  restaurantData: RestaurantDataState
): RestaurantAction<AddRestaurantPayload> => {

  return {
    type: ADD_RESTAURANT,
    payload: {
      id,
      restaurantData,
    },
  };
};

export const updateRestaurantProperty = (
  id: string,
  data: Partial<RestaurantDescription>
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

const initialState: RestaurantsState = {};

export const restaurantReducer = (
  state: RestaurantsState = initialState,
  action: MemoRappModelBaseAction<PartialRestaurantDescription & AddRestaurantPayload>
): RestaurantsState => {
  switch (action.type) {
    case ADD_RESTAURANT: {
      const newState: RestaurantsState = Object.assign({}, state);
      const { id, restaurantData } = action.payload;
      newState[id] = {
        restaurant: {},
        visits: {},
        menuItems: {},
      };
      newState[id].restaurant = restaurantData.restaurant;
      newState[id].visits = restaurantData.visits;
      newState[id].menuItems = restaurantData.menuItems;
      return newState;
    }
    case UPDATE_RESTAURANT_PROPERTY: {
      const newState: RestaurantsState = Object.assign({}, state);
      debugger;
      // const { id, name } = action.payload;
      // newState[id].restaurant.name = name;
      return newState;
    }
    default:
      return state;
  }
};

