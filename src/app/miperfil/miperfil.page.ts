import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage {
  username: string = ''; // Almacena el nombre de usuario
  profilePicture: string = 'URL_DE_TU_IMAGEN'; // URL de la foto de perfil (reemplaza con tu URL real)

  // Propiedades para los datos del usuario
  nombreCompleto: string = 'Sergio mellado';
  correo: string = 'Serg.mellado@duocuc.cl';
  telefono: string = '123456789';
  direccion: string = 'Los Palomos 1234'; // Ajusté la dirección para capitalizar correctamente

  constructor(private authService: AuthService, private router: Router) {}

  ionViewWillEnter() {
    // Verificar si el usuario está autenticado al entrar en la vista
    if (!this.authService.isAuthenticated()) {
      // Si no está autenticado, redirigir al login
      this.router.navigateByUrl('/login');
    }
  }


}
