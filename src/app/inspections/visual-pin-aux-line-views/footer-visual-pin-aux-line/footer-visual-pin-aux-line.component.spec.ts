import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterVisualPinAuxComponent } from './footer-visual-pin-aux-line.component';

describe('FooterVisualComponent', () => {
  let component: FooterVisualPinAuxComponent;
  let fixture: ComponentFixture<FooterVisualPinAuxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterVisualPinAuxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterVisualPinAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
