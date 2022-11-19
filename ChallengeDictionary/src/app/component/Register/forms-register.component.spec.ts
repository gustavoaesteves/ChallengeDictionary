import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRegisterComponent } from './forms-register.component';

describe('FormsRegisterComponent', () => {
  let component: FormsRegisterComponent;
  let fixture: ComponentFixture<FormsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
