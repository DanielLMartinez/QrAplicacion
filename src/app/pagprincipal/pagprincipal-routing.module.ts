import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagprincipalPage } from './pagprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: PagprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagprincipalPageRoutingModule {}
