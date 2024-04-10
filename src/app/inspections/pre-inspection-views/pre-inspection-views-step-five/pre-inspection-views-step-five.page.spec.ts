import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepFivePage } from './pre-inspection-views-step-five.page';

describe('PreInspectionViewsStepFivePage', () => {
  let component: PreInspectionViewsStepFivePage;
  let fixture: ComponentFixture<PreInspectionViewsStepFivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreInspectionViewsStepFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreInspectionViewsStepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
