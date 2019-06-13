import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LeagueActionTypes, LeagueFetchSuccessAction, LeagueFetchErrorAction } from './league.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { LeagueService } from 'src/app/core/http/league/league.service';
import { of } from 'rxjs';

@Injectable()
export class LeagueEffects {
  constructor(
    private actions$: Actions,
    private leagueService: LeagueService,
  ) {}

  @Effect()
  fetch$ = this.actions$.pipe(
    ofType(LeagueActionTypes.Fetch),
    mergeMap(() => this.leagueService.fetch()
      .pipe(
        map(data => new LeagueFetchSuccessAction({ leagues: data })),
        catchError(() => of(new LeagueFetchErrorAction()))
      )
    )
  );
}
