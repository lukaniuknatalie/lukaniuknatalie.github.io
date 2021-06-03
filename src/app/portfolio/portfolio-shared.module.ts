import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ImagePreviewModalComponent} from './components/image-preview-modal/image-preview-modal.component';
import {ProjectsNavigationComponent} from './components/projects-navigation/projects-navigation.component';
import { ImagesDirective } from './directives/images.directive';
import {PortfolioService} from './services/portfolio.service';
import {LayoutBigImgTwoSmallComponent} from './components/layout-big-img-two-small/layout-big-img-two-small.component';
import {ClientDescriptionComponent} from './components/client-description/client-description.component';
import {LayoutBigImgComponent} from './components/layout-big-img/layout-big-img.component';
import {VideoPreviewModalComponent} from './components/video-preview-modal/video-preview-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [
    ImagePreviewModalComponent,
    ProjectsNavigationComponent,
    ImagesDirective,
    LayoutBigImgTwoSmallComponent,
    ClientDescriptionComponent,
    LayoutBigImgComponent,
    VideoPreviewModalComponent
  ],
  exports: [
    ImagePreviewModalComponent,
    ProjectsNavigationComponent,
    LayoutBigImgTwoSmallComponent,
    ClientDescriptionComponent,
    LayoutBigImgComponent,
    VideoPreviewModalComponent
  ],
  providers: [ImagesDirective, PortfolioService]
})

export class PortfolioSharedModule {}
