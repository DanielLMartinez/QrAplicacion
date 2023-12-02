import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private auth: Auth,
    private firebaseService: FirebaseService
  ) {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  async register({ email, password, tipoCuenta, nombreCom, fono, direccion }: any) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
  
      const user = userCredential.user;
  
      if (user) {
        // Almacena el tipo de cuenta en localStorage o donde prefieras
        localStorage.setItem('tipoCuenta', tipoCuenta);
  
        // Llama al método para agregar el perfil en Firestore
        this.firebaseService.addPerfil(user.uid, nombreCom, email, fono, direccion);
  
        return user;
      } else {
        return null;
      }
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
