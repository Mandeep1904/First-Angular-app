import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1InlineStyleComponent } from './comp1-inline-style.component';

describe('Comp1InlineStyleComponent', () => {
  let component: Comp1InlineStyleComponent;
  let fixture: ComponentFixture<Comp1InlineStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp1InlineStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp1InlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
