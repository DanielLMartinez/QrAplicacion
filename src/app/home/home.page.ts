import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  
  username: string = ''; // Asegúrate de que la propiedad esté definida

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.username = params['username'] ;
    });

  
  }

}
