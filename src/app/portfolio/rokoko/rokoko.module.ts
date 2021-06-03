import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RokokoPageRoutingModule } from './rokoko-routing.module';

import { RokokoPage } from './rokoko.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RokokoPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [RokokoPage]
})
export class RokokoPageModule {}
