import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = ''; // Almacena el nombre de usuario
  profilePicture: string = 'URL_DE_TU_IMAGEN'; // URL de la foto de perfil (reemplaza con tu URL real)

  // Propiedades para los datos del usuario
  nombreCompleto: string = 'Sergio mellado';
  correo: string = 'Serg.mellado@duocuc.cl';
  telefono: string = '123456789';
  direccion: string = 'Los Palomos 1234'; // Ajusté la dirección para capitalizar correctamente

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Suscribe a los cambios en los parámetros de la ruta
    this.route.params.subscribe((params) => {
      this.username = params['username']; // Actualiza el nombre de usuario cuando cambian los parámetros
    });
  }

  guardarCambios(): void {
    // Lógica para guardar los cambios en tus datos
    console.log('Cambios guardados:');
    console.log('Nombre Completo:', this.nombreCompleto);
    console.log('Correo:', this.correo);
    console.log('Teléfono:', this.telefono);
    console.log('Dirección:', this.direccion);
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.profilePicture = e.target.result as string;
    };

    reader.readAsDataURL(file);
  }
}
