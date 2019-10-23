import { RestaurantAction, MemoRappModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
const SET_CURRENT_RESTAURANT_ID = 'SET_CURRENT_RESTAURANT_ID';
const SET_CURRENT_RESTAURANT_VISIT_ID = 'SET_CURRENT_RESTAURANT_VISIT_ID';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetCurrentRestaurantIdPayload {
  currentRestaurantId: string;
}

export const setCurrentRestaurantId = (
  currentRestaurantId: string,
): RestaurantAction<SetCurrentRestaurantIdPayload> => {

  return {
    type: SET_CURRENT_RESTAURANT_ID,
    payload: {
      currentRestaurantId,
    },
  };
};

export interface SetCurrentRestaurantVisitIdPayload {
  currentRestaurantVisitId: string;
}

export const setCurrentRestaurantVisitId = (
  currentRestaurantVisitId: string,
): RestaurantAction<SetCurrentRestaurantVisitIdPayload> => {

  return {
    type: SET_CURRENT_RESTAURANT_VISIT_ID,
    payload: {
      currentRestaurantVisitId,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: any = {
  currentRestaurantId: '',
  currentRestaurantVisitId: '',
};

export const applicationReducer = (
  state: any = initialState,
  action: MemoRappModelBaseAction<SetCurrentRestaurantIdPayload &SetCurrentRestaurantVisitIdPayload>
): any => {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT_ID: {
      return {
        ...state,
        currentRestaurantId: action.payload.currentRestaurantId,
      };
    }
    case SET_CURRENT_RESTAURANT_VISIT_ID: {
      return {
        ...state,
        currentRestaurantVisitId: action.payload.currentRestaurantVisitId,
      };
    }
    default:
      return state;
  }
};
