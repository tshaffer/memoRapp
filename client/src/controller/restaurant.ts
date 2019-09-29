import axios from 'axios';
import {
  addRestaurant,
  updateRestaurantProperty,
} from '../model';
import { RestaurantSummary, RestaurantState } from '../type';

export const loadRestaurants = () : any => {
  return (dispatch: any, getState: any): any => {
    const path = 'http://localhost:8000/getAllRestaurants';
    axios.get(path)
      .then( (response) => {
        console.log('loadRestaurants');
        console.log(response);
        const restaurantDescriptions: RestaurantSummary[] = response.data as RestaurantSummary[];
        for (const restaurantDescription of restaurantDescriptions) {
          const restaurantData : RestaurantState = {
            restaurantSummary: restaurantDescription,
            visits: {},
            menuItems: {},
          };
          dispatch(addRestaurant(restaurantDescription.restaurantId, restaurantData));
        }
      }).catch( (err: Error) => {
        console.log(err);
      });
  };
};

export const saveRestaurant = (restaurant: RestaurantSummary) => {
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

export const updateName = (restaurantId: string, restaurantName: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(updateRestaurantProperty(restaurantId, { name: restaurantName }));
  };
};
