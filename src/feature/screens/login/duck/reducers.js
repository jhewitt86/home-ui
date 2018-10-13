import * as types from "./types";

const defaultState = {
  token: null
};

const LoginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${types.LOGIN}`:
      return {
        ...state,
        token: action.payload
      };
    /* ... */
    default:
      return state;
  }
};

export default LoginReducer;
