import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropListComponent } from './drag-n-drop-list.component';

describe('DragNDropListComponent', () => {
  let component: DragNDropListComponent;
  let fixture: ComponentFixture<DragNDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragNDropListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
