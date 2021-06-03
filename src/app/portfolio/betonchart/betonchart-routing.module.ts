import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetonchartPage } from './betonchart.page';

const routes: Routes = [
  {
    path: '',
    component: BetonchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetonchartPageRoutingModule {}
