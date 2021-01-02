import { TestBed } from '@angular/core/testing';

import { NgxCardwindowService } from './ngx-cardwindow.service';

describe('NgxCardwindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCardwindowService = TestBed.get(NgxCardwindowService);
    expect(service).toBeTruthy();
  });
});
