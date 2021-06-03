import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TtiPage } from './tti.page';

const routes: Routes = [
  {
    path: '',
    component: TtiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TtiPageRoutingModule {}
