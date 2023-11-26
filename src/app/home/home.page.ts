// home.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router
  ) {}

  async login() {
    try {
      // ... tu lógica de inicio de sesión
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    }
  }
}
