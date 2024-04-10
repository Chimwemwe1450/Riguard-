import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BwmViewsStepFourPage } from './bwm-views-step-four.page';

describe('BwmViewsStepFourPage', () => {
  let component: BwmViewsStepFourPage;
  let fixture: ComponentFixture<BwmViewsStepFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BwmViewsStepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BwmViewsStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
