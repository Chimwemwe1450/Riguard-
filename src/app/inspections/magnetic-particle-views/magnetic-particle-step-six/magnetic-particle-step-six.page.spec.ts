import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepSixPage } from './magnetic-particle-step-six.page';

describe('MagneticParticleStepSixPage', () => {
  let component: MagneticParticleStepSixPage;
  let fixture: ComponentFixture<MagneticParticleStepSixPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticParticleStepSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagneticParticleStepSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
