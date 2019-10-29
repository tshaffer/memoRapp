import axios from 'axios';
import { setRestaurantVisitId } from './application';
import { addDefaultRestaurantVisit, updateRestaurantVisitProperty, addRestaurantVisit } from '../model';
import { RestaurantVisit } from '../type';

export const loadRestaurantVisits = (): any => {
  return (dispatch: any, getState: any): any => {
    const path = 'http://localhost:8000/getAllRestaurantVisits';
    axios.get(path)
      .then((response) => {
        const restaurantVisits: any[] = response.data as RestaurantVisit[];
        for (const restaurantVisit of restaurantVisits) {
          const visitDate = new Date(restaurantVisit.visitDate);
          console.log('visitDate');
          console.log(visitDate);
          console.log('comments');
          console.log(restaurantVisit.comments);
          restaurantVisit.visitDate = visitDate;
          dispatch(
            addRestaurantVisit(restaurantVisit.restaurantVisitId, restaurantVisit.restaurantId, restaurantVisit));
        }
      }).catch((err: Error) => {
        console.log(err);
      });
  };
};

export const saveRestaurantVisit = (restaurantVisit: any) => {
  return (dispatch: any, getState: any): any => {
    const path = 'http://localhost:8000/restaurantVisit';
    return axios.post(path, restaurantVisit)
      .then((response) => {
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


