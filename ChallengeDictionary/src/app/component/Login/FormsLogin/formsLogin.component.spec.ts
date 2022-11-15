import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLoginComponent } from './formsLogin.component';

describe('FormsLoginComponent', () => {
  let component: FormsLoginComponent;
  let fixture: ComponentFixture<FormsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
