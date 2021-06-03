import {Component, OnInit, ViewChild} from '@angular/core';
import {ImagesDirective} from '../directives/images.directive';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../../directives/scroll.directive';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'app-tawazun',
  templateUrl: './tawazun.page.html',
  styleUrls: ['./tawazun.page.scss'],
})
export class TawazunPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  videoArray: NodeListOf<any>;
  video: HTMLVideoElement;
  viewportWidth = window.innerWidth;
  constructor(public images: ImagesDirective, public scroll: ScrollDirective, public port: PortfolioService) { }

  ngOnInit() {
    this.videoArray = document.querySelectorAll('.video');
    this.videoArray.forEach(vid => {
      this.startVideo(vid);
    });
  }
  startVideo(video){
    video.muted = true;
    video.play();
  }
}
