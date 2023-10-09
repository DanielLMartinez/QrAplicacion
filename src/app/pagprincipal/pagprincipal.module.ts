import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagprincipalPageRoutingModule } from './pagprincipal-routing.module';

import { PagprincipalPage } from './pagprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagprincipalPageRoutingModule
  ],
  declarations: [PagprincipalPage]
})
export class PagprincipalPageModule {}
