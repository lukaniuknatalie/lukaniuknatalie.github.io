import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoiPageRoutingModule } from './moi-routing.module';

import { MoiPage } from './moi.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoiPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [MoiPage]
})
export class MoiPageModule {}
