import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewtimesheetComponent } from './admin-viewtimesheet.component';

describe('AdminViewtimesheetComponent', () => {
  let component: AdminViewtimesheetComponent;
  let fixture: ComponentFixture<AdminViewtimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewtimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewtimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
