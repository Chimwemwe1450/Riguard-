import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepSixPage } from './dye-pen-views-step-six.page';

describe('DyePenViewsStepSixPage', () => {
  let component: DyePenViewsStepSixPage;
  let fixture: ComponentFixture<DyePenViewsStepSixPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DyePenViewsStepSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DyePenViewsStepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
