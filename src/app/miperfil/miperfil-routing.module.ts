import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiperfilPage } from './miperfil.module'; // Asegúrate de importar MiperfilPage

const routes: Routes = [
  {
    path: '',
    component: MiperfilPage, // Asegúrate de usar MiperfilPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MiperfilPageRoutingModule {}
