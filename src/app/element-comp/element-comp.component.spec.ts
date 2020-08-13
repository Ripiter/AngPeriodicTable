import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCompComponent } from './element-comp.component';

describe('ElementCompComponent', () => {
  let component: ElementCompComponent;
  let fixture: ComponentFixture<ElementCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
