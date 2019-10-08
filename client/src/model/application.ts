import { RestaurantAction, MemoRappModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
const SET_CURRENT_RESTAURANT_ID = 'SET_CURRENT_RESTAURANT_ID';

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

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: any = {
  currentRestaurantId: '',
};

export const applicationReducer = (
  state: any = initialState,
  action: MemoRappModelBaseAction<SetCurrentRestaurantIdPayload>
): any => {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT_ID: {
      return {
        ...state,
        currentRestaurantId: action.payload.currentRestaurantId,
      };
    }
    default:
      return state;
  }
};
