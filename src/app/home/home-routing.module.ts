import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

// Importa las páginas correctamente
import { HomePageModule } from './home.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageModule,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
