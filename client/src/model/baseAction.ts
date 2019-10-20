/** @module Model:base */

import { Action, Dispatch } from 'redux';
import { MemoRappModelState } from '../type';

/** @internal */
/** @private */
export interface ActionWithPayload extends Action {
  payload : any;
}

export type MemoRappDispatch = Dispatch<MemoRappModelState>;

export interface MemoRappBaseAction extends Action {
  type: string;
  payload: {} | null;
}

export interface RestaurantAction<T> extends MemoRappBaseAction {
  payload: T;
}

export interface RestaurantVisitAction<T> extends MemoRappBaseAction {
  payload: T;
}

/** @internal */
/** @private */
export interface MemoRappModelBaseAction<T> extends Action {
  type: string;   // override Any - must be a string
  payload: T;
  error?: boolean;
  meta?: {};
}


// /** @internal */
// /** @private */
// export interface MemoRappModelAction<T> extends MemoRappModelBaseAction {
//   payload: T;     // override payload with specific parameter type
// }

