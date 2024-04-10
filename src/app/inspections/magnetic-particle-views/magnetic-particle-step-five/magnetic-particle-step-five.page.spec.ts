import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepFivePage } from './magnetic-particle-step-five.page';

describe('MagneticParticleStepFivePage', () => {
  let component: MagneticParticleStepFivePage;
  let fixture: ComponentFixture<MagneticParticleStepFivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticParticleStepFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagneticParticleStepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
