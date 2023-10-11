import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage {

  constructor(private router: Router) { }
  backpass() {
    this.router.navigate(['/profesor']);


  }
  rotateIcon() {
    
  }

  ngOnInit() {
  }
  login(){
    
  }

}
