import { TestBed } from '@angular/core/testing';

import { PolicyLibService } from './policy-lib.service';

describe('PolicyLibService', () => {
  let service: PolicyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
