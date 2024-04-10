import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualBoxAuxViewsStepThreePage } from './visual-box-views-step-three.page';

describe('VisualBoxAuxViewsStepThreePage', () => {
  let component: VisualBoxAuxViewsStepThreePage;
  let fixture: ComponentFixture<VisualBoxAuxViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualBoxAuxViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualBoxAuxViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
