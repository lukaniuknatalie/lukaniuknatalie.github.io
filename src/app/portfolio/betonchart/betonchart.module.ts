import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetonchartPageRoutingModule } from './betonchart-routing.module';

import { BetonchartPage } from './betonchart.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetonchartPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [BetonchartPage]
})
export class BetonchartPageModule {}
