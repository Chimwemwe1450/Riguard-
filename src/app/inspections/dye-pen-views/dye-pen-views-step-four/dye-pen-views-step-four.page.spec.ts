import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepFourPage } from './dye-pen-views-step-four.page';

describe('DyePenViewsStepFourPage', () => {
  let component: DyePenViewsStepFourPage;
  let fixture: ComponentFixture<DyePenViewsStepFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DyePenViewsStepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DyePenViewsStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
