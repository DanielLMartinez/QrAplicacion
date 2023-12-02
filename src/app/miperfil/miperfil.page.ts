// miperfil.page.ts
import { getDoc } from '@firebase/firestore';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage {
  username: string = '';
  nombreCompleto: string = '';
  correo: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor(private authService: AuthService, private router: Router, private firebaseService: FirebaseService) {}

  async ionViewWillEnter() {
    console.log('Entrando a ionViewWillEnter de MiperfilPage');
  this.authService.currentUser$.subscribe(async user => {
    console.log('Usuario autenticado:', user);
      if (user) {
        // El usuario está autenticado, obtén datos desde Firestore
        this.username = user.displayName || ''; // Ajusta según tu estructura de usuario
        this.correo = user.email || '';

        // Obtén datos adicionales desde Firestore
        try {
          const docRef = this.firebaseService.getPerfil(user.uid);
          console.log('Document Reference:', docRef);
          
          const docSnap = await getDoc(docRef);
          console.log('Document Snapshot:', docSnap);
    
          if (docSnap.exists()) {
            // El documento existe, actualiza los datos adicionales
            const data = docSnap.data() as any; // Usa "as any" para evitar errores de tipo
            this.nombreCompleto = data['Nombre Completo'] || '';
            this.telefono = data['Teléfono'] || '';
            this.direccion = data['Dirección'] || '';
          } else {
            console.log('El documento no existe.');
          }
        } catch (error) {
          console.error('Error al obtener el documento:', error);
        }
      } else {
        // El usuario no está autenticado, redirige a la página de inicio de sesión
        this.router.navigateByUrl('/login');
      }
    });
  }
}
