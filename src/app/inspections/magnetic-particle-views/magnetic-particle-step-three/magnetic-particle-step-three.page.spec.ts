import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepThreePage } from './magnetic-particle-step-three.page';

describe('MagneticParticleStepThreePage', () => {
  let component: MagneticParticleStepThreePage;
  let fixture: ComponentFixture<MagneticParticleStepThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticParticleStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagneticParticleStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
