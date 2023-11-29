// home.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    // Verificar si el usuario está autenticado al entrar en la vista
    if (!this.authService.isAuthenticated()) {
      // Si no está autenticado, redirigir al login
      this.router.navigateByUrl('/login');
    }
  }
}
