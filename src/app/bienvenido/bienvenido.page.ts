import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage {
  constructor(private router: Router) {}

  // Llama a la función selectAlumnos al hacer clic en el botón
  selectAlumnos() {
    this.router.navigate(['/login']);
  }

  // Llama a la función selectProfesores al hacer clic en el botón
  selectProfesores() {
    console.log('Profesores seleccionados');
    this.router.navigate(['/profesor']);
  }

  // Llama a la función crearCuenta al hacer clic en el botón
  crearCuenta() {
    console.log('Crear cuenta seleccionada');
    this.router.navigate(['/crear-cuenta']);
  }
}
