import {Component, Input, OnInit} from '@angular/core';
import {ImagesDirective} from '../../directives/images.directive';

@Component({
  selector: 'app-layout-big-img-two-small',
  templateUrl: './layout-big-img-two-small.component.html',
  styleUrls: ['./layout-big-img-two-small.component.scss'],
})
export class LayoutBigImgTwoSmallComponent implements OnInit {
  @Input() bigImage: string;
  @Input() smallTopImage: string;
  @Input() smallBottomImage: string;
  @Input() bigImageRightSide: boolean;
  @Input() bigIsVideo: boolean;
  constructor(public images: ImagesDirective) { }

  ngOnInit() {}

}
