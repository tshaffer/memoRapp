import axios from 'axios';
import {
  addRestaurant,
  updateRestaurantProperty,
} from '../model';
import { RestaurantDescription, RestaurantDataState } from '../type';

/** @internal */
/** @private */
export const saveRestaurant = (restaurant: RestaurantDescription) => {
  return (dispatch: any, getState: any): any => {

    // dispatch(addRestaurant(restaurant.name, restaurantData));

    const path = 'http://localhost:8000/restaurant';
    axios.post(path, restaurant)
      .then( (response) => {
        console.log('return from post');
        console.log(response);
      }).catch( (err: any) => {
        console.log('err: ', err);
      });
  };
};

/** @internal */
/** @private */
export const updateName = (restaurantId: string, restaurantName: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(updateRestaurantProperty(restaurantId, { name: restaurantName }));
  };
};
