import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepSixPage } from './post-inspection-views-step-six.page';

describe('PostInspectionViewsStepSixPage', () => {
  let component: PostInspectionViewsStepSixPage;
  let fixture: ComponentFixture<PostInspectionViewsStepSixPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInspectionViewsStepSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostInspectionViewsStepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
