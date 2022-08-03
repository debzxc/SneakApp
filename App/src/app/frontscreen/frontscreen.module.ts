import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontscreenPageRoutingModule } from './frontscreen-routing.module';

import { FrontscreenPage } from './frontscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontscreenPageRoutingModule
  ],
  declarations: [FrontscreenPage]
})
export class FrontscreenPageModule {}
