// login.page.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  credentials!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private navCtrl: NavController  // Importa NavController
  ) { }

  get email() { return this.credentials.get('email'); }
  get password() { return this.credentials.get('password'); }
  get tipoCuenta() { return this.credentials.get('tipoCuenta'); }

  ionViewWillEnter() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tipoCuenta: ['', Validators.required], // Nuevo campo para el tipo de cuenta
    });
  }

  async login() {
    console.log("intentando ingresar");
    const user = await this.authService.login(this.credentials.value);

    if (user) {
      // Obtener el tipo de cuenta del usuario autenticado directamente desde el servicio
      const tipoCuenta = this.authService.getTipoCuenta();

      // Redirigir según el tipo de cuenta
      if (tipoCuenta === 'alumno') {
        this.navCtrl.navigateRoot('/home');  // Utiliza navCtrl para navegar y elimina replaceUrl
      } else if (tipoCuenta === 'profesor') {
        this.navCtrl.navigateRoot('/homeprofesor');  // Utiliza navCtrl para navegar y elimina replaceUrl
      } else {
        console.log("Tipo de cuenta no reconocido");
      }
    } else {
      console.log("error al ingresar");
    }
  }
}
