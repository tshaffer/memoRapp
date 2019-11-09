import axios from 'axios';
import {
  addDefaultRestaurant,
  addRestaurant,
  updateRestaurantProperty,
} from '../model';
import { RestaurantCategory, Restaurant } from '../type';
import { setRestaurantId } from './application';

const serverUrl = 'http://localhost:8000';
// const serverUrl = 'https://desolate-lake-74291.herokuapp.com';
export const loadRestaurants = (): any => {
  return (dispatch: any, getState: any): any => {
    const path = serverUrl + '/getAllRestaurants';
    axios.get(path)
      .then((response) => {
        const restaurants: any[] = response.data as Restaurant[];
        for (const restaurant of restaurants) {
          dispatch(addRestaurant(restaurant.restaurantId, restaurant));
        }
      }).catch((err: Error) => {
        console.log(err);
      });
  };
};

export const saveRestaurant = (restaurant: any) => {
  return (dispatch: any, getState: any): Promise<any> => {
    const path = serverUrl + '/restaurant';
    return axios.post(path, restaurant)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((err: any) => {
        console.log('err: ', err);
      });
  };
};

export const addDefaultRestaurantData = () => {
  return (dispatch: any): any => {
    const addDefaultRestaurantAction = addDefaultRestaurant();
    const result = dispatch(addDefaultRestaurantAction);
    const restaurantId: string = (result as any).payload.restaurantId;
    dispatch(setRestaurantId(restaurantId));
  };
};

const getRestaurantId = (state: any) => {
  return state.application.currentRestaurantId;
}

export const updateName = (name: string) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { name }));
  };
};

export const updateCategory = (category: RestaurantCategory) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { category }));
  };
};
export const updateRating = (overallRating: number) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { overallRating }));
  };
};

export const updateFoodRating = (foodRating: number) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { foodRating }));
  };
};

export const updateServiceRating = (serviceRating: number) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { serviceRating }));
  };
};

export const updateAmbienceRating = (ambienceRating: number) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { ambienceRating }));
  };
};

export const updateOutdoorSeating = (outdoorSeating: boolean) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { outdoorSeating }));
  };
};

export const updateComments = (comments: string) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { comments }));
  };
};

export const updateWouldVisitAgain = (wouldVisitAgain: boolean) => {
  return (dispatch: any, getState: any): any => {
    const restaurantId: string = getRestaurantId(getState());
    dispatch(updateRestaurantProperty(restaurantId, { wouldVisitAgain }));
  };
};

