import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepFourPage } from './post-inspection-views-step-four.page';

describe('PostInspectionViewsStepFourPage', () => {
  let component: PostInspectionViewsStepFourPage;
  let fixture: ComponentFixture<PostInspectionViewsStepFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInspectionViewsStepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostInspectionViewsStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
