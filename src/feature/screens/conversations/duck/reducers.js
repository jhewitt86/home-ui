import * as types from "./types";

const defaultState = {
  msgs: []
};

const conversationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${types.FETCH}`:
      return {
        ...state,
        msgs: action.payload
      };
    case types.POST:
      return {
        ...state,
        msgs: action.payload
      };
    /* ... */
    default:
      return state;
  }
};

export default conversationReducer;
