import {
  setCurrentRestaurantId,
} from '../model';

export const setRestaurantId = (id: string) => {
  return (dispatch: any, getState: any): any => {
    dispatch(setCurrentRestaurantId(id));
  };
};
