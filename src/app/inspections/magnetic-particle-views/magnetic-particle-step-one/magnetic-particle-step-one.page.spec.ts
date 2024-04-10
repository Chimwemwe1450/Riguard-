import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepOnePage } from './magnetic-particle-step-one.page';

describe('MagneticParticleStepOnePage', () => {
  let component: MagneticParticleStepOnePage;
  let fixture: ComponentFixture<MagneticParticleStepOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticParticleStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagneticParticleStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
