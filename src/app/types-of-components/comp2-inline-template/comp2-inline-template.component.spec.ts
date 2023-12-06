import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2InlineTemplateComponent } from './comp2-inline-template.component';

describe('Comp2InlineTemplateComponent', () => {
  let component: Comp2InlineTemplateComponent;
  let fixture: ComponentFixture<Comp2InlineTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp2InlineTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp2InlineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
