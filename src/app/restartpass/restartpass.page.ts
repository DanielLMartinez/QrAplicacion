import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restartpass',
  templateUrl: './restartpass.page.html',
  styleUrls: ['./restartpass.page.scss'],
})
export class RestartpassPage implements OnInit {
  
  constructor(private router: Router) {
   }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
