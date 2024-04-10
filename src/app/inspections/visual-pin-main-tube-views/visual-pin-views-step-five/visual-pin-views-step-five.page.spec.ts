import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepFivePage } from './visual-pin-views-step-five.page';

describe('VisualPinViewsStepThreePage', () => {
  let component: VisualPinViewsStepFivePage;
  let fixture: ComponentFixture<VisualPinViewsStepFivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPinViewsStepFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPinViewsStepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
