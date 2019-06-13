import { Action } from '@ngrx/store';

export enum TeamsActionTypes {
  Fetch = '[Teams] Fetching...',
  FetchSuccess = '[Teams] Fetch success',
  FetchError = '[Teams] Fetch error!',
  FetchOne = '[Teams] Fetching one...',
  FetchOneSuccess = '[Teams] Fetch one success',
  FetchOneError = '[Teams] Fetch one error!',
}

export class TeamsFetchAction implements Action {
  readonly type = TeamsActionTypes.Fetch;
  constructor(public payload: { idLeague: number }) {}
}

export class TeamsFetchSuccessAction implements Action {
  readonly type = TeamsActionTypes.FetchSuccess;
  constructor(public payload) {}
}

export class TeamsFetchErrorAction implements Action {
  readonly type = TeamsActionTypes.FetchError;
}

export class TeamsFetchOneAction implements Action {
  readonly type = TeamsActionTypes.FetchOne;
  constructor(public payload: { idTeam: number }) {}
}

export class TeamsFetchOneSuccessAction implements Action {
  readonly type = TeamsActionTypes.FetchOneSuccess;
  constructor(public payload) {}
}

export class TeamsFetchOneErrorAction implements Action {
  readonly type = TeamsActionTypes.FetchOneError;
}
