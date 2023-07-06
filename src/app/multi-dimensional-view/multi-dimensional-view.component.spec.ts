import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDimensionalViewComponent } from './multi-dimensional-view.component';

describe('MultiDimensionalViewComponent', () => {
  let component: MultiDimensionalViewComponent;
  let fixture: ComponentFixture<MultiDimensionalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDimensionalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDimensionalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
