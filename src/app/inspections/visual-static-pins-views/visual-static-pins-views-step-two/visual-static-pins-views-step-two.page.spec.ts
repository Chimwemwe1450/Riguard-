import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualStaticPinsViewsStepTwoPage } from './visual-static-pins-views-step-two.page';

describe('VisualStaticPinsViewsStepTwoPage', () => {
  let component: VisualStaticPinsViewsStepTwoPage;
  let fixture: ComponentFixture<VisualStaticPinsViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualStaticPinsViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualStaticPinsViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
