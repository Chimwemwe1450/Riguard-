import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualBoxViewsStepThreePage } from './visual-box-views-step-three.page';

describe('VisualBoxViewsStepThreePage', () => {
  let component: VisualBoxViewsStepThreePage;
  let fixture: ComponentFixture<VisualBoxViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualBoxViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualBoxViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
