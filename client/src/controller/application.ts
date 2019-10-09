import {
  setCurrentRestaurantId,
} from '../model';

export const setCurrentRestaurantIdData = (id: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(setCurrentRestaurantId(id));
  };
};
