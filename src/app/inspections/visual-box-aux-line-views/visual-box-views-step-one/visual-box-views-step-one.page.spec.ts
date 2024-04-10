import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualBoxAuxViewsStepOnePage } from './visual-box-views-step-one.page';

describe('VisualBoxAuxViewsStepOnePage', () => {
  let component: VisualBoxAuxViewsStepOnePage;
  let fixture: ComponentFixture<VisualBoxAuxViewsStepOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualBoxAuxViewsStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualBoxAuxViewsStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
