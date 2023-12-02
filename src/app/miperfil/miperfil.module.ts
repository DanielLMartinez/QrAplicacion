import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MiperfilPage } from './miperfil.page';

@NgModule({
  declarations: [MiperfilPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MiperfilPageModule {}
export { MiperfilPage };

