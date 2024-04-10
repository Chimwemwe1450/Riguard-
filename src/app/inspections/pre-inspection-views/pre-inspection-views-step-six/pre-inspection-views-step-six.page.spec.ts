import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepSixPage } from './pre-inspection-views-step-six.page';

describe('PreInspectionViewsStepSixPage', () => {
  let component: PreInspectionViewsStepSixPage;
  let fixture: ComponentFixture<PreInspectionViewsStepSixPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreInspectionViewsStepSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreInspectionViewsStepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
