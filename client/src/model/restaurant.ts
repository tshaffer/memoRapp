import { RestaurantDescription, RestaurantsState, RestaurantDataState } from '../type';
import { ActionWithPayload, MemoRappModelBaseAction, RestaurantAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_RESTAURANT_NAME = 'UPDATE_RESTAURANT_NAME';

// ------------------------------------
// Actions
// ------------------------------------

/** @internal */
/** @private */
// export type UpdateRestaurantPropertyAction = MemoRappModelBaseAction<Partial<RestaurantDataState>>;

export interface AddRestaurantPayload {
  id: string;
  restaurant: RestaurantDescription;
}

export interface UpdateRestaurantPayload {
  id: string;
  data: Partial<RestaurantDescription>;
}

// export interface UpdateRestaurantPayload {
//   id: string;
//   restaurant: RestaurantDescription;
// }

export type PartialRestaurantDescription = Partial<RestaurantDescription>;

export const addRestaurant = (
  id: string,
  restaurant: RestaurantDescription
): RestaurantAction<AddRestaurantPayload> => {

  return {
    type: ADD_RESTAURANT,
    payload: {
      id,
      restaurant,
    },
  };
};

export const updateRestaurantProperty = (
  id: string,
  data: Partial<RestaurantDescription>
): RestaurantAction<UpdateRestaurantPayload> => {
  return {
    type: UPDATE_RESTAURANT_NAME,
    payload: {
      id,
      data,
    },
  };
};

// export const updateRestaurantName = (
//   restaurantId: string,
//   restaurantName: string
// ): RestaurantAction<any> => {

//   return {
//     type: UPDATE_RESTAURANT_NAME,
//     payload: {
//       restaurantId,
//       restaurantName,
//     },
//   };
// }

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
      const { id, restaurant } = action.payload;
      newState[id].restaurant = restaurant;
      return newState;
    }
    case UPDATE_RESTAURANT_NAME: {
      const newState: RestaurantsState = Object.assign({}, state);
      const { id, name } = action.payload;
      newState[id].restaurant.name = name;
      return newState;
    }
    default:
      return state;
  }
};



