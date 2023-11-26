import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth
  ) { }

  async register({ email, password, tipoCuenta }: any) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      // Aquí, almacena el tipo de cuenta en localStorage o donde prefieras
      localStorage.setItem('tipoCuenta', tipoCuenta);

      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async login({ email, password }: any) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }

  // Obtener el tipo de cuenta del usuario
  getTipoCuenta(): string {
    // Recupera el tipo de cuenta almacenado en localStorage
    return localStorage.getItem('tipoCuenta') || 'alumno'; // Valor predeterminado: 'alumno' si no se encuentra el tipo de cuenta
  }
}
