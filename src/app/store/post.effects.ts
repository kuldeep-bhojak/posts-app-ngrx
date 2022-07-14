import { Injectable } from "@angular/core";
import { AppService } from "../services/app.service";

@Injectable()
export class PostsEffects {

  getPosts$ =

  constructor(
    private action$: Actions,
    private appService: AppService
  ) {}
}
