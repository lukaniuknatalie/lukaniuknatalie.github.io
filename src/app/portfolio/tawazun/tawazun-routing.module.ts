import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TawazunPage } from './tawazun.page';

const routes: Routes = [
  {
    path: '',
    component: TawazunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TawazunPageRoutingModule {}
