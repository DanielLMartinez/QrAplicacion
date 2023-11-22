// home.module.ts
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [IonicModule, FormsModule],
  exports: [HomePage],
})
export class HomePageModule {}
