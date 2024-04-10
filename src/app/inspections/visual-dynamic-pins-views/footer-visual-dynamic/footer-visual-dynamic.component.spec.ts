import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterVisualDynamicComponent } from './footer-visual-dynamic.component';

describe('FooterDynamicStaticComponent', () => {
  let component: FooterVisualDynamicComponent;
  let fixture: ComponentFixture<FooterVisualDynamicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterVisualDynamicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterVisualDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
