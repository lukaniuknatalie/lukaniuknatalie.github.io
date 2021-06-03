import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutBigImgTwoSmallComponent } from './layout-big-img-two-small.component';

describe('LayoutBigImgTwoSmallComponent', () => {
  let component: LayoutBigImgTwoSmallComponent;
  let fixture: ComponentFixture<LayoutBigImgTwoSmallComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBigImgTwoSmallComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutBigImgTwoSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
