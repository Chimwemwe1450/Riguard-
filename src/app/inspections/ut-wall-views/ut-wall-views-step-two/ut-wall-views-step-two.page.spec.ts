import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepTwoPage } from './ut-wall-views-step-two.page';

describe('UtWallViewsStepTwoPage', () => {
  let component: UtWallViewsStepTwoPage;
  let fixture: ComponentFixture<UtWallViewsStepTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UtWallViewsStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtWallViewsStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
