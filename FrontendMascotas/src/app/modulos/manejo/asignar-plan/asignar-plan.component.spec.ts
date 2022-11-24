import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPlanComponent } from './asignar-plan.component';

describe('AsignarPlanComponent', () => {
  let component: AsignarPlanComponent;
  let fixture: ComponentFixture<AsignarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
