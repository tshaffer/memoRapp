/** @module Model:base */

import { Action } from 'redux';

/** @internal */
/** @private */
export interface ActionWithPayload extends Action {
  payload : any;
}
