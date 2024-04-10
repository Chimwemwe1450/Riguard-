import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepThreePage } from './visual-pin-views-step-three.page';

describe('VisualPinViewsStepThreePage', () => {
  let component: VisualPinViewsStepThreePage;
  let fixture: ComponentFixture<VisualPinViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPinViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPinViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
