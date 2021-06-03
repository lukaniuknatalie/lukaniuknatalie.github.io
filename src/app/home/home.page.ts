import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../directives/scroll.directive';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
video: HTMLVideoElement;

  constructor(private router: Router, public scroll: ScrollDirective) {  }

  ngOnInit(){
    this.video = document.querySelector('.video-background');
    this.startVideo();
  }

  startVideo(){
    this.video.muted = true;
    this.video.play();
  }
  goProject(page){
    switch (page) {
      case 'revlab': this.router.navigate(['revlab']);
      break;
      case 'betonchart': this.router.navigate(['betonchart']);
        break;
      case 'tawazun': this.router.navigate(['tawazun']);
        break;
      case 'memory': this.router.navigate(['memory']);
        break;
      case 'moi': this.router.navigate(['moi']);
        break;
      case 'tti': this.router.navigate(['tti']);
        break;
      case 'rokoko': this.router.navigate(['rokoko']);
        break;
      case 'intros': this.router.navigate(['intros']);
        break;
    }
  }
}
