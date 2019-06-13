import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from 'src/app/app.store';
import { LeagueActionTypes, LeagueFetchAction } from '../../store/league/league.actions';
import { selectLeagueState } from '../../store/league/league.selectors';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public leagues = [];
  public filteredLeagues: Observable<any[]>;
  public homeForm: FormGroup;
  public isLoading = false;

  private subscription: Subscription;

  constructor(
    formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.homeForm = formBuilder.group({
      leagueInput: null,
    });
  }

  public ngOnInit() {
    this.store.dispatch(new LeagueFetchAction());

    this.subscription = this.store
      .pipe(select(selectLeagueState))
      .subscribe((league) => {
        this.isLoading = league.isLoading;
        this.leagues = league.leagues;
      });

    this.filteredLeagues = this.homeForm.get('leagueInput').valueChanges.pipe(
      startWith<string | number>(''),
      map((val) => typeof val === 'string' ? val : this.leagues.find((c) => c.idLeague === val).strLeague),
      map((val) => this.leagues.filter((l) => l.strLeague.toLowerCase().includes(val.toLowerCase())))
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public displayLeaguesFn(): (id: number) => string | undefined {
    return (id: number) => {
      const league = this.leagues ? this.leagues.find((c) => c.idLeague === id) : null;
      return league ? league.strLeague : undefined;
    };
  }

  public onLeagueSelected(event: MatAutocompleteSelectedEvent) {
    this.router.navigateByUrl(`/teams/${event.option.value}`);
  }

}
