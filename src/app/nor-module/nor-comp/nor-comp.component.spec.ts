import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorCompComponent } from './nor-comp.component';

describe('NorCompComponent', () => {
  let component: NorCompComponent;
  let fixture: ComponentFixture<NorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
