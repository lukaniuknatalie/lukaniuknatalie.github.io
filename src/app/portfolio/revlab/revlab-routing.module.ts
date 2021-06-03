import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevlabPage } from './revlab.page';

const routes: Routes = [
  {
    path: '',
    component: RevlabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevlabPageRoutingModule {}
