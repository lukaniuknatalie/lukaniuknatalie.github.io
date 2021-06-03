import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RokokoPage } from './rokoko.page';

const routes: Routes = [
  {
    path: '',
    component: RokokoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RokokoPageRoutingModule {}
