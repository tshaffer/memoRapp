import {
  addRestaurant,
  updateRestaurantName
} from '../model';
import { RestaurantDescription } from '../type';

/** @internal */
/** @private */
export const addNewRestaurant = (restaurant: RestaurantDescription) => {
  return (dispatch: any, getState: any): any => {
    dispatch(addRestaurant(restaurant.name, restaurant)); 
  };
};

/** @internal */
/** @private */
export const updateName = (restaurantId: string, restaurantName: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(updateRestaurantName(restaurantId, restaurantName)); 
  };
};
