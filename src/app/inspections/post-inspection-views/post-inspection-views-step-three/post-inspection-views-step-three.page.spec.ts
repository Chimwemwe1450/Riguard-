import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepThreePage } from './post-inspection-views-step-three.page';

describe('PostInspectionViewsStepThreePage', () => {
  let component: PostInspectionViewsStepThreePage;
  let fixture: ComponentFixture<PostInspectionViewsStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInspectionViewsStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostInspectionViewsStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
