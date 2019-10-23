import { MemoRappModelState } from '../type';

export const getCurrentRestaurantId = (state: MemoRappModelState): string => {
  return state.application.currentRestaurantId;
}

export const getCurrentRestaurantVisitId = (state: MemoRappModelState): string => {
  return state.application.currentRestaurantVisitId;
}
