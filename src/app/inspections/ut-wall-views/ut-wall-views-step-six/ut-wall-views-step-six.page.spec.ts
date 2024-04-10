import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepSixPage } from './ut-wall-views-step-six.page';

describe('UtWallViewsStepSixPage', () => {
  let component: UtWallViewsStepSixPage;
  let fixture: ComponentFixture<UtWallViewsStepSixPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UtWallViewsStepSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtWallViewsStepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
