// ------------------------------------
// Constants
// ------------------------------------
export const ADD_ITEM = 'ADD_ITEM';

// ------------------------------------
// Actions
// ------------------------------------
export function addItem(item: any) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState =
  {
    item: {}
  };

export default function(state = initialState, action: any) {

  switch (action.type) {

    case ADD_ITEM: {
      return state;
    }
  }

  return state;
}
