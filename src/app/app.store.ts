import { LeagueState } from './modules/home/store/league/league.reducer';
import { TeamsState } from './modules/teams/store/teams/teams.reducer';

export interface AppState {
  league: LeagueState;
  teams: TeamsState;
}
