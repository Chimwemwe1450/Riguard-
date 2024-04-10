import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepFivePage } from './ut-wall-views-step-five.page';

describe('UtWallViewsStepFivePage', () => {
  let component: UtWallViewsStepFivePage;
  let fixture: ComponentFixture<UtWallViewsStepFivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UtWallViewsStepFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtWallViewsStepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
