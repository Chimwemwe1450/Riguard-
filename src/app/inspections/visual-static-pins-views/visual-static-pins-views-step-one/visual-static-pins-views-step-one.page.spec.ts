import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualStaticPinsViewsStepOnePage } from './visual-static-pins-views-step-one.page';

describe('VisualStaticPinsViewsStepOnePage', () => {
  let component: VisualStaticPinsViewsStepOnePage;
  let fixture: ComponentFixture<VisualStaticPinsViewsStepOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualStaticPinsViewsStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualStaticPinsViewsStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
