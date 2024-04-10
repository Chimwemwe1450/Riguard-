import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepNinePage } from './post-inspection-views-step-nine.page';

describe('PostInspectionViewsStepNinePage', () => {
  let component: PostInspectionViewsStepNinePage;
  let fixture: ComponentFixture<PostInspectionViewsStepNinePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInspectionViewsStepNinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostInspectionViewsStepNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
