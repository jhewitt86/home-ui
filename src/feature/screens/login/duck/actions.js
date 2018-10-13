import * as types from "./types";

export const login = token => {
  localStorage.setItem("JWT", token);

  window.location.href = "/";
  return {
    type: types.LOGIN,
    payload: token
  };
};

export default {
  login
};
