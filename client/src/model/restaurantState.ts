import { combineReducers } from 'redux';

import { RestaurantsState } from '../type';

import { restaurantReducer } from './restaurant';
import { restaurantVisitReducer } from './restaurantVisit';
import { restaurantMenuItemReducer } from './restaurantMenuItem';

export default combineReducers<RestaurantsState>({
  restaurants: restaurantReducer,
  restaurantVisits: restaurantVisitReducer,
  restaurantMenuItems: restaurantMenuItemReducer,
});
