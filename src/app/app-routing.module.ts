import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '', // Ruta por defecto cuando la aplicación se inicia
    redirectTo: 'bienvenido', // Redirige a 'bienvenido' si la URL está vacía
    pathMatch: 'full'
  },
  {
    path: 'restartpass',
    loadChildren: () => import('./restartpass/restartpass.module').then(m => m.RestartpassPageModule)
  },
  {
    path: 'bienvenido',
    redirectTo: 'login', // Redirige a 'login' cuando se accede a 'bienvenido'
    pathMatch: 'full'
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorPageModule)
  },
  {
    path: 'miperfil',
    redirectTo: 'miperfil', // Redirige a 'miperfil' cuando se accede a 'home'
    pathMatch: 'full'
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./miperfil/miperfil.module').then(m => m.MiperfilPageModule)
  },
  {
    path: 'ayuda',
    redirectTo: 'restartpass', // Redirige a 'restartpass' cuando se accede a 'ayuda'
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
