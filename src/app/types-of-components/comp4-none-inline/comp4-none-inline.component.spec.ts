import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4NoneInlineComponent } from './comp4-none-inline.component';

describe('Comp4NoneInlineComponent', () => {
  let component: Comp4NoneInlineComponent;
  let fixture: ComponentFixture<Comp4NoneInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp4NoneInlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp4NoneInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
