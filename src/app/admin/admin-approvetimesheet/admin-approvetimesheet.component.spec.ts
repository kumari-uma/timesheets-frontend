import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovetimesheetComponent } from './admin-approvetimesheet.component';

describe('AdminApprovetimesheetComponent', () => {
  let component: AdminApprovetimesheetComponent;
  let fixture: ComponentFixture<AdminApprovetimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApprovetimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApprovetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
