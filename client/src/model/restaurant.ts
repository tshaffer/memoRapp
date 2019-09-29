import { RestaurantSummary, RestaurantsState, RestaurantState } from '../type';
import { ActionWithPayload, MemoRappModelBaseAction, RestaurantAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_RESTAURANT_PROPERTY = 'UPDATE_RESTAURANT_PROPERTY';

// ------------------------------------
// Actions
// ------------------------------------

export type PartialRestaurantDescription = Partial<RestaurantSummary>;

export interface AddRestaurantPayload {
  id: string;
  restaurantData: RestaurantState;
}

export interface UpdateRestaurantPropertyPayload {
  id: string;
  data: PartialRestaurantDescription;
}

export const addRestaurant = (
  id: string,
  restaurantData: RestaurantState
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
      // const newState: RestaurantsState = Object.assign({}, state);
      // const { restaurantId: id, restaurantData } = action.payload;
      // newState[id] = {
      //   restaurant: {},
      //   visits: {},
      //   menuItems: {},
      // };
      // newState[id].restaurant = restaurantData.restaurant;
      // newState[id].visits = restaurantData.visits;
      // newState[id].menuItems = restaurantData.menuItems;
      // return newState;

      // const { restaurantId: id, restaurantData } = action.payload;
      // const newState: RestaurantsState = {
      //   ['77']: {
      //     restaurantSummary: restaurantData,
      //     visits: {},
      //     menuItems: {}
      //   }
      // };

      debugger;
      const newState: RestaurantsState = state;
      // const { restaurantId: id, restaurantData } = action.payload;
      const id = action.payload.id;
      const restaurantData = action.payload.restaurantData;
      newState[id] = restaurantData;



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

