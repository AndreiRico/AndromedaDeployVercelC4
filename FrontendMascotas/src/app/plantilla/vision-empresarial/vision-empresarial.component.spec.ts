
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionEmpresarialComponent } from './vision-empresarial.component';

describe('VisionEmpresarialComponent', () => {
  let component: VisionEmpresarialComponent;
  let fixture: ComponentFixture<VisionEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionEmpresarialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
