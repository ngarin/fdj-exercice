import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/app.store';
import { TeamsFetchOneAction } from '../../store/teams/teams.actions';
import { selectTeamsState } from '../../store/teams/teams.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public players: any[];
  public team: number;

  private subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { team } = params;
      this.team = team;

      this.store.dispatch(new TeamsFetchOneAction({ idTeam: team }));
    });

    this.subscription = this.store
      .pipe(select(selectTeamsState))
      .subscribe((teams) => {
        this.isLoading = teams.isLoading;
        this.players = teams.team;
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
