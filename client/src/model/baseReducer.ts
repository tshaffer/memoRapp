/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
import {
  MemoRappState,
  RestaurantState,
  MemoRappBaseAction,
  RestaurantAction,
 } from '../type';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export type MemoRappRestaurantReducer = Reducer<RestaurantState>;
// const enableBatching = (
//   reduce: (state: MemoRappState, action: MemoRappBaseAction) => MemoRappState,
// ): BsBrightSignPlayerReducer => {
//   return function batchingReducer(
//     state: BsBrightSignPlayerModelState,
//     action: BsBrightSignPlayerModelBaseAction | BsBrightSignPlayerModelBatchAction,
//   ): BsBrightSignPlayerModelState {
//     switch (action.type) {
//       case BSBSBRIGHTSIGNPLAYERMODEL_BATCH:
//         return (action as BsBrightSignPlayerModelBatchAction).payload.reduce(batchingReducer, state);
//       default:
//         return reduce(state, action);
//     }
//   };
// };

// export const restaurantReducer: MemoRappRestaurantReducer = enableBatching(combineReducers<MemoRappState>({
//   restaurants: memoRappRestaurantReducer;
// }));

