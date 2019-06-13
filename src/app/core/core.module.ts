import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { LeagueService } from './http/league/league.service';

@NgModule({
  declarations: [],
  providers: [LeagueService],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
