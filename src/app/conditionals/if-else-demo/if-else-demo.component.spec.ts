import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseDemoComponent } from './if-else-demo.component';

describe('IfElseDemoComponent', () => {
  let component: IfElseDemoComponent;
  let fixture: ComponentFixture<IfElseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfElseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
