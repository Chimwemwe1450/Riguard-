import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPinAuxViewsStepThreePage } from './visual-pin-aux-line-views-step-three.page';

describe('VisualPinAuxViewsStepThreePage', () => {
  let component: VisualPinAuxViewsStepThreePage;
  let fixture: ComponentFixture<VisualPinAuxViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPinAuxViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPinAuxViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
