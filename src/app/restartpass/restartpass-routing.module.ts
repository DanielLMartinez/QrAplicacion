import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestartpassPage } from './restartpass.page';

const routes: Routes = [
  {
    path: '',
    component: RestartpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestartpassPageRoutingModule {}
