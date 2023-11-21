import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor() {}

  async login() {
    // Aquí puedes agregar tu lógica de inicio de sesión
    // Por ejemplo, podrías verificar las credenciales de manera local
    if (this.email === 'usuario@correo.com' && this.password === 'uwu123') {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  }

  // Puedes agregar otros métodos relacionados con la autenticación aquí
}
