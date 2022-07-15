import { createAction, props } from "@ngrx/store";
import { IPost } from "../interfaces";

export const getPosts = createAction(
  '[POSTS] GET POSTS'
);

export const getPostsSuccess = createAction(
  '[POSTS] GET POSTS SUCCESS',
  props<{ posts: IPost[] | null }>()
);

export const getPostsFail = createAction(
  '[POSTS] GET POSTS FAIL'
);
