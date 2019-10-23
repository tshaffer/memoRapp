import {
  setCurrentRestaurantId, setCurrentRestaurantVisitId,
} from '../model';

export const setRestaurantId = (id: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(setCurrentRestaurantId(id));
  };
};

export const setRestaurantVisitId = (id: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(setCurrentRestaurantVisitId(id));
  };
};
