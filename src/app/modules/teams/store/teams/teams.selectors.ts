import { createSelector } from '@ngrx/store';

import { AppState } from 'src/app/app.store';
import { TeamsState } from './teams.reducer';

export const selectTeamsState = createSelector(
  (state: AppState) => state.teams,
  (state: TeamsState) => state,
);
