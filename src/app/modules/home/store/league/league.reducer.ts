import { fromJS } from 'immutable';
import { LeagueActionTypes } from './league.actions';

export const initialState: LeagueState = {
  leagues: [],
  isLoading: false,
  isErrored: false,
};

export function leagueReducer (state = initialState, action) {
  const currentState = fromJS(state);

  switch (action.type) {
    case LeagueActionTypes.Fetch:
      return currentState
        .set('isLoading', true)
        .set('isErrored', false)
        .toJS();
    case LeagueActionTypes.FetchSuccess:
      return currentState
        .set('leagues', action.payload.leagues)
        .set('isLoading', false)
        .set('isErrored', false)
        .toJS();
    case LeagueActionTypes.FetchError:
        return currentState
          .set('isLoading', false)
          .set('isErrored', true)
          .toJS();
  }
}

export interface LeagueState {
  leagues: any[];
  isLoading: boolean;
  isErrored: boolean;
}
