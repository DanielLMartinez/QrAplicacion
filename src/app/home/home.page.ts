// home.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idClase: string = '';
  ingresaSeccion: string = ''; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ionViewWillEnter() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

  openMiPerfil() {
    this.router.navigate(['/miperfil']);
  }

  openMisRegistros() {
    this.router.navigate(['/misregistros']);
  }

  openMisJustificaciones() {
    this.router.navigate(['/misjustificaciones']);
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigateByUrl('/bienvenido');
  }

  registrarse() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }
  
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        const idUsuario = user.uid || '';

        this.firebaseService.addRegistroAlumno(idUsuario, this.idClase, this.ingresaSeccion)
          .then(() => {
            console.log('Registro de alumno creado exitosamente');

          })
          .catch((error: any) => {
            console.error('Error al crear el registro del alumno:', error);
          });
      }
    });
  }

}
