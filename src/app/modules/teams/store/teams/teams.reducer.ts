import { fromJS } from 'immutable';
import { TeamsActionTypes } from './teams.actions';

export const initialState: TeamsState = {
  team: [],
  teams: [],
  isLoading: false,
  isErrored: false,
};

export function teamsReducer(state = initialState, action) {
  const currentState = fromJS(state);

  switch (action.type) {
    case TeamsActionTypes.Fetch:
      return currentState
        .set('isLoading', true)
        .set('isErrored', false)
        .toJS();
    case TeamsActionTypes.FetchSuccess:
      return currentState
        .set('teams', action.payload.teams)
        .set('isLoading', false)
        .set('isErrored', false)
        .toJS();
    case TeamsActionTypes.FetchError:
      return currentState
        .set('isLoading', false)
        .set('isErrored', true)
        .toJS();
    case TeamsActionTypes.FetchOne:
      return currentState
        .set('isLoading', true)
        .set('isErrored', false)
        .toJS();
    case TeamsActionTypes.FetchOneSuccess:
      return currentState
        .set('team', action.payload.team)
        .set('isLoading', false)
        .set('isErrored', false)
        .toJS();
    case TeamsActionTypes.FetchOneError:
      return currentState
        .set('isLoading', false)
        .set('isErrored', true)
        .toJS();
  }
}

export interface TeamsState {
  team: any[];
  teams: any[];
  isLoading: boolean;
  isErrored: boolean;
}
