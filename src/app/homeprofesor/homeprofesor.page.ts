import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.page.html',
  styleUrls: ['./homeprofesor.page.scss'],
})
export class HomeprofesorPage {
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

  cerrarSesion() {
    this.authService.logout();
    this.router.navigateByUrl('/bienvenido');
  }

  crearRegistro() {
    const idUnico = uuidv4();

    this.firebaseService.addRegistro(idUnico, this.idClase, this.ingresaSeccion)
      .then(() => {
        console.log('Registro creado exitosamente');
      })
      .catch((error: any) => {
        console.error('Error al crear el registro:', error);
      });
  }

}
