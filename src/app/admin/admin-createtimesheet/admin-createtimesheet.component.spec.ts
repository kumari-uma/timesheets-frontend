import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatetimesheetComponent } from './admin-createtimesheet.component';

describe('AdminCreatetimesheetComponent', () => {
  let component: AdminCreatetimesheetComponent;
  let fixture: ComponentFixture<AdminCreatetimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreatetimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
