import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase
  ) {}

  async login() {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      if (result.user) {
        // Añadir más información al registro si es necesario
        this.db.list('usuarios').push({
          userId: result.user.uid,
          email: result.user.email
        });
        this.router.navigate(['/home']);
      } else {
        console.error('Error: El objeto de usuario es nulo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}
