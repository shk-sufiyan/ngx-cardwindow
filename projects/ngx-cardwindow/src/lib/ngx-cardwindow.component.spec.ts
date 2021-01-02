import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardwindowComponent } from './ngx-cardwindow.component';

describe('NgxCardwindowComponent', () => {
  let component: NgxCardwindowComponent;
  let fixture: ComponentFixture<NgxCardwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCardwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCardwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
