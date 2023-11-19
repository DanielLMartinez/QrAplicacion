import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MiperfilPage } from './miperfil.page';

@NgModule({
  declarations: [MiperfilPage],
  imports: [
    CommonModule,
    IonicModule,  // Asegúrate de agregar esta línea
    FormsModule,  // Asegúrate de agregar esta línea
  ],
})
export class MiperfilPageModule {}
