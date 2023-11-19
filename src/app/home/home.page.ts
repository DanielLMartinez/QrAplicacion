// home.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  profilePicture: string = 'URL_DE_TU_IMAGEN';

  // Propiedades para los datos del usuario
  nombreCompleto: string = 'Sergio Mellado';
  correo: string = 'serg.mellado@example.com';
  telefono: string = '123456789';
  direccion: string = 'Los Palomos 1234';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Suscribe a los cambios en los parámetros de la ruta
    this.route.params.subscribe((params) => {
      this.username = params['username'];
    });
  }

  guardarCambios(): void {
    console.log('Changes saved:');
    console.log('Full Name:', this.nombreCompleto);
    console.log('Email:', this.correo);
    console.log('Phone:', this.telefono);
    console.log('Address:', this.direccion);
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
