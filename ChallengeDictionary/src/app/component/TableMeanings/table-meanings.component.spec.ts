import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMeaningsComponent } from './table-meanings.component';

describe('TableMeaningsComponent', () => {
  let component: TableMeaningsComponent;
  let fixture: ComponentFixture<TableMeaningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMeaningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMeaningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
