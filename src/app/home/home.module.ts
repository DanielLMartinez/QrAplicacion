// home.module.ts
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePage],
  imports: [IonicModule, FormsModule, CommonModule, HomePageRoutingModule, ReactiveFormsModule],
})
export class HomePageModule {}
