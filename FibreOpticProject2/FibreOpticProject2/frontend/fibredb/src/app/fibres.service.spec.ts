import { TestBed } from '@angular/core/testing';

import { FibresService } from './fibres.service';

describe('FibresService', () => {
  let service: FibresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
