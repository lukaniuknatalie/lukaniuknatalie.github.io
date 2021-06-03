import {Component, Input, OnInit} from '@angular/core';
import {ImagesDirective} from '../../directives/images.directive';

@Component({
  selector: 'app-layout-big-img',
  templateUrl: './layout-big-img.component.html',
  styleUrls: ['./layout-big-img.component.scss'],
})
export class LayoutBigImgComponent implements OnInit {
@Input() image: string;
  constructor(public images: ImagesDirective) { }

  ngOnInit() {}

}
