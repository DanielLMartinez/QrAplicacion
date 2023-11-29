import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private auth: Auth
  ) {
    // Inicia la suscripción al cambio de estado de autenticación
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

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
    } catch (error) {
      console.log(error);
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

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const user = this.auth.currentUser;
    return !!user;
  }

}
