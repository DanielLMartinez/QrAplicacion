import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestartpassPageRoutingModule } from './restartpass-routing.module';

import { RestartpassPage } from './restartpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestartpassPageRoutingModule
  ],
  declarations: [RestartpassPage]
})
export class RestartpassPageModule {}
