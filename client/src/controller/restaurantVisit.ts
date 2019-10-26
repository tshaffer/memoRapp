import axios from 'axios';
import { setRestaurantVisitId } from './application';
import { addDefaultRestaurantVisit, updateRestaurantVisitProperty } from '../model';

export const saveRestaurantVisit = (restaurantVisit: any) => {
  return (dispatch: any, getState: any): any => {
    console.log('save restaurantVisit');
    console.log(restaurantVisit);
    const path = 'http://localhost:8000/restaurantVisit';
    return axios.post(path, restaurantVisit)
      .then((response) => {
        console.log('return from post');
        console.log(response);
        return Promise.resolve(response);
      }).catch((err: any) => {
        console.log('err: ', err);
      });
  }
}

export const addDefaultRestaurantVisitData = (restaurantId: string) => {
  return (dispatch: any): any => {
    const addDefaultRestaurantAction = addDefaultRestaurantVisit(restaurantId);
    const result = dispatch(addDefaultRestaurantAction);
    console.log(result);
    const restaurantVisitId: string = (result as any).payload.restaurantVisitId;
    dispatch(setRestaurantVisitId(restaurantVisitId));
  };
};

const getRestaurantVisitId = (state: any) => {
  return state.application.currentRestaurantVisitId;
};

export const updateRestaurantVisitComments = (comments: string) => {
  return (dispatch: any, getState: any): any => {
    const restaurantVisitId: string = getRestaurantVisitId(getState());
    dispatch(updateRestaurantVisitProperty(restaurantVisitId, { comments }));
  };
};

export const updateRestaurantVisitDate = (visitDate: Date) => {
  return (dispatch: any, getState: any): any => {
    const restaurantVisitId: string = getRestaurantVisitId(getState());
    dispatch(updateRestaurantVisitProperty(restaurantVisitId, { visitDate }));
  };
};


