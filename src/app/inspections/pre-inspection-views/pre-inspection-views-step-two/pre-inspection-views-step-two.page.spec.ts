import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepTwoPage } from './pre-inspection-views-step-two.page';

describe('PreInspectionViewsStepTwoPage', () => {
  let component: PreInspectionViewsStepTwoPage;
  let fixture: ComponentFixture<PreInspectionViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreInspectionViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreInspectionViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
