import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepTwoPage } from './dye-pen-views-step-two.page';

describe('DyePenViewsStepTwoPage', () => {
  let component: DyePenViewsStepTwoPage;
  let fixture: ComponentFixture<DyePenViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DyePenViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DyePenViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
