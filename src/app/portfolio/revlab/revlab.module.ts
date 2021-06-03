import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevlabPageRoutingModule } from './revlab-routing.module';

import { RevlabPage } from './revlab.page';
import {PortfolioSharedModule} from '../portfolio-shared.module';
import {AppSharedModule} from '../../app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevlabPageRoutingModule,
    PortfolioSharedModule,
    AppSharedModule
  ],
  declarations: [RevlabPage]
})
export class RevlabPageModule {}
