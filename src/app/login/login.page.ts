// login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  token = 1;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Método para navegar a la página de restablecimiento de contraseña
  backpass() {
    this.router.navigate(['/restartpass']);
  }

  // Método para girar el icono (no está implementado en tu código)
  rotateIcon() {
    // Esta función se llama cuando se hace clic en el icono
  }

  // Método para iniciar sesión
  login() {
    // Hacer un local storage para que me guarde un usuario
    // Debo poner que contenga tanto el '@' como el tanto el profesorduoc y el duocuc para verificar
    if (
      this.username === 'Sergio.mellado@duocuc.cl' &&
      this.password === '1234' &&
      this.username.includes('@duocuc.cl') &&
      this.password.length > 3
    ) {
      const shortenedUsername = this.username.substring(0, 7);
      this.router.navigate(['/home', { username: shortenedUsername }]);
    }
      
  }
}
