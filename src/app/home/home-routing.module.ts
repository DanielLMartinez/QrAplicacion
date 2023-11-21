import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa las páginas correctamente
import { HomePage } from './home.module';
import { HomePageModule } from './home.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageModule,
  },
  {
    path:'home',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
