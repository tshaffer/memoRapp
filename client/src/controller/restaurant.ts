import axios from 'axios';
import {
  addDefaultRestaurant,
  addRestaurant,
  updateRestaurantProperty,
} from '../model';
import { RestaurantSummary, RestaurantState } from '../type';
import { setCurrentRestaurantIdData } from './application';

export const loadRestaurants = (): any => {
  return (dispatch: any, getState: any): any => {
    const path = 'http://localhost:8000/getAllRestaurants';
    axios.get(path)
      .then((response) => {
        console.log('loadRestaurants');
        console.log(response);
        const restaurantDescriptions: RestaurantSummary[] = response.data as RestaurantSummary[];
        for (const restaurantDescription of restaurantDescriptions) {
          const restaurantData: RestaurantState = {
            restaurantSummary: restaurantDescription,
            visits: {},
            menuItems: {},
          };
          dispatch(addRestaurant(restaurantDescription.restaurantId, restaurantData));
        }
      }).catch((err: Error) => {
        console.log(err);
      });
  };
};

export const saveRestaurant = (restaurant: RestaurantSummary) => {
  return (dispatch: any, getState: any): any => {

    // dispatch(addRestaurant(restaurant.name, restaurantData));

    const path = 'http://localhost:8000/restaurant';
    axios.post(path, restaurant)
      .then((response) => {
        console.log('return from post');
        console.log(response);
      }).catch((err: any) => {
        console.log('err: ', err);
      });
  };
};

export const addDefaultRestaurantData = () => {
  return (dispatch: any): any => {
    const addDefaultRestaurantAction = addDefaultRestaurant();
    const result = dispatch(addDefaultRestaurantAction);
    console.log(result);
    const restaurantId: string = (result as any).payload.restaurantId;
    dispatch(setCurrentRestaurantIdData(restaurantId));
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

export const updateCategory = (category: number) => {
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
