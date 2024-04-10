import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterVisualBoxAuxComponent } from './footer-visual-box.component';

describe('FooterVisualComponent', () => {
  let component: FooterVisualBoxAuxComponent;
  let fixture: ComponentFixture<FooterVisualBoxAuxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterVisualBoxAuxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterVisualBoxAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
