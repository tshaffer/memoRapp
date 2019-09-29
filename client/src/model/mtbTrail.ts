import { MtbTrailDataState, MtbTrailsState } from '../type/MtbTrailType';

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: MtbTrailsState = {
};

export const mtbTrailReducer = (
  state: MtbTrailsState = initialState,
  action: any,
): MtbTrailsState => {
  switch (action.type) {
    default:
      const id = '69';
      const mtbTrail: MtbTrailDataState = {
        trailName: 'Broncos'
      };
      const newState: MtbTrailsState = {
        [id]: mtbTrail
      };
      return newState;
  }
};


