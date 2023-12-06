import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCssComponent } from './component-css.component';

describe('ComponentCssComponent', () => {
  let component: ComponentCssComponent;
  let fixture: ComponentFixture<ComponentCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
