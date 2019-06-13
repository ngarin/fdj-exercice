import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';


const routes: Routes = [
  { path: 'teams/:league', component: ListComponent },
  { path: 'teams/:league/:team', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}
