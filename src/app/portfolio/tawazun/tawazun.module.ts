import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TawazunPageRoutingModule } from './tawazun-routing.module';

import { TawazunPage } from './tawazun.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TawazunPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [TawazunPage]
})
export class TawazunPageModule {}
