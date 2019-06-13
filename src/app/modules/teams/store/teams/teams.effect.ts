import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  TeamsActionTypes,
  TeamsFetchAction,
  TeamsFetchOneAction,
  TeamsFetchErrorAction,
  TeamsFetchSuccessAction,
  TeamsFetchOneSuccessAction,
  TeamsFetchOneErrorAction,
} from './teams.actions';
import { TeamsService } from 'src/app/core/http/teams/teams.service';

@Injectable()
export class TeamsEffects {
  constructor(
    private actions$: Actions,
    private teamsService: TeamsService,
  ) {}

  @Effect()
  fetch$ = this.actions$.pipe(
    ofType(TeamsActionTypes.Fetch),
    mergeMap((action: TeamsFetchAction) => this.teamsService.fetch(action.payload.idLeague)
      .pipe(
        map(data => new TeamsFetchSuccessAction({ teams: data })),
        catchError(() => of(new TeamsFetchErrorAction()))
      )
    )
  );

  @Effect()
  fetchOne$ = this.actions$.pipe(
    ofType(TeamsActionTypes.FetchOne),
    mergeMap((action: TeamsFetchOneAction) => this.teamsService.fetchOne(action.payload.idTeam)
      .pipe(
        map(data => new TeamsFetchOneSuccessAction({ team: data })),
        catchError(() => of(new TeamsFetchOneErrorAction()))
      )
    )
  );
}
