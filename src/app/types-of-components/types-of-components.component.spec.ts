import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypesOfComponentsComponent } from './types-of-components.component';

describe('TypesOfComponentsComponent', () => {
  let component: TypesOfComponentsComponent;
  let fixture: ComponentFixture<TypesOfComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesOfComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypesOfComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
