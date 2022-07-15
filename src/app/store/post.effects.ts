import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { AppService } from "../services/app.service";
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as postActions from './post.actions';

@Injectable()
export class PostsEffects {

  // getPosts$ = createEffect(() => this.action$.pipe(
  //   ofType(postActions.getPosts),
  //   mergeMap(() => this.appService.getPosts()
  //     .pipe(
  //       map((posts) => (postActions.getPostsSuccess(posts))),
  //       catchError(() => EMPTY)
  //     )
  //   )
  // ));

  getPosts$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.getPosts),
    mergeMap(() => this.appService.getPosts()
      .pipe(
        map(posts => ({ type: '[POSTS] GET POSTS SUCCESS', payload: posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}
