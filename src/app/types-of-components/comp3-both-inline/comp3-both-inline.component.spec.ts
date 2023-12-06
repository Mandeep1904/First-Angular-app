import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3BothInlineComponent } from './comp3-both-inline.component';

describe('Comp3BothInlineComponent', () => {
  let component: Comp3BothInlineComponent;
  let fixture: ComponentFixture<Comp3BothInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp3BothInlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp3BothInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
