import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/app.store';
import { TeamsActionTypes, TeamsFetchAction } from '../../store/teams/teams.actions';
import { selectTeamsState } from '../../store/teams/teams.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public teams = [];
  public league: number;

  private subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { league } = params;
      this.league = league;

      this.store.dispatch(new TeamsFetchAction({ idLeague: league }));

      this.subscription = this.store
        .pipe(select(selectTeamsState))
        .subscribe((teams) => {
          this.isLoading = teams.isLoading;
          this.teams = teams.teams;
        });
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
