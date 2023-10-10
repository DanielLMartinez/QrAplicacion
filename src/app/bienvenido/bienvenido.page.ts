import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage {
  constructor() {}

  selectAlumnos() {
    // Coloca aquí el código que deseas ejecutar cuando se selecciona Alumnos
    console.log('Alumnos seleccionados');
  }

  selectProfesores() {
    // Coloca aquí el código que deseas ejecutar cuando se selecciona Profesores
    console.log('Profesores seleccionados');
  }
}
