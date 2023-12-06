import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationVSPropertyBindingComponent } from './interpolation-vs-property-binding.component';

describe('InterpolationVSPropertyBindingComponent', () => {
  let component: InterpolationVSPropertyBindingComponent;
  let fixture: ComponentFixture<InterpolationVSPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationVSPropertyBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationVSPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
