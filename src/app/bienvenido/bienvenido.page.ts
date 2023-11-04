import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';

  selectAlumnos() {
    // Coloca aquí el código que deseas ejecutar cuando se selecciona Alumnos
    console.log('Alumnos seleccionados');
    this.username='Sergio.mellado@duocuc.cl'
    
    this.router.navigate(['/login', ]);
  }

  selectProfesores() {
    // Coloca aquí el código que deseas ejecutar cuando se selecciona Profesores
    console.log('Profesores seleccionados');
    this.username = 'Sergio.mellado@profesorduoc.cl'
    this.router.navigate(['/login',]);
  }
}
