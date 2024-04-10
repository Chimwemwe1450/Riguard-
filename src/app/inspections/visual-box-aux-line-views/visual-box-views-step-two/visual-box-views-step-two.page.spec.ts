import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualBoxAuxViewsStepTwoPage } from './visual-box-views-step-two.page';

describe('VisualBoxAuxViewsStepTwoPage', () => {
  let component: VisualBoxAuxViewsStepTwoPage;
  let fixture: ComponentFixture<VisualBoxAuxViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualBoxAuxViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualBoxAuxViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
