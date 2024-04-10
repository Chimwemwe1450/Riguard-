import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EddyViewsStepFourPage } from './eddy-views-step-four.page';

describe('EddyViewsStepFourPage', () => {
  let component: EddyViewsStepFourPage;
  let fixture: ComponentFixture<EddyViewsStepFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EddyViewsStepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EddyViewsStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
