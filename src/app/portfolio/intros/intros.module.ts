import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrosPageRoutingModule } from './intros-routing.module';

import { IntrosPage } from './intros.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrosPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [IntrosPage]
})
export class IntrosPageModule {}
