import { TestBed } from '@angular/core/testing';

import { BicycleRequestService } from './bicycle-request.service';

describe('BicycleRequestService', () => {
  let service: BicycleRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicycleRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
