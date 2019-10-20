import { cloneDeep } from 'lodash';
import { RestaurantsState } from '../type';
import { Action } from 'redux';
import { getSnapshot } from '../selector/pastRestaurant';

// ------------------------------------
// Constants
// ------------------------------------
export const SNAPSHOT_CURRENT_STATE = 'SNAPSHOT_CURRENT_STATE';
export const UNDO_TO_SNAPSHOT = 'UNDO_TO_SNAPSHOT';

// ------------------------------------
// Actions
// ------------------------------------

export const setPastToCurrent = (): Action => {
  return {
    type: SNAPSHOT_CURRENT_STATE,
  };
};

export const setCurrentToPast = (): Action => {
  return {
    type: UNDO_TO_SNAPSHOT,
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: RestaurantsState = {};

export const restaurantReducer = (
  state: RestaurantsState = initialState,
  action: Action,
): RestaurantsState => {
  switch (action.type) {
    case SNAPSHOT_CURRENT_STATE:
      return getSnapshot(state);
      const snapshot = null;
      break;
    case UNDO_TO_SNAPSHOT:
      break;
  }
  return state;
}