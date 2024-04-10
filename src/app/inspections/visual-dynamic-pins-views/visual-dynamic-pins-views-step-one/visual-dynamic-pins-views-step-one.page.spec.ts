import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualDynamicPinsViewsStepOnePage } from './visual-dynamic-pins-views-step-one.page';

describe('VisualDynamicPinsViewsStepOnePage', () => {
  let component: VisualDynamicPinsViewsStepOnePage;
  let fixture: ComponentFixture<VisualDynamicPinsViewsStepOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDynamicPinsViewsStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualDynamicPinsViewsStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
