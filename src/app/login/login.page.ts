import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router) { }
  backpass(){
    this.router.navigate(['/restartpass']);

  
  }
  rotateIcon() {
    // Esta función se llama cuando se hace clic en el icono
    // Puedes agregar lógica adicional si es necesario
  }
  login() {
    
    if (this.username === 'sergiouwu' && this.password === '1234') {
      
    
      this.router.navigate(['/home', { username: this.username }]);
    }
    else{
      if ((this.username === 'danielowo' && this.password === '1234')) {
      this.router.navigate(['/home', { username: this.username }]);
      }
      else{

      }
    }
     
  }
  
}
