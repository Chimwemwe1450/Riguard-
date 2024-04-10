import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepThreePage } from './pre-inspection-views-step-three.page';

describe('PreInspectionViewsStepThreePage', () => {
  let component: PreInspectionViewsStepThreePage;
  let fixture: ComponentFixture<PreInspectionViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreInspectionViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreInspectionViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
