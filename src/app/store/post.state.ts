import { IPost } from "../interfaces";

export interface IPostState {
  posts: IPost[] | null
}

export const initialState: IPostState = {
  posts: null
};
