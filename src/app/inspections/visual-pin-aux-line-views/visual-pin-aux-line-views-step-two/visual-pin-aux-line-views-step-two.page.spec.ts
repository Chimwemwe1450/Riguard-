import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPinAuxViewsStepTwoPage } from './visual-pin-aux-line-views-step-two.page';

describe('VisualPinAuxViewsStepTwoPage', () => {
  let component: VisualPinAuxViewsStepTwoPage;
  let fixture: ComponentFixture<VisualPinAuxViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPinAuxViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPinAuxViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
