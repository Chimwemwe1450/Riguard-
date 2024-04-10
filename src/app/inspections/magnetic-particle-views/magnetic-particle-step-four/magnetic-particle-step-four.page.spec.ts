import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepFourPage } from './magnetic-particle-step-four.page';

describe('MagneticParticleStepFourPage', () => {
  let component: MagneticParticleStepFourPage;
  let fixture: ComponentFixture<MagneticParticleStepFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticParticleStepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagneticParticleStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
