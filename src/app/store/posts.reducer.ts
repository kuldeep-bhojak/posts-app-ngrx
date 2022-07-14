import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";
import * as PostsAction from "./post.actions";

export const postsFeatureKey = 'post';

export const reducer = createReducer(
  initialState,
  on(PostsAction.getPosts, (state) => {
    return {
      posts: {
        id: 'a',
        title: 'ad'
      }
    }
  })
);
