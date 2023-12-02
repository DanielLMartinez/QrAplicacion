// crear-cuenta.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  credentials!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  get email() { return this.credentials.get('email'); }
  get fono() { return this.credentials.get('fono'); }
  get nombreCom() { return this.credentials.get('nombreCom'); }
  get password() { return this.credentials.get('password'); }
  get tipoCuenta() { return this.credentials.get('tipoCuenta'); }
  get direccion() { return this.credentials.get('direccion'); }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fono: ['', Validators.required],
      nombreCom: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tipoCuenta: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  async registrar() {
    console.log("intentando registrar");
  
    const tipoCuentaControl = this.credentials.get('tipoCuenta');
  
    if (tipoCuentaControl) {
      const tipoCuenta = tipoCuentaControl.value;
      const user = await this.authService.register({
        ...this.credentials.value,
        tipoCuenta: tipoCuenta
      });
  
      if (user) {
        console.log("usuario registrado");
        this.router.navigateByUrl('/bienvenido', { replaceUrl: true });
      } else {
        console.log("error al registrar");
      }
    } else {
      console.error("El control de tipoCuenta es nulo.");
    }
  }
}
