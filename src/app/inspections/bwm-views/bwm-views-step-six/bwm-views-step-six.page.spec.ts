import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BwmViewsStepSixPage } from './bwm-views-step-six.page';

describe('BwmViewsStepSixPage', () => {
  let component: BwmViewsStepSixPage;
  let fixture: ComponentFixture<BwmViewsStepSixPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BwmViewsStepSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BwmViewsStepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
