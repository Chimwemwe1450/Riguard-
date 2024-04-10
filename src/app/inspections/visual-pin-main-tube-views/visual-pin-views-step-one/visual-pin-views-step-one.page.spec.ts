import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepOnePage } from './visual-pin-views-step-one.page';

describe('VisualPinViewsStepOnePage', () => {
  let component: VisualPinViewsStepOnePage;
  let fixture: ComponentFixture<VisualPinViewsStepOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPinViewsStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPinViewsStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
