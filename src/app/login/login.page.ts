import { Component } from '@angular/core';
import { AuthService } from '../tu-ruta-del-servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}
