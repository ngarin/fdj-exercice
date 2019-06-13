import { Action } from '@ngrx/store';

export enum LeagueActionTypes {
  Fetch = '[League] Fetching...',
  FetchSuccess = '[League] Fetch success',
  FetchError = '[League] Fetch error!',
}

export class LeagueFetchAction implements Action {
  readonly type = LeagueActionTypes.Fetch;
};

export class LeagueFetchSuccessAction implements Action {
  readonly type = LeagueActionTypes.FetchSuccess;
  constructor(public payload) {}
};

export class LeagueFetchErrorAction implements Action {
  readonly type = LeagueActionTypes.FetchError;
};
