import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualStaticPinsViewsStepThreePage } from './visual-static-pins-views-step-three.page';

describe('VisualStaticPinsViewsStepThreePage', () => {
  let component: VisualStaticPinsViewsStepThreePage;
  let fixture: ComponentFixture<VisualStaticPinsViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualStaticPinsViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualStaticPinsViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
