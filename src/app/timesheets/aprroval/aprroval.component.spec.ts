import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprrovalComponent } from './aprroval.component';

describe('AprrovalComponent', () => {
  let component: AprrovalComponent;
  let fixture: ComponentFixture<AprrovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprrovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprrovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
