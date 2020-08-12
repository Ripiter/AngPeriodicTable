import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGenComponent } from './table-gen.component';

describe('TableGenComponent', () => {
  let component: TableGenComponent;
  let fixture: ComponentFixture<TableGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
