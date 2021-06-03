import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-video-preview-modal',
  templateUrl: './video-preview-modal.component.html',
  styleUrls: ['./video-preview-modal.component.scss'],
})
export class VideoPreviewModalComponent implements OnInit {
  @Input() video: string;
  @Input() controls: boolean;
  videoEl: HTMLVideoElement;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.videoEl = document.querySelector('.video');
    this.startVideo();
  }
  close(){
    this.modalController.dismiss();
  }
  startVideo(){
    this.videoEl.muted = true;
    this.videoEl.play();
    console.log('tada');
  }
}
