import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepFivePage } from './post-inspection-views-step-five.page';

describe('PostInspectionViewsStepFivePage', () => {
  let component: PostInspectionViewsStepFivePage;
  let fixture: ComponentFixture<PostInspectionViewsStepFivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInspectionViewsStepFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostInspectionViewsStepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
