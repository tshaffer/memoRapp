import axios from 'axios';
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
    };
    // dispatch(addRestaurant(restaurant.name, restaurantData));

    const path = 'http://localhost:8000/addRestaurant';
    const data: any = { name: 'pizzaJoint' };
    const promise = axios.post(path, data);
    promise
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
