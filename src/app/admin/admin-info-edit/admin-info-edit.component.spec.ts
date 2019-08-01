import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoEditComponent } from './admin-info-edit.component';

describe('AdminInfoEditComponent', () => {
  let component: AdminInfoEditComponent;
  let fixture: ComponentFixture<AdminInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
