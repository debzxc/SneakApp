import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post1Page } from './post1.page';

const routes: Routes = [
  {
    path: '',
    component: Post1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post1PageRoutingModule {}
