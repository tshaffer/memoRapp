import {
  addRestaurant,
  updateRestaurantProperty,
} from '../model';
import { RestaurantDescription, RestaurantDataState } from '../type';

/** @internal */
/** @private */
export const addNewRestaurant = (restaurant: RestaurantDescription) => {
  return (dispatch: any, getState: any): any => {
    const restaurantData: RestaurantDataState = {
      restaurant,
      visits: {},
      menuItems: {},
    }
    dispatch(addRestaurant(restaurant.name, restaurantData)); 
  };
};

/** @internal */
/** @private */
export const updateName = (restaurantId: string, restaurantName: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(updateRestaurantProperty(restaurantId, { name: restaurantName }));
  };
};
