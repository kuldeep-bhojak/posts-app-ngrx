import { createAction } from "@ngrx/store";

export const getPosts = createAction(
  '[POSTS] GET POSTS'
);

export const getPostsSuccess = createAction(
  '[POSTS] GET POSTS SUCCESS'
);

export const getPostsFail = createAction(
  '[POSTS] GET POSTS FAIL'
);
