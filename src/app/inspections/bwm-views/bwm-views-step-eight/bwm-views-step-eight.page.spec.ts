import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BwmViewsStepEightPage } from './bwm-views-step-eight.page';

describe('BwmViewsStepEightPage', () => {
  let component: BwmViewsStepEightPage;
  let fixture: ComponentFixture<BwmViewsStepEightPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BwmViewsStepEightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BwmViewsStepEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
