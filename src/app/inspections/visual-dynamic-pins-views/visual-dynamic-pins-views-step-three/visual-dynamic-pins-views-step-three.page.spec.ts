import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualDynamicPinsViewsStepThreePage } from './visual-dynamic-pins-views-step-three.page';

describe('VisualStaticPinsViewsStepThreePage', () => {
  let component: VisualDynamicPinsViewsStepThreePage;
  let fixture: ComponentFixture<VisualDynamicPinsViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDynamicPinsViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualDynamicPinsViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
