import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BwmViewsStepNinePage } from './bwm-views-step-nine.page';

describe('BwmViewsStepNinePage', () => {
  let component: BwmViewsStepNinePage;
  let fixture: ComponentFixture<BwmViewsStepNinePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BwmViewsStepNinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BwmViewsStepNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
