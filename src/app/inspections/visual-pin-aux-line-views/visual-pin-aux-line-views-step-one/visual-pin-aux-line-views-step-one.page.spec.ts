import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPinAuxViewsStepOnePage } from './visual-pin-aux-line-views-step-one.page';

describe('VisualPinAuxViewsStepOnePage', () => {
  let component: VisualPinAuxViewsStepOnePage;
  let fixture: ComponentFixture<VisualPinAuxViewsStepOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPinAuxViewsStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPinAuxViewsStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
