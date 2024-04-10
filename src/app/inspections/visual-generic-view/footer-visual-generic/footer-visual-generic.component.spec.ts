import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterVisualGenericComponent } from './footer-visual-generic.component';

describe('FooterVisualGenericComponent', () => {
  let component: FooterVisualGenericComponent;
  let fixture: ComponentFixture<FooterVisualGenericComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterVisualGenericComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterVisualGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
