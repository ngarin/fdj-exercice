import { createSelector } from '@ngrx/store';

import { AppState } from 'src/app/app.store';
import { LeagueState } from './league.reducer';

export const selectLeagueState = createSelector(
  (state: AppState) => state.league,
  (state: LeagueState) => state,
);
