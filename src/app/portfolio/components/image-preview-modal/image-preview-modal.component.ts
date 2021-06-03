import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss'],
})
export class ImagePreviewModalComponent implements OnInit {
@Input() image: string;
@Input() fullHeight: boolean;
@Input() proj: string;
@Input() imgPosition: number;
  constructor(public modalController: ModalController, public port: PortfolioService) { }

  ngOnInit() {
    switch (this.proj) {
      case 'tawazun': this.image = this.port.images.tawazun.largeImg[this.imgPosition];
        break;
      case 'revlab': this.image = this.port.images.revlab.largeImg[this.imgPosition];
        break;
      case 'betonchart': this.image = this.port.images.betonchart.largeImg[this.imgPosition];
        break;
      case 'santiago': this.image = this.port.images.santiago.largeImg[this.imgPosition];
        break;
      case 'fractal': this.image = this.port.images.fractal.largeImg[this.imgPosition];
        break;
      case 'tti': this.image = this.port.images.tti.largeImg[this.imgPosition];
        break;
      case 'rokoko': this.image = this.port.images.rokoko.largeImg[this.imgPosition];
        break;
      case 'volt': this.image = this.port.images.volt.largeImg[this.imgPosition];
        break;
    }
  }
  close(){
    this.modalController.dismiss();
  }
  enlarge(){
    const container = document.getElementById('container');
    const image = document.getElementById('image');
    const zoomIn = document.getElementById('zoom-in-btn');
    const zoomOut = document.getElementById('zoom-out-btn');
    container.classList.add('larger');
    image.classList.add('larger');
    zoomIn.style.display = 'none';
    zoomOut.style.display = 'block';
  }
  smaller(){
    const container = document.getElementById('container');
    const image = document.getElementById('image');
    const zoomIn = document.getElementById('zoom-in-btn');
    const zoomOut = document.getElementById('zoom-out-btn');
    container.classList.remove('larger');
    image.classList.remove('larger');
    zoomIn.style.display = 'block';
    zoomOut.style.display = 'none';
  }
}
