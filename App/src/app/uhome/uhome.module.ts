import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UhomePageRoutingModule } from './uhome-routing.module';

import { UhomePage } from './uhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UhomePageRoutingModule
  ],
  declarations: [UhomePage]
})
export class UhomePageModule {}
