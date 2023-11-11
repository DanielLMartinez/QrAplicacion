// login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage {
  token = 1;
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  // Método para navegar a la página de restablecimiento de contraseña
  backpass() {
    this.router.navigate(['/profesor']);
  }

  
  rotateIcon() {
    // Esta función se llama cuando se hace clic en el icono
  }

  
  login() {
    
      if (
        this.username === 'Sergio.mellado@profesorduoc.cl' &&
        this.password === '1234' &&
        this.username.includes('@profesorduoc.cl') &&
        this.password.length > 3
      ) {
        const shortenedUsername = this.username.substring(0, 7);
        this.router.navigate(['/home', { username: shortenedUsername }]);
      } else {
        // Lógica para manejar credenciales incorrectas
      }
    }
  }

