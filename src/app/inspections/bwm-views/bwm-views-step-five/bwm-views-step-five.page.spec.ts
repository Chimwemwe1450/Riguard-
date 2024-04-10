import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BwmViewsStepFivePage } from './bwm-views-step-five.page';

describe('BwmViewsStepFivePage', () => {
  let component: BwmViewsStepFivePage;
  let fixture: ComponentFixture<BwmViewsStepFivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BwmViewsStepFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BwmViewsStepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
