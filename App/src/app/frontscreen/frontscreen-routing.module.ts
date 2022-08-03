import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontscreenPage } from './frontscreen.page';

const routes: Routes = [
  {
    path: '',
    component: FrontscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontscreenPageRoutingModule {}
