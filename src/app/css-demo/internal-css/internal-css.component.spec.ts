import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCssComponent } from './internal-css.component';

describe('InternalCssComponent', () => {
  let component: InternalCssComponent;
  let fixture: ComponentFixture<InternalCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
