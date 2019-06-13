import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatListModule, MatProgressSpinnerModule } from '@angular/material';

import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { teamsReducer } from './store/teams/teams.reducer';
import { TeamsEffects } from './store/teams/teams.effect';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatListModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([ TeamsEffects ]),
    StoreModule.forFeature('teams', teamsReducer),
  ]
})
export class TeamsModule { }
