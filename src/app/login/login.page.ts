import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit () {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tipoCuenta: ['', Validators.required],
    });
  }

  async ingresar() {
    console.log("intentando ingresar");
    const user = await this.authService.login(this.credentials.value);

    if (user) {
      const tipoCuenta = this.authService.getTipoCuenta();
      if (tipoCuenta === 'alumno') {
        this.router.navigate(['/home'], { replaceUrl: true });
      } else if (tipoCuenta === 'profesor') {
        this.router.navigate(['/homeprofesor'], { replaceUrl: true });
      }
    } else {
      console.log("error al ingresar");
    }
  }
}
