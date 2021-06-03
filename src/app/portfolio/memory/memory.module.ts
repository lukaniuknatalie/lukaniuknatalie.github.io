import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoryPageRoutingModule } from './memory-routing.module';

import { MemoryPage } from './memory.page';
import {AppSharedModule} from '../../app-shared.module';
import {PortfolioSharedModule} from '../portfolio-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoryPageRoutingModule,
    AppSharedModule,
    PortfolioSharedModule
  ],
  declarations: [MemoryPage]
})
export class MemoryPageModule {}
