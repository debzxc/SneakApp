import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UhomePage } from './uhome.page';

const routes: Routes = [
  {
    path: '',
    component: UhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UhomePageRoutingModule {}
