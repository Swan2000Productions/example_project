import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsTableListComponent } from './bookings-table-list.component';

describe('BookingsTableListComponent', () => {
  let component: BookingsTableListComponent;
  let fixture: ComponentFixture<BookingsTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
