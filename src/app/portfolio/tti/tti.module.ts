import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TtiPageRoutingModule } from './tti-routing.module';

import { TtiPage } from './tti.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtiPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [TtiPage]
})
export class TtiPageModule {}
