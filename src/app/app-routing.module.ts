// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'bienvenido', // Cambié la ruta por defecto a 'bienvenido'
    loadChildren: () => import('./bienvenido/bienvenido.module').then(m => m.BienvenidoPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'restartpass',
    loadChildren: () => import('./restartpass/restartpass.module').then(m => m.RestartpassPageModule),
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorPageModule),
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./miperfil/miperfil.module').then(m => m.MiperfilPageModule),
  },
  {
    path: 'ayuda',
    redirectTo: 'restartpass',
    pathMatch: 'full',
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
