import * as types from "./types";
import { createPost } from "./utils";
import { Conversations } from "data";

export const fetch = () => {
  return {
    type: types.FETCH,
    payload: Conversations
  };
};

export const post = msg => {
  const makePost = createPost(msg);
  Conversations.all.unshift(makePost);
  return {
    type: types.FETCH,
    payload: Conversations
  };
};

export default {
  fetch,
  post
};
