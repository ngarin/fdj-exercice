import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { LeagueEffects } from './store/league/league.effects';
import { StoreModule } from '@ngrx/store';
import { leagueReducer } from './store/league/league.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ LeagueEffects ]),
    StoreModule.forFeature('league', leagueReducer),
  ]
})
export class HomeModule { }
