import { Directive } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ImagePreviewModalComponent} from '../components/image-preview-modal/image-preview-modal.component';
import {VideoPreviewModalComponent} from '../components/video-preview-modal/video-preview-modal.component';

@Directive({
  selector: '[appImages]'
})
export class ImagesDirective {

  constructor(public modalController: ModalController) { }
  async openFullView(image){
    const modal = await this.modalController.create({
      component: ImagePreviewModalComponent,
      cssClass: 'image-preview-modal',
      componentProps: {
        image
      }
    });
    return await modal.present();
  }
  async fullView(proj, imgPosition){
    const modal = await this.modalController.create({
      component: ImagePreviewModalComponent,
      cssClass: 'image-preview-modal',
      componentProps: {
        proj,
        imgPosition
      }
    });
    return await modal.present();
  }
  async fullViewFullHeight(proj, imgPosition, fullHeight){
    const modal = await this.modalController.create({
      component: ImagePreviewModalComponent,
      cssClass: 'image-preview-modal',
      componentProps: {
        proj,
        imgPosition,
        fullHeight
      }
    });
    return await modal.present();
  }

  async openFullViewWithFullHeight(image, fullHeight){
    const modal = await this.modalController.create({
      component: ImagePreviewModalComponent,
      cssClass: 'image-preview-modal',
      componentProps: {
        image,
        fullHeight
      }
    });
    return await modal.present();
  }

  async openFullVideo(video){
    const modal = await this.modalController.create({
      component: VideoPreviewModalComponent,
      cssClass: 'video-preview-modal',
      componentProps: {
        video
      }
    });
    return await modal.present();
  }
}
