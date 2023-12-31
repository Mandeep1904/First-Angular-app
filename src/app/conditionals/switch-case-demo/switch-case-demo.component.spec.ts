import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseDemoComponent } from './switch-case-demo.component';

describe('SwitchCaseDemoComponent', () => {
  let component: SwitchCaseDemoComponent;
  let fixture: ComponentFixture<SwitchCaseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCaseDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchCaseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
