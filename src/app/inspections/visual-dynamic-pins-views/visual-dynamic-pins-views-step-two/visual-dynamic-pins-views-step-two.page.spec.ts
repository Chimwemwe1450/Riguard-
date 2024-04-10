import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualDynamicPinsViewsStepTwoPage } from './visual-dynamic-pins-views-step-two.page';

describe('VisualStaticPinsViewsStepTwoPage', () => {
  let component: VisualDynamicPinsViewsStepTwoPage;
  let fixture: ComponentFixture<VisualDynamicPinsViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDynamicPinsViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualDynamicPinsViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
