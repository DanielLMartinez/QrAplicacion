import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage {
  username: string = ''; // Almacena el nombre de usuario

  // Propiedades para los datos del usuario
  nombreCompleto: string = '';
  correo: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async ionViewWillEnter() {
    // Verificar si el usuario está autenticado al entrar en la vista
    if (!this.authService.isAuthenticated()) {
      // Si no está autenticado, redirigir al login
      this.router.navigateByUrl('/login');
    } else {
      // Si está autenticado, obtener el nombre de usuario del servicio
      this.username = await this.authService.getUsername();
      // Obtener otros datos del perfil
      this.loadProfileData();
    }
  }

  private loadProfileData() {
    // Lógica para cargar datos del perfil desde tu servicio o almacenamiento
    this.authService.getProfileData().then((data) => {
      this.nombreCompleto = data.nombreCompleto;
      this.correo = data.correo;
      this.telefono = data.telefono;
      this.direccion = data.direccion;
    });
  }

}
