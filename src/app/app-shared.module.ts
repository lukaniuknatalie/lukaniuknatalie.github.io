import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {ContactBtnComponent} from './components/contact-btn/contact-btn.component';
import {ScrollToTopBtnComponent} from './components/scroll-to-top-btn/scroll-to-top-btn.component';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, FooterComponent, ContactBtnComponent, ScrollToTopBtnComponent, ScrollDirective],
  exports: [HeaderComponent, FooterComponent, ContactBtnComponent, ScrollToTopBtnComponent, ScrollDirective],
  providers: [ScrollDirective]
})
export class AppSharedModule {}
