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
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  async register({ email, password, tipoCuenta,fono,nombreCom }: any) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );

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
      return {
        
      };
    }
  }

  logout() {
    return signOut(this.auth);
  }

  getTipoCuenta(): string {
    return localStorage.getItem('tipoCuenta') || 'alumno';
  }

  isAuthenticated(): boolean {
    const user = this.auth.currentUser;
    return !!user;
  }

}
